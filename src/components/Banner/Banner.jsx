import Container from "../Layout/Container";
import bannerImg from "../../assets/banner.png"


const Banner = () => {
    return (
        <div className="py-[96px]">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[657px]">
                        <h2 className="font-inter font-semibold text-[64px] text-primary leading-[76px] pb-[16px]">Lessons and insights <span className="text-btnColor"> from 8 years</span></h2>
                        <p className="font-primary text-[16px] text-secondary pb-[32px]">Where to grow your business as a photographer: site or social media?</p>
                        <button className="px-[20px] py-[10px] font-primary font-medium text-[14px] leading-[20px] border-2 border-btnColor bg-btnColor text-white rounded-[6px] cursor-pointer hover:bg-transparent hover:text-btnColor transition-all decoration-2">Register</button>
                    </div>
                    <div>
                        <img src= {bannerImg} alt="#BannarImag" />
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Banner;