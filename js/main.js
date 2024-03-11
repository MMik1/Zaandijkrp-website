document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchIcon.addEventListener('click', function () {
        searchContainer.classList.toggle('active');

        if (searchContainer.classList.contains('active')) {
            searchInput.style.width = '300px'; // Adjust the width as needed
            searchInput.focus();
        } else {
            searchInput.style.width = '0';
        }
    });

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const searchTerm = searchInput.value.toLowerCase();

        // Your logic for handling the search term...

        // For example, you can add a console log for testing:
        console.log('Search term:', searchTerm);
    });
});
