import React from 'react';
import SelectInput from '../Components/Ui/SelectInput';
import ProductCards from '../Components/Ui/ProductCards';
import { Link } from 'react-router';
const Shop = () => {
  const relatedCategories = [ 
  { title: 'Men’s fashion' },
  { title: 'Men’s Jacket' },
  { title: "Men's T-shirt" },
  { title: 'Casual Shirts' },
  { title: 'Summer T-Shirts' }

  ];
  const sortOptions = [
    {
      value: 'new_item',
      label: 'new item',
    },
    {
      value: 'oldest_item',
      label: 'oldest item',
    },
  ];

  return (
    <main className="">
      <div className="container grid grid-cols-12">
        {/* PART OF Left SIDE */}
        <div className="col-span-3 bg-white h-fit sticky top-0 left-0">

          <div className='  p-5'>
              <h3 className='text-primary font-medium text-lg'>Related Categories</h3>
          <ul className='flex flex-col gap-1.5'>
            {relatedCategories.map((item) => (
              <li key={item.title}>
                <Link className='text-secondary text-sm hover:text-blue-400 transition-colors duration-300'>{item.title}</Link>
              </li>
            ))}
          </ul>
          </div>


          <div className=' border-t border-[#F4F4F4] p-5'>
             <h3 className='text-primary font-medium text-lg'>Filter by Price</h3>
             <input  type="range" className='py-8 w-full  accent-[#0198E9]'/>
             <p className='text-lg text-primary font-medium'> <span className='text-[#A7A7A7]'>Price:</span> ৳1000 - ৳2500 </p>
          </div>


          <div className=' p-7 border-t  border-[#F4F4F4]'>hel</div>
        
        </div>











        {/* Right Side product part */}
        <div className="col-span-9">
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-[#424241]/50">
              Showing <span className="text-secondary">20</span> of{' '}
              <span className="text-secondary">160</span> product
            </p>

            <div className="flex gap-7 items-center">
              <p>Sort by:</p>
              <SelectInput
                className="max-w-44"
                options={sortOptions}
              ></SelectInput>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5.5">
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
              image="/ProductCard_img/card9.png"
              title="Headrest Executive Mesh Office Chair"
              price="10599"
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
              image="/ProductCard_img/card15.png"
              title="Headrest Executive Mesh Office Chair"
              price="21500"
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
              image="/ProductCard_img/card9.png"
              title="Headrest Executive Mesh Office Chair"
              price="10599"
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
              image="/ProductCard_img/card15.png"
              title="Headrest Executive Mesh Office Chair"
              price="21500"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
