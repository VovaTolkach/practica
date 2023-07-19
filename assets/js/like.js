// Отримуємо інформацію про лайкнуті товари з local storage
var likedItems = JSON.parse(localStorage.getItem('likedItems')) || {};

$(document).ready(function() {
    // Проходимося по всім лайкнутим товарам і додаємо клас 'liked' для відповідних товарів
    $('.like-icon').each(function() {
        var itemId = $(this).closest('.trainer-item').data('item');
        if (likedItems[itemId]) {
            $(this).addClass('liked');
        }
    });

    // Код для зміни іконки лайка при натисканні
    $('.like-icon').click(function() {
        $(this).toggleClass('liked');

        // Отримуємо data-item атрибут товару, який містить унікальний ідентифікатор
        var itemId = $(this).closest('.trainer-item').data('item');

        // Зберігаємо інформацію про лайк в local storage
        likedItems[itemId] = $(this).hasClass('liked');
        localStorage.setItem('likedItems', JSON.stringify(likedItems));

        // Оновлюємо блок liked-items-wrapper згідно стану лайків
        updateLikedItems();
    });

    // Оновлюємо блок liked-items-wrapper при завантаженні сторінки
    updateLikedItems();
});

function updateLikedItems() {
    var likedItems = $('.like-icon.liked').map(function() {
        return $(this).closest('.trainer-item').find('h4').text();
    }).get();

    var likedItemsList = $('#liked-items-list');

    likedItemsList.empty();

    if (likedItems.length > 0) {
        for (var i = 0; i < likedItems.length; i++) {
            likedItemsList.append('<li>' + likedItems[i] + '</li>');
        }

        $('.liked-items-wrapper').addClass('show');
    } else {
        $('.liked-items-wrapper').removeClass('show');
    }
}