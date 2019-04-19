const script = document.createElement('script');

const qualities = {
  high: "720",
  large: "480",
  medium: "380",
  low: "240"
}

chrome.storage.sync.get(["videoQuality"], function(result) {

  if(result.videoQuality == "default") {
    script.innerHTML = `
      localStorage.removeItem('dmp_quality')
    `
  } else {
    script.innerHTML = `
      localStorage.setItem('dmp_quality', '{"expires":${Date.now()+1000*60*60},"data":"${qualities[result.videoQuality]}"}')
    `
  }

  document.addEventListener('DOMContentLoaded', function(event) {
    document.head.appendChild(script);
  });

});