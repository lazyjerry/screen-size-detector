# Screen Size Detector

偵測瀏覽器視窗與螢幕尺寸的工具

[🔗 Demo](https://screen-size-detector-1zi.pages.dev/) · [📂 GitHub](https://github.com/lazyjerry/screen-size-detector)

---

## 功能

- **即時顯示視窗尺寸**：window.innerWidth / innerHeight、document.documentElement.clientWidth / clientHeight
- **即時顯示螢幕尺寸**：screen.width / screen.height
- **顯示螢幕色彩深度**：screen.colorDepth
- **顯示裝置像素比例**：window.devicePixelRatio
- **計算並顯示寬高比** (aspect ratio)，精確到小數點後兩位
- **一鍵匯出 JPG**：透過 html2canvas 快速截圖並下載

## 技術棧

- **HTML5** / **CSS3** / **JavaScript**
- **Tailwind CSS**（已編譯至 `tailwindcss.css`）
- **Font Awesome**（圖示套件）
- **html2canvas**（截圖匯出）

## 快速開始

1. **Clone 專案**

   ```bash
   git clone https://github.com/lazyjerry/screen-size-detector.git
   cd screen-size-detector
   ```

2. **本地啟動**

   - 使用任意靜態伺服器（以下以 Python 為例）：
     ```bash
     python -m http.server 8080
     ```
   - 開啟瀏覽器，前往 `http://localhost:8080/index.html`

3. **Github Pages / Vercel 部署**
   - 本專案已經部署於 GitHub Pages，直接訪問 [Demo](https://screen-size-detector-1zi.pages.dev/) 即可。

## 自訂與擴充

- **樣式**：編輯 `style.css` 或重新編譯 Tailwind 設定 (`tailwind.config.js`)
- **截圖格式**：在 `index.html` 底部 `<script>` 裡調整 `html2canvas` 參數（品質、格式等）
- **新增欄位**：可依需求加上使用者代理（`navigator.userAgent`）、語言（`navigator.language`）等資訊

## 貢獻指南

歡迎透過 Issues 回報問題，或發送 Pull Request 來新增功能、優化效能或修正 Bugs。

1. Fork 本專案
2. 新增分支：`git checkout -b feat/your-feature`
3. 提交修改：`git commit -m "feat: add your feature"`
4. 推到遠端：`git push origin feat/your-feature`
5. 開啟 Pull Request

## 授權條款

本專案採用 [MIT License](./LICENSE)，詳細請見 LICENSE 檔案。
