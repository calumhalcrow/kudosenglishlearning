$(function() {
    var contact_form = $('#contact-form').hide();
    $('#throbber').hide();

    $('#show-contact, a[href*="#contact"]').click( function() {
        $.scrollTo('100%');
        contact_form.show(500, function() {
            $.scrollTo('100%');
        });
        return false;
    });

    $('#hide-contact').click( function() {
        contact_form.hide(500);
        return false;
    });

    $('#contact-form').submit(handle_contact_submission);
});

function handle_contact_submission() {

    var form = $(this);

    // client-side checks
    if (highlight_empty_required_fields(form))
    {
        return false;
    }

    form.find('input[type=submit]').hide();
    var throbber = $('#throbber').show();

    $.post(
        form.attr('action'),
        form.serialize(),
        function(response_body) {
            throbber.hide();
            if (response_body == 'success') {
                form.hide('slow');
                form.before(
                    $('<p>')
                    .attr('id', 'success')
                    .text("Your message has been received and we'll get back to you shortly.")
                );
            }
            else {
                form.find('input[type=submit]').show();
                if (response_body == 'error') {
                    form.find('input[type=submit]').show();
                    highlight_empty_required_fields(form);
                }
                else if (!$('#unexpected_error').size()) {
                    form.before(
                        $('<p>')
                        .attr('id', 'unexpected_error')
                        .text('An unexpected error occurred. Please try to submit the form again.')
                    );
                }
            }
        }
    );
    return false;
}

function highlight_empty_required_fields(form) {
    form.find('#name, #email, #message').each(function() {
        var elt = $(this);
        if (!elt.val()) {
            elt.addClass('empty');
        }
        else {
            elt.removeClass('empty');
        }
    });
    if (form.find('.empty').size())
    {
        if (!form.find('#required_error').size())
        {
            form.find('p:first').append(
                $('<p>')
                .attr('id', 'required_error')
                .text('Some required fields have not been completed.')
            )
        }
        $.scrollTo('100%');
        return true;
    }
    return false;
}
