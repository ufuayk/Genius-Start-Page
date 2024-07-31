function executeCommand() {
    const query = document.getElementById('searchInput').value.trim();
    if (query.startsWith('!')) {
        const command = query.toLowerCase();
        if (command === '!today') {
            displayToday();
        } else if (command === '!time') {
            displayTime();
        } else if (command === '!useragent') {
            displayUserAgent();
        } else if (command.startsWith('!define')) {
            defineWord(command);
        } else if (command.startsWith('!calculate')) {
            calculateResult(command);
        } else if (command.startsWith('!weather-city')) {
            weatherCity(command);
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
                case '!pinterest':
                    window.location.href = 'https://pinterest.com/';
                    break;
                case '!gitlab':
                    window.location.href = 'https://gitlab.com/';
                    break;
                case '!ign':
                    window.location.href = 'https://ign.com/';
                    break;
                case '!forbes':
                    window.location.href = 'https://forbes.com/';
                    break;
                case '!cnbc':
                    window.location.href = 'https://cnbc.com/';
                    break;
                case '!booking':
                    window.location.href = 'https://booking.com/';
                    break;
                case '!holidays':
                    window.location.href = 'https://www.timeanddate.com/holidays/';
                    break
                case '!wordle':
                    window.location.href = 'https://www.nytimes.com/games/wordle/index.html';
                    break
                case '!wordle-tr':
                    window.location.href = 'https://wordleturkce.bundle.app/';
                    break
                case '!help':
                    window.location.href = 'https://github.com/CoderYello/genius-start-page';
                    break;
                case '!yello':
                    window.location.href = 'https://github.com/CoderYello';
                    break;
                case '!easteregg':
                    alert('.-- .... .- - .----. ... / ..- .--. ..--..');
                    break;
                case '!darkmode':
                    setMode('dark');
                    break;
                case '!whitemode':
                    setMode('light');
                    break;
                default:
                    alert('Invalid command!');
                    break;
            }
        }
    } else if (query.startsWith(':duckduckgo')) {
        const searchQuery = query.replace(':duckduckgo', '').trim();
        searchDuckDuckGo(searchQuery);
    } else if (query.startsWith(':yandex')) {
        const searchQuery = query.replace(':yandex', '').trim();
        searchYandex(searchQuery);
    } else if (query.startsWith(':bing')) {
        const searchQuery = query.replace(':bing', '').trim();
        searchBing(searchQuery);
    } else if (query.startsWith(':yahoo')) {
        const searchQuery = query.replace(':yahoo', '').trim();
        searchYahoo(searchQuery);
    } else if (query.startsWith(':wiki')) {
        const searchQuery = query.replace(':wiki', '').trim();
        searchWikipedia(searchQuery);
    } else if (query.startsWith(':yt')) {
        const searchQuery = query.replace(':yt', '').trim();
        searchYoutube(searchQuery);
    } else {
        searchGoogle(query);
    }
}

function searchGoogle(query) {
    if (query !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

function searchDuckDuckGo(query) {
    if (query !== '') {
        window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    }
}

function searchYandex(query) {
    if (query !== '') {
        window.location.href = `https://yandex.com/search/?text=${encodeURIComponent(query)}`;
    }
}

function searchBing(query) {
    if (query !== '') {
        window.location.href = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    }
}

function searchYahoo(query) {
    if (query !== '') {
        window.location.href = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
    }
}

function searchWikipedia(query) {
    if (query !== '') {
        window.location.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(query)}`;
    }
}

function searchYoutube(query) {
    if (query !== '') {
        window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
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

function weatherCity(command) {
    const city = command.replace('!weather-city','').trim();
    if (city) {
        const url = `https://openweathermap.org/find?q=${encodeURIComponent(city)}`;
        window.location.href = url;
    } else {
        alert('Please enter a city name after the command!')
    }
}

function defineWord(command) {
    const define = command.replace('!define','').trim();
    if (define) {
        const url = `https://www.merriam-webster.com/dictionary/${encodeURIComponent(define)}`;
        window.location.href = url;
    } else {
        alert('Please enter a city name after the command!')
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

function displayTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const searchInput = document.getElementById('searchInput');
    searchInput.value = timeString;
    
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

function setMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('mode', mode);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        executeCommand();
    }
});

document.getElementById('searchIcon').addEventListener('click', function() {
    executeCommand();
});
