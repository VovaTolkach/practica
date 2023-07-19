"use strict";

document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function() {
        const likedItems = JSON.parse(localStorage.getItem('likedItems')) || {};

        // Проходимося по всім лайкнутим товарам і додаємо клас 'liked' для відповідних товарів
        $('.like-icon').each(function() {
            const itemId = $(this).closest('.trainer-item').data('item');
            if (likedItems[itemId]) {
                $(this).addClass('liked');
            }
        });

        // Код для зміни іконки лайка при натисканні
        $('.like-icon').click(function() {
            $(this).toggleClass('liked');

            // Отримуємо data-item атрибут товару, який містить унікальний ідентифікатор
            const itemId = $(this).closest('.trainer-item').data('item');

            // Зберігаємо інформацію про лайк в local storage
            likedItems[itemId] = $(this).hasClass('liked');
            localStorage.setItem('likedItems', JSON.stringify(likedItems));

            // Оновлюємо блок liked-items-wrapper згідно стану лайків
            updateLikedItems();
        });

        // Оновлюємо блок liked-items-wrapper при завантаженні сторінки
        updateLikedItems();

        function updateLikedItems() {
            const likedItemsNames = $('.like-icon.liked').map(function() {
                return $(this).closest('.trainer-item').find('h4').text();
            }).get();

            const likedItemsList = $('#liked-items-list');

            likedItemsList.empty();

            if (likedItemsNames.length > 0) {
                for (let i = 0; i < likedItemsNames.length; i++) {
                    likedItemsList.append('<li>' + likedItemsNames[i] + '</li>');
                }

                $('.liked-items-wrapper').addClass('show');
            } else {
                $('.liked-items-wrapper').removeClass('show');
            }
        }
    })
});