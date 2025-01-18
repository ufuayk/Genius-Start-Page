chrome.tabs.onCreated.addListener((tab) => {
  chrome.storage.local.get(['isDisabled'], (result) => {
    if (result.isDisabled && (tab.pendingUrl === 'chrome://newtab/' || tab.url === 'chrome://newtab/')) {
      chrome.tabs.update(tab.id, { url: 'chrome://new-tab-page' });
    }
  });
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.isDisabled) {
    const isDisabled = changes.isDisabled.newValue;
    
    chrome.tabs.query({ url: ['chrome://newtab/*', 'chrome://new-tab-page/*'] }, (tabs) => {
      tabs.forEach(tab => {
        if (isDisabled) {
          chrome.tabs.update(tab.id, { url: 'chrome://new-tab-page' });
        } else {
          chrome.tabs.update(tab.id, { url: 'chrome://newtab' });
        }
      });
    });
  }
}); 