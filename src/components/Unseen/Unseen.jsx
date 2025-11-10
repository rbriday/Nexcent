import Container from "../Layout/Container";
import unseen from "../../assets/unseen.png"


const Unseen = () => {
    return (
        <div>
            <Container>
                <div className="md:flex">
                    <div className="w-full md:w-[422px]">
                        <img src= {unseen} alt="#unseen" />
                    </div>
                    <div className="w-full md:w-[661px] pt-[30px] md:pt-[82px]">
                        <h3 className="font-primary font-semibold text-[25px] md:text-[36px] text-primary md:leading-[44px] pb-[16px]">The unseen of spending three years at Pixelgrade</h3>
                        <p className="font-primary text-[14px] text-secondary leading-[20px] pb-[32px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className="px-[20px] py-[10px] font-primary font-medium text-[14px] leading-[20px] border-2 border-btnColor bg-btnColor text-white rounded-[6px] cursor-pointer hover:bg-transparent hover:text-btnColor transition-all decoration-2 mb-[30px] md:mb-0">Learn More </button>
                    </div>
                </div>
                    
            </Container>
        </div>
    );
};

export default Unseen;