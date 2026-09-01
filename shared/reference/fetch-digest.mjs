// 參考解：Lab 2 的摘要產生腳本
//
// 給講師救援用，不要直接發給學員。
// 學員的檔案應該放在：scripts/fetch-digest.mjs
//
// 刻意不使用任何 npm 套件：GitHub Actions 的 Node 20 內建 fetch，
// 少一個 `npm install` 步驟就少一個現場會爆的地方。

import { writeFile, mkdir } from "node:fs/promises";

// 學員可以換成自己想追的來源。Google News 的 RSS 不需要金鑰。
const FEEDS = [
  {
    name: "今日焦點",
    url: "https://news.google.com/rss?hl=zh-TW&gl=TW&ceid=TW:zh-Hant",
  },
];

const ITEMS_PER_FEED = 5;

// 用台灣時區算日期，不然 UTC 22:00 執行時會寫成前一天。
// 'sv-SE' 的日期格式剛好就是 YYYY-MM-DD。
const today = new Date().toLocaleDateString("sv-SE", {
  timeZone: "Asia/Taipei",
});

/** 從一段 XML 取出第一個 <tag> 的文字，CDATA 也能處理。 */
function tagText(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  if (!m) return "";
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

async function readFeed(feed) {
  const res = await fetch(feed.url, {
    headers: { "User-Agent": "Mozilla/5.0 (daily-digest)" },
  });
  if (!res.ok) throw new Error(`${feed.name} 回應 ${res.status}`);
  const xml = await res.text();

  const items = [...xml.matchAll(/<item[\s\S]*?<\/item>/gi)]
    .slice(0, ITEMS_PER_FEED)
    .map((m) => ({ title: tagText(m[0], "title"), link: tagText(m[0], "link") }))
    .filter((it) => it.title);

  return { name: feed.name, items };
}

const sections = [];
for (const feed of FEEDS) {
  try {
    sections.push(await readFeed(feed));
  } catch (err) {
    // 單一來源掛掉不該讓整份摘要失敗——把錯誤寫進摘要裡就好。
    sections.push({ name: feed.name, items: [], error: String(err.message) });
  }
}

const lines = [`# ${today} 每日摘要`, ""];
for (const s of sections) {
  lines.push(`## ${s.name}`, "");
  if (s.error) {
    lines.push(`> 這個來源今天讀取失敗：${s.error}`, "");
    continue;
  }
  if (!s.items.length) {
    lines.push("> 今天沒有抓到內容。", "");
    continue;
  }
  for (const it of s.items) {
    lines.push(it.link ? `- [${it.title}](${it.link})` : `- ${it.title}`);
  }
  lines.push("");
}
lines.push("---", "", "由 GitHub Actions 自動產生。");

await mkdir("digest", { recursive: true });
await writeFile(`digest/${today}.md`, lines.join("\n"), "utf8");
console.log(`已寫入 digest/${today}.md`);
