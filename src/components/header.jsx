


function Header() {
  return (
    <div className="" id ='header'>
    <div id="home-top">
      <div className='flex justify-between items-center p-5 md:px-20 max-w-7xl mx-auto' id='top'>
        <div className='text-3xl'>DesignPlus.</div>
        <div className='hidden sm:flex space-x-10 text-xl items-center'>
          <h3 className='text-xl cursor-pointer' href="#home">Home</h3>
          <h3 className='text-xl cursor-pointer' href="#about">About</h3>
          <h3 className='text-xl cursor-pointer' href="#services">Services</h3>
          <h3 className='text-xl cursor-pointer bg-red-600 hover:bg-red-700 py-1.5 px-5 rounded shadow' href="#contact">Contact Us</h3>
        </div>
      </div>
      {/*Home Section*/}
      <div className="sm:flex items-center justify-between" id='#home'>
        <div className='md:pl-20 px-5 sm:w-1/2'>
          <h1 className='text-5xl mb-2'>Discover a place you will love to live</h1>
          <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='text-xl mb-4 cursor-pointer bg-red-600 hover:bg-red-700 py-1.5 px-5 rounded shadow'>Our Services</button>
        </div>
        <div className='hidden sm:inline-flex sm:w-1/2 overflow-hidden'><img className='rounded cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out' src="./images/aaa.png" alt="nice house" /></div>
      </div>
    </div>
      {/*Home foot*/}
      <div className='sm:flex items-center justify-between home-foot'>
        <div className='sm:w-1/2 p-5 md:p-20'><img className='rounded cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out' src="./images/x.jpg" alt="" /></div>
        <div className='sm:w-1/2 pr-20 mx-2 sm:mx-0'>
          <h1 className='text-4xl mb-2'>We are Trusted Real Estate Agents</h1>
          <p className='mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repudiandae optio non expedita consequuntur perspiciatis aut, aliquam amet odio saepe minus.</p>
          <p className="mb-2">soluta eos corrupti, hic placeat perspiciatis laudantium, corporis nobis ad ipsum?</p>
          <div className='flex mb-5'>
            <div className='mr-10'>
              <h3 className='text-red-500 text-3xl'><span className='text-slate-900'>54</span>K</h3>
              <p>Customers</p>
            </div>
            <div>
            <h3 className='text-red-500 text-3xl'><span className='text-slate-900'>4</span>K</h3>
              <p>Property Sales</p>
            </div>
          </div>
          <button className='text-xl mb-4 cursor-pointer bg-red-600 hover:bg-red-700 py-1.5 px-5 rounded shadow text-white'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default Header
