import React from 'react'

export const Projects = () => {
  return (
    <section className='bg-brand py-28'>
          <div className="container">
               <div className='flex gap-20 items-start flex-col lg:flex-row'>
                   <h2 className='font-syne font-bold text-6xl text-white w-full lg:w-96'>Our recent projects</h2>
                   <p className='font-dm font-normal text-lg text-white w-full lg:w-[410px]'>Diam integer turpis tristique integer tincidunt
                      cursus dignissim. Euismod libero pellentesque et
                      suspendisse posuere. Lorem quis nec nisl viverra
                      ut velit imperdiet.</p>
                    <div>
                          <a href="#" className='font-syne font-bold text-base text-white bg-tag py-4 px-5 rounded-xl shadow-xl hover:text-tag hover:bg-white transition-all'>Got a project? Contact us!</a>
                    </div>
               </div>
               <div className='pt-24 flex gap-28 justify-center flex-col lg:flex-row'>
                   <div className='group hover:shadow-xl transition-all'>
                       <div className='w-fit'>
                           <img src="./images/project_1.png" alt="project_1" />
                           <div className='bg-white  text-center py-8 rounded-b-2xl'>
                             <h4 className='font-dm font-medium text-lg text-primary'>Avada Interior Prebuilt Website</h4>
                             <a href="#" className='font-dm font-normal text-lg text-brand group-hover:text-tag transition-all'>Web Design</a>
                           </div>
                       </div>
                   </div>
                   <div className='group hover:shadow-xl transition-all'>
                       <div className='w-fit'>
                           <img src="./images/project_2.png" alt="project_2" />
                           <div className='bg-white  text-center py-8 rounded-b-2xl'>
                             <h4 className='font-dm font-medium text-lg text-primary'>Avada Interior Prebuilt Website</h4>
                             <a href="#" className='font-dm font-normal text-lg text-brand group-hover:text-tag transition-all'>Web Design</a>
                           </div>
                       </div>
                   </div>
                   <div className='group hover:shadow-xl transition-all'>
                       <div className='w-fit'>
                           <img src="./images/project_3.png" alt="project_3" />
                           <div className='bg-white  text-center py-8 rounded-b-2xl'>
                             <h4 className='font-dm font-medium text-lg text-primary'>Avada Interior Prebuilt Website</h4>
                             <a href="#" className='font-dm font-normal text-lg text-brand group-hover:text-tag transition-all'>Web Design</a>
                           </div>
                       </div>
                   </div>
               </div>
          </div>
    </section>
  )
}
