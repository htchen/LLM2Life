# 用 AI 和 GitHub 把發想做成可操作工具

實作工作坊的完整教材。對象為**不具程式背景**的高中教師。
參與教師由教學現場的真實問題出發，完成發想、規劃、實作與驗證，
產出一個可操作的最小版本；產出**歸屬於製作者本人**，具備公開網址、
可回溯版本、可長期保存，並可移轉予他人。

以生成工具產生初版，目前多數工具均可達成。本教材的重點在於**產出之後的處置**：
如何使其成為可保存、可修改、可移轉的教學資產。

| 資源 | 網址 |
| --- | --- |
| 專案網站 | https://htchen.github.io/LLM2Life/ |
| 三小時課程投影片 | https://htchen.github.io/LLM2Life/slides.html |
| 60 分鐘演講投影片 | https://htchen.github.io/LLM2Life/talk.html |
| 隨堂網站 | https://htchen.github.io/LLM2Life/handbook.html |
| 課前準備 | https://htchen.github.io/LLM2Life/pre-workshop.html |
| 種子教師指南 | https://htchen.github.io/LLM2Life/seed-teacher.html |
| 四個互動範例 | https://htchen.github.io/LLM2Life/examples/ |

---

## 兩種場次

本教材涵蓋兩種形式，目標不同，並非長短版的關係。

| | 60 分鐘演講 | 三小時工作坊 |
| --- | --- | --- |
| 對象 | 種子教師 | 種子教師返校後開設之對象 |
| 目標 | 判斷是否值得為同事安排三小時 | 每位參與者產出可操作的最小版本 |
| 形式 | 說明與兩段現場示範，不安排動手 | 全程實作 |
| 事前準備 | 無 | 兩個免費帳號，課前完成 |
| 教材 | `slides/talk-60.md`（27 頁） | `variant-free/`（195 分鐘） |

三小時教材不因短場次而縮減——**它是該場演講的交付物**。
演講相關文件：[`instructor/talk-60.md`](instructor/talk-60.md)（時間）、
[`talk-60-script.md`](instructor/talk-60-script.md)（講稿）、
[`talk-60-demo-runbook.md`](instructor/talk-60-demo-runbook.md)（示範操作）。

---

## 兩個版本

**課堂預設使用免費版**：claude.ai 免費聊天介面搭配 GitHub 網頁介面，
參與者僅需免費帳號，無須訂閱或安裝任何軟體。教材位於 [`variant-free/`](variant-free/)。

專題流程、題目範圍與驗收方式與付費版完全相同，產出亦相同。
差異僅有兩項：參與者須自行將生成內容存為檔案，以及總長 195 分鐘
（另附 180 分鐘之調整方式）。

