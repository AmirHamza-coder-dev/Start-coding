import React from 'react';
import { Link } from 'react-router';
import { IoMdArrowForward } from 'react-icons/io';
import ProductCards from '../Ui/ProductCards';
import Button from '../Ui/Button';
import { IoIosArrowDown } from 'react-icons/io';

const Flashdeals = () => {
  return (
    <>
      <section className="pt-[45px]">
        <div className="container ">
          <div className="flex justify-between">
            <h2 className="text-[16px] md:text-2xl font-medium text-primary mb-4 md:mb-5">
              Flash Deals
            </h2>
            <Link
              to="/"
              className="flex items-center  text-secondary gap-[18px]  font-medium hover:text-blue-500 transition-colors duration-100"
            >
              View more
              <IoMdArrowForward />
            </Link>
          </div>

          {/* Discount-Product */}
          <div className=" grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-6">
            <ProductCards
              image="/ProductCard_img/card1.png"
              title="Headrest Executive Mesh Office Chair"
              price="10500"
              discount="-25% OFF"
            />

            <ProductCards
              image="/ProductCard_img/card2.png"
              title="Headrest Executive Mesh Office Chair"
              price="10000"
            />

            <ProductCards
              image="/ProductCard_img/card3.png"
              title="Headrest Executive Mesh Office Chair"
              price="20500"
            />

            <ProductCards
              image="/ProductCard_img/card11.png"
              title="Headrest Executive Mesh Office Chair"
              price="10300"
            />
          </div>

         
         
      {/* ==========================================================    */}
          <div className="flex justify-between pt-12 pb-5 ">
            <h2 className=" text-[16px] md:text-2xl font-medium text-primary">
              Featured Product
            </h2>
            <Link
              to="/"
              className="flex items-center  text-secondary gap-[18px]  font-medium hover:text-blue-500 transition-colors duration-100"
            >
              View more
              <IoMdArrowForward />
            </Link>
          </div>

{/* ========================================================== */}


          <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-7 md:gap-5">
         
           {/* Featured Product */}           
            <ProductCards
              image="/ProductCard_img/card5.png"
              title="Headrest Executive Mesh Office Chair"
              price="70500"
            />

            <ProductCards
              image="/ProductCard_img/card6.png"
              title="Headrest Executive Mesh Office Chair"
              price="90500"
            />

            <ProductCards
              image="/ProductCard_img/card7.png"
              title="Headrest Executive Mesh Office Chair"
              price="17500"
            />

            <ProductCards
              image="/ProductCard_img/card8.png"
              title="Headrest Executive Mesh Office Chair"
              price="10590"
            />

            <ProductCards
              image="/ProductCard_img/card9.png"
              title="Headrest Executive Mesh Office Chair"
              price="10599"
            />

            <ProductCards
              image="/ProductCard_img/card10.png"
              title="Headrest Executive Mesh Office Chair"
              price="90500"
            />

            <ProductCards
              image="/ProductCard_img/card11.png"
              title="Headrest Executive Mesh Office Chair"
              price="14500"
            />
            <ProductCards
              image="/ProductCard_img/card12.png"
              title="Headrest Executive Mesh Office Chair"
              price="17800"
            />
            <ProductCards
              image="/ProductCard_img/card13.png"
              title="Headrest Executive Mesh Office Chair"
              price="96500"
            />
            <ProductCards
              image="/ProductCard_img/card14.png"
              title="Headrest Executive Mesh Office Chair"
              price="89500"
            />
            <ProductCards
              image="/ProductCard_img/card15.png"
              title="Headrest Executive Mesh Office Chair"
              price="21500"
            />

            <ProductCards
              image="/ProductCard_img/card16.png"
              title="Headrest Executive Mesh Office Chair"
              price="19500"
            />

            <ProductCards
              image="/ProductCard_img/card7.png"
              title="Headrest Executive Mesh Office Chair"
              price="17500"
            />

            <ProductCards
              image="/ProductCard_img/card17.png"
              title="Headrest Executive Mesh Office Chair"
              price="10544"
            />

            <ProductCards
              image="/ProductCard_img/card18.png"
              title="Headrest Executive Mesh Office Chair"
              price="10590"
            />

            <ProductCards
              image="/ProductCard_img/card19.png"
              title="Headrest Executive Mesh Office Chair"
              price="90500"
            />
          </div>

<div className='flex justify-center pt-10 pb-24'>
  
          <Button className="flex gap-1 items-center rounded-[81px]">
            Show more <IoIosArrowDown />
          </Button>
</div>

        </div>
      </section>
    </>
  );
};

export default Flashdeals;
