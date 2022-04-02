$(function () {
  //слайдер:
  const reviewsSlider = $('.slider');

  if (reviewsSlider.length > 0) {
    $('.slider__slides').not('.slick-initialized').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slider__btn--left'),
      nextArrow: $('.slider__btn--right'),
    });
  }

  //раскрытие часто задаваемых вопросов:
  const faqToggles = $('.faq-list__question');

  faqToggles.on('click', function () {
    $(this).parent().toggleClass('faq-list__item--open');
    $(this).next('.faq-list__answer').slideToggle('200');
  });

  //кнопка "вниз":
  const downArrowBtn = $('.header__scroll-btn'),
        main = $('main');

  downArrowBtn.on('click', function() {
    $('html, body').animate({
      scrollTop: main.offset().top
    }, '200');
  });
})
