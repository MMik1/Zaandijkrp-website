document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search');
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');

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

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();

       
        switch (searchTerm) {
            case 'nieuws':
                window.location.href = 'pages/nieuws.html';
                break;
          
            case 'main':
                window.location.href = 'pages/main.html';
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
});
