
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router';

const Banner = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,

    appendDots: (dots) => (
      <div>
<<<<<<< HEAD
        <ul className='flex  absolute bottom-9 md:bottom-11  left-1/2 transform -translate-x-1/2'> {dots} </ul>
=======
        <ul className='flex absolute bottom-6 left-1/2 transform -translate-x-1/2'> {dots} </ul>
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
      </div>
    ),
 customPaging: (i) => (
  <div className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-300 mx-1.5 cursor-pointer'></div>
),
  };
  return (
    <section>
<<<<<<< HEAD
      <div className="container pt-2.5 pb-12.5 ">
=======
      <div className="container pt-2.5 pb-[50px] ">
>>>>>>> 7261c0f5d7896546c5d4c8cc3fcef208ad6f0fdf
        <div className="slider-wrapper flex items-center gap-5">
         
         
          {/* Left - Slider */}
          <div className="w-full md:w-2/3">
            <Slider {...settings}>
              <Link to="/">
                <img src="/hero.png" alt="banner img" />
              </Link>
              <Link to="/">
                <img src="/heroo.svg" alt="banner img" />
              </Link>

              <Link to="/">
                <img src="/heRo.svg" alt="banner img" />
              </Link>

              <Link to="/">
                <img src="/hero4.svg" alt="banner img" />
              </Link>
            </Slider>
          </div>


          {/* Right-Side-Content */}
          <div className="w-1/3 flex flex-col gap-7 hidden md:flex">
            <Link to="/">
              <img src="/hero_left_1.png" alt="" />
            </Link>

            <Link to="/">
              <img src="/hero_left_2.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
