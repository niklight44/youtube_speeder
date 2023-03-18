  // Script.js

  // select the video element
  let videoBlock = document.querySelector('.html5-main-video');

  console.log(`${videoBlock} is loaded`);

  let speedBy = 0.1;
  let speedEvery = 0.5;
  let speedLimit = 4;

  const minute = 1000 * 60;

  let changeVideoSpeedInterval;

  // update speedBy and speedEvery when chrome.storage.local changes
  chrome.storage.local.onChanged.addListener(function(changes, areaName) {
    if ("speedBy" in changes) {
      speedBy = changes.speedBy.newValue;
      clearInterval(changeVideoSpeedInterval);
      changeVideoSpeedInterval = createChangeVideoSpeedInterval(speedBy, speedEvery, speedLimit);
    }
    if ("speedEvery" in changes) {
      speedEvery = changes.speedEvery.newValue;
      clearInterval(changeVideoSpeedInterval);
      changeVideoSpeedInterval = createChangeVideoSpeedInterval(speedBy, speedEvery, speedLimit);
    }
  });

  // get initial values of speedBy and speedEvery
  chrome.storage.local.get(["speedBy", "speedEvery"]).then((result) => {
    if(!result.speedBy & !result.speedEvery){
      return
    }
    speedBy = result.speedBy;
    speedEvery = result.speedEvery;
    console.log(`SpeedBy: ${speedBy}, SpeedEvery: ${speedEvery}`);
    changeVideoSpeedInterval = createChangeVideoSpeedInterval(speedBy, speedEvery, speedLimit);
  });

  function createChangeVideoSpeedInterval(speedBy, speedEvery, speedLimit) {
    clearInterval(changeVideoSpeedInterval);
    return setInterval(()=>{
      console.log(`PlaybackRate before increasing is ${videoBlock.playbackRate}`);
      console.log(`SpeedBy is ${speedBy}, SpeedEvery is ${speedEvery}`);
      if(videoBlock.playbackRate < speedLimit){
        videoBlock.playbackRate = parseFloat(videoBlock.playbackRate) + parseFloat(speedBy);
        console.log(`PlaybackRate now is ${videoBlock.playbackRate}`);
      }
    }, speedEvery * minute);
  }




