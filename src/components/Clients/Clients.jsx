import Container from "../Layout/Container";
import clintOne from "../../assets/clintOne.png"
import clintTwo from "../../assets/clintTwo.png"
import clintThree from "../../assets/clintThree.png"
import clintFour from "../../assets/clintFour.png"
import clintFive from "../../assets/clintFive.png"
import clintSix from "../../assets/clintSix.png"


const Clients = () => {
    return (
        <div className="py-[40px]">
            <Container>
                <div className="text-center pb-[16px]">
                    <h3 className="font-primary font-semibold text-[36px] text-secondary leading-[44px]">Our Clients</h3>
                    <p className="font-primary text-[16px] text-secondary leading-[24px] pt-[8px]">We have been working with some Fortune 500+ clients</p>
                </div>
                <div className="flex justify-between py-[25px]">
                    <img src= {clintOne} alt="#clintOne" />
                    <img src= {clintTwo} alt="#clintOne" />
                    <img src= {clintThree} alt="#clintOne" />
                    <img src= {clintFour} alt="#clintOne" />
                    <img src= {clintFive} alt="#clintOne" />
                    <img src= {clintSix} alt="#clintOne" />
                </div>
            </Container>
        </div>
    );
};

export default Clients;