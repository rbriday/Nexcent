import Container from "../Layout/Container";
import logo from "../../assets/logo.png"


const Navbar = () => {
    return (
        <div className="py-[22px]">
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <img src= {logo} alt="#logo" />
                    </div>
                    <div>
                        <ul className="flex space-x-[50px] font-primary font-medium text-[16px] text-[#18191F]">
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
            </Container>
        </div>
    );
};

export default Navbar;