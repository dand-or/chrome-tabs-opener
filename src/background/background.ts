chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'CONTENT') {
    console.log(request.payload.message);
    sendResponse({});
  }
  return true;
});
