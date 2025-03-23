import React from 'react';
import '../assets/images/bg-shadow.png';
import footermain from '../assets/images/logo-footer.png'
const Footerone = () => {
    return (
        <div className='mt-[250px]'>
           <div className='   absolute  ml-1 top-[3200px] w-[1340px] h-[384px] border-2  rounded-xl bg-[#FFFFFF] m-auto'>
            <div className='hero-bg w-[1292px] h-[336px] border-2 bg-[#1313131A] rounded-xl m-auto mt-5'>
                <h1 className='text-center text-2xl m-auto w-[819px] h-[40px] my-4 text-[#131313]'>Subscribe to our Newsletter</h1>
                <p className='text-center text-2xl m-auto '>Get the latest updates and news right in your inbox!</p>
                <div>
                    <input className='w-[400px] h-[56px] bg-[#FFFFFF] rounded-xl mt-5 text-xs text-center' type="email" name="" id="" placeholder='Enter your email'  />
                    <button className=' ml-5 bg-orange-200 text-xl font-bold w-[145px] h-[56px] border-2 rounded-xl'>Subscribe</button>
             </div>
             </div>
         </div>
                <section className='    w-[1350px] h-[689px] border-2 rounded-xl bg-[#06091A] top[550px]'>
                    <img className='m-auto mt-72'  src={footermain} alt="" srcset="" />
                    <main className='flex justify-between'>
                        <div>
                            <h1 className='text-white text-left ml-4 text-xl'>About Us</h1>
                            <p className='text-white text-left ml-4 text-xs w-[291px] h-[78px]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div className=' items-center'>
                            <h1 className='text-white  ml-4 text-xl mt-5'>Quick Links</h1>
                            <ul className='text-white  ml-4 text-xs mt-5'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Service</li>
                                <li>Contact</li>
                                
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-white ml-4 text-xl'>Subscribe</h1>
                            <p className='text-white ml-4 text-xs w-[291px] h-[52px]'>Subscribe to our newsletter for the latest updates.</p>
                            <div className='flex items-center rounded-full overflow-hidden backdrop-blur-md'>
                                <input className='py-2 px-4 bg-white border-none outline-none' type="email" name="" id="" placeholder='Enter your email' />
                                <button className='py-2 px-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-r-full'>Subscribe</button>
                            </div>
                        </div>
                        
                        
                    </main>
                    <hr></hr>
                    <h1 className='text-xs text-white'>@2024 Your Company All Rights Reserved.</h1>
                </section>


                
        </div>
    );
};

export default Footerone;