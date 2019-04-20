const script = document.createElement('script');

const qualities = {
  default: "default",
  high: "hd720",
  large: "large",
  medium: "medium",
  low: "small"
}

browser.storage.sync.get(["videoQuality"], function(result) {
  script.innerHTML = `
    let playerGV
    function onYouTubePlayerReady(e) {
      playerGV = e
      playerGV.setPlaybackQualityRange('${qualities[result.videoQuality]}', '${qualities[result.videoQuality]}')
    }
  `;

  document.addEventListener('DOMContentLoaded', function(event) {
    document.head.appendChild(script);
  });  
})