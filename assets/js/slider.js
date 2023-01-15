$(document).ready(function () {
  $(".slider-container").slick({
    dots: true,
    arrows: false,
  });

  $(".featured-products-content").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $(".top-categories-content").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});
