chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data != "download") return;
    chrome.downloads.download({
        url: message.href,
        filename: message.path,
    });
});
