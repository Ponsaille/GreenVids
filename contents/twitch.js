const script = document.createElement('script');

const qualities = {
  high: "720p30",
  large: "480p30",
  medium: "360p30",
  low: "160p30"
}

browser.storage.sync.get(["videoQuality", "music"], function(result) {
  let quality = result.music ? "low" : result.videoQuality;

  if(quality == "default") {
    // Removing the local storage is the same as setting the video quality as default
    script.innerHTML = `
      localStorage.removeItem('video-quality')
    `
  } else {
    script.innerHTML = `
      localStorage.setItem('video-quality', '{"default":"${qualities[quality]}","clips":"${qualities[quality]}"}')
    `
  }


  document.addEventListener('DOMContentLoaded', function(event) {
    document.head.appendChild(script);
  });
});
