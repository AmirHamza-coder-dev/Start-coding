import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoLogoWhatsapp, IoLogoTwitter } from 'react-icons/io5';
import { FaLink, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';
import { GiSelfLove } from 'react-icons/gi';

const socialIcon = [
  { id: 1, icon: <FaLinkedin />, bg: 'bg-[#5D9DB126]', text: 'text-[#268AA9]' },
  {
    id: 2,
    icon: <IoLogoTwitter />,
    bg: 'bg-[#53D1E226]',
    text: 'text-[#53D1E2]',
  },
  {
    id: 3,
    icon: <FaFacebookF />,
    bg: 'bg-[#4391DA26]',
    text: 'text-[#4391DA]',
  },
  {
    id: 4,
    icon: <IoLogoWhatsapp />,
    bg: 'bg-[#3AB13726]',
    text: 'text-[#3AB137]',
  },
  { id: 5, icon: <FaLink />, bg: 'bg-[#FF702026]', text: 'text-[#FF7020]' },
];

const ProductDetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const images = [
    '/ProductCard_img/card11.png',
    '/ProductCard_img/card10.png',
    '/ProductCard_img/card8.png',
    '/ProductCard_img/card13.png',
  ];

  return (
    <section className="container mx-auto mt-10">
      <div className="grid grid-cols-12 gap-10">
        {/* LEFT SIDE */}
        <div className="col-span-12 lg:col-span-6 flex gap-4">
          <div className="w-[80%]">
            <Slider asNavFor={nav2} ref={sliderRef1} arrows={false}>
              {images.map((img, index) => (
                <div key={index}>
                  <div className="h-[420px] bg-gray-100 flex items-center justify-center">
                    <img
                      src={img}
                      alt="product"
                      className="h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>

            <div className="pt-10 flex items-center gap-4">
              <span className="text-gray-600">Share</span>
              <div className="flex gap-3">
                {socialIcon.map((item) => (
                  <Link
                    key={item.id}
                    className={`p-2.5 rounded-full ${item.bg} ${item.text}`}
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[20%]">
            <Slider
              asNavFor={nav1}
              ref={sliderRef2}
              slidesToShow={4}
              swipeToSlide
              focusOnSelect
              vertical
              arrows
            >
              {images.map((img, index) => (
                <div key={index} className="p-1">
                  <div className="h-24 bg-gray-100 flex items-center justify-center cursor-pointer hover:border-2 hover:border-blue-500">
                    <img
                      src={img}
                      alt="thumb"
                      className="h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-2xl font-semibold text-primary">
            Super Skinny Rib Trouser & Joggers for Men By <br /> Sowdagar Trouser{' '}
          </h2>

          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <div className="flex">
              <span className=" text-lg text-secondary">4.0</span>
              <div className="flex text-[#FFB340] items-center">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <span className="text-gray-400">
                  <IoMdStar />
                </span>
                <span className="text-gray-500 mr-3.5">(223)</span>
                <div className=" flex items-center  px-3.5 border-l border-r border-[#F2F2F2]">
                  {' '}
                  <span className="text-green-600  text-sm font-medium">✔</span>
                  <p className="text-primary text-lg font-normal ">
                    4,320 Sold
                  </p>
                </div>
              </div>
            </div>

            <button className="text-blue-500 text-lg font-bold cursor-pointer hover:underline flex items-c">
              <span className="px-3.5 text-[#C7C7C7]">
                <GiSelfLove />
              </span>
              Add to Wishlist
            </button>
          </div>

          <div className="flex items-center pt-8 pb-3">
            <h3 className="text-4xl font-semibold text-[#0198E9]">$976.33</h3>
            <span className="px-6 text-gray-400">$1,020.99</span>
            <span className="bg-orange-500 text-white text-xs px-2.5 py-1 rounded">
              20%
            </span>
          </div>

          <div className="flex text-sm gap-5 pb-4.5 border-b border-[#EAEAEA]">
            <p>
              SKU: <span className="text-gray-400">12314124124</span>
            </p>
            <span className=" text-green-600 font-medium">● In Stock</span>
          </div>

          <p className="mt-6 mb-2 text-lg text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut <br /> br enim ad minim veniam
          </p>

          <ul className="list-disc text-lg text[#333333] font-normal pl-5 mt-4 text-gray-600 space-y-2">
            <li> Direct Full Array</li>
            <li> Quantum Dot Technology</li>
            <li> Ambient Mode</li>
            <li> One Remote Control </li>
            
          </ul>

          <div className="mt-8 flex gap-4">
            <h4 className="font-normal text-lg text-[#333333] mb-2">Size</h4>
            <div className="flex gap-4 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-[#6E6E6F] px-4 py-1 border border-gray-200 rounded 
                    ${
                      selectedSize === size
                        ? 'bg-[#0198E9] text-[#f8f8f9] border-[#0198E9]'
                        : 'hover:bg-[#0198E9] hover:text-white cursor-pointer'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center  mt-8 ">
            <h4 className='pr-4'>Quantity: </h4>
            <div className='flex gap-8'>
            <div className="flex items-center border border-[#EFEFEF] rounded ">
              <button
                onClick={decreaseQty}
                className="px-4 py-2 bg-gray-200 cursor-pointer"
              >
                -
              </button>
              <span className="px-6 text-sm text-[#3D3D3F]">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-4 py-2 bg-gray-200 cursor-pointer"
              >
                +
              </button>
            </div>

            <button className="bg-[#0198E9] text-white px-6 py-2 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>

            <button className="border border-[#0198E9] text-[#0198E9] px-6 py-2 rounded hover:bg-[#0198E9] hover:text-white transition">
              Buy Now
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
