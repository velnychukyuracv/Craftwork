// Scroll Events
    $(document).ready(function(){
        var HeaderTop = $('#navigation').offset().top;
        var hh =HeaderTop;
// Activate menu
        $(window).scroll(function(){
            if( $(window).scrollTop() > HeaderTop ) {
                if($(window).scrollTop() > hh) {
                    $('#navigation').css({position: 'fixed', top: '0px', background:'#fff'});
                } else{
                    $('#navigation').css({position: 'fixed', top: '0px'});
                }


            } else {
                $('#navigation').css({position: 'fixed',background:'none'});
            }
        });
    });


