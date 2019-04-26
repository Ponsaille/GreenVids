window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

const qualitySelect = document.getElementById("quality");
const musicCheckbox = document.getElementById("music");

// Setting the selector to the original video quality and music mode
browser.storage.sync.get(["videoQuality", "music"], function(result) {
  qualitySelect.value = result.videoQuality;
  musicCheckbox.checked = result.music;
})


// Store the value of the quality when the user interacts with the select
qualitySelect.addEventListener("change", (e) => {
  browser.storage.sync.set({videoQuality: e.target.value}, function() {
    console.log("The quality is " + e.target.value);
  });
});

// Toggleling music mode
musicCheckbox.addEventListener("change", (e) => {
  browser.storage.sync.set({music: e.target.checked}, function() {
    console.log("The music mode is " + e.target.checked);
  });
});