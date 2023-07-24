import React from 'react'

export const Products = () => {
  return (
    <section className='py-28'>
           <div className="container">
               <div className='flex gap-24 items-start'>
                   <div>
                       <h3 className='font-dm font-normal text-lg text-primary flex gap-5 items-center'>
                           <span><img src="./images/fire.png" alt="fire" /></span>
                           We are a passionate team
                       </h3>
                       <h2 className='font-syne font-bold text-6xl text-primary w-full lg:w-[510px] pt-9'>We create
                           amazing digital
                           products</h2>
                       <p className='font-dm font-normal text-lg text-secondary w-full lg:w-[475px] pt-10 pb-12'>Mi imperdiet congue id ante eu lacus ullamcorper blandit
                          mauris. Vulputate nam nulla tristique tellus.</p>
                       <a href="#" className='font-syne font-bold text-base text-white bg-tag py-4 px-5 rounded-xl shadow-xl hover:bg-white hover:text-brand transition-all'>Got a project? Contact us!</a>
                   </div>
                   <div>
                       <div className='flex gap-10 items-center'>
                           <div><img src="./images/product_1.png" alt="product_1" /></div>
                           <div>
                          <img src="./images/product_2.png" alt="product_2" /></div>
                       </div>
                   </div>
               </div>
           </div>
    </section>
  )
}
