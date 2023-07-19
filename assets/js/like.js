$(document).ready(function() {
    // Код для зміни іконки лайка при натисканні
    $('.like-icon').click(function() {
        $(this).toggleClass('liked');

        // Оновлюємо блок liked-items-wrapper згідно стану лайків
        updateLikedItems();
    });
});

function updateLikedItems() {
    var likedItems = $('.like-icon.liked').map(function() {
        return $(this).parent().siblings('.down-content').find('h4').text();
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
