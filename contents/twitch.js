const script = document.createElement('script');

const qualities = {
  high: "720p30",
  large: "480p30",
  medium: "360p30",
  low: "160p30"
}

chrome.storage.sync.get(["videoQuality"], function(result) {

  if(result.videoQuality == "default") {
    script.innerHTML = `
      localStorage.removeItem('video-quality')
    `
  } else {
    script.innerHTML = `
      localStorage.setItem('video-quality', '{"default":"${qualities[result.videoQuality]}","clips":"${qualities[result.videoQuality]}"}')
    `
  }


  document.addEventListener('DOMContentLoaded', function(event) {
    document.head.appendChild(script);
  });
});
