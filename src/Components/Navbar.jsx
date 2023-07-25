import React from 'react'
import { FaChevronDown } from 'react-icons/fa';

export const Navbar = () => {
  return (
     <nav className='py-14 bg-body'>
         <div className="container">
             <div className='flex gap-20 items-center'>
                 <div>
                     <a href="">
                        <img src="./images/logo.png" alt="logo" />
                     </a>
                 </div>
                 <div>
                    <ul className='flex gap-10 font-semibold font-dm text-xl text-primary'>
                        <li><a href="" className='hover:text-brand transition-all'>Home</a></li>
                        <li><a href="" className='hover:text-brand transition-all'>The Studio</a></li>
                        <li className='relative group'><a href="#" className='hover:text-brand transition-all flex gap-2 items-center'>Services<FaChevronDown/></a>
                           <ul className='absolute  top-full left-0 text-primary bg-white rounded-r-lg w-full p-5  hidden group-hover:block transition-all'>
                              <li><a href="" className='hover:text-brand'>Services 1</a></li>
                              <li><a href="" className='hover:text-brand'>Services 2</a></li>
                              <li><a href="" className='hover:text-brand'>Services 3</a></li>
                              <li><a href="" className='hover:text-brand'>Services 4</a></li>
                              <li><a href="" className='hover:text-brand'>Services 5</a></li>
                           </ul>
                        </li>
                        <li className='relative group'><a href="" className='hover:text-brand transition-all flex gap-2 items-center'>Projects<FaChevronDown/></a>
                           <ul className='absolute top-full left-0 text-primary bg-white rounded-lg w-full p-5  hidden group-hover:block transition-all'>
                              <li><a href="" className='hover:text-brand inline-block'>Projects 1</a></li>
                              <li><a href="" className='hover:text-brand inline-block'>Projects 2</a></li>
                              <li><a href="" className='hover:text-brand inline-block'>Projects 3</a></li>
                              <li><a href="" className='hover:text-brand inline-block'>Projects 4</a></li>
                              <li><a href="" className='hover:text-brand inline-block'>Projects 5</a></li>
                           </ul>
                        </li>
                        <li><a href="" className='hover:text-brand transition-all'>Products</a></li>
                        <li><a href="" className='hover:text-brand transition-all'>The Magazine</a></li>
                    </ul>
                 </div>
             </div>
         </div>
     </nav>
  )
}
