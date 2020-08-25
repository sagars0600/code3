$(document).ready(function(){
    $('#myModel').modal('show');
});

$(window).on('load',function(){
    setTimeout(function(){
        $('#myModel').modal('hide')
},3000);
});

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
};

const reload=()=>window.location.reload();




    // $('navbar-toggler').click(function(){
    //         $('.sliding-navbar').toggleClass('sliding-navbar--open');

    //         $('.navbar').toggleClass('menu-opened');
    //     });