import React from 'react'
import {FaPlay} from 'react-icons/fa';
export const Banner = () => {
  return (
    <section className='pt-3 bg-body'>
          <div className="container">
              <div className='flex gap-28'>
                  <div className='flex gap-12'>
                     <div>
                         <img src="./images/banner_1.png" alt="banner_1" />
                     </div>
                     <div className='pt-10'>
                         <img src="./images/banner_2.png" alt="banner_2" />
                     </div>
                  </div>
                  <div>
                     <h3 className='font-dm font-normal text-lg text-secondary'>Hello! We are Avada Digital Agency.</h3>
                     <h1 className='font-syne font-bold text-6xl text-primary w-full lg:w-[580px] pt-10'>We create
                         amazing digital
                         products</h1>
                     <div className='flex gap-14 py-12 items-center'>
                         <p className='font-syne font-normal text-lg text-secondary w-full lg:w-60'>Euismod ipsum pellentesque
                            sit nullam fermentum justo.</p>
                         <a href="" className='inline-block p-4 rounded-xl bg-brand text-base text-white font-syne font-semibold hover:bg-white hover:text-brand	 transition-all'>Learn more about us</a>
                     </div>
                     <div className='flex gap-4 items-center'>
                        <p className='p-5 group  bg-brand border border-[#0256FF] hover:bg-white rounded-full w-fit transition-all'><span className='text-white group-hover:text-brand transition-all'><FaPlay/></span></p>
                        <a href='' className='font-syne font-normal text-lg text-brand'>View our new showreel</a>
                     </div>
                  </div>
              </div>
              <div className='text-center py-28'>
                  <h3 className='font-syne font-normal text-base text-primary'>We are very fortunate to work with these amazing partners</h3>
                  <div className='pt-16'>
                      <div className='flex gap-20 justify-center'>
                         <div>
                            <a href=""><img src="./images/pratner_1.png" alt="pratner_1" /></a>
                         </div>
                         <div>
                            <a href=""><img src="./images/pratner_2.png" alt="pratner_2" /></a>
                         </div>
                         <div>
                            <a href=""><img src="./images/pratner_3.png" alt="pratner_3" /></a>
                         </div>
                         <div>
                            <a href=""><img src="./images/pratner_4.png" alt="pratner_4" /></a>
                         </div>
                         <div>
                           <a href=""> <img src="./images/pratner_5.png" alt="pratner_5" /></a>
                         </div>
                         <div>
                            <a href=""><img src="./images/pratner_6.png" alt="pratner_6" /></a>
                         </div>
                         <div>
                            <a href=""><img src="./images/pratner_7.png" alt="pratner_7" /></a>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}
