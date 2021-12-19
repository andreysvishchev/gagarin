$(function () {
  $('.clients').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 996,
        settings: {
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500
        }
      }
    ]
  });

  $(".accordion__title").on("click", function (e) {
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $(".accordion__text").slideUp(300);
      $(".accordion__title").removeClass("active");
    }
    $this.toggleClass("active");
    $this.next().slideToggle();
  });

  const menuBtn = $('.menu-btn')
  const header = $('.header')
  const headerHeight = header.innerHeight()
  const scrlBtn = $('.scroll-btn')
  const scrlBtnHeight = scrlBtn.innerHeight()
  const nav = $('.nav')
  const navLink = $('.nav__link')

  menuBtn.on('click', function () {
    $(this).toggleClass('active')
    $('body').toggleClass('hidden')
    scrlBtn.toggleClass('active')
    nav.toggleClass('active')
    navLink.toggleClass('active')
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight / 1.1) {
      menuBtn.addClass('white')
    } else {
      menuBtn.removeClass('white')
    }
    if ($(this).scrollTop() > scrlBtnHeight * 1.5) {
      scrlBtn.addClass('scroll-top')
      $('.scroll-btn__text').text('в начало')
    } else {
      scrlBtn.removeClass('scroll-top')
      $('.scroll-btn__text').text('Поехали!')
    }
  });

  scrlBtn.on('click', function (e) {
    if (scrlBtn.hasClass('scroll-top')) {
      $('html, body').animate({
        scrollTop: 0
      }, 1000)
    } else {
      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      $('html, body').animate({
        scrollTop: dn
      }, 1000)
    }
  });

  $(window).on('scroll', function () {
    let w_top = $(window).scrollTop();
    let e_top = $('.result').offset().top;

    if (w_top + 600 >= e_top) {
      $('.result__num').spincrement({
        thousandSeparator: '',
        duration: 2000,
      })
    }
  });
});

AOS.init({
  duration: 1300,
});