import React from 'react'

const Footer = () => {
  return (
    <footer className='py-24'>
      <div className='container'>
        <div className='md:flex'>
          <div className='md:w-5/12 mb-4'>
            <h5 className='font-bold text-slate-900'>About me</h5>
            <p className="mb-5 mt-5 max-w-md text-sm font-semibold">Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
            <p className="max-w-md text-sm font-semibold">Copyright &copy; 2022 All rights reserved | This template is made with  by Colorlib</p>
          </div>
          <div className='md:w-5/12 mb-4'>
            <h5 className='font-bold text-slate-900'>Newsletter me</h5>
            <p className="mb-5 mt-5 text-sm font-semibold">Stay updated with our latest trends</p>
          </div>
          <div className='md:w-2/12 mb-4'>
            <h5 className='font-bold text-slate-900'>Follow Me</h5>
            <p className='mb-5 mt-5 text-sm font-semibold'>let us be social</p>
          </div>
        </div>
      </div>
    </footer>
  ) 
}

export default Footer