chrome.storage.local.get(['isDisabled'], (result) => {
    const extensionContent = document.getElementById('extensionContent');
    const disabledMessage = document.getElementById('disabledMessage');
    
    if (result.isDisabled) {
        extensionContent.style.display = 'none';
        disabledMessage.style.display = 'block';
    } else {
        extensionContent.style.display = 'block';
        disabledMessage.style.display = 'none';
    }
});

chrome.storage.onChanged.addListener((changes) => {
    if (changes.isDisabled) {
        const extensionContent = document.getElementById('extensionContent');
        const disabledMessage = document.getElementById('disabledMessage');
        
        if (changes.isDisabled.newValue) {
            extensionContent.style.display = 'none';
            disabledMessage.style.display = 'block';
        } else {
            extensionContent.style.display = 'block';
            disabledMessage.style.display = 'none';
        }
    }
}); 