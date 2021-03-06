$('#contact-form-submit').click(function(e) {
    e.preventDefault();
    var contactName = $('#contact-name').val();
    var contactEmail = $('#contact-email').val();
    var contactNumber = $('#contact-number').val();
    var contactPurpose = $('#contact-purpose').val();
    // data validation code here
    var url = "//docs.google.com/forms/d/16S1tuPQY_g0atfjLNnGxv5vyo3BiWThXoYchwOArXy0/formResponse";
    https://docs.google.com/forms/d/e/1FAIpQLSdMYeNkdueEeG6NAXc_TfOD9ts3KTCkSilAA_NrtJkxtXZzGg/viewform
    var data = {
        'entry.976136711': contactName,
        'entry.1715736389': contactEmail,
        'entry.261050291': contactNumber,
        'entry.177081687': contactPurpose,
    };
    $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            statusCode: {
                    0: function() {
                            console.log("unknown");
                            window.location.href = "contact_confirm/index.html";
                    },
                    200: function() {
                            console.log("success");
                            window.location.href = "contact_confirm/index.html";
                    }
            }
    });
});