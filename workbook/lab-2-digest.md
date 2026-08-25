# Lab 2：讓電腦每天自己幫你做事（34 分鐘）

## 這一段結束時，你會有

- 一個**你不在電腦前面、它也會自己執行**的功能
- 每天早上自動產生一份新聞摘要，存進你的 repo
- 一次使用錯誤訊息修正流程的經驗

> Lab 1 的工具需要手動開啟。這一段會建立可定時自動執行的工作。

---

## GitHub Actions 是什麼

GitHub Actions 可以依照指定時間，在 GitHub 的雲端環境執行工作。
執行時間與內容寫在 **workflow** 檔案中，檔案位於 `.github/workflows/`。
因此，即使你的電腦關機，排程仍可執行。

---

## 步驟 1：建立 workflow

貼上這段話：

```text
我要一個每天自動執行的功能，請用 GitHub Actions 做：
1. 每天台灣時間早上 6 點自動執行
2. 抓 Google 新聞的 RSS（繁體中文台灣版），取前 5 則標題和連結
3. 存成 digest/YYYY-MM-DD.md 這樣的檔案，然後自動 commit 回這個 repo

要求：
- 一定要能手動按按鈕執行（workflow_dispatch），我今天上課就要看到結果
- workflow 要有 contents: write 權限，不然推不回來
- 不要用任何 npm 套件，用 Node 內建的功能就好

做好之後把檔案 push 上去。
```

> **為什麼要列出這三項要求？**
> 它們分別處理手動測試、寫入權限與套件相依性，是這個題目常見的失敗原因。
> 在需求中先列出限制，可以減少後續修正。

**你應該會看到**：Claude 建立了兩個檔案，大概是
`.github/workflows/digest.yml` 和一個抓資料的腳本，然後 push 上去。

---

## 步驟 2：手動執行 workflow

⚠️ **檔案一定要先 push 上 GitHub，這一步才有東西可看。** 存在自己電腦裡不算。

1. 打開 `https://github.com/你的帳號/my-life-tools`
2. 點上面的 **Actions** 分頁
3. 左邊會出現你的 workflow（大概叫 `Daily Digest`），點它
4. 右邊按 **Run workflow** → 再按一次綠色的 **Run workflow**

**你應該會看到**：一列出現黃色的轉圈圈 🟡，大概 30 秒後變成綠色打勾 ✅。

> 沒有 **Run workflow** 按鈕？→ 少了 `workflow_dispatch`。
> 貼這句：`在 workflow 加上 workflow_dispatch，我要能手動按按鈕執行`

---

## 步驟 3：看成果

回到 repo 首頁（點左上角的 **Code** 分頁），**按 F5 重新整理**。

**你應該會看到**：多了一個 `digest/` 資料夾，裡面有一個今天日期的 `.md` 檔案，
點進去是今天的新聞標題和連結。

這份檔案由 GitHub Actions 產生並寫入 repo。之後每天早上 6 點會再次執行。

---

## 如果執行結果是紅色 ✗

紅色表示 workflow 執行失敗。請使用該次執行的錯誤訊息進行修正：

1. 點那一列紅色的紀錄
2. 點左邊紅色 ✗ 的那個步驟
3. 把**紅色的錯誤訊息整段複製**
4. 貼回 Claude Code：

```text
我的 GitHub Actions 失敗了，錯誤訊息是：
（在這裡貼上）
請修好它，然後 push 上去。
```

5. 回 Actions 分頁再按一次 **Run workflow**

最常見的兩種紅字：

| 錯誤訊息裡有 | 意思 | 貼這句 |
| --- | --- | --- |
| `permission` / `403` | 沒有寫回 repo 的權限 | `workflow 推不回 repo，請加上 permissions: contents: write` |
| `fetch failed` / `timeout` | 抓不到那個網站 | `抓資料失敗了，請加上錯誤處理，抓不到的時候也要正常結束` |

---

## ✅ 檢查點

1. Actions 分頁有一列**綠色打勾** ✅
2. repo 裡有 `digest/今天日期.md`，點進去看得到新聞標題

兩項都有 → 排程工作已完成並成功執行。

---

## 需要追上進度？

直接貼這段，一次做完：

```text
用 GitHub Actions 做一個每天自動執行的工作：抓 Google 新聞繁中 RSS 前 5 則，
存成 digest/YYYY-MM-DD.md 並 commit 回 repo。
一定要有 workflow_dispatch 和 permissions: contents: write，不要用 npm 套件。
做好直接 push 上去。
```

push 完成後跳到上面的**步驟 2**。

---

## 延伸練習

可以把資料來源改成你平常需要追蹤的內容：

```text
把摘要的來源改成（你想追的東西），一樣每天早上產生一份。
```

例如：

- 你追蹤的部落格或新聞網站的 RSS
- 「幫我加上今天台北的天氣預報」
- 「幫我加上今天的美金、日圓匯率」
- 「幫我加上一句每日英文單字和例句」

進階：設定工作完成後**寄送電子郵件**。這需要額外設定，可使用以下提示詞：

```text
我想讓這份摘要每天早上直接寄到我的信箱，需要怎麼做？
一步一步告訴我，我沒有程式背景。
```
