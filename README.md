# 用 Claude Code 打造生活小工具

三小時實作工作坊的完整教材。對象是**沒有程式背景**的一般人，
學員用自己的 GitHub 帳號和 Claude 帳號，在課堂上做出三個能用的小工具，
最後把其中一個成果發布成公開網站。

**隨堂網站（學員用，付費版）：** https://claude.ai/code/artifact/07d306ff-7de3-4224-96e8-74e007d1d289

> 🆓 **免費版本：** 若學員沒有付費方案、場地限制安裝軟體，或沒有工具預算，
> 可使用相同的三小時架構與三個 Lab，改以 claude.ai 免費聊天 + GitHub 網頁介面操作。
> 見 [`variant-free/`](variant-free/)（[隨堂網站](https://claude.ai/code/artifact/f9e2701f-c4e4-4638-9e78-a7d778ae1bd1)）。
> **免費帳號本身就無法使用 Claude Code**——換任何模型都一樣，這不是模型的限制，
> 是方案的限制，見 [`instructor/provisioning-tokens.md`](instructor/provisioning-tokens.md)。

---

## 這裡有什麼

| 資料夾 | 給誰 | 內容 |
| --- | --- | --- |
| `slides/` | 講師 | Marp 投影片，95 頁，含備忘稿 |
| `workbook/` | 學員 | 四個 Lab 的逐步手冊 + 帶回家的重點整理 |
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

這堂課刻意不只是 Claude Code 的操作說明。**動手做的三個 Lab 負責產生體驗，
四段「洞見」負責替那些體驗命名。**

三個 Lab 是一條遞進的線：

```
Lab 1  記帳小工具      →  在我的電腦上能跑
Lab 2  每日自動摘要    →  我不在的時候它自己跑
Lab 3  習慣追蹤 + 發布 →  取得公開網址
```

三個 Lab 做在**同一個 repo**（`my-life-tools`）的不同資料夾，
GitHub 只設定一次，而且最後整包一起發布成一個網站。

| | | 長度 |
| --- | --- | --- |
| 開場 + Demo | 現場三分鐘做出一個東西 | 10 分 |
| 觀念 | Claude Code / repo / GitHub | 10 分 |
| **Lab 0** | 環境 + 建 repo + 確認可以上傳 | 20 分 |
| **Lab 1** | 記帳小工具 | 33 分 |
| 🧠 洞見 1 | 尚未釐清的需求無法完整交給 AI | 3 分 |
| 休息 | | 10 分 |
| **Lab 2** | GitHub Actions 每日摘要 | 34 分 |
| 🧠 洞見 2 | 自動化的成本已明顯降低 | 3 分 |
| **Lab 3** | 習慣儀表板 + GitHub Pages | 33 分 |
| 🧠 洞見 3 | 不必讀懂全部程式碼，但必須驗證結果 | 3 分 |
| 成果分享 | | 5 分 |
| 🧠 **收束論證** | 今天真正發生的事 | 12 分 |
| 收尾 | | 4 分 |

### 洞見段落的編排原則：先體驗，再命名

每段洞見只講學員十分鐘前剛完成的操作，讓抽象主張有具體結果可以對照。

如果把這些內容移到開場，學員尚未有操作經驗可以對照，理解效果會降低。

論證的核心是：做軟體需要三件事——**知道要什麼**、**轉成機器可以執行的形式**、
**確認結果正確**。生成工具降低了第二項工作的部分成本，因此需求釐清與驗證會占更高比例。

收束論證包含「使用限制」（四個限制），用來說明工具的適用範圍、風險與使用者責任，
不應省略。

---

## 開課前一定要知道的四件事

1. **Claude Code 需要付費方案**（Pro / Max / Team / Enterprise）。
   免費的 Claude 帳號**無法使用**，因此需要在
   [`instructor/pre-workshop-email.md`](instructor/pre-workshop-email.md) 開頭明確說明。
2. **主要路線是桌面版，不是終端機。** 桌面版內建 Claude Code，
   不用裝 Node.js、不用碰指令列，還有視覺化的 diff。
   `claude.ai/code`（瀏覽器版）是無法安裝桌面版時的備用路線。
3. **學員的 repo 必須是 Public**，否則免費帳號開不了 GitHub Pages。
   應在 Lab 0 完成設定，不要延到 Lab 3。
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
