chrome.runtime.onMessage.addListener((data) => {
    if (data.type === "notification") {
        chrome.notifications.create("contest-alert", data.options);
    }
});
