# 用 Claude Code 把發想做成可操作工具

三小時實作工作坊的完整教材。對象是**沒有程式背景**的一般人，
學員用自己的 GitHub 帳號和 Claude 帳號，從生活或工作中的真實問題出發，
逐步完成發想、規劃、實作與驗證，最後展示一個可操作的最小版本。

**專案網站：** https://htchen.github.io/LLM2Life/ ｜ **課前準備：** https://htchen.github.io/LLM2Life/pre-workshop.html

**隨堂網站（學員用，付費版）：** https://claude.ai/code/artifact/07d306ff-7de3-4224-96e8-74e007d1d289

> 🆓 **免費版本：** 若學員沒有付費方案、場地限制安裝軟體，或沒有工具預算，
> 可使用相同的開放式專題架構，改以 claude.ai 免費聊天 + GitHub 網頁介面操作。
> 見 [`variant-free/`](variant-free/)（[隨堂網站](https://claude.ai/code/artifact/f9e2701f-c4e4-4638-9e78-a7d778ae1bd1)）。
> **免費帳號本身就無法使用 Claude Code**——換任何模型都一樣，這不是模型的限制，
> 是方案的限制，見 [`instructor/provisioning-tokens.md`](instructor/provisioning-tokens.md)。

---

## 這裡有什麼

| 資料夾 | 給誰 | 內容 |
| --- | --- | --- |
| `slides/` | 講師 | Marp 投影片，76 頁，含備忘稿 |
| `workbook/` | 學員 | 共同練習、專題發想、規劃、實作手冊 + 重點整理 |
| `site/` | 學員 | 隨堂網站原始檔（發布成上面那個網址） |
| `instructor/` | 講師 | 流程表、**洞見講稿**、課前通知信、疑難排解、參考解 |
| `starter/` | 選配 | 學員 repo 的範本（含 `CLAUDE.md`） |
| `variant-free/` | 講師 | **免費變體**的完整教材（slides/workbook/site/instructor 自成一套） |

**先讀這兩份：**

- [`instructor/timeline.md`](instructor/timeline.md) — 時間與順序的唯一真實來源
- [`instructor/insights.md`](instructor/insights.md) — **論證本身**：四段洞見的完整講稿、
  每個主張為什麼成立、被挑戰時怎麼回。投影片上只有結論，理由在這裡。
- [`instructor/provisioning-tokens.md`](instructor/provisioning-tokens.md) — 如果要**主辦方統一付費**
  而不是讓學員自己訂閱 Pro：Console 預付額度 + per-user 花費上限的完整做法與成本估算。

---

## 課程設計

這堂課採用漸進式開放設計。共同練習先建立基本操作能力，之後由學員提出真實需求，
將題目縮小並完成可驗證的最小版本。

主線是一個完整的專題循環：

```
提出問題 → 選定題目 → 定義最小目標 → 寫出驗收條件
→ 拆解步驟 → 分段實作 → 驗證 → 展示與規劃下一版
```

學員的共同練習與個人專題都放在同一個 repo（`my-life-tools`）。
固定的每日摘要與習慣追蹤案例保留為備用路徑與課後參考，不再是全班必做內容。

| | | 長度 |
| --- | --- | --- |
| 開場 + Demo | 現場三分鐘做出一個東西 | 10 分 |
| 觀念 | Claude Code / repo / GitHub | 10 分 |
| **Lab 0** | 環境 + 建 repo + 確認可以上傳 | 20 分 |
| **共同練習** | 記帳小工具：描述、修改、驗證 | 25 分 |
| 回顧 | 修改結果如何協助釐清需求 | 5 分 |
| 休息 | | 10 分 |
| **蒐集發想** | 從生活與工作問題選定專題 | 15 分 |
| **定義目標** | 專題簡述、最小範圍與驗收條件 | 20 分 |
| **拆解計畫** | 2–4 個可驗收步驟 | 15 分 |
| **實作第一輪** | 完成核心流程並保存版本 | 25 分 |
| **實作第二輪** | 增加一項功能、驗證並發布 | 15 分 |
| **展示與回顧** | 問題、成果、驗證方式與下一步 | 10 分 |

### 編排原則：先形成自己的判斷，再請 AI 協助

發想階段先描述問題，不先要求 AI 提供解法；規劃階段先由學員界定目標與限制，
再請 AI 協助檢查範圍與拆解步驟。每一輪實作都以學員自己寫出的驗收條件判斷結果。

論證的核心是：做軟體需要三件事——**知道要什麼**、**轉成機器可以執行的形式**、
**確認結果正確**。生成工具降低了第二項工作的部分成本，因此需求釐清與驗證會占更高比例。

題目限定為單一使用者、單一核心問題與低風險流程。需要登入、資料庫、多人同步、付款、
敏感個資或自動對外寄送的功能，列入後續版本。

---

## 開課前一定要知道的四件事

1. **Claude Code 需要付費方案**（Pro / Max / Team / Enterprise）。
   免費的 Claude 帳號**無法使用**，因此需要在
   [`instructor/pre-workshop-email.md`](instructor/pre-workshop-email.md) 開頭明確說明。
2. **主要路線是桌面版，不是終端機。** 桌面版內建 Claude Code，
   不用裝 Node.js、不用碰指令列，還有視覺化的 diff。
   `claude.ai/code`（瀏覽器版）是無法安裝桌面版時的備用路線。
3. **若要使用 GitHub Pages，學員的 repo 必須是 Public。** 應在 Lab 0 完成設定。
4. **課前通知信一定要寄。** 否則課程前段可能需要處理安裝與帳號問題。

---

## 建投影片

```bash
npm install          # 只有要建投影片時才需要

npm run slides       # → dist/deck.html
npm run slides:pdf   # → dist/deck.pdf（用這個上台）
npm run slides:watch # 邊改邊看
```

需要 Node.js。**課堂上不需要**——這只有講師備課時會用到。

---

## 改教材時

同一套內容分布在四個介面；修改其中一處時，需同步檢查其他介面。
細節見 [`CLAUDE.md`](CLAUDE.md)，重點是：

- 動到時間或順序 → 先改 `instructor/timeline.md`，再往下同步
- 動到學員要貼的提示詞 → `workbook/` 和 `site/index.html` **必須逐字一致**
- 改完 `site/index.html` → 重新發布到**原本那個網址**（用 `url` 參數），不要產生新的
- **`variant-free/` 是獨立的一套**，有自己的 `timeline.md`／`insights.md`／
  `site/index.html`（[另一個網址](https://claude.ai/code/artifact/f9e2701f-c4e4-4638-9e78-a7d778ae1bd1)）。
  付費版改了 Lab 內容，通常 `variant-free/` 也要跟著改——但**不要**假設兩邊的提示詞要逐字一致，
  免費版每個提示詞結尾都多一句「請給我完整程式碼」，這是刻意的差異，不是要修掉的不一致。
