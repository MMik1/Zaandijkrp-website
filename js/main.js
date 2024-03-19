document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search');
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    const ipButton = document.querySelector('.button-33'); // IP Address button

    // Search icon functionality
    searchIcon.addEventListener('click', function () {
        searchContainer.classList.toggle('active');
        const isActive = searchContainer.classList.contains('active');

        if (isActive) {
            searchInput.style.width = '300px';
            searchInput.style.opacity = '1';
            searchInput.style.position = 'relative';
            searchInput.style.zIndex = '1';
            searchInput.focus();
        } else {
            searchInput.style.width = '0';
            searchInput.style.opacity = '0';
            searchInput.style.position = 'absolute';
            searchInput.style.zIndex = '-1';
        }
    });

    // Search form functionality
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();

        switch (searchTerm) {
            case 'nieuws':
                window.location.href = 'pages/nieuws.html';
                break;
            case 'home':
                window.location.href = 'index.html';
                break;
            case 'shop':
                window.location.href = 'pages/shop.html';
                break;
            case 'contacten':
                window.location.href = 'pages/contacten.html';
                break;
            case 'credits':
                window.location.href = 'pages/credits.html';
                break;
            default:
                alert('Zoek opdracht niet gevonden.');
                break;
        }
    });

    // IP Address copy functionality
    if (ipButton) {
        ipButton.addEventListener('click', function () {
            const ipToCopy = this.getAttribute('data-ip');
            navigator.clipboard.writeText(ipToCopy).then(() => {
                alert('IP Address gecopieerd: ' + ipToCopy);
            }, () => {
                alert('Niet gelukt om IP-adres te kopiëren');
            });
        });
    }

    // Steam OpenID link generation function
    function generateSteamOpenIDLink(returnUrl, realmUrl) {
        const steamOpenIDUrl = 'https://steamcommunity.com/openid/login';
        const parameters = {
            'openid.ns': 'http://specs.openid.net/auth/2.0',
            'openid.mode': 'checkid_setup',
            'openid.return_to': returnUrl,
            'openid.realm': realmUrl
        };
    
        // Build the query string based on the parameters
        const queryString = Object.keys(parameters)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]))
            .join('&');
    
        // Combine the base URL with the query string to get the full URL
        const openidUrl = steamOpenIDUrl + '?' + queryString;
    
        return openidUrl;
    }

    // Example usage for a localhost website
    const returnUrl = 'http://127.0.0.1:5500/Index.html/auth/steam'; // Replace with your own return URL on localhost
    const realmUrl = 'http://127.0.0.1:5500/Index.html'; // Replace with your localhost website URL
    const steamOpenIDLink = generateSteamOpenIDLink(returnUrl, realmUrl);
    console.log(steamOpenIDLink); // This will display the generated Steam OpenID link in the console

    function showDescription(descriptionId) {
        var descriptionBox = document.getElementById(descriptionId);
        descriptionBox.style.display = "block";
    }
    
    function hideDescription() {
        var descriptionBoxes = document.querySelectorAll(".news-description-box");
        descriptionBoxes.forEach(function(box) {
            box.style.display = "none";
        });
    }
});
