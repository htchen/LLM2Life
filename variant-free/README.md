# 用 AI 和 GitHub 做出你的第一個網站（免費版）

這是「[用 Claude Code 打造生活小工具](../README.md)」工作坊的**免費變體**。
同一個三小時的骨架、同一組三個 Lab、同一個結尾的公開網址——差別只有一個：

> **今天沒有工具幫你把 AI 的話變成檔案，你會親手做那一步。**

## 什麼時候用這個版本，而不是原版

| 情境 | 用哪個版本 |
| --- | --- |
| 學員能訂閱 Pro，或主辦方能統一付費 | [原版](../README.md)（Claude Code） |
| 場地是鎖死的電腦教室，不能安裝軟體 | 這個版本 |
| 完全沒有預算 | 這個版本 |
| 線上開課、無法確認學員裝置 | 這個版本 |
| 學員只有免費的 Claude 帳號 | 這個版本——**免費帳號本來就無法使用 Claude Code**，
  換任何模型都一樣，見 [`../instructor/provisioning-tokens.md`](../instructor/provisioning-tokens.md) |

## 跟原版的核心差異

| | 原版 | 這個版本 |
| --- | --- | --- |
| 學員需要 | Pro 以上付費方案 | 免費帳號就夠 |
| 需要安裝 | Claude 桌面版 | 完全不用安裝 |
| AI 怎麼動手 | Claude Code 直接寫檔案、開瀏覽器 | 學員親手複製、貼到記事本／文字編輯、存檔、雙擊 |
| 迭代怎麼做 | 直接跟它說「改成怎樣」 | 要新版本 → 全選蓋掉舊內容 → 存檔 → 重新整理 |
| Lab 1／3 上 GitHub | Claude Code 自動 push | 學員用「Add file → Create new file」網頁介面貼上 |
| Lab 2（GitHub Actions） | 幾乎一樣 | **幾乎一樣**——GitHub Actions 不在乎檔案怎麼來的 |
| 總時長 | 180 分鐘 | **195 分鐘**（多出的時間是誠實的代價，見 timeline） |
| 核心論證 | 翻譯（寫程式）變便宜了 | 翻譯今天沒有變便宜，但你因此看清楚它本來的樣子 |

**Lab 2 幾乎不用改**，這件事本身就是這個版本的一個教學重點——
詳見 [`instructor/insights.md`](instructor/insights.md) 的洞見 2。

## 這裡有什麼

| 資料夾 | 內容 |
| --- | --- |
| `workbook/` | 學員手冊，四個 Lab + 帶回家的小抄，全部改寫成「問→貼→存→開」的流程 |
| `slides/deck.md` | Marp 投影片，87 頁，含講師備忘稿 |
| `site/` | 隨堂網站原始檔 |
| `instructor/` | 流程表（含 195→180 分鐘的砍法）、洞見講稿（**論證方向跟原版相反，務必讀熟**）、課前信、急救手冊 |

`instructor/reference/` 沒有另外準備——Lab 2 直接複用
[`../instructor/reference/`](../instructor/reference/) 裡的 workflow 和腳本，
因為那份參考解對這個版本完全通用。

## 先讀這兩份

- [`instructor/timeline.md`](instructor/timeline.md) — 這個版本的時間唯一真實來源，
  含 195 分鐘的完整版和 180 分鐘的砍法
- [`instructor/insights.md`](instructor/insights.md) — **論證跟原版方向相反**，
  上台前一定要讀，臨場照原版的講法講會講錯

## 寫作慣例

跟主專案共用 [`../CLAUDE.md`](../CLAUDE.md) 的所有慣例（繁體中文、
verifiable 檢查點、prompt 用 `text` 圍欄），額外多一條：

- **每一個範例提示詞的結尾都要有「請給我完整程式碼」這句**，
  這是這個版本特有、不能省略的補充句——AI 有時候會用「...」偷懶帶過，
  免費版沒有工具幫忙檢查完整性，少這句會直接卡住學員。
