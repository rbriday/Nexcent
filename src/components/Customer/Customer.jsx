import React from 'react';
import Container from '../Layout/Container';
import customer from '../../assets/customar.png'
import clientOne from "../../assets/clintOne.png"
import clientTwo from "../../assets/clintTwo.png"
import clientThree from "../../assets/clintThree.png"
import clientFour from "../../assets/clintFour.png"
import clientFive from "../../assets/clintFive.png"
import clientSix from "../../assets/clintSix.png"
import { FaLongArrowAltRight } from "react-icons/fa";

const Customer = () => {
    return (
        <div className='bg-[#F5F7FA] py-[32px]'>
            <Container>
                <div className='flex'>
                    <div className='w-[326px]'>
                        <img src= {customer} alt="#customar" />
                    </div>
                    <div className='w-[748px] py-[10px]'>
                        <div>
                            <p className='font-primary font-medium text-[16px] text-secondary pb-[10px] leading-[24px]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                            <h4 className='font-primary font-semibold text-[20px] text-btnColor leading-[28px]'>Tim Smith</h4>
                            <p className='font-primary text-secondary text-[16px] leading-[24px]'>British Dragon Boat Racing Association</p>
                        </div>
                        <div className='mt-[10px] flex justify-between items-center'>
                            <div className='w-[493px] flex justify-between'>
                                <img src= {clientOne} alt="" />
                                <img src= {clientTwo} alt="" />
                                <img src= {clientThree} alt="" />
                                <img src= {clientFour} alt="" />
                                <img src= {clientFive} alt="" />
                                <img src= {clientSix} alt="" />
                            </div>
                            <div className='w-[223px]'>
                                <a href="#" className='font-primary font-semibold text-[20px] text-btnColor flex items-center justify-between'>Meet all customers <FaLongArrowAltRight  /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Customer;