let by = document.querySelector('#by');
let every  = document.querySelector('#every');
let toggleButton = document.querySelector('.switch input');
let slider = document.querySelector('.slider');

// Retrieve values from chrome.storage.local and set them as the initial values for the input elements
chrome.storage.local.get(["speedBy", "speedEvery"], function(result) {
  by.value = result.speedBy || by.value;
  every.value = result.speedEvery || every.value;
  
  // Set the retrieved values to chrome.storage.local
  chrome.storage.local.set({ "speedBy": by.value, "speedEvery": every.value, "speedLimit": 4});
});

// Listeners
by.addEventListener("change", ()=>{
  chrome.storage.local.set({ "speedBy": by.value, "speedEvery": every.value, "speedLimit": 4});
});

every.addEventListener("change", ()=>{
  chrome.storage.local.set({ "speedBy": by.value, "speedEvery": every.value, "speedLimit": 4});
});

toggleButton.addEventListener('change', function() {
  if (toggleButton.checked) {
    slider.style.backgroundColor = '#4CAF50';
  } else {
    slider.style.backgroundColor = '#ccc';
  }
});
