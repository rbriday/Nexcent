import Container from "../Layout/Container";
import logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


const Navbar = () => {
    const [open, setOpne] = useState(false);


    return (
        <div className="py-[22px]">
            <Container>
                <div className="md:flex justify-between items-center relative">
                    <div className="w-[30%]">
                        <img src= {logo} alt="#logo" />
                    </div>
                    <div className="hidden md:flex justify-between items-center w-[70%]">
                        <div className="">
                        <ul className="md:flex space-x-[50px] font-primary font-medium text-[16px] text-[#18191F]">
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Home</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Service</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Feature</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Product</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Testimonial</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="space-x-[14px] hidden md:block">
                        <button className="px-[20px] py-[10px] font-primary font-medium text-[14px] leading-[20px] text-btnColor cursor-pointer rounded-[6px] hover:bg-btnColor hover:text-white transition-all decoration-2">Login</button>
                        <button className="px-[20px] py-[10px] font-primary font-medium text-[14px] leading-[20px] border-2 border-btnColor bg-btnColor text-white rounded-[6px] cursor-pointer hover:bg-transparent hover:text-btnColor transition-all decoration-2">Sign Up</button>
                    </div>
                    </div>

                    <div className={`md:hidden absolute duration-1000 ${open? "top-9" : "-top-60"} left-3 bg-secondary px-5 py-3 w-full md:w-[40%]`}>
                        <div className="">
                        <ul className="md:flex space-x-[50px] font-primary font-medium text-[16px] text-[#18191F]">
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Home</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Service</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Feature</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Product</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">Testimonial</a></li>
                            <li className="hover:text-btnColor transition-all decoration-2"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="space-x-[14px]">
                        <button className="px-[20px] py-[10px] font-primary font-medium text-[14px] leading-[20px] text-btnColor cursor-pointer rounded-[6px] hover:bg-btnColor hover:text-white transition-all decoration-2">Login</button>
                        <button className="px-[20px] py-[10px] font-primary font-medium text-[14px] leading-[20px] border-2 border-btnColor bg-btnColor text-white rounded-[6px] cursor-pointer hover:bg-transparent hover:text-btnColor transition-all decoration-2">Sign Up</button>
                    </div>
                    </div>
                </div>
                <span className="md:hidden cursor-pointer absolute top-[30px] right-[30px]" onClick={()=>setOpne(!open)}>
                    {
                        open ?  <RxCross2 size={30} />  : <FaBars size={30} />
                    }
                    
                    
                </span>
            </Container>
        </div>
    );
};

export default Navbar;