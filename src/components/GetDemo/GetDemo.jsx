import React from 'react';
import Container from '../Layout/Container';
import { FaArrowRightLong } from 'react-icons/fa6';

const GetDemo = () => {
    return (
        <div className='py-[32px] bg-[#F5F7FA]'>
            <Container>
                <div className='w-[887px] mx-auto'>
                    <h3 className='font-primary font-semibold text-[64px] text-[#263238] leading-[74px] text-center px-[50px] pb-[32px]'>Pellentesque suscipit fringilla libero eu.</h3>
                    <button className='flex items-center font-primary font-medium text-[16px] text-white leading-[24px] cursor-pointer px-[32px] py-[14px] bg-btnColor border-2 border-btnColor rounded-2xl mx-auto hover:border-2 hover:border-btnColor hover:text-btnColor hover:bg-transparent transition-all'>Read More <FaArrowRightLong className='pt-[5px] pl-[8px]' size={16} /></button>
                </div>
            </Container>
        </div>
    );
};

export default GetDemo;