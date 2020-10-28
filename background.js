chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, { // defaults to the current tab
        file: "download.js", // script to inject into page and run in sandbox
        allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
    });
});