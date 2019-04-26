const script = document.createElement('script');

const qualities = {
  high: "720",
  large: "480",
  medium: "380",
  low: "240",
  lowest: '144'
}

browser.storage.sync.get(["videoQuality", "music"], function(result) {
  let quality = result.music ? "large" : result.videoQuality;

  if(quality == "default") {
    // Removing the local storage is the same as setting the video quality as default
    script.innerHTML = `
      localStorage.removeItem('dmp_quality')
    `
  } else {
    // Saving the videoquality for one day
    script.innerHTML = `
      localStorage.setItem('dmp_quality', '{"expires":${Date.now()+1000*60*60*24},"data":"${qualities[quality]}"}')
    `
  }

  document.addEventListener('DOMContentLoaded', function(event) {
    document.head.appendChild(script);
  });

});