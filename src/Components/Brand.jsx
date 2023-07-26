import React from 'react'
import {GrDownload} from 'react-icons/gr';

export const Brand = () => {
  return (
    <section className='py-32'>
        <div className="container">
             <div className='flex  gap-28 justify-end flex-col lg:flex-row'>
                <div className='text-center w-fit'>
                    <a href="" className='inline-block py-6 px-6 bg-red-100 rounded-xl	'><span className='text-2xl'><GrDownload/></span></a>
                    <h2 className='font-syne font-bold text-5xl text-primary py-12 w-full lg:w-[410px]'>Intelligent brand identity</h2>
                    <p className='font-dm font-normal text-secondary text-lg pb-8 w-full lg:w-[415px]'>Auctor turpis nulla risus dignissim parturient
                       semper sed ultricies convallis. Mauris blandit
                       sit lorem imperdiet.</p>
                     <a href="" className='font-dm font-medium text-brand text-lg hover:text-tag transition-all'>Learn more about us</a>
                </div>
                <div>
                    <img src="./images/brand_info.png" alt="brand_info" />
                </div>
             </div>
             <div className='flex justify-between pt-24'>
                 <h5 className='font-syne font-bold text-xl text-primary'>Our downloadable digital products</h5>
                 <a href="" className='font-dm font-normal text-lg text-brand hover:text-tag transition-all'>View all products available</a>
             </div>
             <div className='pt-16 flex gap-28 flex-col lg:flex-row justify-center'>
                 <div className='w-fit group'>
                     <img src="./images/brand_product_1.png" alt="brand_product_1" />
                     <div className='flex items-center justify-between pt-10'>
                        <div>
                            <h4 className='font-dm font-medium text-lg text-primary group-hover:text-brand transition-all'>Avada Podcast</h4>
                            <p className='font-dm font-normal text-base text-brand'>Prebuilt Demo</p>
                        </div>
                        <div>
                            <p className='py-3 px-3 bg-red-100 text-tag font-syne font-bold text-sm'>$60</p>
                        </div>
                     </div>
                 </div>
                 <div className='w-fit group'>
                     <img src="./images/brand_product_2.png" alt="brand_product_2" />
                     <div className='flex items-center justify-between pt-10'>
                        <div>
                            <h4 className='font-dm font-medium text-lg text-primary group-hover:text-brand transition-all'>Avada Podcast</h4>
                            <p className='font-dm font-normal text-base text-brand'>Prebuilt Demo</p>
                        </div>
                        <div>
                            <p className='py-3 px-3 bg-red-100 text-tag font-syne font-bold text-sm'>$60</p>
                        </div>
                     </div>
                 </div>
                 <div className='w-fit group'>
                     <img src="./images/brand_product_3.png" alt="brand_product_3" />
                     <div className='flex items-center justify-between pt-10'>
                        <div>
                            <h4 className='font-dm font-medium text-lg text-primary group-hover:text-brand transition-all'>Avada Podcast</h4>
                            <p className='font-dm font-normal text-base text-brand'>Prebuilt Demo</p>
                        </div>
                        <div>
                            <p className='py-3 px-3 bg-red-100 text-tag font-syne font-bold text-sm'>$60</p>
                        </div>
                     </div>
                 </div>
             </div>
             <div className='pt-16 flex gap-28 flex-col lg:flex-row justify-center'>
                 <div className='w-fit group'>
                     <img src="./images/brand_product_4.png" alt="brand_product_4" />
                     <div className='flex items-center justify-between pt-10'>
                        <div>
                            <h4 className='font-dm font-medium text-lg text-primary group-hover:text-brand transition-all'>Avada Podcast</h4>
                            <p className='font-dm font-normal text-base text-brand'>Prebuilt Demo</p>
                        </div>
                        <div>
                            <p className='py-3 px-3 bg-red-100 text-tag font-syne font-bold text-sm'>$60</p>
                        </div>
                     </div>
                 </div>
                 <div className='w-fit group'>
                     <img src="./images/brand_product_5.png" alt="brand_product_5" />
                     <div className='flex items-center justify-between pt-10'>
                        <div>
                            <h4 className='font-dm font-medium text-lg text-primary group-hover:text-brand transition-all'>Avada Podcast</h4>
                            <p className='font-dm font-normal text-base text-brand'>Prebuilt Demo</p>
                        </div>
                        <div>
                            <p className='py-3 px-3 bg-red-100 text-tag font-syne font-bold text-sm'>$60</p>
                        </div>
                     </div>
                 </div>
                 <div className='w-fit group'>
                     <img src="./images/brand_product_6.png" alt="brand_product_6" />
                     <div className='flex items-center justify-between pt-10'>
                        <div>
                            <h4 className='font-dm font-medium text-lg text-primary group-hover:text-brand transition-all'>Avada Podcast</h4>
                            <p className='font-dm font-normal text-base text-brand'>Prebuilt Demo</p>
                        </div>
                        <div>
                            <p className='py-3 px-3 bg-red-100 text-tag font-syne font-bold text-sm'>$60</p>
                        </div>
                     </div>
                 </div>
             </div>
        </div>
    </section>
  )
}
