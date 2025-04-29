// 頁面載入完成後立即執行
document.addEventListener("DOMContentLoaded", function () {
  getBrowserInfo();

  // 監聽視窗大小變化
  window.addEventListener("resize", function () {
    getBrowserInfo();
  });
});

// 獲取瀏覽器資訊
function getBrowserInfo() {
  // 視窗尺寸
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // 螢幕尺寸
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const colorDepth = window.screen.colorDepth;
  const pixelRatio = window.devicePixelRatio || 1;

  // 計算寬高比
  const ratio = (width / height).toFixed(2);

  // 更新視窗尺寸顯示
  document.getElementById("window-width").textContent = width;
  document.getElementById("window-height").textContent = height;
  document.getElementById("window-ratio").textContent = `${ratio}:1`;

  // 更新螢幕資訊
  document.getElementById("screen-width").textContent = screenWidth;
  document.getElementById("screen-height").textContent = screenHeight;
  document.getElementById("color-depth").textContent = `${colorDepth}位元`;
  document.getElementById("pixel-ratio").textContent = pixelRatio;

  // 更新響應式條
  updateResponsiveBar(width);

  // 獲取瀏覽器名稱和版本
  detectBrowser();

  // 獲取作業系統資訊
  detectOS();

  // 獲取CPU核心數
  detectCPU();

  // 檢測裝置類型
  detectDeviceType();

  // 更新時間
  document.getElementById("update-time").textContent = new Date().toLocaleString();

  // 更新框架對應的class
  updateFrameworkClasses(width);
}

// 更新框架對應的class
function updateFrameworkClasses(width) {
  document.getElementById("current-width-display").textContent = width + " px";

  // 根據寬度確定當前尺寸
  let size = "";
  if (width <= 576) {
    size = "xs";
  } else if (width <= 768) {
    size = "sm";
  } else if (width <= 992) {
    size = "md";
  } else if (width <= 1200) {
    size = "lg";
  } else {
    size = "xl";
  }

  // 更新每個框架的當前class
  const frameworkItems = document.querySelectorAll(".framework-item");
  frameworkItems.forEach((item) => {
    const frameworkName = item.querySelector(".framework-name").textContent;
    const classNameElement = item.querySelector(".class-name");

    // 根據框架名稱和尺寸設置對應的class
    classNameElement.textContent = getFrameworkClass(frameworkName, size);

    // 根據當前寬度設置高亮
    // if (
    //   (width <= 576 && (frameworkName === "Bootstrap" || frameworkName === "Foundation (ZURB)")) ||
    //   (width > 576 && width <= 768 && (frameworkName === "Bulma" || frameworkName === "Materialize")) ||
    //   (width > 768 && width <= 992 && (frameworkName === "Semantic UI" || frameworkName === "UIkit")) ||
    //   (width > 992 &&
    //     width <= 1200 &&
    //     (frameworkName === "Tailwind CSS" || frameworkName === "Material-UI (MUI)")) ||
    //   (width > 1200 && (frameworkName === "Ant Design" || frameworkName === "Vuetify"))
    // ) {
    //   item.classList.add("current-class");
    // } else {
    //   item.classList.remove("current-class");
    // }
  });
}

