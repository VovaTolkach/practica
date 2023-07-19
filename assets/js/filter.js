"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.querySelector('.header-filter'),
        filterMenu = document.querySelector('#filterMenu'), // Використовуємо id
        reworkMenu = document.querySelector('#moreMenu'), // Використовуємо id
        moreBtn = document.querySelector('.reworkThis');
    let filterTimer, moreTimer;

    function showDropdown(btn, menu, timerRef) {
        btn.addEventListener('mouseenter', () => {
            clearTimeout(timerRef);
            menu.style.display = 'block';
        });

        btn.addEventListener('mouseleave', () => {
            timerRef = setTimeout(() => {
                const isCursorOnMenu = menu.matches(':hover');
                if (!isCursorOnMenu) {
                    menu.style.display = 'none';
                }
            }, 200);
        });

        menu.addEventListener('mouseenter', () => {
            clearTimeout(timerRef);
        });

        menu.addEventListener('mouseleave', () => {
            timerRef = setTimeout(() => {
                menu.style.display = 'none';
            }, 200);
        });
    }

    // Обробка подій курсора для меню
    showDropdown(filterBtn, filterMenu, filterTimer);
    showDropdown(moreBtn, reworkMenu, moreTimer);
});