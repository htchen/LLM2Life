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
  section.dark h3 { color: #b5ada3; }
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

<div style="display:flex; justify-content:center; gap:44px; margin-top:34px; font-size:24px; color:#b5ada3; line-height:1.45">
<div><b style="color:#f4f1ec">2012</b><br>深度學習成為主流</div>
<div><b style="color:#f4f1ec">2017</b><br>Transformer</div>
<div><b style="color:#f4f1ec">2022</b><br>ChatGPT</div>
<div><b style="color:#ff9d7a">今</b><br>不會寫程式，也能開發軟體</div>
</div>

<!--
講稿全文在 script.md 第 1 條，約兩分鐘。這一頁停留到講完「先讓我從正向的觀點出發」。
不自我介紹——故事本身就是介紹。四個年份是講到歷史那一段時可以指的錨點。
-->

---

<!-- _class: lead dark -->

<div style="display:flex; align-items:center; justify-content:center; gap:34px"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="QR code：https://htchen.github.io/LLM2Life/examples/lunyu-mentor.html"><rect width="200" height="200" rx="10" fill="#ffffff"/><g fill="#14110e"><rect x="10.81" y="10.81" width="37.84" height="5.41"/><rect x="54.05" y="10.81" width="5.41" height="5.41"/><rect x="64.86" y="10.81" width="10.81" height="5.41"/><rect x="91.89" y="10.81" width="10.81" height="5.41"/><rect x="108.11" y="10.81" width="10.81" height="5.41"/><rect x="124.32" y="10.81" width="5.41" height="5.41"/><rect x="135.14" y="10.81" width="5.41" height="5.41"/><rect x="151.35" y="10.81" width="37.84" height="5.41"/><rect x="10.81" y="16.22" width="5.41" height="5.41"/><rect x="43.24" y="16.22" width="5.41" height="5.41"/><rect x="54.05" y="16.22" width="5.41" height="5.41"/><rect x="75.68" y="16.22" width="5.41" height="5.41"/><rect x="86.49" y="16.22" width="5.41" height="5.41"/><rect x="102.70" y="16.22" width="10.81" height="5.41"/><rect x="118.92" y="16.22" width="5.41" height="5.41"/><rect x="129.73" y="16.22" width="16.22" height="5.41"/><rect x="151.35" y="16.22" width="5.41" height="5.41"/><rect x="183.78" y="16.22" width="5.41" height="5.41"/><rect x="10.81" y="21.62" width="5.41" height="5.41"/><rect x="21.62" y="21.62" width="16.22" height="5.41"/><rect x="43.24" y="21.62" width="5.41" height="5.41"/><rect x="64.86" y="21.62" width="21.62" height="5.41"/><rect x="91.89" y="21.62" width="10.81" height="5.41"/><rect x="140.54" y="21.62" width="5.41" height="5.41"/><rect x="151.35" y="21.62" width="5.41" height="5.41"/><rect x="162.16" y="21.62" width="16.22" height="5.41"/><rect x="183.78" y="21.62" width="5.41" height="5.41"/><rect x="10.81" y="27.03" width="5.41" height="5.41"/><rect x="21.62" y="27.03" width="16.22" height="5.41"/><rect x="43.24" y="27.03" width="5.41" height="5.41"/><rect x="54.05" y="27.03" width="10.81" height="5.41"/><rect x="75.68" y="27.03" width="5.41" height="5.41"/><rect x="91.89" y="27.03" width="5.41" height="5.41"/><rect x="102.70" y="27.03" width="5.41" height="5.41"/><rect x="118.92" y="27.03" width="5.41" height="5.41"/><rect x="129.73" y="27.03" width="5.41" height="5.41"/><rect x="151.35" y="27.03" width="5.41" height="5.41"/><rect x="162.16" y="27.03" width="16.22" height="5.41"/><rect x="183.78" y="27.03" width="5.41" height="5.41"/><rect x="10.81" y="32.43" width="5.41" height="5.41"/><rect x="21.62" y="32.43" width="16.22" height="5.41"/><rect x="43.24" y="32.43" width="5.41" height="5.41"/><rect x="59.46" y="32.43" width="10.81" height="5.41"/><rect x="81.08" y="32.43" width="10.81" height="5.41"/><rect x="113.51" y="32.43" width="5.41" height="5.41"/><rect x="124.32" y="32.43" width="5.41" height="5.41"/><rect x="140.54" y="32.43" width="5.41" height="5.41"/><rect x="151.35" y="32.43" width="5.41" height="5.41"/><rect x="162.16" y="32.43" width="16.22" height="5.41"/><rect x="183.78" y="32.43" width="5.41" height="5.41"/><rect x="10.81" y="37.84" width="5.41" height="5.41"/><rect x="43.24" y="37.84" width="5.41" height="5.41"/><rect x="64.86" y="37.84" width="27.03" height="5.41"/><rect x="97.30" y="37.84" width="21.62" height="5.41"/><rect x="124.32" y="37.84" width="5.41" height="5.41"/><rect x="151.35" y="37.84" width="5.41" height="5.41"/><rect x="183.78" y="37.84" width="5.41" height="5.41"/><rect x="10.81" y="43.24" width="37.84" height="5.41"/><rect x="54.05" y="43.24" width="5.41" height="5.41"/><rect x="64.86" y="43.24" width="5.41" height="5.41"/><rect x="75.68" y="43.24" width="5.41" height="5.41"/><rect x="86.49" y="43.24" width="5.41" height="5.41"/><rect x="97.30" y="43.24" width="5.41" height="5.41"/><rect x="108.11" y="43.24" width="5.41" height="5.41"/><rect x="118.92" y="43.24" width="5.41" height="5.41"/><rect x="129.73" y="43.24" width="5.41" height="5.41"/><rect x="140.54" y="43.24" width="5.41" height="5.41"/><rect x="151.35" y="43.24" width="37.84" height="5.41"/><rect x="54.05" y="48.65" width="5.41" height="5.41"/><rect x="64.86" y="48.65" width="16.22" height="5.41"/><rect x="86.49" y="48.65" width="5.41" height="5.41"/><rect x="97.30" y="48.65" width="10.81" height="5.41"/><rect x="113.51" y="48.65" width="5.41" height="5.41"/><rect x="135.14" y="48.65" width="10.81" height="5.41"/><rect x="10.81" y="54.05" width="5.41" height="5.41"/><rect x="21.62" y="54.05" width="10.81" height="5.41"/><rect x="37.84" y="54.05" width="16.22" height="5.41"/><rect x="59.46" y="54.05" width="5.41" height="5.41"/><rect x="70.27" y="54.05" width="5.41" height="5.41"/><rect x="86.49" y="54.05" width="10.81" height="5.41"/><rect x="102.70" y="54.05" width="10.81" height="5.41"/><rect x="124.32" y="54.05" width="16.22" height="5.41"/><rect x="151.35" y="54.05" width="5.41" height="5.41"/><rect x="167.57" y="54.05" width="5.41" height="5.41"/><rect x="178.38" y="54.05" width="10.81" height="5.41"/><rect x="10.81" y="59.46" width="5.41" height="5.41"/><rect x="21.62" y="59.46" width="5.41" height="5.41"/><rect x="32.43" y="59.46" width="10.81" height="5.41"/><rect x="48.65" y="59.46" width="5.41" height="5.41"/><rect x="59.46" y="59.46" width="5.41" height="5.41"/><rect x="81.08" y="59.46" width="5.41" height="5.41"/><rect x="102.70" y="59.46" width="21.62" height="5.41"/><rect x="135.14" y="59.46" width="5.41" height="5.41"/><rect x="151.35" y="59.46" width="10.81" height="5.41"/><rect x="167.57" y="59.46" width="10.81" height="5.41"/><rect x="183.78" y="59.46" width="5.41" height="5.41"/><rect x="10.81" y="64.86" width="16.22" height="5.41"/><rect x="37.84" y="64.86" width="10.81" height="5.41"/><rect x="64.86" y="64.86" width="5.41" height="5.41"/><rect x="75.68" y="64.86" width="10.81" height="5.41"/><rect x="97.30" y="64.86" width="5.41" height="5.41"/><rect x="108.11" y="64.86" width="5.41" height="5.41"/><rect x="124.32" y="64.86" width="16.22" height="5.41"/><rect x="151.35" y="64.86" width="21.62" height="5.41"/><rect x="183.78" y="64.86" width="5.41" height="5.41"/><rect x="16.22" y="70.27" width="27.03" height="5.41"/><rect x="48.65" y="70.27" width="5.41" height="5.41"/><rect x="59.46" y="70.27" width="5.41" height="5.41"/><rect x="75.68" y="70.27" width="5.41" height="5.41"/><rect x="108.11" y="70.27" width="16.22" height="5.41"/><rect x="129.73" y="70.27" width="5.41" height="5.41"/><rect x="145.95" y="70.27" width="5.41" height="5.41"/><rect x="156.76" y="70.27" width="5.41" height="5.41"/><rect x="167.57" y="70.27" width="5.41" height="5.41"/><rect x="27.03" y="75.68" width="10.81" height="5.41"/><rect x="43.24" y="75.68" width="5.41" height="5.41"/><rect x="54.05" y="75.68" width="10.81" height="5.41"/><rect x="70.27" y="75.68" width="10.81" height="5.41"/><rect x="86.49" y="75.68" width="5.41" height="5.41"/><rect x="102.70" y="75.68" width="5.41" height="5.41"/><rect x="129.73" y="75.68" width="21.62" height="5.41"/><rect x="162.16" y="75.68" width="10.81" height="5.41"/><rect x="178.38" y="75.68" width="5.41" height="5.41"/><rect x="27.03" y="81.08" width="5.41" height="5.41"/><rect x="54.05" y="81.08" width="10.81" height="5.41"/><rect x="75.68" y="81.08" width="5.41" height="5.41"/><rect x="86.49" y="81.08" width="16.22" height="5.41"/><rect x="108.11" y="81.08" width="10.81" height="5.41"/><rect x="124.32" y="81.08" width="10.81" height="5.41"/><rect x="140.54" y="81.08" width="5.41" height="5.41"/><rect x="156.76" y="81.08" width="5.41" height="5.41"/><rect x="172.97" y="81.08" width="10.81" height="5.41"/><rect x="10.81" y="86.49" width="5.41" height="5.41"/><rect x="27.03" y="86.49" width="5.41" height="5.41"/><rect x="43.24" y="86.49" width="5.41" height="5.41"/><rect x="59.46" y="86.49" width="5.41" height="5.41"/><rect x="75.68" y="86.49" width="16.22" height="5.41"/><rect x="113.51" y="86.49" width="16.22" height="5.41"/><rect x="140.54" y="86.49" width="5.41" height="5.41"/><rect x="151.35" y="86.49" width="27.03" height="5.41"/><rect x="10.81" y="91.89" width="5.41" height="5.41"/><rect x="37.84" y="91.89" width="5.41" height="5.41"/><rect x="48.65" y="91.89" width="5.41" height="5.41"/><rect x="70.27" y="91.89" width="5.41" height="5.41"/><rect x="86.49" y="91.89" width="16.22" height="5.41"/><rect x="118.92" y="91.89" width="10.81" height="5.41"/><rect x="135.14" y="91.89" width="5.41" height="5.41"/><rect x="145.95" y="91.89" width="10.81" height="5.41"/><rect x="162.16" y="91.89" width="16.22" height="5.41"/><rect x="16.22" y="97.30" width="10.81" height="5.41"/><rect x="43.24" y="97.30" width="5.41" height="5.41"/><rect x="54.05" y="97.30" width="21.62" height="5.41"/><rect x="81.08" y="97.30" width="16.22" height="5.41"/><rect x="108.11" y="97.30" width="5.41" height="5.41"/><rect x="124.32" y="97.30" width="10.81" height="5.41"/><rect x="145.95" y="97.30" width="10.81" height="5.41"/><rect x="162.16" y="97.30" width="16.22" height="5.41"/><rect x="10.81" y="102.70" width="5.41" height="5.41"/><rect x="21.62" y="102.70" width="21.62" height="5.41"/><rect x="54.05" y="102.70" width="16.22" height="5.41"/><rect x="81.08" y="102.70" width="10.81" height="5.41"/><rect x="118.92" y="102.70" width="37.84" height="5.41"/><rect x="162.16" y="102.70" width="10.81" height="5.41"/><rect x="178.38" y="102.70" width="10.81" height="5.41"/><rect x="10.81" y="108.11" width="10.81" height="5.41"/><rect x="27.03" y="108.11" width="27.03" height="5.41"/><rect x="59.46" y="108.11" width="10.81" height="5.41"/><rect x="81.08" y="108.11" width="16.22" height="5.41"/><rect x="102.70" y="108.11" width="10.81" height="5.41"/><rect x="124.32" y="108.11" width="5.41" height="5.41"/><rect x="145.95" y="108.11" width="21.62" height="5.41"/><rect x="172.97" y="108.11" width="10.81" height="5.41"/><rect x="10.81" y="113.51" width="10.81" height="5.41"/><rect x="32.43" y="113.51" width="5.41" height="5.41"/><rect x="48.65" y="113.51" width="16.22" height="5.41"/><rect x="70.27" y="113.51" width="16.22" height="5.41"/><rect x="97.30" y="113.51" width="10.81" height="5.41"/><rect x="118.92" y="113.51" width="5.41" height="5.41"/><rect x="129.73" y="113.51" width="5.41" height="5.41"/><rect x="151.35" y="113.51" width="5.41" height="5.41"/><rect x="162.16" y="113.51" width="5.41" height="5.41"/><rect x="10.81" y="118.92" width="10.81" height="5.41"/><rect x="27.03" y="118.92" width="5.41" height="5.41"/><rect x="43.24" y="118.92" width="5.41" height="5.41"/><rect x="54.05" y="118.92" width="21.62" height="5.41"/><rect x="86.49" y="118.92" width="21.62" height="5.41"/><rect x="124.32" y="118.92" width="5.41" height="5.41"/><rect x="167.57" y="118.92" width="10.81" height="5.41"/><rect x="10.81" y="124.32" width="21.62" height="5.41"/><rect x="37.84" y="124.32" width="5.41" height="5.41"/><rect x="48.65" y="124.32" width="5.41" height="5.41"/><rect x="64.86" y="124.32" width="5.41" height="5.41"/><rect x="75.68" y="124.32" width="10.81" height="5.41"/><rect x="97.30" y="124.32" width="48.65" height="5.41"/><rect x="151.35" y="124.32" width="5.41" height="5.41"/><rect x="167.57" y="124.32" width="10.81" height="5.41"/><rect x="183.78" y="124.32" width="5.41" height="5.41"/><rect x="32.43" y="129.73" width="32.43" height="5.41"/><rect x="75.68" y="129.73" width="5.41" height="5.41"/><rect x="86.49" y="129.73" width="5.41" height="5.41"/><rect x="108.11" y="129.73" width="5.41" height="5.41"/><rect x="124.32" y="129.73" width="21.62" height="5.41"/><rect x="156.76" y="129.73" width="5.41" height="5.41"/><rect x="178.38" y="129.73" width="10.81" height="5.41"/><rect x="16.22" y="135.14" width="5.41" height="5.41"/><rect x="27.03" y="135.14" width="16.22" height="5.41"/><rect x="54.05" y="135.14" width="5.41" height="5.41"/><rect x="64.86" y="135.14" width="10.81" height="5.41"/><rect x="81.08" y="135.14" width="5.41" height="5.41"/><rect x="108.11" y="135.14" width="16.22" height="5.41"/><rect x="135.14" y="135.14" width="5.41" height="5.41"/><rect x="145.95" y="135.14" width="5.41" height="5.41"/><rect x="162.16" y="135.14" width="10.81" height="5.41"/><rect x="178.38" y="135.14" width="5.41" height="5.41"/><rect x="10.81" y="140.54" width="5.41" height="5.41"/><rect x="21.62" y="140.54" width="10.81" height="5.41"/><rect x="43.24" y="140.54" width="5.41" height="5.41"/><rect x="54.05" y="140.54" width="10.81" height="5.41"/><rect x="70.27" y="140.54" width="10.81" height="5.41"/><rect x="86.49" y="140.54" width="10.81" height="5.41"/><rect x="102.70" y="140.54" width="16.22" height="5.41"/><rect x="129.73" y="140.54" width="5.41" height="5.41"/><rect x="140.54" y="140.54" width="32.43" height="5.41"/><rect x="178.38" y="140.54" width="10.81" height="5.41"/><rect x="54.05" y="145.95" width="5.41" height="5.41"/><rect x="70.27" y="145.95" width="16.22" height="5.41"/><rect x="97.30" y="145.95" width="5.41" height="5.41"/><rect x="113.51" y="145.95" width="5.41" height="5.41"/><rect x="135.14" y="145.95" width="10.81" height="5.41"/><rect x="162.16" y="145.95" width="10.81" height="5.41"/><rect x="10.81" y="151.35" width="37.84" height="5.41"/><rect x="54.05" y="151.35" width="16.22" height="5.41"/><rect x="75.68" y="151.35" width="5.41" height="5.41"/><rect x="86.49" y="151.35" width="5.41" height="5.41"/><rect x="97.30" y="151.35" width="21.62" height="5.41"/><rect x="135.14" y="151.35" width="10.81" height="5.41"/><rect x="151.35" y="151.35" width="5.41" height="5.41"/><rect x="162.16" y="151.35" width="5.41" height="5.41"/><rect x="10.81" y="156.76" width="5.41" height="5.41"/><rect x="43.24" y="156.76" width="5.41" height="5.41"/><rect x="54.05" y="156.76" width="5.41" height="5.41"/><rect x="75.68" y="156.76" width="5.41" height="5.41"/><rect x="86.49" y="156.76" width="16.22" height="5.41"/><rect x="108.11" y="156.76" width="5.41" height="5.41"/><rect x="118.92" y="156.76" width="27.03" height="5.41"/><rect x="162.16" y="156.76" width="21.62" height="5.41"/><rect x="10.81" y="162.16" width="5.41" height="5.41"/><rect x="21.62" y="162.16" width="16.22" height="5.41"/><rect x="43.24" y="162.16" width="5.41" height="5.41"/><rect x="70.27" y="162.16" width="5.41" height="5.41"/><rect x="86.49" y="162.16" width="16.22" height="5.41"/><rect x="108.11" y="162.16" width="5.41" height="5.41"/><rect x="118.92" y="162.16" width="10.81" height="5.41"/><rect x="135.14" y="162.16" width="32.43" height="5.41"/><rect x="172.97" y="162.16" width="5.41" height="5.41"/><rect x="10.81" y="167.57" width="5.41" height="5.41"/><rect x="21.62" y="167.57" width="16.22" height="5.41"/><rect x="43.24" y="167.57" width="5.41" height="5.41"/><rect x="54.05" y="167.57" width="16.22" height="5.41"/><rect x="75.68" y="167.57" width="5.41" height="5.41"/><rect x="86.49" y="167.57" width="10.81" height="5.41"/><rect x="102.70" y="167.57" width="5.41" height="5.41"/><rect x="118.92" y="167.57" width="16.22" height="5.41"/><rect x="156.76" y="167.57" width="5.41" height="5.41"/><rect x="172.97" y="167.57" width="5.41" height="5.41"/><rect x="183.78" y="167.57" width="5.41" height="5.41"/><rect x="10.81" y="172.97" width="5.41" height="5.41"/><rect x="21.62" y="172.97" width="16.22" height="5.41"/><rect x="43.24" y="172.97" width="5.41" height="5.41"/><rect x="54.05" y="172.97" width="5.41" height="5.41"/><rect x="64.86" y="172.97" width="5.41" height="5.41"/><rect x="81.08" y="172.97" width="5.41" height="5.41"/><rect x="91.89" y="172.97" width="5.41" height="5.41"/><rect x="102.70" y="172.97" width="5.41" height="5.41"/><rect x="118.92" y="172.97" width="10.81" height="5.41"/><rect x="135.14" y="172.97" width="27.03" height="5.41"/><rect x="172.97" y="172.97" width="5.41" height="5.41"/><rect x="10.81" y="178.38" width="5.41" height="5.41"/><rect x="43.24" y="178.38" width="5.41" height="5.41"/><rect x="59.46" y="178.38" width="5.41" height="5.41"/><rect x="75.68" y="178.38" width="10.81" height="5.41"/><rect x="102.70" y="178.38" width="10.81" height="5.41"/><rect x="129.73" y="178.38" width="5.41" height="5.41"/><rect x="140.54" y="178.38" width="27.03" height="5.41"/><rect x="183.78" y="178.38" width="5.41" height="5.41"/><rect x="10.81" y="183.78" width="37.84" height="5.41"/><rect x="54.05" y="183.78" width="10.81" height="5.41"/><rect x="75.68" y="183.78" width="5.41" height="5.41"/><rect x="91.89" y="183.78" width="10.81" height="5.41"/><rect x="108.11" y="183.78" width="5.41" height="5.41"/><rect x="118.92" y="183.78" width="10.81" height="5.41"/><rect x="135.14" y="183.78" width="5.41" height="5.41"/><rect x="162.16" y="183.78" width="5.41" height="5.41"/><rect x="172.97" y="183.78" width="5.41" height="5.41"/></g></svg><div style="text-align:left; font-size:30px; line-height:1.5"><b style="color:#ff9d7a">請先掃描，用一分鐘</b><br>說一件你正在煩惱的事<br><span style="font-size:22px; color:#b5ada3">htchen.github.io/LLM2Life/examples/lunyu-mentor.html</span></div></div>

### 本場次為說明與示範；實作課程為三小時，由與會教師返校後自行開設

<!--
接在「看看如何不會寫程式就能創作軟體」之後：「先請大家掃這個，用一分鐘。」然後閉嘴，等。
一分鐘後：你剛剛用的東西是三小時做出來的；學生打開就能用，不需要帳號——你們剛剛自己驗證過了。
網路不通就跳過，不等、不道歉。
-->

---

<!-- _class: big -->

# 示範一<br>從需求描述到可操作的網頁

### 稍後另有一個英文單字遊戲的例子<br>不倚賴任何學科的專門構造

<!--
這一句是講給非數理科教師聽的。接下來十分鐘全是和角公式，
若不先說清楚後面還有一個與學科構造無關的例子，他們會在此判定這場與自己無關。
-->

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
中間三行是幾何構造，投影片 24 會回頭指這裡——那是教師提供的部分。
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

## 剛才的示範包含三項工作

| | 工作內容 | 剛才由誰完成 | 生成工具帶來的改變 |
| --- | --- | --- | --- |
| 一 | **確認需求** | 我寫的提示詞，含幾何構造 | 成本不變 |
| 二 | 轉為機器可執行的形式 | 工具產生 | **部分成本下降** |
| 三 | **確認結果正確** | 我核對 0.520 + 0.346 = 0.866 | 成本不變 |

> 僅第二項成本下降，第一項與第三項在整體流程中所佔比例因此提高。

<!--
回頭指第 4、5 頁：剛才那幾分鐘，這三件事都發生過，只有中間那一件不是我做的。
不要給下降幅度的數字。被追問時的回應：幅度依題目而定，
本場次的主張是三項的相對比例改變，不是任何特定百分比。
-->

---

<!-- _class: big dark -->

# 本課程的立論基礎

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

<!-- _class: big -->

# 流程設計<br>與科學探究歷程的對應

> 「用最不守教條、最不拘一格的方式，<br>去研究你最感興趣的事物。」
>
> —— Richard Feynman

<!--
費曼講的是動機，接下來這一段講的是把動機變成可驗收的流程。兩者互補，不衝突：
教師挑的題目要出於自己真正在意的問題，但要做得完，就需要下一頁的六個階段。

出處查證：此語出自 1965 年 11 月致 J. M. Szabados 的信，
收錄於 Michelle Feynman 編《Don't You Have Time to Think?》（2005）。
坊間常繫於 1966 年致 Koichi Mano 的信，那是誤傳，被追問時可直接說明。
-->

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

## 數字幫不上忙的時候

# 驗收條件<br>要由人先寫下來

### 開場用的「人生導師」：問「小孩不聽話」，得到談子女孝道的章句<br>字面命中，方向相反

> 什麼叫「找對了」？命中關鍵字就算，還是讀了覺得貼切才算？兩種定義會做出完全不同的程式。

<!--
當場開 examples/lunyu-mentor.html，輸入「小孩不聽話」。指著「為什麼選這句」那一列：
它誠實地說命中了「孝」——但那是子女對父母的義務，方向反了。

這一頁講的是：上一頁的和角公式有數字可核對，但在座多數人的教學工具沒有。
那時候「對」要你自己定義，而且要先定義再開始做。這是一個故意會錯的示範，
比示範成功更有記憶點。一分鐘。
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

### 五個範例：htchen.github.io/LLM2Life/examples/

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

> 現場卡住不需要臨場判斷：疑難排解依出現頻率排序，每一項均附處理順序與備援做法。

<!--
辦活動的人最擔心的是「開了但學員做不出來」。這句要講出來，不要只放在表格裡。
-->

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

## 一學期的實際紀錄

### 2026 年春季 · 大學程式設計課 · 16 週教材與作業

| | |
| --- | --- |
| commit 總數 | 114 |
| 其中**由 Claude 直接署名** | **56（49%）** |
| 經 Pull Request 合併 | 38 |
| 期間 | 1 月 5 日至 6 月 1 日 |

<div style="float: right; margin: -232px 0 0 36px; text-align: center;"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="QR code：https://github.com/htchen/I2P_Python"><rect width="200" height="200" rx="10" fill="#ffffff"/><g fill="#14110e"><rect x="12.12" y="12.12" width="42.42" height="6.06"/><rect x="66.67" y="12.12" width="6.06" height="6.06"/><rect x="90.91" y="12.12" width="24.24" height="6.06"/><rect x="121.21" y="12.12" width="6.06" height="6.06"/><rect x="145.45" y="12.12" width="42.42" height="6.06"/><rect x="12.12" y="18.18" width="6.06" height="6.06"/><rect x="48.48" y="18.18" width="6.06" height="6.06"/><rect x="60.61" y="18.18" width="6.06" height="6.06"/><rect x="78.79" y="18.18" width="12.12" height="6.06"/><rect x="121.21" y="18.18" width="6.06" height="6.06"/><rect x="133.33" y="18.18" width="6.06" height="6.06"/><rect x="145.45" y="18.18" width="6.06" height="6.06"/><rect x="181.82" y="18.18" width="6.06" height="6.06"/><rect x="12.12" y="24.24" width="6.06" height="6.06"/><rect x="24.24" y="24.24" width="18.18" height="6.06"/><rect x="48.48" y="24.24" width="6.06" height="6.06"/><rect x="60.61" y="24.24" width="6.06" height="6.06"/><rect x="72.73" y="24.24" width="18.18" height="6.06"/><rect x="109.09" y="24.24" width="6.06" height="6.06"/><rect x="121.21" y="24.24" width="12.12" height="6.06"/><rect x="145.45" y="24.24" width="6.06" height="6.06"/><rect x="157.58" y="24.24" width="18.18" height="6.06"/><rect x="181.82" y="24.24" width="6.06" height="6.06"/><rect x="12.12" y="30.30" width="6.06" height="6.06"/><rect x="24.24" y="30.30" width="18.18" height="6.06"/><rect x="48.48" y="30.30" width="6.06" height="6.06"/><rect x="60.61" y="30.30" width="24.24" height="6.06"/><rect x="96.97" y="30.30" width="24.24" height="6.06"/><rect x="133.33" y="30.30" width="6.06" height="6.06"/><rect x="145.45" y="30.30" width="6.06" height="6.06"/><rect x="157.58" y="30.30" width="18.18" height="6.06"/><rect x="181.82" y="30.30" width="6.06" height="6.06"/><rect x="12.12" y="36.36" width="6.06" height="6.06"/><rect x="24.24" y="36.36" width="18.18" height="6.06"/><rect x="48.48" y="36.36" width="6.06" height="6.06"/><rect x="84.85" y="36.36" width="12.12" height="6.06"/><rect x="109.09" y="36.36" width="6.06" height="6.06"/><rect x="121.21" y="36.36" width="18.18" height="6.06"/><rect x="145.45" y="36.36" width="6.06" height="6.06"/><rect x="157.58" y="36.36" width="18.18" height="6.06"/><rect x="181.82" y="36.36" width="6.06" height="6.06"/><rect x="12.12" y="42.42" width="6.06" height="6.06"/><rect x="48.48" y="42.42" width="6.06" height="6.06"/><rect x="72.73" y="42.42" width="12.12" height="6.06"/><rect x="90.91" y="42.42" width="12.12" height="6.06"/><rect x="109.09" y="42.42" width="6.06" height="6.06"/><rect x="145.45" y="42.42" width="6.06" height="6.06"/><rect x="181.82" y="42.42" width="6.06" height="6.06"/><rect x="12.12" y="48.48" width="42.42" height="6.06"/><rect x="60.61" y="48.48" width="6.06" height="6.06"/><rect x="72.73" y="48.48" width="6.06" height="6.06"/><rect x="84.85" y="48.48" width="6.06" height="6.06"/><rect x="96.97" y="48.48" width="6.06" height="6.06"/><rect x="109.09" y="48.48" width="6.06" height="6.06"/><rect x="121.21" y="48.48" width="6.06" height="6.06"/><rect x="133.33" y="48.48" width="6.06" height="6.06"/><rect x="145.45" y="48.48" width="42.42" height="6.06"/><rect x="60.61" y="54.55" width="6.06" height="6.06"/><rect x="78.79" y="54.55" width="6.06" height="6.06"/><rect x="90.91" y="54.55" width="6.06" height="6.06"/><rect x="103.03" y="54.55" width="12.12" height="6.06"/><rect x="133.33" y="54.55" width="6.06" height="6.06"/><rect x="12.12" y="60.61" width="6.06" height="6.06"/><rect x="48.48" y="60.61" width="6.06" height="6.06"/><rect x="60.61" y="60.61" width="24.24" height="6.06"/><rect x="96.97" y="60.61" width="6.06" height="6.06"/><rect x="115.15" y="60.61" width="6.06" height="6.06"/><rect x="133.33" y="60.61" width="18.18" height="6.06"/><rect x="163.64" y="60.61" width="18.18" height="6.06"/><rect x="12.12" y="66.67" width="24.24" height="6.06"/><rect x="42.42" y="66.67" width="6.06" height="6.06"/><rect x="54.55" y="66.67" width="6.06" height="6.06"/><rect x="72.73" y="66.67" width="18.18" height="6.06"/><rect x="96.97" y="66.67" width="12.12" height="6.06"/><rect x="115.15" y="66.67" width="18.18" height="6.06"/><rect x="139.39" y="66.67" width="6.06" height="6.06"/><rect x="151.52" y="66.67" width="12.12" height="6.06"/><rect x="169.70" y="66.67" width="12.12" height="6.06"/><rect x="12.12" y="72.73" width="12.12" height="6.06"/><rect x="30.30" y="72.73" width="6.06" height="6.06"/><rect x="42.42" y="72.73" width="12.12" height="6.06"/><rect x="66.67" y="72.73" width="6.06" height="6.06"/><rect x="78.79" y="72.73" width="12.12" height="6.06"/><rect x="103.03" y="72.73" width="6.06" height="6.06"/><rect x="115.15" y="72.73" width="6.06" height="6.06"/><rect x="157.58" y="72.73" width="6.06" height="6.06"/><rect x="12.12" y="78.79" width="6.06" height="6.06"/><rect x="24.24" y="78.79" width="18.18" height="6.06"/><rect x="66.67" y="78.79" width="24.24" height="6.06"/><rect x="96.97" y="78.79" width="6.06" height="6.06"/><rect x="121.21" y="78.79" width="6.06" height="6.06"/><rect x="139.39" y="78.79" width="6.06" height="6.06"/><rect x="163.64" y="78.79" width="6.06" height="6.06"/><rect x="24.24" y="84.85" width="12.12" height="6.06"/><rect x="48.48" y="84.85" width="6.06" height="6.06"/><rect x="60.61" y="84.85" width="12.12" height="6.06"/><rect x="90.91" y="84.85" width="12.12" height="6.06"/><rect x="109.09" y="84.85" width="6.06" height="6.06"/><rect x="121.21" y="84.85" width="6.06" height="6.06"/><rect x="133.33" y="84.85" width="6.06" height="6.06"/><rect x="145.45" y="84.85" width="12.12" height="6.06"/><rect x="181.82" y="84.85" width="6.06" height="6.06"/><rect x="18.18" y="90.91" width="6.06" height="6.06"/><rect x="30.30" y="90.91" width="6.06" height="6.06"/><rect x="42.42" y="90.91" width="6.06" height="6.06"/><rect x="60.61" y="90.91" width="6.06" height="6.06"/><rect x="78.79" y="90.91" width="60.61" height="6.06"/><rect x="145.45" y="90.91" width="18.18" height="6.06"/><rect x="175.76" y="90.91" width="12.12" height="6.06"/><rect x="12.12" y="96.97" width="6.06" height="6.06"/><rect x="30.30" y="96.97" width="6.06" height="6.06"/><rect x="42.42" y="96.97" width="30.30" height="6.06"/><rect x="84.85" y="96.97" width="24.24" height="6.06"/><rect x="115.15" y="96.97" width="6.06" height="6.06"/><rect x="133.33" y="96.97" width="12.12" height="6.06"/><rect x="157.58" y="96.97" width="18.18" height="6.06"/><rect x="42.42" y="103.03" width="6.06" height="6.06"/><rect x="54.55" y="103.03" width="48.48" height="6.06"/><rect x="127.27" y="103.03" width="6.06" height="6.06"/><rect x="151.52" y="103.03" width="12.12" height="6.06"/><rect x="169.70" y="103.03" width="6.06" height="6.06"/><rect x="181.82" y="103.03" width="6.06" height="6.06"/><rect x="18.18" y="109.09" width="12.12" height="6.06"/><rect x="42.42" y="109.09" width="12.12" height="6.06"/><rect x="60.61" y="109.09" width="6.06" height="6.06"/><rect x="84.85" y="109.09" width="6.06" height="6.06"/><rect x="96.97" y="109.09" width="18.18" height="6.06"/><rect x="127.27" y="109.09" width="6.06" height="6.06"/><rect x="139.39" y="109.09" width="6.06" height="6.06"/><rect x="151.52" y="109.09" width="6.06" height="6.06"/><rect x="163.64" y="109.09" width="12.12" height="6.06"/><rect x="12.12" y="115.15" width="6.06" height="6.06"/><rect x="24.24" y="115.15" width="12.12" height="6.06"/><rect x="42.42" y="115.15" width="6.06" height="6.06"/><rect x="54.55" y="115.15" width="6.06" height="6.06"/><rect x="72.73" y="115.15" width="6.06" height="6.06"/><rect x="103.03" y="115.15" width="30.30" height="6.06"/><rect x="145.45" y="115.15" width="18.18" height="6.06"/><rect x="169.70" y="115.15" width="18.18" height="6.06"/><rect x="12.12" y="121.21" width="42.42" height="6.06"/><rect x="78.79" y="121.21" width="30.30" height="6.06"/><rect x="115.15" y="121.21" width="18.18" height="6.06"/><rect x="157.58" y="121.21" width="12.12" height="6.06"/><rect x="181.82" y="121.21" width="6.06" height="6.06"/><rect x="12.12" y="127.27" width="6.06" height="6.06"/><rect x="24.24" y="127.27" width="6.06" height="6.06"/><rect x="36.36" y="127.27" width="6.06" height="6.06"/><rect x="78.79" y="127.27" width="6.06" height="6.06"/><rect x="96.97" y="127.27" width="6.06" height="6.06"/><rect x="133.33" y="127.27" width="6.06" height="6.06"/><rect x="145.45" y="127.27" width="6.06" height="6.06"/><rect x="12.12" y="133.33" width="6.06" height="6.06"/><rect x="36.36" y="133.33" width="6.06" height="6.06"/><rect x="48.48" y="133.33" width="42.42" height="6.06"/><rect x="109.09" y="133.33" width="54.55" height="6.06"/><rect x="169.70" y="133.33" width="18.18" height="6.06"/><rect x="60.61" y="139.39" width="18.18" height="6.06"/><rect x="90.91" y="139.39" width="6.06" height="6.06"/><rect x="103.03" y="139.39" width="6.06" height="6.06"/><rect x="133.33" y="139.39" width="6.06" height="6.06"/><rect x="157.58" y="139.39" width="12.12" height="6.06"/><rect x="12.12" y="145.45" width="42.42" height="6.06"/><rect x="72.73" y="145.45" width="6.06" height="6.06"/><rect x="90.91" y="145.45" width="18.18" height="6.06"/><rect x="115.15" y="145.45" width="24.24" height="6.06"/><rect x="145.45" y="145.45" width="6.06" height="6.06"/><rect x="157.58" y="145.45" width="18.18" height="6.06"/><rect x="12.12" y="151.52" width="6.06" height="6.06"/><rect x="48.48" y="151.52" width="6.06" height="6.06"/><rect x="72.73" y="151.52" width="6.06" height="6.06"/><rect x="84.85" y="151.52" width="12.12" height="6.06"/><rect x="121.21" y="151.52" width="18.18" height="6.06"/><rect x="157.58" y="151.52" width="6.06" height="6.06"/><rect x="12.12" y="157.58" width="6.06" height="6.06"/><rect x="24.24" y="157.58" width="18.18" height="6.06"/><rect x="48.48" y="157.58" width="6.06" height="6.06"/><rect x="78.79" y="157.58" width="6.06" height="6.06"/><rect x="90.91" y="157.58" width="6.06" height="6.06"/><rect x="103.03" y="157.58" width="6.06" height="6.06"/><rect x="115.15" y="157.58" width="6.06" height="6.06"/><rect x="127.27" y="157.58" width="42.42" height="6.06"/><rect x="181.82" y="157.58" width="6.06" height="6.06"/><rect x="12.12" y="163.64" width="6.06" height="6.06"/><rect x="24.24" y="163.64" width="18.18" height="6.06"/><rect x="48.48" y="163.64" width="6.06" height="6.06"/><rect x="66.67" y="163.64" width="6.06" height="6.06"/><rect x="109.09" y="163.64" width="6.06" height="6.06"/><rect x="127.27" y="163.64" width="18.18" height="6.06"/><rect x="163.64" y="163.64" width="12.12" height="6.06"/><rect x="181.82" y="163.64" width="6.06" height="6.06"/><rect x="12.12" y="169.70" width="6.06" height="6.06"/><rect x="24.24" y="169.70" width="18.18" height="6.06"/><rect x="48.48" y="169.70" width="6.06" height="6.06"/><rect x="66.67" y="169.70" width="12.12" height="6.06"/><rect x="84.85" y="169.70" width="6.06" height="6.06"/><rect x="103.03" y="169.70" width="12.12" height="6.06"/><rect x="121.21" y="169.70" width="60.61" height="6.06"/><rect x="12.12" y="175.76" width="6.06" height="6.06"/><rect x="48.48" y="175.76" width="6.06" height="6.06"/><rect x="66.67" y="175.76" width="6.06" height="6.06"/><rect x="78.79" y="175.76" width="12.12" height="6.06"/><rect x="96.97" y="175.76" width="12.12" height="6.06"/><rect x="121.21" y="175.76" width="6.06" height="6.06"/><rect x="145.45" y="175.76" width="12.12" height="6.06"/><rect x="163.64" y="175.76" width="12.12" height="6.06"/><rect x="181.82" y="175.76" width="6.06" height="6.06"/><rect x="12.12" y="181.82" width="42.42" height="6.06"/><rect x="60.61" y="181.82" width="24.24" height="6.06"/><rect x="109.09" y="181.82" width="6.06" height="6.06"/><rect x="127.27" y="181.82" width="6.06" height="6.06"/><rect x="145.45" y="181.82" width="18.18" height="6.06"/><rect x="169.70" y="181.82" width="6.06" height="6.06"/></g></svg><div style="font-size:19px; color:#6b6259; margin-top:6px">github.com/htchen/I2P_Python</div></div>

> 每一次改動都查得到是誰做的、改了什麼。這不是宣稱，是可以打開來看的紀錄。

<!--
**這一頁的框架很重要，講錯會反效果。**

不要說「非程式背景也能做」——這是一門大學程式設計課，我本身有程式背景，
台下一查就會發現，前面三十分鐘會一起被打折。

要說的是：這套流程撐得起一整個學期的真實教材，而且全程可稽核。
那正是第 6 到 8 頁「產出之後的處置」的規模化版本——
示範二證明一個檔案可以這樣做，這個 repo 證明一整個學期也可以。

有人問「學生做得出來嗎」：口頭補充期末專題——學生做的地圖查詢網頁，
顯示的是「幾個地點、幾公尺、幾分鐘」這類可核對的數值。
畫面在 htchen.github.io/LLM2Life/cases.html，請他們課後自己看，不要當場開。
-->

---

<!-- _class: big dark -->

## 每一代新模型都是重新開始，沒有先後優勢

# 若已有想做的東西<br>今天開始就是最好的時機

### 這場工作坊同樣不必等到準備好——教材是完整的，回去就能開

<!--
**全場唯一一次提出請求，不要快速帶過。講完停兩秒再翻頁。**

講法：這件事沒有卡位問題。不會因為別人早開始就輪不到你，也不會因為現在才開始就落後——
每一代新模型出來，既有的認知都要放下，大家都得重新試一次才知道它能做到什麼。
所以如果你已經有想做的東西，最好的時機就是今天。同一句話也適用於這場工作坊。

此一論點取自 Claude Code 開發者 Boris Cherny 的說法。投影片上以講者自身立場陳述，
未掛他人姓名；若希望引用來源，口頭補充即可。
-->

---

<!-- _class: lead dark -->

# 教材位置

<div style="margin: 16px 0 10px"><svg xmlns="http://www.w3.org/2000/svg" width="260" height="260" viewBox="0 0 260 260" role="img" aria-label="QR code：https://htchen.github.io/LLM2Life/"><rect width="260" height="260" rx="10" fill="#ffffff"/><g fill="#14110e"><rect x="22.29" y="22.29" width="52.00" height="7.43"/><rect x="89.14" y="22.29" width="7.43" height="7.43"/><rect x="104.00" y="22.29" width="14.86" height="7.43"/><rect x="126.29" y="22.29" width="7.43" height="7.43"/><rect x="148.57" y="22.29" width="22.29" height="7.43"/><rect x="185.71" y="22.29" width="52.00" height="7.43"/><rect x="22.29" y="29.71" width="7.43" height="7.43"/><rect x="66.86" y="29.71" width="7.43" height="7.43"/><rect x="89.14" y="29.71" width="7.43" height="7.43"/><rect x="104.00" y="29.71" width="14.86" height="7.43"/><rect x="141.14" y="29.71" width="14.86" height="7.43"/><rect x="185.71" y="29.71" width="7.43" height="7.43"/><rect x="230.29" y="29.71" width="7.43" height="7.43"/><rect x="22.29" y="37.14" width="7.43" height="7.43"/><rect x="37.14" y="37.14" width="22.29" height="7.43"/><rect x="66.86" y="37.14" width="7.43" height="7.43"/><rect x="89.14" y="37.14" width="7.43" height="7.43"/><rect x="104.00" y="37.14" width="7.43" height="7.43"/><rect x="126.29" y="37.14" width="14.86" height="7.43"/><rect x="148.57" y="37.14" width="7.43" height="7.43"/><rect x="163.43" y="37.14" width="14.86" height="7.43"/><rect x="185.71" y="37.14" width="7.43" height="7.43"/><rect x="200.57" y="37.14" width="22.29" height="7.43"/><rect x="230.29" y="37.14" width="7.43" height="7.43"/><rect x="22.29" y="44.57" width="7.43" height="7.43"/><rect x="37.14" y="44.57" width="22.29" height="7.43"/><rect x="66.86" y="44.57" width="7.43" height="7.43"/><rect x="104.00" y="44.57" width="7.43" height="7.43"/><rect x="118.86" y="44.57" width="7.43" height="7.43"/><rect x="156.00" y="44.57" width="7.43" height="7.43"/><rect x="185.71" y="44.57" width="7.43" height="7.43"/><rect x="200.57" y="44.57" width="22.29" height="7.43"/><rect x="230.29" y="44.57" width="7.43" height="7.43"/><rect x="22.29" y="52.00" width="7.43" height="7.43"/><rect x="37.14" y="52.00" width="22.29" height="7.43"/><rect x="66.86" y="52.00" width="7.43" height="7.43"/><rect x="89.14" y="52.00" width="7.43" height="7.43"/><rect x="148.57" y="52.00" width="14.86" height="7.43"/><rect x="170.86" y="52.00" width="7.43" height="7.43"/><rect x="185.71" y="52.00" width="7.43" height="7.43"/><rect x="200.57" y="52.00" width="22.29" height="7.43"/><rect x="230.29" y="52.00" width="7.43" height="7.43"/><rect x="22.29" y="59.43" width="7.43" height="7.43"/><rect x="66.86" y="59.43" width="7.43" height="7.43"/><rect x="81.71" y="59.43" width="22.29" height="7.43"/><rect x="133.71" y="59.43" width="7.43" height="7.43"/><rect x="148.57" y="59.43" width="29.71" height="7.43"/><rect x="185.71" y="59.43" width="7.43" height="7.43"/><rect x="230.29" y="59.43" width="7.43" height="7.43"/><rect x="22.29" y="66.86" width="52.00" height="7.43"/><rect x="81.71" y="66.86" width="7.43" height="7.43"/><rect x="96.57" y="66.86" width="7.43" height="7.43"/><rect x="111.43" y="66.86" width="7.43" height="7.43"/><rect x="126.29" y="66.86" width="7.43" height="7.43"/><rect x="141.14" y="66.86" width="7.43" height="7.43"/><rect x="156.00" y="66.86" width="7.43" height="7.43"/><rect x="170.86" y="66.86" width="7.43" height="7.43"/><rect x="185.71" y="66.86" width="52.00" height="7.43"/><rect x="89.14" y="74.29" width="14.86" height="7.43"/><rect x="118.86" y="74.29" width="7.43" height="7.43"/><rect x="133.71" y="74.29" width="37.14" height="7.43"/><rect x="22.29" y="81.71" width="7.43" height="7.43"/><rect x="44.57" y="81.71" width="7.43" height="7.43"/><rect x="59.43" y="81.71" width="14.86" height="7.43"/><rect x="81.71" y="81.71" width="14.86" height="7.43"/><rect x="104.00" y="81.71" width="14.86" height="7.43"/><rect x="126.29" y="81.71" width="7.43" height="7.43"/><rect x="141.14" y="81.71" width="7.43" height="7.43"/><rect x="156.00" y="81.71" width="7.43" height="7.43"/><rect x="178.29" y="81.71" width="7.43" height="7.43"/><rect x="193.14" y="81.71" width="7.43" height="7.43"/><rect x="22.29" y="89.14" width="14.86" height="7.43"/><rect x="59.43" y="89.14" width="7.43" height="7.43"/><rect x="74.29" y="89.14" width="14.86" height="7.43"/><rect x="96.57" y="89.14" width="7.43" height="7.43"/><rect x="118.86" y="89.14" width="7.43" height="7.43"/><rect x="133.71" y="89.14" width="7.43" height="7.43"/><rect x="170.86" y="89.14" width="22.29" height="7.43"/><rect x="208.00" y="89.14" width="7.43" height="7.43"/><rect x="230.29" y="89.14" width="7.43" height="7.43"/><rect x="22.29" y="96.57" width="7.43" height="7.43"/><rect x="44.57" y="96.57" width="7.43" height="7.43"/><rect x="66.86" y="96.57" width="7.43" height="7.43"/><rect x="104.00" y="96.57" width="29.71" height="7.43"/><rect x="141.14" y="96.57" width="14.86" height="7.43"/><rect x="163.43" y="96.57" width="7.43" height="7.43"/><rect x="178.29" y="96.57" width="7.43" height="7.43"/><rect x="200.57" y="96.57" width="29.71" height="7.43"/><rect x="22.29" y="104.00" width="22.29" height="7.43"/><rect x="52.00" y="104.00" width="7.43" height="7.43"/><rect x="81.71" y="104.00" width="7.43" height="7.43"/><rect x="111.43" y="104.00" width="14.86" height="7.43"/><rect x="141.14" y="104.00" width="7.43" height="7.43"/><rect x="156.00" y="104.00" width="14.86" height="7.43"/><rect x="200.57" y="104.00" width="7.43" height="7.43"/><rect x="215.43" y="104.00" width="14.86" height="7.43"/><rect x="22.29" y="111.43" width="14.86" height="7.43"/><rect x="44.57" y="111.43" width="7.43" height="7.43"/><rect x="66.86" y="111.43" width="14.86" height="7.43"/><rect x="96.57" y="111.43" width="7.43" height="7.43"/><rect x="126.29" y="111.43" width="22.29" height="7.43"/><rect x="178.29" y="111.43" width="14.86" height="7.43"/><rect x="208.00" y="111.43" width="7.43" height="7.43"/><rect x="222.86" y="111.43" width="14.86" height="7.43"/><rect x="29.71" y="118.86" width="29.71" height="7.43"/><rect x="81.71" y="118.86" width="7.43" height="7.43"/><rect x="96.57" y="118.86" width="37.14" height="7.43"/><rect x="141.14" y="118.86" width="7.43" height="7.43"/><rect x="163.43" y="118.86" width="22.29" height="7.43"/><rect x="22.29" y="126.29" width="52.00" height="7.43"/><rect x="96.57" y="126.29" width="7.43" height="7.43"/><rect x="111.43" y="126.29" width="22.29" height="7.43"/><rect x="148.57" y="126.29" width="7.43" height="7.43"/><rect x="178.29" y="126.29" width="7.43" height="7.43"/><rect x="208.00" y="126.29" width="29.71" height="7.43"/><rect x="22.29" y="133.71" width="7.43" height="7.43"/><rect x="44.57" y="133.71" width="7.43" height="7.43"/><rect x="59.43" y="133.71" width="7.43" height="7.43"/><rect x="74.29" y="133.71" width="29.71" height="7.43"/><rect x="111.43" y="133.71" width="7.43" height="7.43"/><rect x="133.71" y="133.71" width="22.29" height="7.43"/><rect x="163.43" y="133.71" width="7.43" height="7.43"/><rect x="178.29" y="133.71" width="22.29" height="7.43"/><rect x="208.00" y="133.71" width="7.43" height="7.43"/><rect x="222.86" y="133.71" width="7.43" height="7.43"/><rect x="37.14" y="141.14" width="14.86" height="7.43"/><rect x="59.43" y="141.14" width="14.86" height="7.43"/><rect x="81.71" y="141.14" width="14.86" height="7.43"/><rect x="104.00" y="141.14" width="7.43" height="7.43"/><rect x="118.86" y="141.14" width="7.43" height="7.43"/><rect x="170.86" y="141.14" width="7.43" height="7.43"/><rect x="222.86" y="141.14" width="7.43" height="7.43"/><rect x="37.14" y="148.57" width="7.43" height="7.43"/><rect x="81.71" y="148.57" width="14.86" height="7.43"/><rect x="111.43" y="148.57" width="22.29" height="7.43"/><rect x="141.14" y="148.57" width="14.86" height="7.43"/><rect x="178.29" y="148.57" width="22.29" height="7.43"/><rect x="208.00" y="148.57" width="7.43" height="7.43"/><rect x="230.29" y="148.57" width="7.43" height="7.43"/><rect x="22.29" y="156.00" width="7.43" height="7.43"/><rect x="52.00" y="156.00" width="7.43" height="7.43"/><rect x="66.86" y="156.00" width="7.43" height="7.43"/><rect x="81.71" y="156.00" width="14.86" height="7.43"/><rect x="111.43" y="156.00" width="7.43" height="7.43"/><rect x="126.29" y="156.00" width="7.43" height="7.43"/><rect x="141.14" y="156.00" width="7.43" height="7.43"/><rect x="170.86" y="156.00" width="14.86" height="7.43"/><rect x="200.57" y="156.00" width="7.43" height="7.43"/><rect x="222.86" y="156.00" width="14.86" height="7.43"/><rect x="37.14" y="163.43" width="29.71" height="7.43"/><rect x="111.43" y="163.43" width="7.43" height="7.43"/><rect x="126.29" y="163.43" width="7.43" height="7.43"/><rect x="148.57" y="163.43" width="7.43" height="7.43"/><rect x="170.86" y="163.43" width="14.86" height="7.43"/><rect x="222.86" y="163.43" width="14.86" height="7.43"/><rect x="22.29" y="170.86" width="7.43" height="7.43"/><rect x="52.00" y="170.86" width="7.43" height="7.43"/><rect x="66.86" y="170.86" width="14.86" height="7.43"/><rect x="89.14" y="170.86" width="22.29" height="7.43"/><rect x="141.14" y="170.86" width="14.86" height="7.43"/><rect x="170.86" y="170.86" width="37.14" height="7.43"/><rect x="215.43" y="170.86" width="7.43" height="7.43"/><rect x="81.71" y="178.29" width="7.43" height="7.43"/><rect x="96.57" y="178.29" width="7.43" height="7.43"/><rect x="126.29" y="178.29" width="7.43" height="7.43"/><rect x="141.14" y="178.29" width="7.43" height="7.43"/><rect x="170.86" y="178.29" width="7.43" height="7.43"/><rect x="200.57" y="178.29" width="7.43" height="7.43"/><rect x="215.43" y="178.29" width="22.29" height="7.43"/><rect x="22.29" y="185.71" width="52.00" height="7.43"/><rect x="89.14" y="185.71" width="29.71" height="7.43"/><rect x="141.14" y="185.71" width="7.43" height="7.43"/><rect x="170.86" y="185.71" width="7.43" height="7.43"/><rect x="185.71" y="185.71" width="7.43" height="7.43"/><rect x="200.57" y="185.71" width="7.43" height="7.43"/><rect x="222.86" y="185.71" width="7.43" height="7.43"/><rect x="22.29" y="193.14" width="7.43" height="7.43"/><rect x="66.86" y="193.14" width="7.43" height="7.43"/><rect x="81.71" y="193.14" width="7.43" height="7.43"/><rect x="96.57" y="193.14" width="7.43" height="7.43"/><rect x="126.29" y="193.14" width="14.86" height="7.43"/><rect x="156.00" y="193.14" width="7.43" height="7.43"/><rect x="170.86" y="193.14" width="7.43" height="7.43"/><rect x="200.57" y="193.14" width="37.14" height="7.43"/><rect x="22.29" y="200.57" width="7.43" height="7.43"/><rect x="37.14" y="200.57" width="22.29" height="7.43"/><rect x="66.86" y="200.57" width="7.43" height="7.43"/><rect x="96.57" y="200.57" width="7.43" height="7.43"/><rect x="133.71" y="200.57" width="29.71" height="7.43"/><rect x="170.86" y="200.57" width="37.14" height="7.43"/><rect x="230.29" y="200.57" width="7.43" height="7.43"/><rect x="22.29" y="208.00" width="7.43" height="7.43"/><rect x="37.14" y="208.00" width="22.29" height="7.43"/><rect x="66.86" y="208.00" width="7.43" height="7.43"/><rect x="81.71" y="208.00" width="14.86" height="7.43"/><rect x="104.00" y="208.00" width="7.43" height="7.43"/><rect x="118.86" y="208.00" width="7.43" height="7.43"/><rect x="148.57" y="208.00" width="22.29" height="7.43"/><rect x="185.71" y="208.00" width="7.43" height="7.43"/><rect x="200.57" y="208.00" width="29.71" height="7.43"/><rect x="22.29" y="215.43" width="7.43" height="7.43"/><rect x="37.14" y="215.43" width="22.29" height="7.43"/><rect x="66.86" y="215.43" width="7.43" height="7.43"/><rect x="111.43" y="215.43" width="7.43" height="7.43"/><rect x="126.29" y="215.43" width="7.43" height="7.43"/><rect x="141.14" y="215.43" width="7.43" height="7.43"/><rect x="156.00" y="215.43" width="7.43" height="7.43"/><rect x="170.86" y="215.43" width="7.43" height="7.43"/><rect x="200.57" y="215.43" width="22.29" height="7.43"/><rect x="230.29" y="215.43" width="7.43" height="7.43"/><rect x="22.29" y="222.86" width="7.43" height="7.43"/><rect x="66.86" y="222.86" width="7.43" height="7.43"/><rect x="89.14" y="222.86" width="14.86" height="7.43"/><rect x="133.71" y="222.86" width="22.29" height="7.43"/><rect x="163.43" y="222.86" width="14.86" height="7.43"/><rect x="193.14" y="222.86" width="7.43" height="7.43"/><rect x="222.86" y="222.86" width="7.43" height="7.43"/><rect x="22.29" y="230.29" width="52.00" height="7.43"/><rect x="81.71" y="230.29" width="7.43" height="7.43"/><rect x="96.57" y="230.29" width="7.43" height="7.43"/><rect x="111.43" y="230.29" width="14.86" height="7.43"/><rect x="133.71" y="230.29" width="7.43" height="7.43"/><rect x="170.86" y="230.29" width="22.29" height="7.43"/><rect x="208.00" y="230.29" width="7.43" height="7.43"/><rect x="222.86" y="230.29" width="7.43" height="7.43"/></g></svg></div>

### htchen.github.io/LLM2Life

**種子教師指南 · 隨堂手冊 · 課前準備 · 投影片**

### 提問與討論

<!--
留 5 分鐘。常見追問與回應方向在 shared/insights.md。
把網址寫在白板上，或做成 QR code。
-->
