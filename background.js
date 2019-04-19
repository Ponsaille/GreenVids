// On installation set the quality at medium
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({videoQuality: 'large'}, function() {
    console.log("The quality is large.");
  });
});