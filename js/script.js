
### `script.js`
```javascript
// JavaScript for Navigation Tabs
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab
    const selectedTab = document.querySelector(`.${tabName}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// Default to the home tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});
