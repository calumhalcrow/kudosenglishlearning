$(function() {
    var contact_form = $('#contact-form');

    contact_form.hide();

    $('#show-contact').click( function() {
        contact_form.show('slow');
        return false;
    });

    $('#hide-contact').click( function() {
        contact_form.hide('slow');
        return false;
    });
});
