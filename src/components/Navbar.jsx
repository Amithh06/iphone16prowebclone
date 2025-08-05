
import { appleImg } from '../utils';
import { navList } from '../constants';


const Navbar=()=> {
  return (
   <header className='w-full py-3 sw:px-10 px-5 flex justify-between items-center bg-gray-950'>
    <nav className='flex w-full screen-max-width '>
      <img src={appleImg} alt="Apple" width={30} height={120} />

      <div className='flex flex-1 justify-center max-sm:hidden pl-15'>
        {
        navList.map((nav)=>( 
          <div key={nav} className='px-5  text-sm cursor-pointer text-gray-500 hover:text-white transition-all'>
          {nav}
        </div> ))}
      </div>

        <div className='flex items-baseline gap-10 max-sm:justify-end max-sm:flex-1 '>
          <img src="public/assets/images/s.svg" alt="Apple" width={30} height={18} />
         <img src="public/assets/images/bag.svg" alt="Apple" width={30} height={18} />
        </div>
    </nav>
   </header>
  )
}

export default Navbar