'use strict';

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


(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('buttonNavigation')[0];
    var burgerContain = document.getElementsByClassName('outMenu')[0];


    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerContain].forEach(function (el) {
            el.classList.toggle('open');
        });
    }, false);
})();