// 根據框架名稱和尺寸返回對應的class
function getFrameworkClass(frameworkName, size) {
  const classes = {
    Bootstrap: {
      xs: "col-* (手機)",
      sm: "col-sm-* (平板)",
      md: "col-md-* (小桌機)",
      lg: "col-lg-* (桌機)",
      xl: "col-xl-* (大桌機)",
    },
    "Foundation (ZURB)": {
      xs: "small-* (手機)",
      sm: "medium-* (平板)",
      md: "large-* (小桌機)",
      lg: "xlarge-* (桌機)",
      xl: "xxlarge-* (大桌機)",
    },
    Bulma: {
      xs: "is-*-mobile (手機)",
      sm: "is-*-tablet (平板)",
      md: "is-*-desktop (小桌機)",
      lg: "is-*-widescreen (桌機)",
      xl: "is-*-fullhd (大桌機)",
    },
    Materialize: {
      xs: "col s* (手機)",
      sm: "col m* (平板)",
      md: "col l* (小桌機)",
      lg: "col xl* (桌機)",
      xl: "col xxl* (大桌機)",
    },
    "Semantic UI": {
      xs: "mobile (手機)",
      sm: "tablet (平板)",
      md: "small monitor (小桌機)",
      lg: "large monitor (桌機)",
      xl: "widescreen (大桌機)",
    },
    UIkit: {
      xs: "uk-width-*-small (手機)",
      sm: "uk-width-*-medium (平板)",
      md: "uk-width-*-large (小桌機)",
      lg: "uk-width-*-xlarge (桌機)",
      xl: "uk-width-*-xxlarge (大桌機)",
    },
    "Tailwind CSS": {
      xs: "sm:* (手機)",
      sm: "md:* (平板)",
      md: "lg:* (小桌機)",
      lg: "xl:* (桌機)",
      xl: "2xl:* (大桌機)",
    },
    "Material-UI (MUI)": {
      xs: "xs (手機)",
      sm: "sm (平板)",
      md: "md (小桌機)",
      lg: "lg (桌機)",
      xl: "xl (大桌機)",
    },
    "Ant Design": {
      xs: "xs (手機)",
      sm: "sm (平板)",
      md: "md (小桌機)",
      lg: "lg (桌機)",
      xl: "xl (大桌機)",
    },
    Vuetify: {
      xs: "xs (手機)",
      sm: "sm (平板)",
      md: "md (小桌機)",
      lg: "lg (桌機)",
      xl: "xl (大桌機)",
    },
    "Element UI": {
      xs: "xs (手機)",
      sm: "sm (平板)",
      md: "md (小桌機)",
      lg: "lg (桌機)",
      xl: "xl (大桌機)",
    },
    "Pure.css": {
      xs: "pure-u-* (手機)",
      sm: "pure-u-sm-* (平板)",
      md: "pure-u-md-* (小桌機)",
      lg: "pure-u-lg-* (桌機)",
      xl: "pure-u-xl-* (大桌機)",
    },
  };

  return classes[frameworkName]?.[size] || "--";
}

// 更新響應式進度條
function updateResponsiveBar(width) {
  const bar = document.getElementById("responsive-bar");
  const responsiveWidth = document.getElementById("responsive-width");
  const responsiveTip = document.getElementById("responsive-tip");

  responsiveWidth.textContent = `${width} px`;

  // 計算進度條百分比 (最大設為2000px)
  const percent = Math.min((width / 2000) * 100, 100);
  bar.style.width = `${percent}%`;

  // 根據寬度給出提示
  if (width <= 576) {
    responsiveTip.textContent = "當前為手機尺寸 (≤576px) - 適合移動設備瀏覽";
  } else if (width <= 768) {
    responsiveTip.textContent = "當前為平板尺寸 (577-768px) - 適合平板設備瀏覽";
  } else if (width <= 992) {
    responsiveTip.textContent = "當前為小桌機尺寸 (769-992px) - 適合小型桌面瀏覽";
  } else if (width <= 1200) {
    responsiveTip.textContent = "當前為桌機尺寸 (993-1200px) - 適合標準桌面瀏覽";
  } else {
    responsiveTip.textContent = "當前為大桌機尺寸 (≥1201px) - 適合大屏幕瀏覽";
  }
}

