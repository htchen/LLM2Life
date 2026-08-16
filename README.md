# 用 Claude Code 打造生活小工具

三小時實作工作坊的完整教材。對象是**沒有程式背景**的一般人，
學員用自己的 GitHub 帳號和 Claude 帳號，在課堂上做出三個能用的小工具，
最後拿到一個公開網址。

**隨堂網站（學員用）：** https://claude.ai/code/artifact/07d306ff-7de3-4224-96e8-74e007d1d289

---

## 這裡有什麼

| 資料夾 | 給誰 | 內容 |
| --- | --- | --- |
| `slides/` | 講師 | Marp 投影片，67 頁，含備忘稿 |
| `workbook/` | 學員 | 四個 Lab 的逐步手冊 + 帶回家的小抄 |
| `site/` | 學員 | 隨堂網站原始檔（發布成上面那個網址） |
| `instructor/` | 講師 | 流程表、課前通知信、現場急救手冊、參考解 |
| `starter/` | 選配 | 學員 repo 的範本（含 `CLAUDE.md`） |

**先讀 [`instructor/timeline.md`](instructor/timeline.md)** — 那是時間與順序的唯一真實來源。

---

## 課程設計

三個 Lab 是一條遞進的線，不是三個獨立練習：

```
Lab 1  記帳小工具      →  在我的電腦上能跑
Lab 2  每日自動摘要    →  我不在的時候它自己跑
Lab 3  習慣追蹤 + 上線 →  全世界都打得開
```

三個 Lab 做在**同一個 repo**（`my-life-tools`）的不同資料夾，
GitHub 只設定一次，而且最後整包一起發布成一個網站。

| | | 長度 |
| --- | --- | --- |
| 開場 + Demo | 現場三分鐘做出一個東西 | 10 分 |
| 觀念 | Claude Code / repo / GitHub | 15 分 |
| **Lab 0** | 環境 + 建 repo + **打通上傳** | 20 分 |
| **Lab 1** | 記帳小工具 | 35 分 |
| 休息 | | 10 分 |
| **Lab 2** | GitHub Actions 每日摘要 | 35 分 |
| **Lab 3** | 習慣儀表板 + GitHub Pages | 35 分 |
| 分享 + 收尾 | | 20 分 |

---

## 開課前一定要知道的四件事

1. **Claude Code 需要付費方案**（Pro / Max / Team / Enterprise）。
   免費的 Claude 帳號**無法使用**。這是最容易在開場十五分鐘內流失學員的原因——
   所以它是 [`instructor/pre-workshop-email.md`](instructor/pre-workshop-email.md) 的第一段。
2. **主要路線是桌面版，不是終端機。** 桌面版內建 Claude Code，
   不用裝 Node.js、不用碰指令列，還有視覺化的 diff。
   `claude.ai/code`（瀏覽器版）是裝不起來的人的救援路線。
3. **學員的 repo 必須是 Public**，否則免費帳號開不了 GitHub Pages。
   Lab 0 就要處理掉，不要拖到 Lab 3。
4. **課前通知信一定要寄。** 沒寄的話，前二十分鐘會全部拿去裝軟體。

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

同一套內容寫了四次給四種讀者看，**改一個沒改其他的是這個 repo 最容易壞掉的地方**。
細節見 [`CLAUDE.md`](CLAUDE.md)，重點是：

- 動到時間或順序 → 先改 `instructor/timeline.md`，再往下同步
- 動到學員要貼的提示詞 → `workbook/` 和 `site/index.html` **必須逐字一致**
- 改完 `site/index.html` → 重新發布到**原本那個網址**（用 `url` 參數），不要產生新的
