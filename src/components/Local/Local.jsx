import React from "react";
import Container from "../Layout/Container";
import localOne from "../../assets/localOne.png";
import localTwo from '../../assets/localTwo.png'
import localThree from '../../assets/localThree.png'
import localFive from '../../assets/localFive.png'

const Local = () => {
  return (
    <div className="py-[30px] md:py-[64px] bg-[#F5F7FA]">
      <Container>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-[540px]">
            <h4 className="w-full md:w-[408px] font-primary font-semibold text-[25px] md:text-[36px] text-primary md:leading-[44px]">
              Helping a local
            </h4>
            <h4 className="md:w-[408px] font-primary font-semibold text-[25px] md:text-[36px] md:leading-[44px] text-btnColor">
              business reinvent itself
            </h4>
            <p className="font-primary text-[16px] text-primary mt-[8px] pb-[20px] md:pb-0">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div>
            <div>
              <div className="flex justify-between mb-[40px]">
                <div className="w-[225px] flex">
                  <div>
                    <img src={localOne} alt="#loacl" />
                  </div>
                  <div className="ml-[16px]">
                    <h5 className="font-primary font-bold text-[20px] md:text-[28px] leading-[36px] text-primary">
                      2,245,341
                    </h5>
                    <p className="font-primary text-[14px] md:text-[16px] text-secondary leading-[24px]">
                      Members
                    </p>
                  </div>
                </div>
                <div className="w-[225px] flex">
                  <div>
                    <img src={localTwo} alt="#loacl" />
                  </div>
                  <div className="ml-[16px]">
                    <h5 className="font-primary font-bold text-[20px] md:text-[28px] leading-[36px] text-primary">
                      46,328
                    </h5>
                    <p className="font-primary text-[14px] md:text-[16px] text-secondary leading-[24px]">
                      Clubs
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                <div className="w-[225px] flex">
                  <div>
                    <img src={localThree} alt="#loacl" />
                  </div>
                  <div className="ml-[16px]">
                    <h5 className="font-primary font-bold text-[20px] md:text-[28px] leading-[36px] text-primary">
                      828,867
                    </h5>
                    <p className="font-primary text-[14px] md:text-[16px] text-secondary leading-[24px]">
                      Event Bookings
                    </p>
                  </div>
                </div>
                <div className="w-[225px] flex">
                  <div>
                    <img src={localFive} alt="#loacl" />
                  </div>
                  <div className="ml-[16px]">
                    <h5 className="font-primary font-bold text-[20px] md:text-[28px] leading-[36px] text-primary">
                      1,926,436
                    </h5>
                    <p className="font-primary text-[14px] md:text-[16px] text-secondary leading-[24px]">
                      Payments
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Local;
