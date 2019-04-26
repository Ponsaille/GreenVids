const script = document.createElement('script');

const qualities = {
  default: "default",
  high: "hd720",
  large: "large",
  medium: "medium",
  low: "small"
}

browser.storage.sync.get(["videoQuality", "music"], function(result) {
  if(result.music) {
    script.innerHTML = `
      let playerGV
      function onYouTubePlayerReady(e) {
        playerGV = e
        let qualities = playerGV.getAvailableQualityLevels()
        playerGV.setPlaybackQualityRange(qualities[qualities.length - 2], qualities[qualities.length - 2])
      }
    `;
  } else {
    script.innerHTML = `
      let playerGV
      console.log('hey2');
      function onYouTubePlayerReady(e) {
        playerGV = e
        playerGV.setPlaybackQualityRange('tiny', '${qualities[result.videoQuality]}')
      }
    `;
  }

  document.addEventListener('DOMContentLoaded', function(event) {
    document.head.appendChild(script);
  });  
})