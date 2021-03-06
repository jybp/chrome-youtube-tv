function fn(x) {
  for (var header of x.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = "Mozilla/5.0 (SmartHub; SMART-TV; U; Linux/SmartTV) AppleWebKit/531.2+ (KHTML, Like Gecko) WebBrowser/1.0 SmartTV Safari/531.2+";
    }
  }
  return { requestHeaders: x.requestHeaders };
}

chrome.webRequest.onBeforeSendHeaders.addListener(fn, { urls: ["*://*.youtube.com/tv*"] }, ["blocking", "requestHeaders"]);

chrome.browserAction.onClicked.addListener(function (e) {
  window.open("http://www.youtube.com/tv", "_blank")
});