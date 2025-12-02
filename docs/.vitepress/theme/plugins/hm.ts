import { inBrowser } from 'vitepress';

// 百度统计已禁用，如需启用请填入自己的统计 ID
const SITE_ID = '';

declare global {
  interface Window {
    _hmt: any;
  }
}

function registerAnalytics() {
  // 如果没有配置统计 ID，则不进行设置
  if (!SITE_ID) {
    return;
  }
  window._hmt = window._hmt || [];
  const script = document.createElement('script');
  script.innerHTML = `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?${SITE_ID}";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })()`;
  document.querySelector('head')?.append(script);
}

export function initHmPlugin() {
  if (inBrowser && import.meta.env.PROD) {
    registerAnalytics();
  }
}
