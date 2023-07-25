import React from 'react'

export const Products = () => {
  return (
    <section className='pt-28'>
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
                       <a href="" className='font-syne font-bold text-base text-white bg-tag py-4 px-5 rounded-xl shadow-xl hover:bg-white hover:text-brand transition-all'>Got a project? Contact us!</a>
                   </div>
                   <div>
                       <div className='flex gap-10 items-center'>
                           <div><img src="./images/product_1.png" alt="product_1" /></div>
                           <div>
                          <img src="./images/product_2.png" alt="product_2" /></div>
                       </div>
                   </div>
               </div>
               <div className='flex gap-14 justify-center pt-28 flex-col lg:flex-row'>
                  <div className='py-8 px-6 bg-slate-300 rounded-2xl w-fit group'>
                      <div><img src="./images/product_3.png" alt="product_3" /></div>
                      <div className='pl-5'>
                          <h5 className='font-dm font-medium text-base text-primary pt-10 pb-5 group-hover:text-brand transition-all'>Design</h5>
                          <h3 className='font-dm font-medium text-xl text-primary w-full lg:w-56 group-hover:text-brand transition-all'>Power up your design
                              system with an Avada
                              prebuilt website</h3>
                           <p className='font-dm font-normal text-base text-secondary w-full lg:w-72 py-7'>Sit amet quam vehicula elementum
                              sed sit dolor sit amet, consectetur
                              adipiscing elit.</p>
                            <a href="" className='font-dm font-medium text-base text-primary group-hover:text-tag transition-all'>Continue reading</a>
                      </div>
                  </div>
                  <div className='py-8 px-6 bg-slate-300 rounded-2xl w-fit group'>
                      <div><img src="./images/product_4.png" alt="product_4" /></div>
                      <div className='pl-5'>
                          <h5 className='font-dm font-medium text-base text-primary pt-10 pb-5 group-hover:text-brand transition-all'>Design, Tips & Tricks</h5>
                          <h3 className='font-dm font-medium text-xl text-primary w-full lg:w-56 group-hover:text-brand transition-all'>Behind the scenes of
                              creating a UI kit</h3>
                           <p className='font-dm font-normal text-base text-secondary w-full lg:w-72 pt-7 pb-14'>Vestibulum ac diam sit amet quam
                               vehicula elementum sed sit amet dui
                               vivamus.</p>
                            <a href="" className='font-dm font-medium text-base text-primary group-hover:text-tag transition-all'>Continue reading</a>
                      </div>
                  </div>
                  <div className='py-8 px-6 bg-slate-300 rounded-2xl w-fit group'>
                      <div><img src="./images/product_5.png" alt="product_5" /></div>
                      <div className='pl-5'>
                          <h5 className='font-dm font-medium text-base text-primary pt-10 pb-5 group-hover:text-brand transition-all'>Design, Tips & Tricks</h5>
                          <h3 className='font-dm font-medium text-xl text-primary w-full lg:w-56 group-hover:text-brand transition-all'>Five integrations to help
                              your product team
                              collaborate better</h3>
                           <p className='font-dm font-normal text-base text-secondary w-full lg:w-72 py-7'>Sit amet quam vehicula elementum
                              sed sit dolor sit amet, consectetur
                              adipiscing elit.</p>
                            <a href="" className='font-dm font-medium text-base text-primary group-hover:text-tag transition-all'>Continue reading</a>
                      </div>
                  </div>
               </div>
           </div>
    </section>
  )
}
