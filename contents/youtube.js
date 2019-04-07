const script = document.createElement('script');

script.innerHTML = `
let playerGV
function onYouTubePlayerReady(e) {
  playerGV = e
  playerGV.setPlaybackQualityRange('large', 'large')
}
`


document.addEventListener('DOMContentLoaded', function(event) {
  document.head.appendChild(script);
});
