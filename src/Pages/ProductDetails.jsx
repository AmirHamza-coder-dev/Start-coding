

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { useParams, Link } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../Services/Api';
import { useCart } from '../Context/CartContext'; // যোগ করা হয়েছে

// Slick Carousel Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Icons
import { IoLogoWhatsapp, IoLogoTwitter } from 'react-icons/io5';
import { FaLink, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';
import { GiSelfLove } from 'react-icons/gi';

const socialIcon = [
  { id: 1, icon: <FaLinkedin />, bg: 'bg-[#5D9DB126]', text: 'text-[#268AA9]' },
  { id: 2, icon: <IoLogoTwitter />, bg: 'bg-[#53D1E226]', text: 'text-[#53D1E2]' },
  { id: 3, icon: <FaFacebookF />, bg: 'bg-[#4391DA26]', text: 'text-[#4391DA]' },
  { id: 4, icon: <IoLogoWhatsapp />, bg: 'bg-[#3AB13726]', text: 'text-[#3AB137]' },
  { id: 5, icon: <FaLink />, bg: 'bg-[#FF702026]', text: 'text-[#FF7020]' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductDetailsQuery(id);
  const { addToCart } = useCart(); 

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  useEffect(() => {
    if (data) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, [data]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Add to Cart Function
  const handleAddToCart = () => {
    const product = {
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.images[0],
      size: selectedSize,
      quantity: quantity
    };
    addToCart(product);
    alert("Product added to cart!");
  };

  if (isLoading) return <div className="text-center py-20 font-bold text-xl">Loading...</div>;
  if (isError || !data) return <div className="text-center py-20 text-red-500 font-bold">Product Not Found!</div>;

  return (
    <section className="container mx-auto px-4 lg:px-40 mt-10">
      <div className="grid grid-cols-12 gap-10">
        
        {/* LEFT SIDE - IMAGES */}
        <div className="col-span-12 lg:col-span-6 flex gap-4">
          <div className="w-[80%]">
            <Slider asNavFor={nav2} ref={sliderRef1} arrows={false}>
              {data?.images?.map((item, index) => (
                <div key={index}>
                  <div className="h-[420px] bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                    <img src={item} alt={data.title} className="h-full object-contain" />
                  </div>
                </div>
              ))}
            </Slider>

            <div className="pt-10 flex items-center gap-4">
              <span className="text-gray-600 font-medium">Share</span>
              <div className="flex gap-3">
                {socialIcon.map((item) => (
                  <Link key={item.id} to="#" className={`p-2.5 rounded-full transition-all hover:opacity-80 ${item.bg} ${item.text}`}>
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
              slidesToShow={data?.images?.length > 3 ? 4 : data?.images?.length}
              swipeToSlide
              focusOnSelect
              vertical
              verticalSwiping
              arrows={false}
            >
              {data?.images?.map((item, index) => (
                <div key={index} className="p-1">
                  <div className="h-24 bg-gray-100 flex items-center justify-center cursor-pointer border border-transparent hover:border-blue-500 rounded transition-all">
                    <img src={item} alt="thumbnail" className="h-full object-contain p-2" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* RIGHT SIDE - PRODUCT INFO */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-3xl font-bold text-primary mb-2">{data?.title}</h2>
          
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <div className="flex items-center">
              <span className="text-lg text-secondary font-bold mr-1">{data?.rating}</span>
              <div className="flex text-[#FFB340] items-center">
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
                <span className="text-gray-400"><IoMdStar /></span>
                <span className="text-gray-500 ml-2 mr-3.5">({data?.reviews?.length || 0})</span>
                <div className="flex items-center px-3.5 border-l border-r border-[#F2F2F2]">
                  <span className="text-green-600 text-sm font-medium mr-1">✔</span>
                  <p className="text-primary text-sm font-normal">{data?.stock} In Stock</p>
                </div>
              </div>
            </div>
            <button className="text-blue-500 text-sm font-bold cursor-pointer hover:underline flex items-center">
              <span className="px-2 text-[#C7C7C7] text-xl"><GiSelfLove /></span>
              Add to Wishlist
            </button>
          </div>

          <div className="flex items-center pt-8 pb-3 gap-3">
            <h3 className="text-4xl font-bold text-[#0198E9]">${data?.price}</h3>
            <span className="text-xl text-gray-400 line-through">${(data?.price * 1.2).toFixed(2)}</span>
            <span className="bg-orange-500 text-white text-xs px-2.5 py-1 rounded">{data?.discountPercentage}% OFF</span>
          </div>

          <div className="flex text-sm gap-5 pb-4.5 border-b border-[#EAEAEA] mb-6">
            <p>SKU: <span className="text-gray-400">{data?.sku}</span></p>
            <span className="text-green-600 font-medium">● {data?.availabilityStatus}</span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">{data?.description}</p>

          {/* Size Section */}
          <div className="mt-8 mb-8">
            <h4 className="font-semibold text-lg text-[#333333] mb-3">Size</h4>
            <div className="flex gap-4 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 border rounded transition-all font-medium ${selectedSize === size ? 'bg-[#0198E9] text-white border-[#0198E9]' : 'border-gray-200 text-gray-600 hover:border-[#0198E9] hover:text-[#0198E9]'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center border border-[#EFEFEF] rounded overflow-hidden">
              <button onClick={decreaseQty} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition font-bold">-</button>
              <span className="px-6 font-bold text-[#3D3D3F]">{quantity}</span>
              <button onClick={increaseQty} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition font-bold">+</button>
            </div>

            <button onClick={handleAddToCart} className="bg-[#0198E9] text-white px-8 py-3 rounded font-bold hover:bg-blue-600 transition shadow-lg">
              Add to Cart
            </button>

            <button className="border-2 border-[#0198E9] text-[#0198E9] px-8 py-3 rounded font-bold hover:bg-[#0198E9] hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;