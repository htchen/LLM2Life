# 用 AI 和 GitHub 把發想做成可操作工具（免費版）

**這是課堂預設使用的版本。** 根目錄的
[Claude Code 付費版](../README.md)保留給主辦方統一付費或學員已有 Pro 以上方案的場次。
兩者使用相同的開放式專題架構，主要差別如下：

> **學員需要自行把 AI 回覆建立成檔案。**

## 什麼時候用這個版本，而不是原版

| 情境 | 用哪個版本 |
| --- | --- |
| 學員能訂閱 Pro，或主辦方能統一付費 | [付費版](../README.md)（Claude Code） |
| 場地限制安裝軟體 | 這個版本 |
| 沒有工具預算 | 這個版本 |
| 線上開課、無法確認學員裝置 | 這個版本 |
| 學員只有免費的 Claude 帳號 | 這個版本——**免費帳號本來就無法使用 Claude Code**，
  換任何模型都一樣，見 [`../instructor/provisioning-tokens.md`](../instructor/provisioning-tokens.md) |

## 跟原版的核心差異

| | 原版 | 這個版本 |
| --- | --- | --- |
| 學員需要 | Pro 以上付費方案 | 免費帳號就夠 |
| 需要安裝 | Claude 桌面版 | 不需安裝 |
| 如何建立檔案 | Claude Code 直接寫檔案、開瀏覽器 | 學員自行複製、貼到記事本／文字編輯、存檔、雙擊 |
| 迭代怎麼做 | 直接跟它說「改成怎樣」 | 要新版本 → 全選蓋掉舊內容 → 存檔 → 重新整理 |
| 專題版本上 GitHub | Claude Code 自動 push | 學員用 GitHub 網頁介面貼上完整檔案 |
| 備用 GitHub Actions 案例 | 工具直接建立檔案 | 學員手動建立相同檔案 |
| 總時長 | 180 分鐘 | **195 分鐘**（額外時間用於手動建立與更新檔案，見 timeline） |
| 核心論證 | 轉成可執行形式的成本降低 | 手動執行轉換步驟，理解自動化工具代為處理的工作 |

固定的 GitHub Actions 案例保留為備用參考；課堂主線改為學員自己的單一網頁專題。
詳見 [`instructor/insights.md`](instructor/insights.md)。

## 這裡有什麼

| 資料夾 | 內容 |
| --- | --- |
| `workbook/` | 共同練習、發想、規劃、分段實作與重點整理，採「問→貼→存→開」流程 |
| `slides/deck.md` | Marp 投影片，78 頁，含講師備忘稿 |
| `site/` | 隨堂網站與課前準備網頁的原始檔 |
| `instructor/` | 流程表（含 195→180 分鐘的縮短方式）、洞見講稿、課前信、疑難排解 |

`instructor/reference/` 沒有另外準備——備用的每日摘要案例直接複用
[`../instructor/reference/`](../instructor/reference/) 裡的 workflow 和腳本，
因為那份參考解對這個版本完全通用。

## 先讀這兩份

- [`instructor/timeline.md`](instructor/timeline.md) — 這個版本的時間唯一真實來源，
  含 195 分鐘完整版與 180 分鐘調整方式
- [`instructor/insights.md`](instructor/insights.md) — 論證與原版不同，
  講師應在課前讀完並依此版本說明

## 寫作慣例

跟主專案共用 [`../CLAUDE.md`](../CLAUDE.md) 的所有慣例（繁體中文、
verifiable 檢查點、prompt 用 `text` 圍欄），額外多一條：

- **每一個範例提示詞的結尾都要有「請給我完整程式碼」這句**，
  這是此版本必要的補充句。AI 回覆可能以「...」省略部分內容，
  而免費版需要學員直接建立完整檔案。
