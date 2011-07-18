$(function() {
    var contact_form = $('#contact-form');

    contact_form.hide();

    $('#show-contact').click( function() {
        $.scrollTo('100%');
        contact_form.show(500, function() {
            $.scrollTo('100%');
        });
        return false;
    });

    $('#hide-contact').click( function() {
        contact_form.hide(1000);
        return false;
    });
});
