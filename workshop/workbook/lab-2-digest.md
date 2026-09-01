# 參考案例：讓電腦每天自動執行工作

> 這份案例已移出課堂主線，供沒有專題題目、想練習 GitHub Actions，或課後延伸使用。

## 這一段結束時，你會有

- 一個在 GitHub 雲端依排程執行的功能
- 每天早上自動產生一份新聞摘要，存進你的 repo
- 一次「取得錯誤訊息 → 貼回去 → 修改後重新測試」的經驗

> Lab 1 的東西要你自己雙擊打開才會動。
> 這一段建立的 workflow 會在 GitHub 雲端依排程執行，
> 全程可在瀏覽器完成。

---

## 先講一件事：GitHub Actions 是什麼

GitHub Actions 可以依照設定，在雲端執行指定工作。

描述執行時間與步驟的設定檔稱為 **workflow**，放在 `.github/workflows/` 裡。
執行工作的是 GitHub 的雲端環境，因此個人筆電不需要保持開機。

> GitHub Actions 只依照 repo 中的 workflow 執行，不受檔案建立方式影響。
> 無論是手動貼上或由工具寫入，GitHub 都會使用相同方式處理檔案。

---

## 步驟 1：跟 Claude 要兩個檔案

回 claude.ai，開一個新的聊天視窗（這次跟 Lab 1 無關，開新的沒關係），貼上：

```text
我要一個每天自動執行的功能，請用 GitHub Actions 做：
1. 每天台灣時間早上 6 點自動執行
2. 抓 Google 新聞的 RSS（繁體中文台灣版），取前 5 則標題和連結
3. 存成 digest/YYYY-MM-DD.md 這樣的檔案，然後自動 commit 回這個 repo

要求：
- 一定要能手動按按鈕執行（workflow_dispatch），我今天上課就要看到結果
- workflow 要有 contents: write 權限，不然推不回來
- 不要用任何 npm 套件，用 Node 內建的功能就好

我會用複製貼上的方式把檔案放到 GitHub 網頁上，不是用電腦本機操作。
請分成兩個檔案：
一個是 .github/workflows/digest.yml
一個是 scripts/fetch-digest.mjs
請分別給我這兩個檔案完整、可以直接複製貼上使用的內容。
```

> **為什麼要寫出這些限制？**
> 「要求」中的三點對應這個題目的三個常見問題。
> 提示詞的重點是把已知限制與預期結果寫清楚。

---

## 步驟 2：把兩個檔案貼到 GitHub

回到你的 repo，**重複兩次**「Add file → Create new file」：

**第一個檔案：**

1. **Add file → Create new file**
2. 檔名打 `.github/workflows/digest.yml`（打斜線會自動建資料夾）
3. 把 Claude 給的 `digest.yml` 內容整段貼進編輯框
4. **Commit changes**

**第二個檔案：**

1. **Add file → Create new file**
2. 檔名打 `scripts/fetch-digest.mjs`
3. 把 Claude 給的 `fetch-digest.mjs` 內容整段貼進編輯框
4. **Commit changes**

---

## 步驟 3：按下按鈕，查看執行狀態

1. 打開你的 repo → 點上面的 **Actions** 分頁
2. 左邊會出現你的 workflow（大概叫 `Daily Digest`），點它
3. 右邊按 **Run workflow** → 再按一次綠色的 **Run workflow**

**你應該會看到**：一列出現黃色的轉圈圈 🟡，大概 30 秒後變成綠色打勾 ✅。

> 沒有 **Run workflow** 按鈕？→ 少了 `workflow_dispatch`。
> 回聊天視窗貼：「在 workflow 加上 workflow_dispatch，我要能手動按按鈕執行，
> 請給我完整的 digest.yml」，重新貼一次覆蓋掉第一個檔案（見下方「怎麼覆蓋掉」）。

---

## 步驟 4：看成果

回到 repo 首頁，**按 F5 重新整理**。

**你應該會看到**：多了一個 `digest/` 資料夾，裡面有一個今天日期的 `.md` 檔案，
點進去是今天的新聞標題和連結。

**這份檔案是 workflow 在 GitHub 雲端執行後新增的。**

從現在開始，每天早上 6 點它都會再做一次——**跟你今天用什麼工具建立它完全無關**。

---

## 如果顯示紅色 ✗

1. 點那一列紅色的紀錄
2. 點左邊紅色 ✗ 的那個步驟
3. 把**紅色的錯誤訊息整段複製**
4. 回聊天視窗貼：

```text
我的 GitHub Actions 失敗了，錯誤訊息是：
（在這裡貼上）
請告訴我哪個檔案要改，並給我修好之後的完整內容。
```

5. 依照它的回答，回 GitHub 該檔案的頁面，點右上角的**鉛筆圖示**編輯，
   全選內容換成新的，**Commit changes**
6. 回 Actions 分頁再按一次 **Run workflow**

兩種常見錯誤：

| 錯誤訊息裡有 | 意思 |
| --- | --- |
| `permission` / `403` | 沒有寫回 repo 的權限，workflow 少了 `permissions: contents: write` |
| `fetch failed` / `timeout` | 抓不到那個網站，需要加上錯誤處理 |

---

## 怎麼「覆蓋掉」GitHub 上已經存在的檔案

跟 Lab 1 存本機檔案的邏輯一樣，只是這次直接在 GitHub 網頁上做：

1. 打開 repo，找到那個檔案（例如 `.github/workflows/digest.yml`）
2. 點右上角的**鉛筆圖示（Edit this file）**
3. 在編輯框裡**全選**（`Ctrl+A` / `Cmd+A`），刪除
4. 貼上 Claude 給你的新版本
5. 往下捲，**Commit changes**

---

## ✅ Lab 2 檢查點

1. Actions 分頁有一列**綠色打勾** ✅
2. repo 裡有 `digest/今天日期.md`，點進去看得到新聞標題

兩項都有，即完成一個在 GitHub 雲端執行的排程工作，而且全程使用瀏覽器操作。

---

## 需要追上進度？

依序做完這兩步，然後跳到步驟 3：

1. 用步驟 1 的提示詞跟 Claude 要兩個檔案
2. 依照步驟 2 把兩個檔案貼到 GitHub

---

## 延伸練習

可把摘要改成自己需要定期取得的內容：

```text
把摘要的來源改成（你想追的東西），一樣每天早上產生一份，
一樣分成 workflow 和腳本兩個檔案給我完整內容。
```

例如：

- 你追蹤的部落格或新聞網站的 RSS
- 「幫我加上今天台北的天氣預報」
- 「幫我加上今天的美金、日圓匯率」
