const qualitySelect = document.getElementById("quality");

// Setting the selector to the original video quality
chrome.storage.sync.get(["videoQuality"], function(result) {
  qualitySelect.value = result.videoQuality;
})


// Store the value of the quality when the user interacts with the select
qualitySelect.addEventListener("change", (e) => {
  chrome.storage.sync.set({videoQuality: e.target.value}, function() {
    console.log("The quality is " + e.target.value);
  });
});