document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.querySelector('.menu-btn');
    var navList = document.querySelector('.nav-list');

    menuBtn.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
