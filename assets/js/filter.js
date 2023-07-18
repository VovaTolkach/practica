document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.querySelector('.header-filter'),
        dropdownMenu = document.querySelector('.filtered-menu'),
        reworkMenu = document.querySelector('.reworkedMenu'),
        moreBtn = document.querySelector('.reworkThis');
    let timer;
    function showDropdown(btn, menu) {
        btn.addEventListener('mouseenter', (e) => {
            clearTimeout(timer);
            menu.style.display = 'block';
        });
    }

    function hideDropdown(menu) {
        menu.addEventListener('mouseleave', (e) => {
            timer = setTimeout(() => {
                menu.style.display = 'none';
            }, 200);
        });
    }

    showDropdown(filterBtn, dropdownMenu);
    hideDropdown(dropdownMenu);
    showDropdown(moreBtn, reworkMenu);
    hideDropdown(reworkMenu);
});