# 選配：把 `shared/starter/` 發布成範本 repo

**預設流程不需要這個。** 準備階段讓學員從 https://github.com/new 建空的 repo，
不依賴講師事先準備任何東西——少一個會在開課前壞掉的環節。

若希望學員一開始即具備 `CLAUDE.md`（可明顯提升產出品質，因為它使每位學員的
Claude Code 都知道「使用者沒有程式背景、要做單一檔案、要中文介面」），可以這樣做。

## 值不值得

| | 空 repo（預設） | 範本 repo |
| --- | --- | --- |
| 講師課前準備 | 無 | 要建 repo 並開啟 Template |
| 學員拿到 `CLAUDE.md` | ❌ | ✅ |
| 流程中斷風險 | 低 | 忘記勾 Template → 全班無法依步驟建立 repo |

30 人以上，或由其他講師授課時，建議使用預設流程，以減少共同依賴的設定項目。

## 設定步驟（課前做）

1. 把 `shared/starter/` 的內容推成一個新的公開 repo，例如 `my-life-tools-starter`。
2. 進入該 repo → **Settings** → 在 General 最上面勾選 **Template repository**。
3. 用無痕視窗打開該 repo，確認看得到綠色的 **Use this template** 按鈕。
   如果看不到，代表設定尚未生效，請回到 Settings 再確認。

## 課堂上改講的內容

`lab-0-setup.md` 的**步驟 2** 換成：

> 1. 打開 `https://github.com/<你的帳號>/my-life-tools-starter`
> 2. 按綠色的 **Use this template** → **Create a new repository**
> 3. Repository name 填 `my-life-tools`
> 4. 選 **Public**
> 5. 按 **Create repository**

其餘步驟完全不變。注意這條路線**不需要**勾「Add a README file」——範本裡已經有了。

把改動同步到 `site/index.html` 的準備工具區塊，否則學員照著隨堂網站做會對不上。
