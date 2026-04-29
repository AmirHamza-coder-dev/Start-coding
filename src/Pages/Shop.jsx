import React from 'react';
import Pagination from '../Components/Ui/Pagination';
import { useState } from 'react';
import SelectInput from '../Components/Ui/SelectInput';
import ProductCards from '../Components/Ui/ProductCards';
import { Link, useSearchParams } from 'react-router';
import { useGetProductsQuery } from '../Services/Api';

const Shop = () => {
const [searchParms] = useSearchParams();
const category = searchParms.get('category') || '';



  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(3);
  const { data, isLoading, isError } = useGetProductsQuery({ category, limit, skip });

  const relatedCategories = [
    { title: 'Men’s fashion' },
    { title: 'Men’s Jacket' },
    { title: "Men's T-shirt" },
    { title: 'Casual Shirts' },
    { title: 'Summer T-Shirts' },
  ];
  const sortOptions = [
    {
      value: '10',
      label: '10',
    },
    {
      value: '20',
      label: '20',
    },
    {
      value: '30',
      label: '30',
    },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
  ];

  console.log(data);

  return (
    <div className="container px-40 grid grid-cols-12">
      {/* PART OF Left SIDE */}
      <div className="col-span-3 bg-white h-fit sticky top-0 left-0">
        <div className="  p-5">
          <h3 className="text-primary font-medium text-lg">
            Related Categories
          </h3>
          <ul className="flex flex-col gap-1.5">
            {relatedCategories.map((item) => (
              <li key={item.title}>
                <Link className="text-secondary text-sm hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" border-t border-[#F4F4F4] p-5">
          <h3 className="text-primary font-medium text-lg">Filter by Price</h3>
          <input type="range" className="py-8 w-full  accent-[#0198E9]" />
          <p className="text-lg text-primary font-medium">
            {' '}
            <span className="text-[#A7A7A7]">Price:</span> ৳1000 - ৳2500{' '}
          </p>
        </div>
      </div>

      {/* Right Side product part */}
      <div className="col-span-9">
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium text-[#424241]/50">
            Showing <span className="text-secondary">{limit}</span> of{' '}
            <span className="text-secondary">{data?.total || 0}</span> product
          </p>

          <div className="flex gap-7 items-center">
            <p>Product showing per page:</p>
            <SelectInput
              className="max-w-44"
              options={sortOptions}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setSkip(0); // page reset
              }}
              // onChange={(e) => setLimit(e.target.value)}
              value={limit}
            ></SelectInput>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5.5">
          {isLoading && (
            <div className="flex justify-center items-center h-40 text-gray-500">
              <p>Loading products...</p>
            </div>
          )}
          {isError && (
            <div className="flex justify-center items-center h-40 text-red-500">
              <p>Error fetching products ( জ্বালানি সংকট )</p>
            </div>
          )}
          {data?.products?.map((item) => (
            <ProductCards
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.thumbnail}
              discount={item.discountPercentage}
            />
          ))}

        

          {/* <ProductCards
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
            />  */}
        </div>
        <div className="flex justify-center mt-10">
          <Pagination
            total={data?.total || 0}
            limit={limit}
            skip={skip}
            onPageChange={(newSkip) => {
              setSkip(newSkip);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
