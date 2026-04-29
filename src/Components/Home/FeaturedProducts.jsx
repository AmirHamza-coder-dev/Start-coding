

import React, { useState } from 'react';
import { Link } from 'react-router';
import { IoMdArrowForward, IoIosArrowDown } from 'react-icons/io';
import ProductCards from '../Ui/ProductCards';
import Button from '../Ui/Button';
import Pagination from '../Ui/Pagination';
import { useGetProductsQuery } from '../../Services/Api';

const FeaturedProducts = () => {
  const [limit, setLimit] = useState(16);
  const [skip, setSkip] = useState(1);

  const { data, isLoading, isError } = useGetProductsQuery({
    category: '',
    limit,
    skip,
  });

  return (
    <div className="container">
      {/* Featured Product Header */}
      <div className="flex justify-between pt-12 pb-5">
        <h2 className="text-[16px] md:text-2xl font-medium text-primary">
          Featured Product
        </h2>
        <Link
          to="/shop"
          className="flex items-center text-secondary gap-[18px] font-medium hover:text-blue-500 transition-colors duration-100"
        >
          View more
          <IoMdArrowForward />
        </Link>
      </div>

      {/* Featured Product Grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-7 md:gap-5">
        {data?.products?.map((item) => (
          <ProductCards
            key={item.id}
            id={item.id} 
            image={item.thumbnail}
            title={item.title}
            price={item.price}
            discount={item.discountPercentage}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <Pagination
          total={data?.total || 0}
          limit={limit}
          skip={skip}
          onPageChange={(newSkip) => {
            setSkip(newSkip);
            window.scrollTo({ top:20700, behavior: 'smooth' });
          }}
        />
      </div>

      {/* Show More Button */}
      <div className="flex justify-center pt-10 pb-24">
        <Button className="flex gap-1 items-center rounded-[81px]">
          Show more <IoIosArrowDown />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProducts;