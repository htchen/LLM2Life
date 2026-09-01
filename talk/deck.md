---
marp: true
theme: default
paginate: true
size: 16:9
lang: zh-Hant
style: |
  section {
    font-family: "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif;
    font-size: 30px;
    padding: 60px 70px;
    background: #fbfaf8;
    color: #1c1a17;
  }
  h1 { font-size: 62px; color: #14110e; letter-spacing: -0.01em; }
  h2 { font-size: 46px; color: #14110e; }
  h3 { font-size: 34px; color: #3a3530; }
  strong { color: #b8442a; }
  section :is(h1, h2, h3, h4, h5, h6) strong { color: #b8442a; }
  code { background: #efece7; padding: 2px 8px; border-radius: 5px; font-size: 0.88em; }
  pre { background: #14110e; border-radius: 10px; padding: 22px 26px; font-size: 23px; line-height: 1.55; }
  pre code { background: transparent; color: #f4f1ec; padding: 0; }
  table { font-size: 27px; border-collapse: collapse; }
  th { background: #efece7; }
  td, th { padding: 10px 18px; border: 1px solid #ddd8d0; }
  blockquote { border-left: 6px solid #b8442a; padding-left: 24px; color: #4a443d; font-size: 0.94em; }
  section.lead { justify-content: center; text-align: center; }
  section.lead h1 { font-size: 76px; }
  section.dark { background: #14110e; color: #f4f1ec; }
  section.dark h1, section.dark h2 { color: #fff; }
  section.dark strong { color: #ff9d7a; }
  section.dark :is(h1, h2, h3, h4, h5, h6) strong { color: #ff9d7a; }
  section.big { justify-content: center; text-align: center; }
  section.big h1 { font-size: 82px; line-height: 1.25; }
  section.big h2 { font-size: 54px; line-height: 1.35; }
  ul { line-height: 1.7; }
  footer { color: #9c948a; }
---

<!-- _class: lead dark -->

### 種子教師研習 · 60 分鐘

# 從教學需求<br>到可維護的教學工具

**本場次提供可再次施教的完整教材**

<!--
自我介紹 60 秒以內。開場就說清楚：今天不動手，你們回去才動手。
-->

---

<!-- _class: big -->

# 本場次為說明與示範

## 實作課程為三小時<br>由與會教師返校後自行開設

<!--
先講清楚今天的定位，老師才不會期待落空，也才會用「我要不要再教一次」的角度聽。
完整三小時教材、講師文件與授權，最後一段會給網址。
-->

---

<!-- _class: big -->

# 示範一<br>從需求描述到可操作的網頁

---

## 示範用的需求描述

```text
做一個互動網頁證明 sin(α+β) = sin α cos β + cos α sin β，單一檔案、不用套件。
畫法：從原點 O 畫出角 α，再從該射線往上畫角 β；在 α+β 的射線上取距離 1 的點 P，
從 P 對 α 射線作垂足 Q，再把 P 垂直投影到 x 軸。
P 的高度就是 sin(α+β)，它會被 Q 的高度分成兩段：下段 sin α cos β、上段 cos α sin β。
兩個滑桿控制 α 和 β，兩段用不同顏色，下方即時顯示三個數值。
中文介面、手機能用。做好後在瀏覽器打開。
```

<!--
中間三行是幾何構造，投影片 25 會回頭指這裡——那是教師提供的部分。
實際產生。不要解釋程式碼。
這個提示詞比一般的長，失敗機率也較高：失敗時直接開
shared/reference/sine-addition.html 繼續，不要當場除錯。
-->

---

## 以數值驗收，而非以外觀判斷

# 兩段長度相加<br>應等於 sin(α+β)

### α = 35°、β = 25° 時<br>0.520 + 0.346 = 0.866 = sin 60°

<!--
這是整場最重要的示範動作之一。指著數字說：我沒有在看它漂不漂亮，我在看它對不對。
後面「驗收條件」那一段會回來用這句。
-->

---

## 一般對話式介面同樣可以產生此結果

<br>

# 差異在產出之後的處置

### 是否具備可公開存取的網址、能否回溯版本、<br>能否長期保存、能否移轉給他人

<!--
直接回應在座老師心裡那句「我已經在用 Gemini Canvas 或 ChatGPT 了」。
不要否定那些工具——產生第一版它們都好用，有些更快。差別不在誰做得出來。
-->

---

## 版本庫與 GitHub 提供的三項條件

### 可回溯
確認可運作後即保存版本，後續修改具備還原點

### 可公開存取
取得固定網址，學生無須帳號或安裝即可使用

### 可長期保存與移轉
不隨工具更替而失效，並可交付其他教師

<!--
三句都用老師的語言講。不要講「版本控制」「部署」「儲存庫」——
這三個詞一出現，現場一半的人會判定這不是給他們的。
-->

---

## 示範二：版本保存與發布

# 上傳版本庫 → 取得公開網址<br>→ 以行動裝置驗證

<!--
這一段要當場做完，讓老師看見網址真的存在、手機真的打得開。
沒有這一段，前一張只是宣稱。
-->

---

<!-- _class: big dark -->

# 本課程的立論基礎

---

<!-- _class: big -->

## 若產出程式碼的成本大幅下降

# 學習開發的意義<br>究竟在哪裡

<!--
這一頁只提出問題，不作回答。後續三頁是本場次對此的回應。
-->

---

## 軟體開發包含三項工作

| | 工作內容 | 生成工具帶來的改變 |
| --- | --- | --- |
| 一 | **確認需求** | 成本不變 |
| 二 | 轉為機器可執行的形式 | **部分成本下降** |
| 三 | **確認結果正確** | 成本不變 |

> 僅第二項成本下降，第一項與第三項在整體流程中所佔比例因此提高。

<!--
不要給下降幅度的數字。被追問時的回應：幅度依題目而定，
本場次的主張是三項的相對比例改變，不是任何特定百分比。
-->

---

<!-- _class: big -->

## 人的位置在第一項與第三項

# 保有**定義問題**<br>與**驗證結果**的主權

<!--
本場次的核心主張。接下來四個觀點都是這一頁的支撐。
-->

---

## 模型能力來自**已被記錄**的人類知識

| 記錄較完整的領域 | 未被記錄的部分 |
| --- | --- |
| 程式與技術文件 | 個別教學現場的運作方式 |
| 語言、翻譯與寫作 | 特定班級的學習狀況 |
| 公開討論與教學材料 | 學生的實際使用情形 |

> 模型讀取的是人類的紀錄，不是使用者的處境。

---

## 程式領域進展較快的結構性原因

### 電腦、網路與程式構成一個可完全自主互動的環境

<div style="margin: 26px 0 18px"><svg viewBox="0 0 1000 176" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="整個迴圈無須人介入"><rect x="0" y="0" width="220" height="82" rx="8" fill="#efece7" stroke="#ddd8d0" stroke-width="1.5"/><text x="110" y="50" text-anchor="middle" font-size="27" fill="#1c1a17" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">產生</text><rect x="260" y="0" width="220" height="82" rx="8" fill="#efece7" stroke="#ddd8d0" stroke-width="1.5"/><text x="370" y="50" text-anchor="middle" font-size="27" fill="#1c1a17" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">執行</text><rect x="520" y="0" width="220" height="82" rx="8" fill="#efece7" stroke="#ddd8d0" stroke-width="1.5"/><text x="630" y="50" text-anchor="middle" font-size="27" fill="#1c1a17" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">讀取結果</text><rect x="780" y="0" width="220" height="82" rx="8" fill="#efece7" stroke="#ddd8d0" stroke-width="1.5"/><text x="890" y="50" text-anchor="middle" font-size="27" fill="#1c1a17" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">修正</text><path d="M 233 30 l 11 11 l -11 11" fill="none" stroke="#b8442a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M 493 30 l 11 11 l -11 11" fill="none" stroke="#b8442a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M 753 30 l 11 11 l -11 11" fill="none" stroke="#b8442a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M 990 82 V 152 H 10 V 92" fill="none" stroke="#b8442a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M 3 100 L 10 90 L 17 100" fill="none" stroke="#b8442a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><rect x="400" y="136" width="201" height="32" fill="#fbfaf8"/><text x="500" y="159" text-anchor="middle" font-size="21" font-weight="700" fill="#b8442a" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">整個迴圈無須人介入</text></svg></div>

### 驗證迴圈可在系統內部閉合

---

## 涉及物理世界時，驗證迴圈中斷

<div style="margin: 22px 0 16px"><svg viewBox="0 0 1000 176" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="回饋須由人帶回，且慢得多"><rect x="0" y="0" width="220" height="82" rx="8" fill="#efece7" stroke="#ddd8d0" stroke-width="1.5"/><text x="110" y="50" text-anchor="middle" font-size="27" fill="#1c1a17" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">提出做法</text><rect x="260" y="0" width="220" height="82" rx="8" fill="#14110e" stroke="none" stroke-width="1.5"/><text x="370" y="30" text-anchor="middle" font-size="17" font-weight="700" fill="#ff9d7a" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif" letter-spacing="1.5">須由人</text><text x="370" y="60" text-anchor="middle" font-size="26" fill="#f4f1ec" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">在現場執行</text><rect x="520" y="0" width="220" height="82" rx="8" fill="#14110e" stroke="none" stroke-width="1.5"/><text x="630" y="30" text-anchor="middle" font-size="17" font-weight="700" fill="#ff9d7a" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif" letter-spacing="1.5">須由人</text><text x="630" y="60" text-anchor="middle" font-size="26" fill="#f4f1ec" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">觀察實際結果</text><rect x="780" y="0" width="220" height="82" rx="8" fill="#efece7" stroke="#ddd8d0" stroke-width="1.5"/><text x="890" y="50" text-anchor="middle" font-size="27" fill="#1c1a17" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">修正</text><path d="M 233 30 l 11 11 l -11 11" fill="none" stroke="#b8442a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M 493 30 l 11 11 l -11 11" fill="none" stroke="#b8442a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M 753 30 l 11 11 l -11 11" fill="none" stroke="#b8442a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M 990 82 V 152 H 10 V 92" fill="none" stroke="#b8442a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 9"/><path d="M 3 100 L 10 90 L 17 100" fill="none" stroke="#b8442a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><rect x="371" y="136" width="258" height="32" fill="#fbfaf8"/><text x="500" y="159" text-anchor="middle" font-size="21" font-weight="700" fill="#b8442a" font-family="'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif">回饋須由人帶回，且慢得多</text></svg></div>

### 程式錯誤的回饋以**秒**計　　教學成效的回饋以**學期**計

<!--
教學正是回饋最慢的行業之一。講完這張，在座的人會知道你理解他們的工作。
-->

---

## 個別差異來自**脈絡**，而非能力

| 模型具備 | 使用者具備 |
| --- | --- |
| 人類共同留下的紀錄 | 僅在教學現場可得的資訊 |
| 每次重新開始的對話 | 連續累積並持續修正的經驗 |
| 不承擔結果 | 需對特定班級負責 |

> 相同工具在不同使用者手中產生不同結果，差異來自所提供的脈絡。

---

<!-- _class: big dark -->

# 可自主驗證的工作<br>效率將持續提升

# 不可自主驗證的工作<br>仍仰賴人的判斷

<!--
整場的主張。時間不足時其他張都可以略過，這張不要略過。
-->

---

## 第一項工作所依賴的是領域知識

# 決定產出品質的<br>不是能寫幾行程式碼

### 而是對自身問題的了解程度

> 教師對教學現場痛點的掌握程度，直接決定工具產出的精準度；
> 這一項無法委由模型代為判斷。

---

## 三個常見提問

| | |
| --- | --- |
| **是否仍須學習程式設計** | 仍須學習，重點移至將問題轉為可驗收的規格 |
| **資訊相關系所應調整何處** | 先建立可自動判斷正確性的機制，再據以比較各方案 |
| **人的價值為何** | 決定處理哪一問題、界定範圍、承擔結果、提供特有脈絡 |

<!--
被追問時的完整論證在 shared/insights.md「補充段落」。
-->

---

<!-- _class: big -->

# 流程設計<br>與科學探究歷程的對應

---

## 課程流程：六個階段

<br>

# 提出問題 → 定義目標 → 拆解計畫
# → 分段實作 → 驗證 → 決定下一步

---

## 六階段流程與科學探究歷程對應

| 課程流程 | 科學探究歷程 |
| --- | --- |
| 提出問題 | 觀察現象，提出可探究的問題 |
| 定義目標與驗收條件 | 將問題轉為**可檢驗**的預測 |
| 拆解計畫 | 設計步驟與方法 |
| 分段實作 | 蒐集資料 |
| 驗證 | 對照證據，判斷是否成立 |
| 決定下一步 | 推論、表達，並規劃下一輪 |

> 兩者在結構上一致，此為本課程對教學現場的主要價值。

<!--
這一張慢下來。點出兩個容易被忽略的對應：
「驗收條件」對應的是「可檢驗」不是「做完」；「決定下一步」對應的是「推論與下一輪」不是「結案」。
-->

---

## 關鍵設計：先訂定驗收條件

```text
1. α 與 β 任意調整時，兩段長度相加應等於 sin(α+β)
2. 輸入「第 3 組、24.5」後，清單新增該筆並更新平均值
3. 關閉後重新開啟，資料仍存在
```

> 應先確認數值正確，再處理呈現。順序倒置時，學員多半無法在時限內產出可展示的成果。

<!--
回頭指第 5 張：我剛才拉到 90° 看那個數字，就是這件事。
-->

---

## 出現錯誤訊息是流程的一部分

# 錯誤訊息是需求尚未對齊的訊號<br>而非失敗

### 將錯誤訊息交回工具，是最直接的修正方式

<!--
學員第一次看到錯誤訊息多半會停下來等待協助。
這一頁先講，現場舉手的次數會明顯下降。
-->

---

## 構造由教師提供，繪製由工具執行

### 回到示範的提示詞：關鍵在中間三行

模型不會自行提出該幾何構造。須先掌握「於 α 之上疊加 β、
取單位斜邊、將垂足投影」，方能據以指示繪製。

<br>

### 另一例：動滑輪的省力與費距離

初版數值全部正確，但繩索未接於滑輪切點。
**未列入驗收條件者，不會被檢查。**

### 四個範例：htchen.github.io/LLM2Life/examples/

<!--
兩個現成的參考實作在 shared/reference/，可以當場打開。
這一張是全場對數學與物理老師最有說服力的地方：被凸顯的是他們的專業。
-->

---

## 光譜的另一端：不倚賴學科構造的例子

### 雙人單字對決

兩人各出一個五字母單字供對方猜測，輪流猜，先猜中者獲勝；
同輪猜中則為平手，避免先手佔優。
單一檔案、無須後端——兩人共用同一台裝置輪流操作。

<div style="float: right; margin: -150px 0 0 40px; text-align: center;"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="QR code：https://htchen.github.io/LLM2Life/examples/wordle-duel.html"><rect width="200" height="200" rx="10" fill="#ffffff"/><g fill="#14110e"><rect x="15.38" y="15.38" width="35.90" height="5.13"/><rect x="56.41" y="15.38" width="5.13" height="5.13"/><rect x="71.79" y="15.38" width="5.13" height="5.13"/><rect x="82.05" y="15.38" width="5.13" height="5.13"/><rect x="92.31" y="15.38" width="10.26" height="5.13"/><rect x="107.69" y="15.38" width="10.26" height="5.13"/><rect x="133.33" y="15.38" width="5.13" height="5.13"/><rect x="148.72" y="15.38" width="35.90" height="5.13"/><rect x="15.38" y="20.51" width="5.13" height="5.13"/><rect x="46.15" y="20.51" width="5.13" height="5.13"/><rect x="56.41" y="20.51" width="30.77" height="5.13"/><rect x="102.56" y="20.51" width="10.26" height="5.13"/><rect x="117.95" y="20.51" width="25.64" height="5.13"/><rect x="148.72" y="20.51" width="5.13" height="5.13"/><rect x="179.49" y="20.51" width="5.13" height="5.13"/><rect x="15.38" y="25.64" width="5.13" height="5.13"/><rect x="25.64" y="25.64" width="15.38" height="5.13"/><rect x="46.15" y="25.64" width="5.13" height="5.13"/><rect x="61.54" y="25.64" width="5.13" height="5.13"/><rect x="71.79" y="25.64" width="10.26" height="5.13"/><rect x="92.31" y="25.64" width="10.26" height="5.13"/><rect x="107.69" y="25.64" width="5.13" height="5.13"/><rect x="138.46" y="25.64" width="5.13" height="5.13"/><rect x="148.72" y="25.64" width="5.13" height="5.13"/><rect x="158.97" y="25.64" width="15.38" height="5.13"/><rect x="179.49" y="25.64" width="5.13" height="5.13"/><rect x="15.38" y="30.77" width="5.13" height="5.13"/><rect x="25.64" y="30.77" width="15.38" height="5.13"/><rect x="46.15" y="30.77" width="5.13" height="5.13"/><rect x="56.41" y="30.77" width="15.38" height="5.13"/><rect x="87.18" y="30.77" width="10.26" height="5.13"/><rect x="102.56" y="30.77" width="5.13" height="5.13"/><rect x="128.21" y="30.77" width="5.13" height="5.13"/><rect x="138.46" y="30.77" width="5.13" height="5.13"/><rect x="148.72" y="30.77" width="5.13" height="5.13"/><rect x="158.97" y="30.77" width="15.38" height="5.13"/><rect x="179.49" y="30.77" width="5.13" height="5.13"/><rect x="15.38" y="35.90" width="5.13" height="5.13"/><rect x="25.64" y="35.90" width="15.38" height="5.13"/><rect x="46.15" y="35.90" width="5.13" height="5.13"/><rect x="66.67" y="35.90" width="10.26" height="5.13"/><rect x="82.05" y="35.90" width="10.26" height="5.13"/><rect x="112.82" y="35.90" width="5.13" height="5.13"/><rect x="123.08" y="35.90" width="10.26" height="5.13"/><rect x="138.46" y="35.90" width="5.13" height="5.13"/><rect x="148.72" y="35.90" width="5.13" height="5.13"/><rect x="158.97" y="35.90" width="15.38" height="5.13"/><rect x="179.49" y="35.90" width="5.13" height="5.13"/><rect x="15.38" y="41.03" width="5.13" height="5.13"/><rect x="46.15" y="41.03" width="5.13" height="5.13"/><rect x="66.67" y="41.03" width="5.13" height="5.13"/><rect x="82.05" y="41.03" width="10.26" height="5.13"/><rect x="97.44" y="41.03" width="30.77" height="5.13"/><rect x="138.46" y="41.03" width="5.13" height="5.13"/><rect x="148.72" y="41.03" width="5.13" height="5.13"/><rect x="179.49" y="41.03" width="5.13" height="5.13"/><rect x="15.38" y="46.15" width="35.90" height="5.13"/><rect x="56.41" y="46.15" width="5.13" height="5.13"/><rect x="66.67" y="46.15" width="5.13" height="5.13"/><rect x="76.92" y="46.15" width="5.13" height="5.13"/><rect x="87.18" y="46.15" width="5.13" height="5.13"/><rect x="97.44" y="46.15" width="5.13" height="5.13"/><rect x="107.69" y="46.15" width="5.13" height="5.13"/><rect x="117.95" y="46.15" width="5.13" height="5.13"/><rect x="128.21" y="46.15" width="5.13" height="5.13"/><rect x="138.46" y="46.15" width="5.13" height="5.13"/><rect x="148.72" y="46.15" width="35.90" height="5.13"/><rect x="56.41" y="51.28" width="20.51" height="5.13"/><rect x="87.18" y="51.28" width="5.13" height="5.13"/><rect x="102.56" y="51.28" width="5.13" height="5.13"/><rect x="138.46" y="51.28" width="5.13" height="5.13"/><rect x="15.38" y="56.41" width="5.13" height="5.13"/><rect x="25.64" y="56.41" width="10.26" height="5.13"/><rect x="41.03" y="56.41" width="15.38" height="5.13"/><rect x="61.54" y="56.41" width="5.13" height="5.13"/><rect x="76.92" y="56.41" width="5.13" height="5.13"/><rect x="87.18" y="56.41" width="5.13" height="5.13"/><rect x="102.56" y="56.41" width="15.38" height="5.13"/><rect x="123.08" y="56.41" width="10.26" height="5.13"/><rect x="148.72" y="56.41" width="5.13" height="5.13"/><rect x="164.10" y="56.41" width="5.13" height="5.13"/><rect x="174.36" y="56.41" width="10.26" height="5.13"/><rect x="15.38" y="61.54" width="10.26" height="5.13"/><rect x="35.90" y="61.54" width="5.13" height="5.13"/><rect x="51.28" y="61.54" width="5.13" height="5.13"/><rect x="71.79" y="61.54" width="5.13" height="5.13"/><rect x="102.56" y="61.54" width="25.64" height="5.13"/><rect x="133.33" y="61.54" width="5.13" height="5.13"/><rect x="148.72" y="61.54" width="10.26" height="5.13"/><rect x="164.10" y="61.54" width="10.26" height="5.13"/><rect x="179.49" y="61.54" width="5.13" height="5.13"/><rect x="20.51" y="66.67" width="5.13" height="5.13"/><rect x="35.90" y="66.67" width="20.51" height="5.13"/><rect x="61.54" y="66.67" width="20.51" height="5.13"/><rect x="87.18" y="66.67" width="5.13" height="5.13"/><rect x="97.44" y="66.67" width="15.38" height="5.13"/><rect x="123.08" y="66.67" width="5.13" height="5.13"/><rect x="133.33" y="66.67" width="5.13" height="5.13"/><rect x="148.72" y="66.67" width="20.51" height="5.13"/><rect x="179.49" y="66.67" width="5.13" height="5.13"/><rect x="20.51" y="71.79" width="5.13" height="5.13"/><rect x="35.90" y="71.79" width="5.13" height="5.13"/><rect x="61.54" y="71.79" width="15.38" height="5.13"/><rect x="82.05" y="71.79" width="10.26" height="5.13"/><rect x="112.82" y="71.79" width="10.26" height="5.13"/><rect x="128.21" y="71.79" width="5.13" height="5.13"/><rect x="143.59" y="71.79" width="5.13" height="5.13"/><rect x="153.85" y="71.79" width="5.13" height="5.13"/><rect x="164.10" y="71.79" width="5.13" height="5.13"/><rect x="20.51" y="76.92" width="10.26" height="5.13"/><rect x="46.15" y="76.92" width="5.13" height="5.13"/><rect x="61.54" y="76.92" width="5.13" height="5.13"/><rect x="76.92" y="76.92" width="5.13" height="5.13"/><rect x="102.56" y="76.92" width="10.26" height="5.13"/><rect x="117.95" y="76.92" width="5.13" height="5.13"/><rect x="128.21" y="76.92" width="10.26" height="5.13"/><rect x="143.59" y="76.92" width="5.13" height="5.13"/><rect x="158.97" y="76.92" width="10.26" height="5.13"/><rect x="174.36" y="76.92" width="5.13" height="5.13"/><rect x="15.38" y="82.05" width="20.51" height="5.13"/><rect x="41.03" y="82.05" width="5.13" height="5.13"/><rect x="56.41" y="82.05" width="30.77" height="5.13"/><rect x="112.82" y="82.05" width="5.13" height="5.13"/><rect x="123.08" y="82.05" width="5.13" height="5.13"/><rect x="138.46" y="82.05" width="5.13" height="5.13"/><rect x="153.85" y="82.05" width="5.13" height="5.13"/><rect x="169.23" y="82.05" width="10.26" height="5.13"/><rect x="25.64" y="87.18" width="5.13" height="5.13"/><rect x="46.15" y="87.18" width="5.13" height="5.13"/><rect x="56.41" y="87.18" width="5.13" height="5.13"/><rect x="66.67" y="87.18" width="5.13" height="5.13"/><rect x="76.92" y="87.18" width="15.38" height="5.13"/><rect x="97.44" y="87.18" width="5.13" height="5.13"/><rect x="112.82" y="87.18" width="5.13" height="5.13"/><rect x="123.08" y="87.18" width="5.13" height="5.13"/><rect x="138.46" y="87.18" width="5.13" height="5.13"/><rect x="148.72" y="87.18" width="25.64" height="5.13"/><rect x="20.51" y="92.31" width="10.26" height="5.13"/><rect x="35.90" y="92.31" width="5.13" height="5.13"/><rect x="51.28" y="92.31" width="5.13" height="5.13"/><rect x="66.67" y="92.31" width="15.38" height="5.13"/><rect x="87.18" y="92.31" width="15.38" height="5.13"/><rect x="117.95" y="92.31" width="10.26" height="5.13"/><rect x="133.33" y="92.31" width="5.13" height="5.13"/><rect x="143.59" y="92.31" width="10.26" height="5.13"/><rect x="158.97" y="92.31" width="15.38" height="5.13"/><rect x="15.38" y="97.44" width="25.64" height="5.13"/><rect x="46.15" y="97.44" width="10.26" height="5.13"/><rect x="61.54" y="97.44" width="5.13" height="5.13"/><rect x="71.79" y="97.44" width="5.13" height="5.13"/><rect x="82.05" y="97.44" width="15.38" height="5.13"/><rect x="107.69" y="97.44" width="5.13" height="5.13"/><rect x="123.08" y="97.44" width="10.26" height="5.13"/><rect x="143.59" y="97.44" width="10.26" height="5.13"/><rect x="158.97" y="97.44" width="15.38" height="5.13"/><rect x="25.64" y="102.56" width="10.26" height="5.13"/><rect x="41.03" y="102.56" width="5.13" height="5.13"/><rect x="51.28" y="102.56" width="10.26" height="5.13"/><rect x="66.67" y="102.56" width="20.51" height="5.13"/><rect x="102.56" y="102.56" width="5.13" height="5.13"/><rect x="117.95" y="102.56" width="5.13" height="5.13"/><rect x="128.21" y="102.56" width="25.64" height="5.13"/><rect x="158.97" y="102.56" width="10.26" height="5.13"/><rect x="174.36" y="102.56" width="10.26" height="5.13"/><rect x="15.38" y="107.69" width="5.13" height="5.13"/><rect x="25.64" y="107.69" width="25.64" height="5.13"/><rect x="56.41" y="107.69" width="10.26" height="5.13"/><rect x="87.18" y="107.69" width="10.26" height="5.13"/><rect x="102.56" y="107.69" width="5.13" height="5.13"/><rect x="123.08" y="107.69" width="10.26" height="5.13"/><rect x="143.59" y="107.69" width="20.51" height="5.13"/><rect x="169.23" y="107.69" width="10.26" height="5.13"/><rect x="20.51" y="112.82" width="5.13" height="5.13"/><rect x="30.77" y="112.82" width="5.13" height="5.13"/><rect x="61.54" y="112.82" width="10.26" height="5.13"/><rect x="76.92" y="112.82" width="15.38" height="5.13"/><rect x="97.44" y="112.82" width="10.26" height="5.13"/><rect x="117.95" y="112.82" width="5.13" height="5.13"/><rect x="148.72" y="112.82" width="5.13" height="5.13"/><rect x="158.97" y="112.82" width="5.13" height="5.13"/><rect x="15.38" y="117.95" width="5.13" height="5.13"/><rect x="25.64" y="117.95" width="10.26" height="5.13"/><rect x="41.03" y="117.95" width="10.26" height="5.13"/><rect x="61.54" y="117.95" width="5.13" height="5.13"/><rect x="76.92" y="117.95" width="35.90" height="5.13"/><rect x="123.08" y="117.95" width="5.13" height="5.13"/><rect x="164.10" y="117.95" width="10.26" height="5.13"/><rect x="15.38" y="123.08" width="10.26" height="5.13"/><rect x="56.41" y="123.08" width="10.26" height="5.13"/><rect x="76.92" y="123.08" width="10.26" height="5.13"/><rect x="97.44" y="123.08" width="30.77" height="5.13"/><rect x="133.33" y="123.08" width="10.26" height="5.13"/><rect x="148.72" y="123.08" width="5.13" height="5.13"/><rect x="164.10" y="123.08" width="10.26" height="5.13"/><rect x="179.49" y="123.08" width="5.13" height="5.13"/><rect x="25.64" y="128.21" width="15.38" height="5.13"/><rect x="46.15" y="128.21" width="5.13" height="5.13"/><rect x="61.54" y="128.21" width="15.38" height="5.13"/><rect x="82.05" y="128.21" width="10.26" height="5.13"/><rect x="97.44" y="128.21" width="5.13" height="5.13"/><rect x="107.69" y="128.21" width="5.13" height="5.13"/><rect x="123.08" y="128.21" width="20.51" height="5.13"/><rect x="153.85" y="128.21" width="5.13" height="5.13"/><rect x="174.36" y="128.21" width="10.26" height="5.13"/><rect x="20.51" y="133.33" width="15.38" height="5.13"/><rect x="41.03" y="133.33" width="5.13" height="5.13"/><rect x="51.28" y="133.33" width="5.13" height="5.13"/><rect x="87.18" y="133.33" width="5.13" height="5.13"/><rect x="107.69" y="133.33" width="15.38" height="5.13"/><rect x="133.33" y="133.33" width="5.13" height="5.13"/><rect x="143.59" y="133.33" width="5.13" height="5.13"/><rect x="158.97" y="133.33" width="10.26" height="5.13"/><rect x="179.49" y="133.33" width="5.13" height="5.13"/><rect x="15.38" y="138.46" width="5.13" height="5.13"/><rect x="35.90" y="138.46" width="5.13" height="5.13"/><rect x="46.15" y="138.46" width="5.13" height="5.13"/><rect x="61.54" y="138.46" width="25.64" height="5.13"/><rect x="102.56" y="138.46" width="15.38" height="5.13"/><rect x="128.21" y="138.46" width="5.13" height="5.13"/><rect x="138.46" y="138.46" width="30.77" height="5.13"/><rect x="179.49" y="138.46" width="5.13" height="5.13"/><rect x="56.41" y="143.59" width="5.13" height="5.13"/><rect x="71.79" y="143.59" width="5.13" height="5.13"/><rect x="82.05" y="143.59" width="10.26" height="5.13"/><rect x="97.44" y="143.59" width="5.13" height="5.13"/><rect x="112.82" y="143.59" width="5.13" height="5.13"/><rect x="123.08" y="143.59" width="5.13" height="5.13"/><rect x="133.33" y="143.59" width="10.26" height="5.13"/><rect x="158.97" y="143.59" width="10.26" height="5.13"/><rect x="15.38" y="148.72" width="35.90" height="5.13"/><rect x="56.41" y="148.72" width="5.13" height="5.13"/><rect x="66.67" y="148.72" width="5.13" height="5.13"/><rect x="82.05" y="148.72" width="10.26" height="5.13"/><rect x="97.44" y="148.72" width="5.13" height="5.13"/><rect x="112.82" y="148.72" width="5.13" height="5.13"/><rect x="133.33" y="148.72" width="10.26" height="5.13"/><rect x="148.72" y="148.72" width="5.13" height="5.13"/><rect x="158.97" y="148.72" width="5.13" height="5.13"/><rect x="15.38" y="153.85" width="5.13" height="5.13"/><rect x="46.15" y="153.85" width="5.13" height="5.13"/><rect x="56.41" y="153.85" width="10.26" height="5.13"/><rect x="71.79" y="153.85" width="5.13" height="5.13"/><rect x="82.05" y="153.85" width="20.51" height="5.13"/><rect x="107.69" y="153.85" width="5.13" height="5.13"/><rect x="117.95" y="153.85" width="10.26" height="5.13"/><rect x="133.33" y="153.85" width="10.26" height="5.13"/><rect x="158.97" y="153.85" width="20.51" height="5.13"/><rect x="15.38" y="158.97" width="5.13" height="5.13"/><rect x="25.64" y="158.97" width="15.38" height="5.13"/><rect x="46.15" y="158.97" width="5.13" height="5.13"/><rect x="82.05" y="158.97" width="5.13" height="5.13"/><rect x="92.31" y="158.97" width="5.13" height="5.13"/><rect x="107.69" y="158.97" width="5.13" height="5.13"/><rect x="117.95" y="158.97" width="46.15" height="5.13"/><rect x="169.23" y="158.97" width="5.13" height="5.13"/><rect x="15.38" y="164.10" width="5.13" height="5.13"/><rect x="25.64" y="164.10" width="15.38" height="5.13"/><rect x="46.15" y="164.10" width="5.13" height="5.13"/><rect x="56.41" y="164.10" width="5.13" height="5.13"/><rect x="66.67" y="164.10" width="10.26" height="5.13"/><rect x="92.31" y="164.10" width="5.13" height="5.13"/><rect x="102.56" y="164.10" width="10.26" height="5.13"/><rect x="123.08" y="164.10" width="10.26" height="5.13"/><rect x="153.85" y="164.10" width="5.13" height="5.13"/><rect x="169.23" y="164.10" width="5.13" height="5.13"/><rect x="179.49" y="164.10" width="5.13" height="5.13"/><rect x="15.38" y="169.23" width="5.13" height="5.13"/><rect x="25.64" y="169.23" width="15.38" height="5.13"/><rect x="46.15" y="169.23" width="5.13" height="5.13"/><rect x="56.41" y="169.23" width="5.13" height="5.13"/><rect x="76.92" y="169.23" width="10.26" height="5.13"/><rect x="92.31" y="169.23" width="5.13" height="5.13"/><rect x="102.56" y="169.23" width="5.13" height="5.13"/><rect x="117.95" y="169.23" width="10.26" height="5.13"/><rect x="133.33" y="169.23" width="25.64" height="5.13"/><rect x="169.23" y="169.23" width="5.13" height="5.13"/><rect x="15.38" y="174.36" width="5.13" height="5.13"/><rect x="46.15" y="174.36" width="5.13" height="5.13"/><rect x="61.54" y="174.36" width="10.26" height="5.13"/><rect x="76.92" y="174.36" width="5.13" height="5.13"/><rect x="87.18" y="174.36" width="5.13" height="5.13"/><rect x="97.44" y="174.36" width="15.38" height="5.13"/><rect x="128.21" y="174.36" width="5.13" height="5.13"/><rect x="138.46" y="174.36" width="25.64" height="5.13"/><rect x="179.49" y="174.36" width="5.13" height="5.13"/><rect x="15.38" y="179.49" width="35.90" height="5.13"/><rect x="56.41" y="179.49" width="15.38" height="5.13"/><rect x="76.92" y="179.49" width="5.13" height="5.13"/><rect x="97.44" y="179.49" width="5.13" height="5.13"/><rect x="107.69" y="179.49" width="20.51" height="5.13"/><rect x="133.33" y="179.49" width="5.13" height="5.13"/><rect x="158.97" y="179.49" width="5.13" height="5.13"/><rect x="169.23" y="179.49" width="5.13" height="5.13"/></g></svg><div style="font-size: 19px; color: #4a443d; margin-top: 8px;">掃描即可試玩</div></div>

> 單字範圍可限定為該課生字。同一套流程，適用範圍不限於數理科。

<!--
這一張是廣度證據：前一張是數學專業，這一張幾乎不需要學科構造。
檔案在 shared/reference/wordle-duel.html，可以當場開一局，兩三分鐘即可。
語文科教師在座時，這一張的說服力高於和角公式。
-->

---

<!-- _class: big dark -->

# 提供之教材

---

## 可直接施教的完整教材

| 項目 | 內容 |
| --- | --- |
| 投影片 | 78 頁，含講師備忘稿 |
| 學員手冊 | 共同練習、發想、規劃、實作 |
| 隨堂網站 | 公開網址，學生無須帳號 |
| 課前準備頁 | 公開網址，兩個免費帳號 |
| 流程表 | 195 分鐘，附 180 分鐘調整方式 |
| 帶領原則與疑難排解 | 現場常見問題與處理順序 |

---

## 三項使教材得以移轉的條件

### 學員僅需免費帳號
無須訂閱或安裝，全程於瀏覽器完成

### 學生無須任何帳號
產出為網頁，學生僅需開啟使用

### 採 CC BY 4.0 授權
可修改、可更換題目、可自行發布，標示出處即可

---

## AI 工具可替換，版本保存不可省略

### 可替換
產生初版：Claude、Gemini、ChatGPT 均可，部分介面更為快速

### 不可省略
保存至版本庫：公開網址、版本回溯、所有權與移轉

> 僅有其他 AI 工具的環境同樣可以開課。保留「訂定可驗收的規格 →
> 保存至版本庫 → 依驗收條件迭代」三項即可成立。

<!--
主動講。不講的話，回到 Google Workspace 環境的老師會以為這套流程不適用於他們，然後就不開了。
-->

---

## 適用範圍

<br>

### 單次使用、無須保留的教材<br>以對話式介面直接產生即可，無須版本庫

### 本流程適用於<br>**需要累積、修改並移轉**的教學工具

<!--
主動說出自己不適用的場合，比宣稱樣樣都好更有說服力。
-->

---

<!-- _class: lead dark -->

# 教材位置

<div style="margin: 16px 0 10px"><svg xmlns="http://www.w3.org/2000/svg" width="260" height="260" viewBox="0 0 260 260" role="img" aria-label="QR code：https://htchen.github.io/LLM2Life/"><rect width="260" height="260" rx="10" fill="#ffffff"/><g fill="#14110e"><rect x="22.29" y="22.29" width="52.00" height="7.43"/><rect x="89.14" y="22.29" width="7.43" height="7.43"/><rect x="104.00" y="22.29" width="14.86" height="7.43"/><rect x="126.29" y="22.29" width="7.43" height="7.43"/><rect x="148.57" y="22.29" width="22.29" height="7.43"/><rect x="185.71" y="22.29" width="52.00" height="7.43"/><rect x="22.29" y="29.71" width="7.43" height="7.43"/><rect x="66.86" y="29.71" width="7.43" height="7.43"/><rect x="89.14" y="29.71" width="7.43" height="7.43"/><rect x="104.00" y="29.71" width="14.86" height="7.43"/><rect x="141.14" y="29.71" width="14.86" height="7.43"/><rect x="185.71" y="29.71" width="7.43" height="7.43"/><rect x="230.29" y="29.71" width="7.43" height="7.43"/><rect x="22.29" y="37.14" width="7.43" height="7.43"/><rect x="37.14" y="37.14" width="22.29" height="7.43"/><rect x="66.86" y="37.14" width="7.43" height="7.43"/><rect x="89.14" y="37.14" width="7.43" height="7.43"/><rect x="104.00" y="37.14" width="7.43" height="7.43"/><rect x="126.29" y="37.14" width="14.86" height="7.43"/><rect x="148.57" y="37.14" width="7.43" height="7.43"/><rect x="163.43" y="37.14" width="14.86" height="7.43"/><rect x="185.71" y="37.14" width="7.43" height="7.43"/><rect x="200.57" y="37.14" width="22.29" height="7.43"/><rect x="230.29" y="37.14" width="7.43" height="7.43"/><rect x="22.29" y="44.57" width="7.43" height="7.43"/><rect x="37.14" y="44.57" width="22.29" height="7.43"/><rect x="66.86" y="44.57" width="7.43" height="7.43"/><rect x="104.00" y="44.57" width="7.43" height="7.43"/><rect x="118.86" y="44.57" width="7.43" height="7.43"/><rect x="156.00" y="44.57" width="7.43" height="7.43"/><rect x="185.71" y="44.57" width="7.43" height="7.43"/><rect x="200.57" y="44.57" width="22.29" height="7.43"/><rect x="230.29" y="44.57" width="7.43" height="7.43"/><rect x="22.29" y="52.00" width="7.43" height="7.43"/><rect x="37.14" y="52.00" width="22.29" height="7.43"/><rect x="66.86" y="52.00" width="7.43" height="7.43"/><rect x="89.14" y="52.00" width="7.43" height="7.43"/><rect x="148.57" y="52.00" width="14.86" height="7.43"/><rect x="170.86" y="52.00" width="7.43" height="7.43"/><rect x="185.71" y="52.00" width="7.43" height="7.43"/><rect x="200.57" y="52.00" width="22.29" height="7.43"/><rect x="230.29" y="52.00" width="7.43" height="7.43"/><rect x="22.29" y="59.43" width="7.43" height="7.43"/><rect x="66.86" y="59.43" width="7.43" height="7.43"/><rect x="81.71" y="59.43" width="22.29" height="7.43"/><rect x="133.71" y="59.43" width="7.43" height="7.43"/><rect x="148.57" y="59.43" width="29.71" height="7.43"/><rect x="185.71" y="59.43" width="7.43" height="7.43"/><rect x="230.29" y="59.43" width="7.43" height="7.43"/><rect x="22.29" y="66.86" width="52.00" height="7.43"/><rect x="81.71" y="66.86" width="7.43" height="7.43"/><rect x="96.57" y="66.86" width="7.43" height="7.43"/><rect x="111.43" y="66.86" width="7.43" height="7.43"/><rect x="126.29" y="66.86" width="7.43" height="7.43"/><rect x="141.14" y="66.86" width="7.43" height="7.43"/><rect x="156.00" y="66.86" width="7.43" height="7.43"/><rect x="170.86" y="66.86" width="7.43" height="7.43"/><rect x="185.71" y="66.86" width="52.00" height="7.43"/><rect x="89.14" y="74.29" width="14.86" height="7.43"/><rect x="118.86" y="74.29" width="7.43" height="7.43"/><rect x="133.71" y="74.29" width="37.14" height="7.43"/><rect x="22.29" y="81.71" width="7.43" height="7.43"/><rect x="44.57" y="81.71" width="7.43" height="7.43"/><rect x="59.43" y="81.71" width="14.86" height="7.43"/><rect x="81.71" y="81.71" width="14.86" height="7.43"/><rect x="104.00" y="81.71" width="14.86" height="7.43"/><rect x="126.29" y="81.71" width="7.43" height="7.43"/><rect x="141.14" y="81.71" width="7.43" height="7.43"/><rect x="156.00" y="81.71" width="7.43" height="7.43"/><rect x="178.29" y="81.71" width="7.43" height="7.43"/><rect x="193.14" y="81.71" width="7.43" height="7.43"/><rect x="22.29" y="89.14" width="14.86" height="7.43"/><rect x="59.43" y="89.14" width="7.43" height="7.43"/><rect x="74.29" y="89.14" width="14.86" height="7.43"/><rect x="96.57" y="89.14" width="7.43" height="7.43"/><rect x="118.86" y="89.14" width="7.43" height="7.43"/><rect x="133.71" y="89.14" width="7.43" height="7.43"/><rect x="170.86" y="89.14" width="22.29" height="7.43"/><rect x="208.00" y="89.14" width="7.43" height="7.43"/><rect x="230.29" y="89.14" width="7.43" height="7.43"/><rect x="22.29" y="96.57" width="7.43" height="7.43"/><rect x="44.57" y="96.57" width="7.43" height="7.43"/><rect x="66.86" y="96.57" width="7.43" height="7.43"/><rect x="104.00" y="96.57" width="29.71" height="7.43"/><rect x="141.14" y="96.57" width="14.86" height="7.43"/><rect x="163.43" y="96.57" width="7.43" height="7.43"/><rect x="178.29" y="96.57" width="7.43" height="7.43"/><rect x="200.57" y="96.57" width="29.71" height="7.43"/><rect x="22.29" y="104.00" width="22.29" height="7.43"/><rect x="52.00" y="104.00" width="7.43" height="7.43"/><rect x="81.71" y="104.00" width="7.43" height="7.43"/><rect x="111.43" y="104.00" width="14.86" height="7.43"/><rect x="141.14" y="104.00" width="7.43" height="7.43"/><rect x="156.00" y="104.00" width="14.86" height="7.43"/><rect x="200.57" y="104.00" width="7.43" height="7.43"/><rect x="215.43" y="104.00" width="14.86" height="7.43"/><rect x="22.29" y="111.43" width="14.86" height="7.43"/><rect x="44.57" y="111.43" width="7.43" height="7.43"/><rect x="66.86" y="111.43" width="14.86" height="7.43"/><rect x="96.57" y="111.43" width="7.43" height="7.43"/><rect x="126.29" y="111.43" width="22.29" height="7.43"/><rect x="178.29" y="111.43" width="14.86" height="7.43"/><rect x="208.00" y="111.43" width="7.43" height="7.43"/><rect x="222.86" y="111.43" width="14.86" height="7.43"/><rect x="29.71" y="118.86" width="29.71" height="7.43"/><rect x="81.71" y="118.86" width="7.43" height="7.43"/><rect x="96.57" y="118.86" width="37.14" height="7.43"/><rect x="141.14" y="118.86" width="7.43" height="7.43"/><rect x="163.43" y="118.86" width="22.29" height="7.43"/><rect x="22.29" y="126.29" width="52.00" height="7.43"/><rect x="96.57" y="126.29" width="7.43" height="7.43"/><rect x="111.43" y="126.29" width="22.29" height="7.43"/><rect x="148.57" y="126.29" width="7.43" height="7.43"/><rect x="178.29" y="126.29" width="7.43" height="7.43"/><rect x="208.00" y="126.29" width="29.71" height="7.43"/><rect x="22.29" y="133.71" width="7.43" height="7.43"/><rect x="44.57" y="133.71" width="7.43" height="7.43"/><rect x="59.43" y="133.71" width="7.43" height="7.43"/><rect x="74.29" y="133.71" width="29.71" height="7.43"/><rect x="111.43" y="133.71" width="7.43" height="7.43"/><rect x="133.71" y="133.71" width="22.29" height="7.43"/><rect x="163.43" y="133.71" width="7.43" height="7.43"/><rect x="178.29" y="133.71" width="22.29" height="7.43"/><rect x="208.00" y="133.71" width="7.43" height="7.43"/><rect x="222.86" y="133.71" width="7.43" height="7.43"/><rect x="37.14" y="141.14" width="14.86" height="7.43"/><rect x="59.43" y="141.14" width="14.86" height="7.43"/><rect x="81.71" y="141.14" width="14.86" height="7.43"/><rect x="104.00" y="141.14" width="7.43" height="7.43"/><rect x="118.86" y="141.14" width="7.43" height="7.43"/><rect x="170.86" y="141.14" width="7.43" height="7.43"/><rect x="222.86" y="141.14" width="7.43" height="7.43"/><rect x="37.14" y="148.57" width="7.43" height="7.43"/><rect x="81.71" y="148.57" width="14.86" height="7.43"/><rect x="111.43" y="148.57" width="22.29" height="7.43"/><rect x="141.14" y="148.57" width="14.86" height="7.43"/><rect x="178.29" y="148.57" width="22.29" height="7.43"/><rect x="208.00" y="148.57" width="7.43" height="7.43"/><rect x="230.29" y="148.57" width="7.43" height="7.43"/><rect x="22.29" y="156.00" width="7.43" height="7.43"/><rect x="52.00" y="156.00" width="7.43" height="7.43"/><rect x="66.86" y="156.00" width="7.43" height="7.43"/><rect x="81.71" y="156.00" width="14.86" height="7.43"/><rect x="111.43" y="156.00" width="7.43" height="7.43"/><rect x="126.29" y="156.00" width="7.43" height="7.43"/><rect x="141.14" y="156.00" width="7.43" height="7.43"/><rect x="170.86" y="156.00" width="14.86" height="7.43"/><rect x="200.57" y="156.00" width="7.43" height="7.43"/><rect x="222.86" y="156.00" width="14.86" height="7.43"/><rect x="37.14" y="163.43" width="29.71" height="7.43"/><rect x="111.43" y="163.43" width="7.43" height="7.43"/><rect x="126.29" y="163.43" width="7.43" height="7.43"/><rect x="148.57" y="163.43" width="7.43" height="7.43"/><rect x="170.86" y="163.43" width="14.86" height="7.43"/><rect x="222.86" y="163.43" width="14.86" height="7.43"/><rect x="22.29" y="170.86" width="7.43" height="7.43"/><rect x="52.00" y="170.86" width="7.43" height="7.43"/><rect x="66.86" y="170.86" width="14.86" height="7.43"/><rect x="89.14" y="170.86" width="22.29" height="7.43"/><rect x="141.14" y="170.86" width="14.86" height="7.43"/><rect x="170.86" y="170.86" width="37.14" height="7.43"/><rect x="215.43" y="170.86" width="7.43" height="7.43"/><rect x="81.71" y="178.29" width="7.43" height="7.43"/><rect x="96.57" y="178.29" width="7.43" height="7.43"/><rect x="126.29" y="178.29" width="7.43" height="7.43"/><rect x="141.14" y="178.29" width="7.43" height="7.43"/><rect x="170.86" y="178.29" width="7.43" height="7.43"/><rect x="200.57" y="178.29" width="7.43" height="7.43"/><rect x="215.43" y="178.29" width="22.29" height="7.43"/><rect x="22.29" y="185.71" width="52.00" height="7.43"/><rect x="89.14" y="185.71" width="29.71" height="7.43"/><rect x="141.14" y="185.71" width="7.43" height="7.43"/><rect x="170.86" y="185.71" width="7.43" height="7.43"/><rect x="185.71" y="185.71" width="7.43" height="7.43"/><rect x="200.57" y="185.71" width="7.43" height="7.43"/><rect x="222.86" y="185.71" width="7.43" height="7.43"/><rect x="22.29" y="193.14" width="7.43" height="7.43"/><rect x="66.86" y="193.14" width="7.43" height="7.43"/><rect x="81.71" y="193.14" width="7.43" height="7.43"/><rect x="96.57" y="193.14" width="7.43" height="7.43"/><rect x="126.29" y="193.14" width="14.86" height="7.43"/><rect x="156.00" y="193.14" width="7.43" height="7.43"/><rect x="170.86" y="193.14" width="7.43" height="7.43"/><rect x="200.57" y="193.14" width="37.14" height="7.43"/><rect x="22.29" y="200.57" width="7.43" height="7.43"/><rect x="37.14" y="200.57" width="22.29" height="7.43"/><rect x="66.86" y="200.57" width="7.43" height="7.43"/><rect x="96.57" y="200.57" width="7.43" height="7.43"/><rect x="133.71" y="200.57" width="29.71" height="7.43"/><rect x="170.86" y="200.57" width="37.14" height="7.43"/><rect x="230.29" y="200.57" width="7.43" height="7.43"/><rect x="22.29" y="208.00" width="7.43" height="7.43"/><rect x="37.14" y="208.00" width="22.29" height="7.43"/><rect x="66.86" y="208.00" width="7.43" height="7.43"/><rect x="81.71" y="208.00" width="14.86" height="7.43"/><rect x="104.00" y="208.00" width="7.43" height="7.43"/><rect x="118.86" y="208.00" width="7.43" height="7.43"/><rect x="148.57" y="208.00" width="22.29" height="7.43"/><rect x="185.71" y="208.00" width="7.43" height="7.43"/><rect x="200.57" y="208.00" width="29.71" height="7.43"/><rect x="22.29" y="215.43" width="7.43" height="7.43"/><rect x="37.14" y="215.43" width="22.29" height="7.43"/><rect x="66.86" y="215.43" width="7.43" height="7.43"/><rect x="111.43" y="215.43" width="7.43" height="7.43"/><rect x="126.29" y="215.43" width="7.43" height="7.43"/><rect x="141.14" y="215.43" width="7.43" height="7.43"/><rect x="156.00" y="215.43" width="7.43" height="7.43"/><rect x="170.86" y="215.43" width="7.43" height="7.43"/><rect x="200.57" y="215.43" width="22.29" height="7.43"/><rect x="230.29" y="215.43" width="7.43" height="7.43"/><rect x="22.29" y="222.86" width="7.43" height="7.43"/><rect x="66.86" y="222.86" width="7.43" height="7.43"/><rect x="89.14" y="222.86" width="14.86" height="7.43"/><rect x="133.71" y="222.86" width="22.29" height="7.43"/><rect x="163.43" y="222.86" width="14.86" height="7.43"/><rect x="193.14" y="222.86" width="7.43" height="7.43"/><rect x="222.86" y="222.86" width="7.43" height="7.43"/><rect x="22.29" y="230.29" width="52.00" height="7.43"/><rect x="81.71" y="230.29" width="7.43" height="7.43"/><rect x="96.57" y="230.29" width="7.43" height="7.43"/><rect x="111.43" y="230.29" width="14.86" height="7.43"/><rect x="133.71" y="230.29" width="7.43" height="7.43"/><rect x="170.86" y="230.29" width="22.29" height="7.43"/><rect x="208.00" y="230.29" width="7.43" height="7.43"/><rect x="222.86" y="230.29" width="7.43" height="7.43"/></g></svg></div>

### htchen.github.io/LLM2Life

**種子教師指南 · 隨堂手冊 · 課前準備 · 投影片**

### 提問與討論

<!--
留 10 分鐘。常見追問與回應方向在 shared/insights.md。
把網址寫在白板上，或做成 QR code。
-->
