//parallax navbar saat ditakn menunjukan halaman content
//pemanggilan event carikan class page scroll saat di click maka jalankan function
$('.page-scroll').on('click', function (e) {

    //jadi setelah diclick ambil atribut href
    var Tujuan = $(this).attr('href');

    //setelah diambil isi dari href tinggal
    //panggil seluruh elemnt htmlnya
    //jadi mencangkup semua tag element yg mempunyai id sama dengan class yang dipanggil akana di panggil elementnya
    var elementTujuan = $(Tujuan);

    //lalu ambil jarak dari top
    //untuk mengetahui jarak sebuah elemnt dengan top
    //console.log($('body')).scrollTop());
    //e.preventDefault();

    //pindahkan scroll
    //funsi sama seperti href dan id bisa pindah2
    //$('body').scrollTop(elemenTujuan.offset().top);

    //jika di modifikasi lagi menggunakan animasi

    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 50 //agar pas dengan navbar
    }, 1250, 'easeInExpo'); //1250 kecepatan animasi per milmeter dan gaya transisi
    e.preventDefault();

    //effect lain jquery easing
});

//about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul'); //isi atribut class ada di css
    $('.pKanan').addClass('pMuncul'); //perlihatkan penulisan class pada css
});


//parallax 
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    //console.log(wScroll);

    //jumbotron parallax gambar tenggelam
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    //porfolio gambar muncul satu per satu
    if (wScroll > $('.portfolio').offset().top - 250) {
        //mengambil dulu seluruh thumbnail atau elemnt nya
        //function each akan memberikan semua elemnt sebuah funciton
        $('.portfolio .img-thumbnail').each(function (i) {
            //kadi disini akan menambahkan class muncul tapi menunggu
            //hingga beberapa detik
            //jadi menggunakan function setTimeout
            //jadi kita akan menambahkan sesuatu tapi nunggu dulu beberapa lama
            setTimeout(function () {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
            //300 di kalikan dulu agar ngambar tidak muncul atau nunggu 1detik
        });
        //$('.portfolio .img-thumbnail').addClass('muncul');
    }
});