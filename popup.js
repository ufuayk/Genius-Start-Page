document.addEventListener('DOMContentLoaded', () => {
    const helpBtn = document.getElementById('helpBtn');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleText = document.getElementById('toggleText');

    helpBtn.addEventListener('click', () => {
        chrome.tabs.create({ url: 'https://ufuk.bearblog.dev/help/' });
    });

    chrome.storage.local.get(['isDisabled'], (result) => {
        if (result.isDisabled) {
            toggleText.textContent = 'Enable Extension';
            toggleBtn.classList.remove('primary');
            toggleBtn.classList.add('secondary');
        }
    });

    toggleBtn.addEventListener('click', () => {
        chrome.storage.local.get(['isDisabled'], (result) => {
            const newState = !result.isDisabled;
            chrome.storage.local.set({ isDisabled: newState }, () => {
                if (newState) {
                    toggleText.textContent = 'Enable Extension';
                    toggleBtn.classList.remove('primary');
                    toggleBtn.classList.add('secondary');
                } else {
                    toggleText.textContent = 'Disable Extension';
                    toggleBtn.classList.remove('secondary');
                    toggleBtn.classList.add('primary');
                }
            });
        });
    });
}); 