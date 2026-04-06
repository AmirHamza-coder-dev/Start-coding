import React from 'react';
import { HiH1 } from 'react-icons/hi2';
import { MdOutlineStarPurple500 } from "react-icons/md";

const ProductCards = ({image, title, price, discount}) => {
  return (
  <div className="p-2.5 border border-[#f2eeee] rounded-lg flex flex-col justify-center items-center max-w-72">
    {/* image, Review and title */}
    <div className="relative w-fit">
      <img className="rounded-xl" src={image} alt={title} />
      {discount && (
        <span className="absolute left-0 top-2 text-[8px] md:text-[14px] md:px-3 md:py-1 text-gray-100 bg-amber-400 px-1.5 py-1 rounded-tl-[9px]">
          {discount}
        </span>
      )}
    </div>
    <div className="flex justify-start w-full my-2 md:mt-3.5 md:mb-2.5 text-[#FAC96B] gap-0.5">
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 />
      <MdOutlineStarPurple500 className="text-[#D3D3D3]" />
      <p className="text-secondary text-[12px] font-[400]">(0)</p>
    </div>
    {/* title */}
    <h4 className="w-full text-[14px] md:text-[18px] font-normal text-secondary">{title}</h4>
    {/* Price and Add to Cart */}
    <div className="flex items-center justify-between w-full mt-2.5">
      <p className="text-[16px] md:text-[22px] font-medium text-[#0198e9]">৳{price}</p>
      <button className="hidden md:flex">
        <img src="/public/Icons/basket (1).png" alt="" />
      </button>
      <button className="flex md:hidden cursor-pointer">
        <img src="/public/Icons/basket (2).png" alt="" />
      </button>
    </div>
  </div>
  );
};

export default ProductCards;
