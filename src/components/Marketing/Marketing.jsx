import React from 'react';
import Container from '../Layout/Container';
import marketingOne from "../../assets/marketOne .png"
import marketingTwo from "../../assets/marketTwo.png"
import marketingThree from "../../assets/marketThree.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Marketing = () => {
    return (
        <div className='py-[45px]'>
            <Container>
                <div>
                    <h3 className='font-primary text-[36px] font-semibold text-primary leading-[44px] pb-[8px] text-center'>Caring is the new marketing</h3>
                    <p className='w-[628px] font-primary text-[16px] text-secondary leading-[24px] text-center m-auto'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[368px] h-[366px] relative mt-[16px]'>
                        <img src= {marketingOne} alt="#Marketing" />
                        <div className='w-[317px] bg-[#F5F7FA] rounded-[8px] shadow-[0_8px_16px_#ABBED1/40] p-[16px] absolute bottom-0 left-[50%] translate-x-[-50%]'>
                        <h5 className='font-primary font-semibold text-[20px] text-secondary leading-[28px] text-center pb-[16px]'>Creating Streamlined Safeguarding Processes with OneRen</h5>
                        <button className='flex items-center text-center mx-auto font-primary font-semibold text-[20px] text-btnColor leading-[28px] mb-[8px] cursor-pointer'>Read More <FaArrowRightLong className='pt-[5px] pl-[8px]' /></button>
                        </div>
                    </div>
                    <div className='w-[368px] h-[366px] relative mt-[16px]'>
                        <img src= {marketingTwo} alt="#Marketing" />
                        <div className='w-[317px] bg-[#F5F7FA] rounded-[8px] shadow-[0_8px_16px_#ABBED1/40] p-[16px] absolute bottom-0 left-[50%] translate-x-[-50%]'>
                        <h5 className='font-primary font-semibold text-[20px] text-secondary leading-[28px] text-center pb-[16px]'>What are your safeguarding responsibilities and how can you manage them?</h5>
                        <button className='flex items-center text-center mx-auto font-primary font-semibold text-[20px] text-btnColor leading-[28px] mb-[8px] cursor-pointer'>Read More <FaArrowRightLong className='pt-[5px] pl-[8px]' /></button>
                        </div>
                    </div>
                    <div className='w-[368px] h-[366px] relative mt-[16px]'>
                        <img src= {marketingThree} alt="#Marketing" />
                        <div className='w-[317px] bg-[#F5F7FA] rounded-[8px] shadow-[0_8px_16px_#ABBED1/40] p-[16px] absolute bottom-0 left-[50%] translate-x-[-50%]'>
                        <h5 className='font-primary font-semibold text-[20px] text-secondary leading-[28px] text-center pb-[16px]'>Revamping the Membership Model with Triathlon Australia</h5>
                        <button className='flex items-center text-center mx-auto font-primary font-semibold text-[20px] text-btnColor leading-[28px] mb-[8px] cursor-pointer'>Read More <FaArrowRightLong className='pt-[5px] pl-[8px]' /></button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Marketing;