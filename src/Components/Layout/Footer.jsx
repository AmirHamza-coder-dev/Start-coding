import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <FaFacebookF />,
      bg: 'bg-[#0198E9]',
    },
    {
      id: 2,
      icon: <IoLogoTwitter />,
      bg: 'bg-[#1DA1F2]',
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      bg: 'bg-[#0077B5]',
    },
    {
      id: 4,
      icon: <FaInstagram />,
      bg: 'bg-[#da0404]',
    },
  ];

  return (
    <footer className="pt-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 pb-16">
        
                {/* first part */}

          <div className="hidden sm:block md:block order-2 ">
            <Link>
              <img src="/Footer_img/logo.png" alt="" />
            </Link>
            <p className="text-x text-secondary pt-9 pb-7">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt <br /> ut labore et dolore magna
              aliqua.
            </p>

            <div className="flex gap-5">
              {socialIcons.map((item) => (
                <Link
                  key={item.id}
                  className={`p-2.5 ${item.bg} rounded-full text-amber-50`}
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            {/* 
            <Link className="flex gap-5 ">
              <span className="p-2.5 bg-[#0198E9] rounded-full text-amber-50">
                <FaFacebookF />
              </span>

              <span className="p-2.5 bg-[#1DA1F2] rounded-full text-amber-50">
                <IoLogoTwitter />
              </span>

              <span className="p-2.5 bg-[#0077B5] rounded-full text-amber-50">
                <FaLinkedinIn />
              </span>

              <span className="p-2.5 bg-[#da0404] rounded-full text-amber-50">
                <FaInstagram />
              </span>
            </Link> */}
          </div>

          {/* second part  */}

          <div className="order-3 md:order-2 sm:order-2">
            <h4 className="text-xl font-medium text-primary pb-9 ">
              QUICK LINKS
            </h4>
            <ul>
              <li className="flex flex-col gap-3 text-[18px] font-normal text-secondary">
                <Link>About us</Link>
                <Link>Contact us</Link>
                <Link>Products</Link>
                <Link>Login</Link>
                <Link>Sign Up</Link>
              </li>
            </ul>
          </div>

          {/* third part */}
          <div className="order-4 md:order-3 sm:order-3">
            <h4 className="text-xl font-medium text-primary pb-9">
              CUSTOMER AREA
            </h4>
            <ul>
              <li className="flex flex-col gap-3  text-[18px] font-normal text-secondary">
                <Link>My Account</Link>
                <Link>Orders</Link>
                <Link>Terms</Link>
                <Link>Privacy Policy</Link>
                <Link>Shipping Information</Link>
              </li>
            </ul>
          </div>

          {/* Fourth part */}
          <div className="order-1 md:order-4 sm:order-4">
            <h4 className="text-xl font-medium text-primary order-1 md:order-4 sm:order-4">
              CONTACT
            </h4>
            <p className="text-[18px] font-normal text-secondary pt-6 pb-8">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor{' '}
            </p>

            <div className="flex gap-7 ">
              <img src="/Footer_img/contact.png" alt="" />
              <div>
                <p className="text-[18px] font-normal text-secondary">
                  Have any question?
                </p>
                <Link className="text-3xl font-semibold text-[#0198E9]">
                  099 456 789
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SocialIcons For Small device*/}
        <div className="flex gap-5 pt-8 block md:hidden sm:hidden">
          {socialIcons.map((item) => (
            <Link
              key={item.id}
              className={`p-2.5 ${item.bg} rounded-full text-amber-50`}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        
      </div>
      
      <div className='border-t border-[#E5E5E5]'>

        <div className='container   flex justify-center md:justify-between py-5'>
          <p className='text-[16px] font-normal text-[#757575]'>Projectnirvoya -   © 2021 All Rights Reserved</p>


          <span className=' hidden md:flex text-xl font-medium text-[#0198E9CC]'>Pay With <img src="/Footer_img/pay_with.png" alt="" /></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