**付費版（Claude Code）** 適用於主辦單位統一付費、或參與者已具備 Pro 以上方案之場次，
教材位於根目錄的 `slides/`、`workbook/`、`site/`、`instructor/`
（[隨堂網站](https://htchen.github.io/LLM2Life/handbook-paid.html)、
[課前準備](https://htchen.github.io/LLM2Life/pre-workshop-paid.html)）。
**免費帳號無法使用 Claude Code**，此為方案限制而非模型限制，
詳見 [`instructor/provisioning-tokens.md`](instructor/provisioning-tokens.md)。

---

## 教材結構

資料夾未隨版本主次調整而搬動：根目錄仍為付費版，免費版整套位於 `variant-free/` 之下。
**開課時請以 `variant-free/` 為準。**

| 資料夾 | 版本 | 內容 |
| --- | --- | --- |
| **`variant-free/`** | **免費版 · 主線** | **slides／workbook／site／instructor 自成一套** |
| `slides/` | 付費版 | Marp 投影片，77 頁，含備忘稿；另含 60 分鐘演講版 |
| `workbook/` | 付費版 | 共同練習、專題發想、規劃與實作手冊 |
| `site/` | 付費版 | 隨堂網站與課前準備網頁原始檔 |
| `instructor/` | **三類混放** | 付費版專用、演講場次與兩版共用文件並存，見下表 |
| `starter/` | 兩版共用 | 學員 repo 範本（含 `CLAUDE.md`） |
| `web/` | 兩版共用 | 專案首頁與種子教師指南（發布至 GitHub Pages） |

`instructor/` 並非全屬付費版，取用前請先對照：

| 檔案 | 適用範圍 |
| --- | --- |
| [`insights.md`](instructor/insights.md)（**論證本體**）、[`reference/`](instructor/reference/)、[`provisioning-tokens.md`](instructor/provisioning-tokens.md)、[`ideas-backlog.md`](instructor/ideas-backlog.md) | **兩版共用** |
| [`talk-60.md`](instructor/talk-60.md)、[`talk-60-script.md`](instructor/talk-60-script.md)、[`talk-60-demo-runbook.md`](instructor/talk-60-demo-runbook.md) | 60 分鐘演講 |
| [`timeline.md`](instructor/timeline.md)、[`troubleshooting.md`](instructor/troubleshooting.md)、[`pre-workshop-email.md`](instructor/pre-workshop-email.md)（另有[可直接複製寄送的 HTML 版](instructor/pre-workshop-email.html)）、[`optional-template-repo.md`](instructor/optional-template-repo.md) | 付費版三小時場次 |

[`instructor/LLM2Life_slide_deck.pptx`](instructor/LLM2Life_slide_deck.pptx) 為**教材走查簡報**（24 頁），
供向主辦單位或協作者說明本教材之結構與維護方式，不供課堂使用。
其內容為三小時教材之結構快照，未涵蓋 60 分鐘演講；資料夾結構若有調整，須重新產生。

### 開課前應先閱讀

- [`variant-free/instructor/timeline.md`](variant-free/instructor/timeline.md) —
  免費版時間與順序之唯一依據（195 分鐘完整版與 180 分鐘調整方式）
- [`variant-free/instructor/insights.md`](variant-free/instructor/insights.md) —
  免費版特有之三項說明；共通之教學理由指向下一份文件
- [`instructor/insights.md`](instructor/insights.md) —
  **論證本體**：各階段講稿，以及補充段落「AI 演進與人的判斷」之完整推導與追問回應。
  投影片僅呈現結論，理由記載於此。

改用付費版時，另須閱讀 [`instructor/timeline.md`](instructor/timeline.md) 與
[`instructor/provisioning-tokens.md`](instructor/provisioning-tokens.md)（統一付費之作法與成本估算）。

返校後自行開設課程者，請先閱讀
[種子教師指南](https://htchen.github.io/LLM2Life/seed-teacher.html)
（原始檔 [`web/seed-teacher.html`](web/seed-teacher.html)）。

---

## 課程設計

課程採漸進式開放。共同練習先建立基本操作能力，其後由參與者提出真實需求，
將題目縮小並完成可驗證的最小版本。主線為一個完整的專題循環：

```
提出問題 → 選定題目 → 定義最小目標 → 寫出驗收條件
→ 拆解步驟 → 分段實作 → 驗證 → 展示與規劃下一版
```

共同練習與個人專題置於同一 repo（`my-life-tools`）。
每日摘要與習慣追蹤案例保留為備用路徑與課後參考，不列為必做內容。

免費版共 **195 分鐘**，多出之時間用於手動建立與更新檔案。
下表為概覽，實際時間以
[`variant-free/instructor/timeline.md`](variant-free/instructor/timeline.md) 為準。

| 段落 | 內容 | 長度 |
| --- | --- | --- |
| 開場與完整存檔示範 | 現場示範問、貼、存、開 | 10 分 |
| 名詞說明 | claude.ai／repo／GitHub | 10 分 |
| **Lab 0** | 帳號與存檔練習 | 25 分 |
| **共同練習** | 探究提問卡：描述、更新、上傳 | 30 分 |
| 回顧與補充段落 | 兩類工作；AI 演進與人的判斷 | 12 分 |
| 休息 | | 10 分 |
| **蒐集發想** | 由教學現場問題選定專題 | 14 分 |
| **定義目標** | 專題簡述、最小範圍與驗收條件 | 18 分 |
| **拆解計畫** | 2–4 個可驗收步驟 | 15 分 |
| **實作第一輪** | 完成核心流程並上傳 GitHub | 30 分 |
| **實作第二輪** | 更新版本並重新驗證 | 15 分 |
| **展示與回顧** | 問題、成果、驗證方式與下一步 | 6 分 |

付費版為 180 分鐘，段落略有不同，見 [`instructor/timeline.md`](instructor/timeline.md)。

### 編排原則：先形成判斷，再請生成工具協助

發想階段先描述問題，不先要求提供解法；規劃階段先由參與者界定目標與限制，
再請工具協助檢查範圍與拆解步驟。每一輪實作均以參與者自訂之驗收條件判斷結果。

論證核心為：軟體開發包含三項工作——**確認需求**、**轉為機器可執行的形式**、
**確認結果正確**。生成工具降低了第二項的部分成本，因此需求釐清與驗證在整體流程中
所佔比例隨之提高。

題目限定為單一使用者、單一核心問題與低風險流程。涉及登入、資料庫、多人同步、
付款、敏感個資或自動對外寄送者，列入後續版本。

---

## 開課前須知（免費版）

1. **參與者僅需免費帳號，無須訂閱或安裝。** 全程使用瀏覽器：
   claude.ai 聊天介面搭配 GitHub 網頁介面。
2. **參與者須自行將生成內容存為檔案。** 此為兩版唯一的機制差異，
   亦為每則提示詞結尾均須加註「請給我完整程式碼」之原因——
   生成內容若以省略符號略過部分片段，將產生不完整的檔案。
3. **使用 GitHub Pages 時，參與者的 repo 必須為 Public**，應於 Lab 0 完成設定。
4. **務必寄送課前通知信**，見
   [`variant-free/instructor/pre-workshop-email.md`](variant-free/instructor/pre-workshop-email.md)。
   免費版無安裝問題，仍須確認帳號可正常登入。

改用付費版時，第 1、2 項調整為：Claude Code 需 Pro 以上方案（免費帳號無法使用），
主要路徑為桌面版而非終端機。

---

## 授權

本教材以 [CC BY 4.0](LICENSE) 授權釋出。**種子教師得將整份教材帶回所屬學校，
開設予校內其他教師**，包含修改內容、更換題目、複製隨堂網站並自行發布、
印製手冊分發，亦得用於商業用途。唯一要求為標示出處。

> 本教材改編自 htchen「用 AI 和 GitHub 把發想做成可操作工具」
> （https://github.com/htchen/LLM2Life），依 CC BY 4.0 授權使用。

參與者於課堂中產出之工具屬製作者本人所有，不受本授權拘束。
Claude、Anthropic、GitHub 等名稱與標誌屬各自權利人所有，不在授權範圍內。

---

## 投影片建置

```bash
npm install          # 僅建置投影片時需要

npm run slides       # → dist/deck.html
npm run slides:pdf   # → dist/deck.pdf（簡報使用）
npm run slides:watch # 即時預覽
```

需要 Node.js。**課堂上不需要**，僅講師備課時使用。
線上版本由 GitHub Actions 於推送後自動建置，見 `.github/workflows/pages.yml`。

---

## 教材維護規則

同一套內容分布於四個介面，修改其中之一時須同步檢查其餘介面。
完整規則見 [`CLAUDE.md`](CLAUDE.md)，要點如下：

- **變更時間或順序** → 先修改該版本的 `timeline.md`，再往下同步。
  免費版為 `variant-free/instructor/timeline.md`，付費版為 `instructor/timeline.md`。
- **變更參與者需複製的提示詞** → 同一版本的 `workbook/` 與 `site/index.html`
  **必須逐字一致**。
- **變更任一 `site/index.html`** → 由 GitHub Actions 自動重新發布至 Pages，
  無須手動處理。免費版對應 `/handbook.html`，付費版對應 `/handbook-paid.html`。
- **兩套教材各自獨立**，各有其 `timeline.md`、`insights.md` 與 `site/`。
  修改其中一方的 Lab 內容時，另一方通常亦須調整；但**不應**假設兩者的提示詞逐字一致——
  免費版每則提示詞結尾均多一句「請給我完整程式碼」，此為刻意保留的差異。