// 檢測瀏覽器類型
function detectBrowser() {
  const userAgent = navigator.userAgent;
  document.getElementById("user-agent").textContent = userAgent;

  let browserName = "未知瀏覽器";
  let browserVersion = "未知版本";

  // 檢測瀏覽器
  if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Mozilla Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("SamsungBrowser") > -1) {
    browserName = "Samsung Browser";
    browserVersion = userAgent.match(/SamsungBrowser\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browserName = "Opera";
    browserVersion = userAgent.match(/(?:Opera|OPR)\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.match(/rv:(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Microsoft Edge";
    browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Google Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Apple Safari";
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  }

  document.getElementById("browser-name").textContent = browserName;
  document.getElementById("browser-version").textContent = browserVersion;
}

// 檢測作業系統
function detectOS() {
  const userAgent = navigator.userAgent;
  let os = "未知作業系統";

  if (userAgent.indexOf("Windows") > -1) {
    os = "Windows";
    if (userAgent.indexOf("Windows NT 10.0") > -1) os += " 10";
    else if (userAgent.indexOf("Windows NT 6.3") > -1) os += " 8.1";
    else if (userAgent.indexOf("Windows NT 6.2") > -1) os += " 8";
    else if (userAgent.indexOf("Windows NT 6.1") > -1) os += " 7";
    else if (userAgent.indexOf("Windows NT 6.0") > -1) os += " Vista";
    else if (userAgent.indexOf("Windows NT 5.1") > -1) os += " XP";
    else if (userAgent.indexOf("Windows NT 5.0") > -1) os += " 2000";
  } else if (userAgent.indexOf("Mac") > -1) {
    os = "Mac OS";
    if (userAgent.indexOf("Macintosh") > -1) os += " (Intel)";
    if (userAgent.indexOf("Mac OS X") > -1) {
      const version = userAgent.match(/Mac OS X (\d+_\d+_\d+)/);
      if (version) os += " X " + version[1].replace(/_/g, ".");
    }
  } else if (userAgent.indexOf("Linux") > -1) {
    os = "Linux";
  } else if (userAgent.indexOf("Android") > -1) {
    os = "Android";
    const version = userAgent.match(/Android (\d+\.\d+)/);
    if (version) os += " " + version[1];
  } else if (
    userAgent.indexOf("iOS") > -1 ||
    userAgent.indexOf("iPhone") > -1 ||
    userAgent.indexOf("iPad") > -1
  ) {
    os = "iOS";
    const version = userAgent.match(/OS (\d+_\d+)/);
    if (version) os += " " + version[1].replace(/_/g, ".");
  }

  document.getElementById("os").textContent = os;
}

// 檢測CPU核心數
function detectCPU() {
  const cores = navigator.hardwareConcurrency || "未知";
  document.getElementById("cpu-cores").textContent = cores;
}

// 檢測裝置類型
function detectDeviceType() {
  const userAgent = navigator.userAgent;
  let deviceType = "未知裝置";

  if (/Mobi|Android|iPhone|iPad|iPod/i.test(userAgent)) {
    deviceType = "移動裝置";
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      deviceType = "Apple " + (/iPad/i.test(userAgent) ? "iPad" : "iPhone");
    } else if (/Android/i.test(userAgent)) {
      deviceType = "Android 裝置";
    }
  } else {
    deviceType = "桌面裝置";
  }

  document.getElementById("device-type").textContent = deviceType;
}

// 匯出JPG功能
function exportToJPG() {
  const element = document.getElementById("content-to-export");
  const floatBtn = document.querySelector(".float-btn");

  // 顯示載入提示
  floatBtn.innerHTML = '<i class="fas fa-spinner fa-spin text-2xl"></i>';

  const docEl = document.documentElement;
  const body = document.body;
  // 計算整頁尺寸
  const fullWidth = Math.max(body.scrollWidth, docEl.scrollWidth, body.offsetWidth, body.clientWidth);
  const fullHeight = Math.max(body.scrollHeight, docEl.scrollHeight, body.offsetHeight, body.clientHeight);

  // 使用html2canvas截圖
  html2canvas(element, {
    scale: window.devicePixelRatio, // 讓截圖解析度與螢幕一致
    // 最後輸出的畫布大小
    width: fullWidth,
    height: fullHeight,
    // html2canvas 用來繪製時模擬的視窗大小
    windowWidth: fullWidth,
    windowHeight: fullHeight,
    // 確保捕捉從 (0,0) 開始
    scrollX: 0,
    scrollY: 0,
    useCORS: false, // 跨域圖片
    allowTaint: false, // 若用CORS就不要把畫布污染
    logging: false, // 開啟除錯訊息
    foreignObjectRendering: false, // 嘗試用 foreignObject（但效能較差）
  })
    .then((canvas) => {
      // 創建下載連結
      const link = document.createElement("a");
      link.download = "瀏覽器資訊檢測_" + new Date().toISOString().slice(0, 10) + ".jpg";
      link.href = canvas.toDataURL("image/jpeg", 0.9);
      link.click();

      // 恢復按鈕狀態
      floatBtn.innerHTML = '<i class="fas fa-camera text-2xl"></i>';
    })
    .catch((err) => {
      console.error("匯出JPG失敗:", err);
      floatBtn.innerHTML = '<i class="fas fa-camera text-2xl"></i>';
      alert("匯出JPG時發生錯誤，請重試");
    });
}