# 講師統一付費：用 Console 額度供學員使用

課前通知信預設要求學員**自己訂閱 Pro 方案**。如果你想改成**由主辦方統一付費**，
這份文件是完整做法。

結論先講：**可行，而且有一個為此設計的功能**——Console 組織的
**Claude Code workspace 支援「每位使用者」的月度花費上限**，這是唯一支援 per-user
spend limit 的 workspace。你可以幫每個學員各自設一個上限，用多少算多少，課後一次收掉。

---

## 三條路線比較

| | Console 額度（推薦） | Team 方案席位 | 學員自付 Pro（目前預設） |
| --- | --- | --- | --- |
| 誰付錢 | 主辦方（預付額度） | 主辦方（每席月費） | 學員自己 |
| 計費方式 | **按實際 token 用量** | 每席固定月費 | 學員的訂閱 |
| 每人花費上限 | ✅ **per-user 月度上限** | 不適用 | 不適用 |
| 桌面版可用 | ⚠️ **要先測**（見下） | ✅ | ✅ |
| 課後收回 | 把學員移出組織，金鑰立刻失效 | 取消席位（注意計費週期） | 學員自己取消 |
| 30 人三小時估算 | **約 US$300–600** | 30 席月費（通常貴得多） | $0（但會流失學員） |
| 課前準備 | 約 1 小時 | 約 30 分鐘 | 只要寄信 |

**一次性的三小時工作坊，Console 額度幾乎總是正確答案**——按用量計費，
不必為了一個下午買 30 個月費席位。

---

## ⚠️ 先做這個測試（10 分鐘，決定整場的路線）

**這一步不能跳過。** 官方文件明確寫著：

> `apiKeyHelper`、`ANTHROPIC_API_KEY`、`ANTHROPIC_AUTH_TOKEN` 適用於 CLI 及包裝 CLI 的介面……
> **Claude Desktop 和 cloud sessions 不會讀取這些環境變數，它們使用 OAuth。**

所以**發 API key 給學員，在桌面版是不會生效的**。

但 Console **帳號登入**（不是 API key）是 Claude Code 官方支援的登入方式之一，
而桌面版本來就走 OAuth。問題是：桌面版的文件只列出 Pro / Max / Team / Enterprise，
**沒有列 Console**——這一點文件沒有明說，我也無法從文件確認。

### 怎麼測

1. 在你的 Console 組織裡邀請**一個測試帳號**（用你自己的第二個信箱）
2. 給它 **Claude Code** 角色
3. 用那個帳號在**桌面版**點 **Code** 分頁，看能不能登入
4. 再用同一個帳號在**終端機**跑 `claude` → `/login` → 選 Console

| 測試結果 | 走哪條路線 |
| --- | --- |
| 桌面版能登入 | 🎉 **完全照現有教材走**，只改課前通知信 |
| 只有終端機能登入 | 教材要改成終端機路線（見下方「如果只有終端機能用」） |

**課前一週就測**，不要等到當天。

---

## 設定步驟（課前做，約 1 小時）

### 1. 建立 Console 組織並預付額度

1. 到 https://platform.claude.com 註冊/登入
2. **Billing** → 加入預付額度（金額見下方估算）

### 2. 邀請學員

**Settings → Members → Invite**，可以貼一整批信箱批次邀請。

角色一定要選 **Claude Code**：

> - **Claude Code** 角色：使用者只能建立 Claude Code 的 API 金鑰
> - **Developer** 角色：可以建立任何種類的金鑰

**選 Claude Code，不要選 Developer。** 這是最小權限——學員只能用 Claude Code，
不能拿你的額度去跑別的東西。

### 3. 學員第一次登入後，設定每人上限 ⭐

**Claude Code workspace 是自動出現的**——組織裡第一個學員用 Console 帳號登入
Claude Code 時，Anthropic 會自動建立它，之後每個登入的人都會被加進去。

