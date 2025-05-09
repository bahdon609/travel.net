
import cloud from '../../../assets/banner/cloud.png'
import familyImg from '../../../assets/gallery/safewayconsultancy_family_photo.png'
import { FaCheckSquare } from "react-icons/fa";


const Banner2 = () => {
    return (
       <>
        <div className='mx-auto xl:w-[1300px] w-full mb-10'>
              <div className='bg-bannerbg_clr'>
                
                <div className='flex flex-col md:flex-row justify-center items-center'>
                  {/* left side */}
                  <div className='w-[50%]'>
                    <img src={familyImg} alt="" className='mx-auto mt-12'/>
                  </div>
                  {/* right side */}
                  <div className='lg:w-[50%]'>
                  <div className='flex flex-col items-start'>
                  <p className='text-tex_primay_clr text-center text-text_30px lg:text-text_40px font-semibold mb-2'>What we will give you?</p>
                 <div className='flex items-center gap-2 text-text_large mb-1'>
                 
                  <FaCheckSquare className='text-iconCheck_boxClr'/>
                  <p>Visa Service</p>
                 </div>
                 <div className='flex items-center gap-2 text-text_large mb-1'>
                 
                  <FaCheckSquare className='text-iconCheck_boxClr'/>
                  <p>Study Visa</p>
                 </div>
                 <div className='flex items-center gap-2 text-text_large mb-1'>
                 
                  <FaCheckSquare className='text-iconCheck_boxClr'/>
                  <p>Hotel Reservation</p>
                 </div>
                 <div className='flex items-center gap-2 text-text_large mb-1'>
                 
                  <FaCheckSquare className='text-iconCheck_boxClr'/>
                  <p>Flight Reservation</p>
                 </div>
                 <div className='flex items-center gap-2 text-text_large mb-1'>
                 
                  <FaCheckSquare className='text-iconCheck_boxClr'/>
                  <p> Umrah & Hajj Package</p>
                 </div>
                </div>
               
                  </div>
                </div>
                <div className=''>
                  <img src={cloud} alt="" className='w-full h-32 opacity-50'/>
                </div>
              </div>
            </div>
       </>
    );
};

export default Banner2;