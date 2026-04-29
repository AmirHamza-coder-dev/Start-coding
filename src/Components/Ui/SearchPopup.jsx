import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchProductsQuery } from '../../Services/Api';
import { IoSearchSharp } from 'react-icons/io5';

const SearchPopup = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading } = useSearchProductsQuery(searchTerm, {
    skip: searchTerm.length < 2,
  });

  return (
    <div className="relative w-full">
      {/* Search Input Box */}
      <div className="flex relative items-center">
        <input
          type="text"
          placeholder="Search Your Product.."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300 pr-12 h-[44px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute right-0 top-0 bg-[#0198E9] text-white h-full px-5 rounded-r-md flex items-center justify-center text-xl">
          <IoSearchSharp />
        </button>
      </div>

      {/* Popup Dropdown with Grid Layout */}
      {searchTerm.length >= 2 && (
        <div className="absolute top-[110%] left-0 w-full md:w-[750px] bg-white border border-gray-100 rounded-lg shadow-2xl z-[999] max-h-[500px] overflow-y-auto p-4">
          
          {isLoading && <div className="p-5 text-center text-gray-500 animate-pulse">Searching...</div>}
          
          {!isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data?.products?.map((product) => (
                <Link
                  key={product.id}
                  to={`/shop/${product.id}`}
                  onClick={() => setSearchTerm('')}
                  className="flex flex-col gap-2 p-3 hover:bg-gray-50 border border-gray-50 rounded-lg transition-colors group "
                >
                  <div className="w-full aspect-square bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.thumbnail} 
                      alt={product.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                    />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-medium text-gray-800 line-clamp-2 h-10">{product.title}</h4>
                    <p className="text-[14px] text-blue-600 font-bold mt-0.5">৳{product.price}</p>
                    <p>
                        {product.discountPercentage > 0 && (
                          <span className="text-[10px] text-green-600 px-4 py-1.5 rounded bg-green-200 font-medium">
                            {product.discountPercentage}% OFF
                          </span>
                        )}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!isLoading && data?.products?.length === 0 && (
            <div className="p-5 text-center text-gray-400 text-sm">No products found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPopup;