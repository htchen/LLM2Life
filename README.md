# 用 AI 和 GitHub 把發想做成可操作工具

三小時實作工作坊的完整教材。對象是**沒有程式背景**的一般人，
學員用自己的 GitHub 帳號和 Claude 帳號，從生活或工作中的真實問題出發，
逐步完成發想、規劃、實作與驗證，最後展示一個可操作的最小版本。

**專案網站：** https://htchen.github.io/LLM2Life/

> ## 主線是免費版
>
> 課堂預設使用 **claude.ai 免費聊天介面 + GitHub 網頁介面**，學員只要免費帳號，
> 不必訂閱、不必安裝任何軟體。教材在 [`variant-free/`](variant-free/)。
>
> **課前準備：** https://htchen.github.io/LLM2Life/pre-workshop.html
> ｜ **隨堂網站：** https://htchen.github.io/LLM2Life/handbook.html
>
> 專題流程、題目範圍與驗收方式與付費版完全相同，成果也相同：一個可操作的最小版本。
> 差別只有兩項——學員自行把 AI 回覆存成檔案，以及總長 195 分鐘（附 180 分鐘縮短方式）。

**付費版（Claude Code）** 保留給主辦方統一付費或學員已有 Pro 以上方案的場次，
教材在根目錄的 `slides/`、`workbook/`、`site/`、`instructor/`
（[隨堂網站](https://htchen.github.io/LLM2Life/handbook-paid.html)、
[課前準備](https://htchen.github.io/LLM2Life/pre-workshop-paid.html)）。
**免費帳號無法使用 Claude Code**——換任何模型都一樣，這不是模型的限制，是方案的限制，
見 [`instructor/provisioning-tokens.md`](instructor/provisioning-tokens.md)。

---

## 這裡有什麼

資料夾沒有搬動：根目錄仍是付費版，免費版整套在 `variant-free/` 之下。
**要開課的人請以 `variant-free/` 為準。**

| 資料夾 | 版本 | 內容 |
| --- | --- | --- |
| **`variant-free/`** | **免費版 · 主線** | **slides / workbook / site / instructor 自成一套，課堂預設用這份** |
| `slides/` | 付費版 | Marp 投影片，76 頁，含備忘稿 |
| `workbook/` | 付費版 | 共同練習、專題發想、規劃、實作手冊 + 重點整理 |
| `site/` | 付費版 | 隨堂網站與課前準備網頁的原始檔 |
| `instructor/` | 付費版 | 流程表、**洞見講稿**、課前通知信、疑難排解、參考解 |
| `starter/` | 兩版共用 | 學員 repo 的範本（含 `CLAUDE.md`） |
| `web/` | 兩版共用 | 專案首頁（發布到 GitHub Pages） |

**要開課，先讀這三份：**

- [`variant-free/instructor/timeline.md`](variant-free/instructor/timeline.md) —
  免費版時間與順序的唯一真實來源（195 分鐘完整版與 180 分鐘縮短方式）
- [`variant-free/instructor/insights.md`](variant-free/instructor/insights.md) —
  免費版特有的三項說明；共通的教學理由指回下一份
- [`instructor/insights.md`](instructor/insights.md) — **論證本身**：各階段講稿、
  補充段落「AI 演進與人的判斷」的完整推導與追問回應。投影片上只有結論，理由在這裡。

要改用付費版時再讀 [`instructor/timeline.md`](instructor/timeline.md) 與
[`instructor/provisioning-tokens.md`](instructor/provisioning-tokens.md)（主辦方統一付費的做法與成本估算）。

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

免費版共 **195 分鐘**（多出來的時間用於手動建立與更新檔案）。
以下為概覽，實際時間以
[`variant-free/instructor/timeline.md`](variant-free/instructor/timeline.md) 為準。

| | | 長度 |
| --- | --- | --- |
| 開場 + 完整存檔 Demo | 現場示範問、貼、存、開 | 10 分 |
| 觀念 | claude.ai / repo / GitHub | 10 分 |
| **Lab 0** | 帳號 + 存檔練習 | 25 分 |
| **共同練習** | 探究提問卡：描述、更新、上傳 | 30 分 |
| 回顧 + 補充段落 | 兩類工作、AI 演進與人的判斷 | 12 分 |
| 休息 | | 10 分 |
| **蒐集發想** | 從生活與工作問題選定專題 | 14 分 |
| **定義目標** | 專題簡述、最小範圍與驗收條件 | 18 分 |
| **拆解計畫** | 2–4 個可驗收步驟 | 15 分 |
| **實作第一輪** | 完成核心流程並上傳 GitHub | 30 分 |
| **實作第二輪** | 更新版本並重新驗證 | 15 分 |
| **展示與回顧** | 問題、成果、驗證方式與下一步 | 6 分 |

付費版為 180 分鐘、段落略有不同，見 [`instructor/timeline.md`](instructor/timeline.md)。

### 編排原則：先形成自己的判斷，再請 AI 協助

發想階段先描述問題，不先要求 AI 提供解法；規劃階段先由學員界定目標與限制，
再請 AI 協助檢查範圍與拆解步驟。每一輪實作都以學員自己寫出的驗收條件判斷結果。

論證的核心是：做軟體需要三件事——**知道要什麼**、**轉成機器可以執行的形式**、
**確認結果正確**。生成工具降低了第二項工作的部分成本，因此需求釐清與驗證會占更高比例。

題目限定為單一使用者、單一核心問題與低風險流程。需要登入、資料庫、多人同步、付款、
敏感個資或自動對外寄送的功能，列入後續版本。

---

## 開課前一定要知道的四件事（免費版）

1. **學員只需要免費帳號，不必訂閱、不必安裝。** 全程使用瀏覽器：
   claude.ai 聊天介面加上 GitHub 網頁介面。
2. **學員要自己把 AI 回覆存成檔案。** 這是免費版與付費版唯一的機制差異，
   也是每個提示詞結尾都要寫「請給我完整程式碼」的原因——AI 用「...」省略內容時，
   學員會存出一個壞掉的檔案。
3. **若要使用 GitHub Pages，學員的 repo 必須是 Public。** 應在 Lab 0 完成設定。
4. **課前通知信一定要寄**，見
   [`variant-free/instructor/pre-workshop-email.md`](variant-free/instructor/pre-workshop-email.md)。
   免費版沒有安裝問題，但仍要確認帳號可登入。

改用付費版時，第 1 與第 2 點改為：Claude Code 需要 Pro 以上方案（免費帳號無法使用），
主要路線是桌面版而非終端機。

---

## 授權：這份教材可以帶回去教

以 [CC BY 4.0](LICENSE) 授權釋出。**種子教師可以把整份教材帶回自己的學校，
開給校內其他老師**，包含刪改內容、更換題目、複製隨堂網站改成自己的版本、
印製手冊發給參加的老師，也可用於商業用途。唯一的要求是標示出處。

> 本教材改編自 htchen「用 AI 和 GitHub 把發想做成可操作工具」
> （https://github.com/htchen/LLM2Life），依 CC BY 4.0 授權使用。

學員在課堂上做出來的工具屬於製作者本人，不受本授權拘束。
Claude、Anthropic、GitHub 等名稱與標誌屬各自權利人所有，不在授權範圍內。

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

- 動到時間或順序 → 先改該版本的 `timeline.md`，再往下同步。
  免費版是 `variant-free/instructor/timeline.md`，付費版是 `instructor/timeline.md`。
- 動到學員要貼的提示詞 → 同一版本的 `workbook/` 和 `site/index.html` **必須逐字一致**
- 改完任一份 `site/index.html` → 重新發布到**那一份原本的網址**（用 `url` 參數），不要產生新的。
  免費版是 `f9e2701f…`，付費版是 `07d306ff…`，兩個網址不互換。
- **兩套教材各自獨立**，各有自己的 `timeline.md`／`insights.md`／`site/`。
  改了其中一邊的 Lab 內容，通常另一邊也要跟著改——但**不要**假設兩邊的提示詞要逐字一致，
  免費版每個提示詞結尾都多一句「請給我完整程式碼」，這是刻意的差異，不是要修掉的不一致。
