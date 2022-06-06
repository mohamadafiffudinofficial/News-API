export const reactSlickSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    className: "slider px-2 cursor-pointer",
    customPaging: () => (
        <span className="w-6 h-1.5 bg-grey-500 absolute bottom-8 cursor-pointer hover:bg-grey-600"></span>
    )
  };