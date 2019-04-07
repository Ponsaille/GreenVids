const script = document.createElement('script');

script.innerHTML = `
  let videoQualityGV = localStorage.getItem('video-quality');
  localStorage.setItem('video-quality', '{"default":"480p30","clips":"480p30"}')
`


document.addEventListener('DOMContentLoaded', function(event) {
  document.head.appendChild(script);
});
