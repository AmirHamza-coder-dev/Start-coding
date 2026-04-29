import { Link } from 'react-router';
import { MdArrowForwardIos } from 'react-icons/md';
import { useGetCategoryListQuery } from '../../Services/Api';

const Categorys = () => {
  const { data, isLoading, isError } = useGetCategoryListQuery();

  //   const categories = [
  //     {
  //       title: 'Health & Household',
  //       icon: '/public/Icons/icon1.png',
  //     },
  //     {
  //       title: 'Kids Fashion',
  //       icon: '/public/Icons/icon2.png',
  //     },
  //     {
  //       title: 'Toys',
  //       icon: '/public/Icons/icon3.png',
  //     },

  //     {
  //       title: 'Groceries',
  //       icon: '/public/Icons/icon4.png',
  //     },
  //     {
  //       title: 'Home & Lifestyle',
  //       icon: '/public/Icons/icon5.png',
  //     },
  //     {
  //       title: 'Men Fashion',
  //       icon: '/public/Icons/icon6.png',
  //     },
  //     {
  //       title: 'Women Fashion',
  //       icon: '/public/Icons/icon7.png',
  //     },
  //     {
  //       title: 'Stationary & Books',
  //       icon: '/public/Icons/icon8.png',
  //     },

  //     {
  //       title: 'Leather Goods',
  //       icon: '/public/Icons/icon9.png',
  //     },

  //     {
  //       title: 'Jewelleries ',
  //       icon: '/public/Icons/icon10.png',

  //     },

  //     {
  //       title: 'Watches',
  //       icon: '/public/Icons/icon11.png',
  //     },

  //     {
  //       title: 'Men Fashion',
  //       icon: '/public/Icons/icon12.png',
  //     },

  // {
  //       title: 'Tools & Hardware',
  //       icon: '/public/Icons/icon13.png',
  // },

  // {
  //       title: 'Pet Supplies',
  //       icon: '/public/Icons/icon14.png',
  // },

  // {
  //       title: 'Seasonal',
  //       icon: '/public/Icons/icon15.png',
  // }

  //   ];
  return (
    <div>
      <section>
        <div className="container">
          <h2 className="hidden md:flex text-[26px] font-medium text-secondary mb-8 mt-12">
            Category
          </h2>
          <h2 className="md:hidden text-[26px] font-medium text-secondary mb-4 mt-7">
            Main categories
          </h2>

          <div>
            {/* loading state handle */}
            {isLoading && (
              <div className="flex justify-center items-center h-40">
                <p className="text-xl font-semibold">Loading Categories...</p>
              </div>
            )}
            {/* error state handle */}
            {isError && (
              <div className="flex justify-center items-center h-40 text-red-500">
                <p className="text-xl font-semibold">
                  Error loading categories.
                </p>
              </div>
            )}
          </div>

          {/* categorys items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {data?.map((item, index) => (
              <Link  key={index} to={`/shop?category=${item}`} className="flex items-center gap-4 mb-6">
                <div className="flex items-center w-[270px] h-16.25 gap-3 p-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                 
                  <p className="text-[16px] text-secondary font-medium capitalize">
                    {item}
                  </p>
                  <MdArrowForwardIos className="text-gray-400 ml-auto" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categorys;
