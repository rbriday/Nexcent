import Container from "../Layout/Container";
import communityOne from "../../assets/communityOne.png"
import communityTwo from "../../assets/communityTwo.png"
import communityThree from "../../assets/communityThree.png"


const Community = () => {
    return (
        <div>
            <Container>
                <div className="w-full md:w-[542px] text-center mx-auto mb-[16px]">
                    <h3 className="font-primary font-semibold text-[22px] md:text-[35px] text-primary leading-[27px] md:leading-[44px] pb-[8px]">Manage your entire community in a single system</h3>
                    <p className="font-primary text-[16px] text-secondary leading-[24px]">Who is Nextcent suitable for?</p>
                </div>
                <div className="md:flex justify-between ">
                    <div className="w-[299px] p-[24px] text-center shadow-md mb-[30px]">
                        <img src= {communityOne} alt="#communityOne" className="m-auto" />
                        <h3 className="font-primary font-bold text-[28px] text-primary leading-[36px] pt-[16px] pb-[8px]">Membership Organisations</h3>
                        <p className="font-primary text-[14px] text-secondary leading-[20px]">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>

                    <div className="w-[299px] p-[24px] text-center shadow-md mb-[30px]">
                        <img src= {communityTwo} alt="#communityOne" className="m-auto" />
                        <h3 className="font-primary font-bold text-[28px] text-primary leading-[36px] pt-[16px] pb-[8px]">National Associations</h3>
                        <p className="font-primary text-[14px] text-secondary leading-[20px]">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>

                    <div className="w-[299px] p-[24px] text-center shadow-md mb-[30px]">
                        <img src= {communityThree} alt="#communityOne" className="m-auto" />
                        <h3 className="font-primary font-bold text-[28px] text-primary leading-[36px] pt-[16px] pb-[8px] px-[10px]">Clubs And Groups</h3>
                        <p className="font-primary text-[14px] text-secondary leading-[20px]">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Community;