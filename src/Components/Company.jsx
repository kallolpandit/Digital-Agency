import React from 'react'

export const Company = () => {
  return (
    <section className='bg-company pt-28'>
          <div className="container">
              <div className='flex gap-24 flex-col lg:flex-row'>
                  <div>
                      <img src="./images/company_img.png" alt="company_img" />
                  </div>
                  <div className='pt-20'>
                      <h2 className='font-syne font-bold text-4xl text-white w-full lg:w-[495px] pb-9'>We are a full-service
                          digital company</h2>
                      <p className='font-dm font-normal text-lg text-white w-full lg:w-[510px] pb-12'>Nibh enim in purus at habitant. Vitae tortor volutpat aliquam
                         eget nunc sagittis. Viverra odio amet, diam.</p>
                      <div className='flex gap-7'>
                          <input type="email" placeholder='Insurt your email...' className='pt-4 pb-4 pl-4 pr-16 rounded-xl placeholder-primary placeholder:font-dm placeholder:text-lg' />
                          <button className='py-4 px-10 bg-tag text-white text-lg font-dm font-bold rounded-xl hover:bg-white hover:text-brand hover:shadow-lg transition-all'>Subscribe</button>
                      </div>
                      <p className='font-dm font-normal text-lg text-white pt-11'>Euismod ipsum pellentesque sit nullam. <span className='text-brand'>Imperdiet fermentum</span> justo.</p>
                  </div>
              </div>
          </div>
    </section>
  )
}
