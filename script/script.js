
function addItemToList() {
    // Get name of the item
    var itemName = $('#new-todo').val();

    // Create a new li for item
    var checkbox = $('<input>').attr('type', 'checkbox');
    var itemLi = $('<li>');
    itemLi.append(checkbox).append(itemName);

    var list = $('.item-list');
    list.append(itemLi);

    // Clear the input
    $('#new-todo').val('');
}

function markItemAsDone(e) {
    var itemLi = $(e.target).parent();
    itemLi.toggleClass('done');
}

$(function() {
    // Listen for form submit
    $('.add-todo').on('submit', function(e) {
        e.preventDefault();
        addItemToList(e);
    });

    $('input[type="checkbox"]').on('click', function(e) {
        markItemAsDone(e);
    });
});