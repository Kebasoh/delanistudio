$(document).ready(function () {
    $('#toggle').click(function () {
        $('#p1').show();
    });
    $('#toggle').click(function () {
        $('#toggle').hide();
    });

    $('#p1').click(function () {
        $('#toggle').show();
    });
    $('#p1').click(function () {
        $('#p1').hide();
    }); 
    $('#toggle2').click(function () {
        $('#p2').show();
    });
    $('#toggle2').click(function () {
        $('#toggle2').hide();
    });

    $('#p2').click(function () {
        $('#toggle2').show();
    });
    $('#p2').click(function () {
        $('#p2').hide();
    });  
    $('#toggle3').click(function () {
        $('#p3').show();
    });
    $('#toggle3').click(function () {
        $('#toggle3').hide();
    });

    $('#p3').click(function () {
        $('#toggle3').show();
    });
    $('#p3').click(function () {
        $('#p3').hide();
    });




});
$(document).ready(function () {
    $('.overlay').mouseover(function () {
        $('#text').show();
    }).mouseout(function () {
        $('#text').hide();
    });
});


$(document).ready(function () {
    $('#submit').click(function () {
        var Name = $('#Name').val();
        var Email = $('#Email').val();
        var Message = $('#Message');
        var key ='43ab10333d46e19325f96d210ed40c49-us5'
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }

    });
});

