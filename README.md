# Extension Name
Video Playback Speed Control

# Description
This Chrome extension allows you to increase the playback speed of videos on web pages using a simple script. <br/>
The script is designed to work on pages where videos are played using the HTML5 video player.

# Installation
To install the extension, follow these steps:

1) Download the script code and unpack it

2) Open the Chrome browser and navigate to the Extensions settings page by clicking the three-dot menu in the top-right corner of the browser window and selecting "More tools" > "Extensions".

3) On the Extensions settings page, click the "Load unpacked" button and select the folder containing the script code.

# Usage
To use the extension, follow these steps:

Navigate to a web page containing a video that you want to speed up.

Open the Chrome DevTools by pressing `F12` or `Ctrl+Shift+I`.

Navigate to the "Console" tab.

Copy and paste the script code into the console.

Press Enter to execute the script.

The video should start playing at an increased speed.

# Script Code
``` javascript
// select the video element
let videoBlock = document.querySelector('.html5-main-video');

console.log(`${videoBlock} is loaded`);

let speedBy = 0.1;     // + Speed
let speedEvery = 0.1;  // Time in minutes
let speedLimit = 4;

const minute = 1000 * 60;

setInterval(()=>{
  if(videoBlock.playbackRate < speedLimit){
    videoBlock.playbackRate += speedBy;
  }
}, speedEvery * minute);
```

This script selects the video element using the query selector .html5-main-video. <br/>
It then sets the initial playback speed increase rate to 0.1 and the time interval between speed increases to 0.1 minutes. <br/> 
The maximum playback speed limit is set to 4.

The script uses setInterval() to check the playback rate of the video every speedEvery minutes (in this case, every 6 seconds). If the playback rate is less than the maximum speed limit, it increases the playback rate by speedBy (in this case, 0.1).# youtube_speeder
