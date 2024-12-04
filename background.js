chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed and service worker is active!");
});

chrome.action.onClicked.addListener((tab) => {
  alert('Extension icon clicked!');
});
