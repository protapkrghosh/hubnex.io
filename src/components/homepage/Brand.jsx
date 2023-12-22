import { Link } from 'react-router-dom'
import '../../App.css'

const Brand = () => {
    
  return (
 
    <div className='w-full h-full flex justify-center flex-col items-center relative bg-moon bg-cover bg-no-repeat bg-center'>
        <div className=' h-full w-full text-white flex justify-center'>
            <div className=' flex flex-col md:justify-start sm:gap-0 w-[300px] mt-24 xs:mt-36 gap-5 sm:mt-52 md:mt-56 lg:mt-14 xl:mt-36 2xl:mt-16 h-full sm:w-full items-center'>
          {/* Note: added mt-2 for the heading brand heading section, text and button capitalize */}
                <h1 className='md:mt-2 text-[28px] sm:text-[50px] lg:text-[60px] xl:text-[55px]  font-gilroy-bold text-center'>helping you build products</h1>
                <span className=' text-black sm:text-[50px] font-gilroy-bold text-[32px] lg:text-[60px] xl:text-[55px]'>that shine</span>
            </div>
        </div>
        <div className=' text-white'>
            {/* bug fix: add mb-52 */}
            <div className=' flex flex-col items-center gap-5 mb-52 md:mb-20 lg:mb-10'>
                <div className=' flex flex-col items-center font-gilroy-bold md:font-gilroy-semi-bold text-[18px] md:text-[24px] xl:text-[24px]'>
                    <span>your have an idea?</span>
                    <span>we have a team</span>
                </div>
                {/* Whatdo:make buttons reusable */}
                <Link to='/contact'><button className=' btn-primary'>get started </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Brand