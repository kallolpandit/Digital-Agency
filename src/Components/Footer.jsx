import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-brand pt-28 pb-12'>
         <div className="container">
            <div className='flex justify-between flex-col lg:flex-row'>
                <div>
                     <img src="./images/footer_logo.png" alt="footer_logo" />
                </div>
                <div>
                     <h3 className='font-syne font-bold text-xl text-white'>About Avada Digital Agency</h3>
                     <p className='font-dm font-normal text-lg text-white w-full lg:w-96 pt-9'>Diam integer turpis tristique integer tincidunt
                        cursus dignissim. Euismod libero pellentesque
                        et suspendisse posuere. Lorem quis nec nisl
                        viverra ut velit imperdiet.</p>
                </div>
                <div>
                     <a href="" className='font-dm font-bold text-base text-white inline-block py-6 px-10 bg-tag rounded-2xl hover:bg-white hover:text-brand transition-all'>Got a project? Contact us!</a>
                </div>
            </div>
            <p className='font-dm font-normal text-sm text-white text-center pt-24'>© Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved |     Powered by WordPress</p>
         </div>
    </footer>
  )
}
