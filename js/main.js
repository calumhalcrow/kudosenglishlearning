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

    $('#contact-form').submit( function() {

        // client-side checks
        var form = $(this);
        form.find('#name, #email, #message').each(function() {
            var elt = $(this);
            if (!elt.val()) {
                elt.addClass('empty');
            }
            else {
                elt.removeClass('empty');
            }
        });
        if (form.find('.empty').index() != -1)
        {
            if (form.find('#required_error').index() == -1)
            {
                form.find('p:first').append(
                    $('<p>')
                    .attr('id', 'required_error')
                    .text('Some required fields have not been completed.')
                );
            }
        }

        return false;
    });
});
