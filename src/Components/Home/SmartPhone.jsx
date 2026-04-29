// 

import React, { useState } from 'react';
import { Link } from 'react-router';
import { IoMdArrowForward } from 'react-icons/io';
import ProductCards from '../Ui/ProductCards';
import { useGetProductsQuery } from '../../Services/Api';

const SmartPhone = () => {
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(1);
  const [category, setCategory] = useState('smartphones');

  const { data, isLoading, isError } = useGetProductsQuery({
    category,
    limit,
    skip,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-xl font-semibold">Loading Products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-40 text-red-500">
        <p>Error fetching products</p>
      </div>
    );
  }

  return (
    <section className="pt-[45px]">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between">
          <h2 className="text-[16px] md:text-2xl font-medium text-primary mb-4 md:mb-5">
            Bangla Phone
          </h2>
          <Link
            to="/shop?category=smartphones"
            className="flex items-center text-secondary gap-[18px] font-medium hover:text-blue-500 transition-colors duration-100"
          >
            View more
            <IoMdArrowForward />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-6">
          {data?.products?.map((item) => (
            <ProductCards
              key={item.id}
              id={item.id} 
              title={item.title}
              price={item.price}
              discount={item.discountPercentage}
              image={item.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartPhone;