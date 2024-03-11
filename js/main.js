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
                alert('IP Address gecopyieerd: ' + ipToCopy);
            }, () => {
                alert('Niet gelukt om ip-addres te copyen');
            });
        });
    }
});
