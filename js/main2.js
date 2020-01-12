//parallax 
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    //parallax judul jumbotron gambar tenggelam
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 1 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 0.5 + '%)'
    });
    $('.jumbotron .container a').css({
        'transform': 'translate(0px, ' + wScroll / 0.4 + '%)'
    });

    //parallax dashboard about
    if (wScroll > $('.about-scroll').offset().top - 542) {
        $('.about-scroll .container-about').addClass('about-muncul');
    }
    // parallax dashboard profil
    if (wScroll > $('.workspace').offset().top - 650) {
        $('.workspace .workspace-item').addClass('workspace-muncul');
    }
    //parallax dashboard portfolio

    if (wScroll > $('.portfolio').offset().top - 680) {
        $('.portfolio .port-parallax').each(function (i) {
            setTimeout(function () {
                $('.portfolio .port-parallax').eq(i).addClass('portfolio-muncul');
            }, 500 * (i + 1));
        });
    }
    //parallax dashboard gallery
    if (wScroll > $('.gallery').offset().top - 690) {
        $('.gallery .container-gallery').addClass('gallery-muncul');
    }

});


$(window).on('load', function () {
    $('.jumbotron .container .display-4').addClass('judul-animation'); //isi atribut class ada di css
    $('.jumbotron .judul-bawah').addClass('judul-animation2'); //perlihatkan penulisan class pada css
    $('.jumbotron .page-scroll').addClass('btn-animation');
});

$('.page-scroll').on('click', function (e) {
    var Tujuan = $(this).attr('href');
    var elementTujuan = $(Tujuan);
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 150 //agar pas dengan navbar
    }, 2000, 'easeInOutQuint'); //1250 kecepatan animasi per milmeter dan gaya transisi
    e.preventDefault();

    //effect lain jquery easing
});

$(document).ready(function () {
    $('#home-scroll').click(function () {
        $('#home-scrol').addClass('quick-link-active');

    });


});