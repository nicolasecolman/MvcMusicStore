/// <reference path="jquery-1.4.4-vsdoc.js" />
$(function () {
    $("#genreDialog").dialog({
        autoOpen: false,
        width: 480,
        height: 250,
        modal: true,
        title: 'Add Genre',
        modal: true,
        buttons: {
            'Save': function () {
                var createGenreForm = $("#createGenreForm");

                if (createGenreForm.valid()) {
                    $.post(createGenreForm.attr('action'), createGenreForm.serialize(), function (data) {
                        try {
                            if (data.Error != '' && data.Error != undefined) {
                                var errorMsg = "";
                                for (var i = 0; i < data.Error.length; i++) {
                                    errorMsg += data.Error[i].ErrorMessage + "\n";
                                }
                                alert(errorMsg);
                            }
                            else {
                                //Note: prop method is not supported in jquery-1.4.4
                                $("#GenreId").append(
                                    $("<option></option>")
                                    .val(data.Genre.GenreId)
                                    .html(data.Genre.Name)
                                    .attr("selected", true)
                                     );

                                $("#genreDialog").dialog('close');
                            }
                        } catch (e) { alert(e); }
                    });
                }
            },
            'Cancel': function () {
                $(this).dialog('close');
            }
        }

    });

});

$('#genreAddLink').click(function () {

    var createFormUrl = $(this).attr('href');

    $('#genreDialog').html('')

    .load(createFormUrl, function () {

        // The createGenreForm is loaded on the fly using jQuery load. 

        // In order to have client validation working it is necessary to tell the 

        // jQuery.validator to parse the newly added content

        jQuery.validator.unobtrusive.parse('#createGenreForm');

        $('#genreDialog').dialog('open');

    });



    return false;

});