import React from 'react';
import Container from '../Layout/Container';
import design from "../../assets/design.png"

const Design = () => {
    return (
        <div className='py-[48px]'>
            <Container>
                <div className='md:flex justify-between items-center'>
                    <div>
                        <img src= {design} alt="#design" />
                    </div>
                    <div className='w-full md:w-[601px]'>
                        <h4 className='font-primary font-semibold text-[28px] md:text-[36px] text-primary md:leading-[44px] pb-[16px] pt-[20px] md:pt-0'>How to design your site footer like we did</h4>
                        <p className='font-primary text-[14px] leading-[20px] text-secondary mb-[32px]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className="px-[20px] py-[10px] font-primary font-medium text-[14px] leading-[20px] border-2 border-btnColor bg-btnColor text-white rounded-[6px] cursor-pointer hover:bg-transparent hover:text-btnColor transition-all decoration-2">Learn More </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Design;