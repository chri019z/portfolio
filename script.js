$(document).ready(function () {

    $('.spotlight').hover(big, normal);

    function big() {
        $(this).css({
            height: '+=80%',
            width: '+=80%'
        });
    }

    function normal() {
        $(this).css({
            height: "",
            width: ""
        });
    }

});
