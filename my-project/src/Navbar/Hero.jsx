import '../Navbar/Nav.css';
import bannermain from '../assets/images/banner-main.png';

const Hero = ({ handleAddMoney }) => {
    return (
       <div>
        <div className='hero-bg bg-[#131313] lg:w-[1320px] h-[545px] border-2 rounded-xl mt-20'>
            <img className='m-auto mt-5' src={bannermain} alt=""/>
            <p className='w-[970px] h-[60px] text-4xl my-4 text-[#FFFFFF] text-center m-auto'>
                Assemble Your Ultimate Dream 11 Cricket Team
            </p>
            <h2 className='w-[390px] h-[39px] text-xl text-[#FFFFFF] text-center m-auto '>
                Beyond Boundaries Beyond Limits
            </h2>
            <div className='w-[200px] h-[64px] border-2 rounded-xl border-[#E7FE29] m-auto'>
                <button className='w-[185px] h-[30px] border-2 rounded-xl bg-[#E7FE29] mt-4 text-xl ' 
                        onClick={handleAddMoney}>
                    Claim Free Credit
                </button>
            </div>
        </div>
       </div>
    );
};

export default Hero;