它的特別之處（官方文件原文）：

> - Claude Code 在登入時會在這個 workspace 為每位使用者鑄造一把個人 API 金鑰。
> - 如果金鑰的擁有者被移出 workspace 或組織，該金鑰會停止運作。
> - Claude Code 的用量有獨立的速率限制，管理員可以在 Settings > Workspaces 限制它佔組織額度的比例。
> - **它是唯一支援 per-user 月度花費上限的 workspace。**

到 **Settings → Workspaces → Claude Code → Spend limits**，設定**每位使用者的月度上限**。

> ⚠️ **這一步要等到有人登入過之後才做得到**，因為 workspace 是登入時才被建立的。
> 建議流程：課前先讓你的測試帳號登入一次 → workspace 出現 → 先把上限設好 →
> 再邀請全班。這樣不會有學員在沒有上限的狀態下開始用。

### 4. 順手做的兩件事

- **Rate limits 分頁**：限制 Claude Code 佔組織速率上限的比例
- 記下 **Usage & Cost** 頁面，課中可以即時看花費

### 5. 課後收掉

**Settings → Members** → 移除學員。他們的 Claude Code 金鑰**立刻失效**
（這是 Claude Code workspace 的特性，一般 workspace 的金鑰不會這樣）。

剩下的額度留在組織裡，下次開課還能用。

---

## 花費估算

以一位學員三小時、約 50 次對話、做三個單檔 HTML 工具來估：

| | Claude Sonnet 5 | Claude Opus 5 |
| --- | --- | --- |
| 定價（每百萬 token） | $3 輸入 / $15 輸出 | $5 輸入 / $25 輸出 |
| 每位學員估算 | **約 $2–4** | **約 $5–7** |
| **建議上限（含 2–3 倍餘裕）** | **$10 / 人** | **$20 / 人** |
| 30 人總預算 | **$300** | **$600** |

**估算怎麼來的：** 約 2.2M 輸入 token（其中八成以上是 cache read，只算 0.1 倍價格）
＋ 約 120K 輸出 token。Claude Code 大量使用 prompt caching，所以輸入的實際成本
遠低於帳面上的 token 數。

**這堂課用 Sonnet 就夠了**——三個 Lab 都是單檔 HTML 加一個 workflow，
不需要 Opus 的深度推理，而且省一半以上。可以在 workshop 開始時請學員選 Sonnet。

> 💰 **Sonnet 5 目前有introductory定價（$2/$10），到 2026-08-31 為止。**
> 如果你的工作坊在那之後，用上表的標準價估算。

**三個會讓實際花費超出估算的情況：**

1. **有人卡住，反覆重試同一件事** —— 這是 per-user 上限存在的理由
2. **有人把 Lab 2 的摘要改成很大的資料來源** —— 「想再多做一點」的學生會這樣
3. **課後繼續用** —— 上限是**月度**的，學員回家繼續做會繼續算你的錢。
   如果不希望這樣，課後就把人移除；如果希望鼓勵他們繼續，就留著並把上限設高一點
   （這其實是很好的教學投資）

**先跑一次試算：** 課前找一個人（或你自己）完整走完三個 Lab，
看 Usage & Cost 實際跳多少，再乘上人數。這比任何估算都準。

---

## ⚠️ 速率限制：30 人同時開工的風險

**這是最容易被忽略、而且會當場毀掉工作坊的一件事。**

新開的 Console 組織速率上限（rate limits）通常在較低的等級，會隨著付費紀錄提升。
30 個學員在同一分鐘一起送出提示詞，很可能撞到**組織層級**的速率上限——
症狀是全班同時開始出現 429 錯誤。

**課前一定要做：**

1. 預付足夠的額度（額度會影響你的 tier）
2. **開課前先寄信給 Anthropic support 或你的業務窗口**，說明
   「某月某日會有 30 位使用者同時使用 Claude Code 約三小時」，請他們確認你的
   速率上限夠用。這封信要提早寄，不要課前一天才寄。
