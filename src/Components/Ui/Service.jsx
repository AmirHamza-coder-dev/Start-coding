import React from 'react';

const Service = () => {
  return (
    <section className='pb-12 border-b border-[#E5E5E5]'>
      <div className="container">
        <div className=" grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-7 md:gap-5">
            
          <div className="flex gap-3.5 md:gap-4.5 items-center">
            <div>
              <img src="/Service_icon/Shipping.png" alt="" />
            </div>
            <div>
              <h4 className="text-sm md:text-xl text-primary font-medium ">
                FREE SHIPPING
              </h4>
              <p className="text-[12px] text-[#757575] font-normal">
                Order via Campaign
              </p>
            </div>
          </div>

          <div className="flex gap-3.5 md:gap-4.5 items-center">
            <div>
              <img src="/Service_icon/Star.png" alt="" />
            </div>
            <div>
              <h4 className="text-sm md:text-xl text-primary font-medium ">BEST PRICE</h4>
              <p className="text-[12px] md:text-sm text-[#757575] font-normal">
                Quality products
              </p>
            </div>
          </div>

          <div className="flex gap-3.5 md:gap-4.5 items-center">
            <div>
              <img src="/Service_icon/Recent.png" alt="" />
            </div>
            <div>
              <h4 className="text-sm md:text-xl text-primary font-medium ">FREE RETURN</h4>
              <p className="text-[12px] md:text-sm text-[#757575] font-normal">
                Within 7 days returns
              </p>
            </div>
          </div>

          <div className="flex gap-3.5 md:gap-4.5 items-center">
            <div>
              <img src="/Service_icon/payment.png" alt="" />
            </div>
            <div>
              <h4 className="text-sm md:text-xl text-primary font-medium ">
                Secure Payment
              </h4>
              <p className="text-[12px] md:text-sm text-[#757575] font-normal">
                100% secure payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
