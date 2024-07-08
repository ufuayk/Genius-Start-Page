function executeCommand() {
    const query = document.getElementById('searchInput').value.trim();
    if (query.startsWith('!')) {
        const command = query.toLowerCase();
        if (command === '!today') {
            displayToday();
        } else if (command === '!useragent') {
            displayUserAgent();
        } else if (command.startsWith('!calculate')) {
            calculateResult(command);
        } else {
            switch (command) {
                case '!youtube':
                    window.location.href = 'https://www.youtube.com';
                    break;
                case '!x':
                    window.location.href = 'https://www.x.com';
                    break;
                case '!facebook':
                    window.location.href = 'https://www.facebook.com';
                    break;
                case '!instagram':
                    window.location.href = 'https://www.instagram.com';
                    break;
                case '!reddit':
                    window.location.href = 'https://www.reddit.com';
                    break;
                case '!tiktok':
                    window.location.href = 'https://www.tiktok.com';
                    break;
                case '!github':
                    window.location.href = 'https://www.github.com';
                    break;
                case '!linkedin':
                    window.location.href = 'https://www.linkedin.com';
                    break;
                case '!netflix':
                    window.location.href = 'https://www.netflix.com';
                    break;
                case '!amazon':
                    window.location.href = 'https://www.amazon.com';
                    break;
                case '!bbc':
                    window.location.href = 'https://www.bbc.com/';
                    break;
                case '!cnn':
                    window.location.href = 'https://www.cnn.com/';
                    break;
                case '!weather':
                    window.location.href = 'https://www.weather.com/';
                    break;
                case '!spotify':
                    window.location.href = 'https://www.spotify.com/';
                    break;
                case '!wiki':
                    window.location.href = 'https://www.wikipedia.org/';
                    break;
                case '!maps':
                    window.location.href = 'https://www.google.com/maps';
                    break;
                case '!stackoverflow':
                    window.location.href = 'https://www.stackoverflow.com/';
                    break;
                case '!goal':
                    window.location.href = 'https://www.goal.com/';
                    break;
                case '!espn':
                    window.location.href = 'https://www.espn.com/';
                    break;
                case '!replit':
                    window.location.href = 'https://www.replit.com/';
                    break;
                case '!discord':
                    window.location.href = 'https://www.discord.com/';
                    break;
                case '!twitch':
                    window.location.href = 'https://www.twitch.tv/';
                    break;
                case '!prime':
                    window.location.href = 'https://www.primevideo.com/';
                    break;
                case '!steam':
                    window.location.href = 'https://www.steampowered.com/';
                    break;
                case '!behance':
                    window.location.href = 'https://www.behance.net/';
                    break;
                case '!gpt':
                    window.location.href = 'https://www.chatgpt.com/';
                    break;
                case '!nytimes':
                    window.location.href = 'https://www.nytimes.com/';
                    break;
                case '!soundcloud':
                    window.location.href = 'https://www.soundcloud.com/';
                    break;
                case '!help':
                    window.location.href = 'https://github.com/CoderYello/genius-start-page';
                    break;
                case '!yello':
                    window.location.href = 'https://github.com/CoderYello';
                    break;
                case '!easteregg':
                    alert('.-- .... .- - .----. ... / ..- .--. ..--..');
                    break;
                default:
                    alert('Invalid command!');
                    break;
            }
        }
    } else if (query.startsWith(':duckduckgo')) {
        const searchQuery = query.replace(':duckduckgo', '').trim();
        searchDuckDuckGo(searchQuery);
    } else {
        searchGoogle(query);
    }
}

function searchGoogle(query) {
    if (query !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

function calculateResult(command) {
    const expression = command.replace('!calculate', '').trim();
    if (/^[0-9+\-*/().\s]+$/.test(expression)) {
        try {
            const result = new Function(`'use strict'; return (${expression})`)();
            document.getElementById('searchInput').value = result;
            setTimeout(() => {
                document.getElementById('searchInput').value = '';
            }, 2000);
        } catch (e) {
            alert('Invalid calculation!');
        }
    } else {
        alert('Invalid calculation!');
    }
}

function displayToday() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    const searchInput = document.getElementById('searchInput');
    searchInput.value = formattedDate;
    setTimeout(() => {
        searchInput.value = '';
    }, 2000);
}

function displayUserAgent() {
    const userAgent = navigator.userAgent;
    const searchInput = document.getElementById('searchInput');
    searchInput.value = userAgent;
    setTimeout(() => {
        searchInput.value = '';
    }, 2000);
}

function searchDuckDuckGo(query) {
    if (query !== '') {
        window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    }
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        executeCommand();
    }
});

document.getElementById('searchIcon').addEventListener('click', function() {
    executeCommand();
});