3. 課堂上把 Lab 開始時間錯開幾十秒（例如按座位分兩批放人動手），
   不要全班同時按 Enter

---

## 如果只有終端機能用（測試結果是桌面版不行）

教材要改。**這不是小改動**——現有設計刻意避開終端機，因為對非程式背景的學員
那是最大的心理門檻。

要改的地方：

| 檔案 | 要改什麼 |
| --- | --- |
| `pre-workshop-email.md` | 刪掉「自己訂閱 Pro」整段，改成「你會收到一封 Console 邀請信，請接受」。安裝改成 CLI（`curl -fsSL https://claude.ai/install.sh \| bash`，Windows 用 PowerShell 版） |
| `lab-0-setup.md` | 步驟 1 改成：開終端機 → `claude` → `/login` → 選 **Console** |
| `slides/deck.md` | 「不會用到終端機」那張要拿掉（第 5 頁），Lab 0 的投影片要改 |
| `site/index.html` | 「開始之前」整段改寫 |
| `timeline.md` | **Lab 0 從 20 分鐘拉到 30 分鐘**，時間從別處挪 |

**還要加一段「終端機求生指南」**：怎麼開終端機、`cd` 是什麼、貼上為什麼不能用
Ctrl+V（macOS 用 Cmd+V）。非程式背景的學員在這裡卡住的比例會明顯上升。

**折衷方案（建議）：** 主要路線仍用桌面版 + 學員自己的 Pro 方案，
**Console 額度只給「沒有付費方案」的那 10–20% 學員當備案**，走終端機。
這樣多數人走順路，少數人有救援，而且你只需要為少數人準備額度。

---

## 另一條路：Claude for Education（值得問，但要提早）

Anthropic 有 **Claude for Education** 機構方案，**包含 Claude Code**。
合作學校的學生用 `.edu` 信箱登入 claude.ai 就會自動升級，**對學生免費**
（由學校與 Anthropic 談定）。

你的信箱是 `cs.nthu.edu.tw`，所以值得做兩件事：

1. 問學校的計算機中心/圖書館，清華有沒有既有的 Anthropic 機構協議
2. 沒有的話，透過 https://www.anthropic.com/contact-sales 詢問 Claude for Education

**但這條路的前置時間是數週到數月**，救不了下個月的工作坊。
它是「把這堂課變成常設課程」時該走的路，不是一次性活動的解法。

參考：
[Claude for Education（Stanford 的說明頁）](https://uit.stanford.edu/service/claude)、
[Anthropic × CodePath 合作案](https://www.anthropic.com/news/anthropic-codepath-partnership)

---

## 講師檢查表

課前兩週：

- [ ] 建 Console 組織、加預付額度
- [ ] **用測試帳號驗證桌面版能不能用 Console 登入**（決定路線）
- [ ] 寄信給 Anthropic 確認速率上限夠 30 人同時使用
- [ ] 問學校有沒有 Claude for Education 協議（長期方案）

課前一週：

- [ ] 讓測試帳號登入一次 Claude Code → Claude Code workspace 出現
- [ ] **先設好 per-user 月度花費上限**，再邀請全班
- [ ] 設 Claude Code 的 rate limit 佔比
- [ ] 自己完整跑一遍三個 Lab，看實際花費，校正預算
- [ ] 批次邀請學員（角色選 **Claude Code**，不要選 Developer）
- [ ] 改好 `pre-workshop-email.md` 並寄出

當天：

- [ ] 開著 Usage & Cost 頁面，隨時看花費
- [ ] 錯開各 Lab 的開始時間，避免同時撞速率上限

課後：

- [ ] 決定要不要讓學員繼續用（月度上限會繼續計費）
- [ ] 不繼續的話：Settings → Members 移除學員，金鑰立刻失效
