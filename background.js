window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

// On installation set the quality at medium
browser.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({videoQuality: 'large'}, function() {
    console.log("The quality is large.");
  });
});