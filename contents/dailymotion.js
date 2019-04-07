const script = document.createElement('script');

script.innerHTML = `
  let videoQualityGV = localStorage.getItem('video-quality');
  localStorage.setItem('dmp_quality', '{"expires":${Date.now()+1000*60*60},"data":"480"}')
`


document.addEventListener('DOMContentLoaded', function(event) {
  document.head.appendChild(script);
});
