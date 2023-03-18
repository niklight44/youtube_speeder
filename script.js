// select the video element
let videoBlock = document.querySelector('.html5-main-video');

console.log(`${videoBlock} is loaded`);

let speedBy = 0.5;
let speedEvery = 0.1;
let speedLimit = 4;

const minute = 1000 * 60;

setInterval(()=>{
  if(videoBlock.playbackRate < speedLimit){
    videoBlock.playbackRate += speedBy;
  }
}, speedEvery * minute);
