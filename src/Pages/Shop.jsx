// import React from 'react';
// import Pagination from '../Components/Ui/Pagination';
// import { useState } from 'react';
// import SelectInput from '../Components/Ui/SelectInput';
// import ProductCards from '../Components/Ui/ProductCards';
// import { Link, useSearchParams } from 'react-router';
// import { useGetProductsQuery } from '../Services/Api';

// const Shop = () => {
// const [searchParms] = useSearchParams();
// const category = searchParms.get('category') || '';



//   const [limit, setLimit] = useState(9);
//   const [skip, setSkip] = useState(3);
//   const { data, isLoading, isError } = useGetProductsQuery({ category, limit, skip });

//   const relatedCategories = [
//     { title: 'Men’s fashion' },
//     { title: 'Men’s Jacket' },
//     { title: "Men's T-shirt" },
//     { title: 'Casual Shirts' },
//     { title: 'Summer T-Shirts' },
//   ];
//   const sortOptions = [
//     {
//       value: '10',
//       label: '10',
//     },
//     {
//       value: '20',
//       label: '20',
//     },
//     {
//       value: '30',
//       label: '30',
//     },
//     { value: '40', label: '40' },
//     { value: '50', label: '50' },
//   ];

//   console.log(data);

//   return (
//     <div className="container px-40 grid grid-cols-12">
//       {/* PART OF Left SIDE */}
//       <div className="col-span-3 bg-white h-fit sticky top-0 left-0">
//         <div className="  p-5">
//           <h3 className="text-primary font-medium text-lg">
//             Related Categories
//           </h3>
//           <ul className="flex flex-col gap-1.5">
//             {relatedCategories.map((item) => (
//               <li key={item.title}>
//                 <Link className="text-secondary text-sm hover:text-blue-400 transition-colors duration-300">
//                   {item.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className=" border-t border-[#F4F4F4] p-5">
//           <h3 className="text-primary font-medium text-lg">Filter by Price</h3>
//           <input type="range" className="py-8 w-full  accent-[#0198E9]" />
//           <p className="text-lg text-primary font-medium">
//             {' '}
//             <span className="text-[#A7A7A7]">Price:</span> ৳1000 - ৳2500{' '}
//           </p>
//         </div>
//       </div>

//       {/* Right Side product part */}
//       <div className="col-span-9">
//         <div className="flex items-center justify-between">
//           <p className="text-lg font-medium text-[#424241]/50">
//             Showing <span className="text-secondary">{limit}</span> of{' '}
//             <span className="text-secondary">{data?.total || 0}</span> product
//           </p>

//           <div className="flex gap-7 items-center">
//             <p>Product showing per page:</p>
//             <SelectInput
//               className="max-w-44"
//               options={sortOptions}
//               onChange={(e) => {
//                 setLimit(Number(e.target.value));
//                 setSkip(0); // page reset
//               }}
//               // onChange={(e) => setLimit(e.target.value)}
//               value={limit}
//             ></SelectInput>
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5.5">
//           {isLoading && (
//             <div className="flex justify-center items-center h-40 text-gray-500">
//               <p>Loading products...</p>
//             </div>
//           )}
//           {isError && (
//             <div className="flex justify-center items-center h-40 text-red-500">
//               <p>Error fetching products ( জ্বালানি সংকট )</p>
//             </div>
//           )}
//           {data?.products?.map((item) => (
//             <ProductCards
//               key={item.id}
//               id={item.id}
//               title={item.title}
//               price={item.price}
//               image={item.thumbnail}
//               discount={item.discountPercentage}
//             />
//           ))}

        

         
//         </div>
//         <div className="flex justify-center mt-10">
//           <Pagination
//             total={data?.total || 0}
//             limit={limit}
//             skip={skip}
//             onPageChange={(newSkip) => {
//               setSkip(newSkip);
//               window.scrollTo({ top: 0, behavior: 'smooth' });
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useState } from 'react';
import Pagination from '../Components/Ui/Pagination';
import SelectInput from '../Components/Ui/SelectInput';
import ProductCards from '../Components/Ui/ProductCards';
import { Link, useSearchParams } from 'react-router-dom'; // react-router-dom ব্যবহার করা হয়েছে
import { useGetProductsQuery } from '../Services/Api';
import { useCart } from '../Context/CartContext'; // Cart Context ইমপোর্ট
import { RiDeleteBin6Line } from 'react-icons/ri';

const Shop = () => {
  const [searchParms] = useSearchParams();
  const category = searchParms.get('category') || '';
  const { cartItems, removeFromCart } = useCart(); // কার্ট ডাটা নেওয়া হলো

  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(0);
  const { data, isLoading, isError } = useGetProductsQuery({ category, limit, skip });

  // ক্যালকুলেশন
  const subtotal = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  const relatedCategories = [
    { title: 'Men’s fashion' }, { title: 'Men’s Jacket' }, { title: "Men's T-shirt" },
    { title: 'Casual Shirts' }, { title: 'Summer T-Shirts' },
  ];

  const sortOptions = [
    { value: '10', label: '10' }, { value: '20', label: '20' },
    { value: '30', label: '30' }, { value: '40', label: '40' }, { value: '50', label: '50' },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-40 py-10">
      
      {/* যদি কার্টে আইটেম থাকে এবং ইউজার কার্ট দেখতে চায় (ঐচ্ছিক) */}
      {cartItems.length > 0 && (
        <div className="mb-12 border-b pb-10">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            🛒 My Cart <span className="text-sm font-normal text-gray-400">({cartItems.length} items)</span>
          </h2>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt="" className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-1" />
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-xs text-gray-500">Size: {item.size} | Qty: {item.quantity}</p>
                      <p className="text-[#0198E9] font-bold">${item.price}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-2">
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-4 bg-gray-50 p-6 rounded-xl border border-gray-100 h-fit">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-600">Subtotal:</span>
                <span className="text-xl font-bold text-[#0198E9]">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#0198E9] text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* শপ পেজ কন্টেন্ট */}
      <div className="grid grid-cols-12 gap-8">
        {/* LEFT SIDE - Filter */}
        <div className="col-span-12 lg:col-span-3 bg-white h-fit sticky top-5">
          <div className="p-5">
            <h3 className="text-primary font-medium text-lg mb-4">Related Categories</h3>
            <ul className="flex flex-col gap-2">
              {relatedCategories.map((item) => (
                <li key={item.title}>
                  <Link className="text-secondary text-sm hover:text-[#0198E9] transition-colors duration-300">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#F4F4F4] p-5">
            <h3 className="text-primary font-medium text-lg">Filter by Price</h3>
            <input type="range" className="py-8 w-full accent-[#0198E9]" />
            <p className="text-lg text-primary font-medium">
              <span className="text-[#A7A7A7]">Price:</span> ৳1000 - ৳2500
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Products */}
        <div className="col-span-12 lg:col-span-9">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <p className="text-lg font-medium text-[#424241]/50">
              Showing <span className="text-secondary">{data?.products?.length || 0}</span> of{' '}
              <span className="text-secondary">{data?.total || 0}</span> products
            </p>

            <div className="flex gap-4 items-center">
              <p className="text-sm text-gray-500">Products per page:</p>
              <SelectInput
                className="w-24"
                options={sortOptions}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setSkip(0);
                }}
                value={limit}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {isLoading && (
              <div className="col-span-full flex justify-center py-20 text-gray-400">Loading products...</div>
            )}
            {isError && (
              <div className="col-span-full flex justify-center py-20 text-red-500">Error fetching products!</div>
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
          </div>

          <div className="flex justify-center mt-12">
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
    </div>
  );
};

export default Shop;
