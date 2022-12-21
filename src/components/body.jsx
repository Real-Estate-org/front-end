

function Body() {

    return (
      <div className="" id ='#services'>
        {/*services*/}
      <div className='rounded py-12 px-12' id='services'>
        <div className="text-center">
          <h3 className='text-4xl mb-5'>We Provide Variety of Facility</h3>
          <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br></br>Unde molestiae esse aspernatur accusantium.</p>
        </div>
        <div className="flex items-center justify-between">
        <h3 className="text-2xl my-4"></h3> 
        <div className='w-1/3 overflow-hidden p-3 hover:scale-105 transition-transform duration-200 ease-in-out'>
            <img className='rounded cursor-pointer' src="./images/w.jpg" alt="nice house" />
            <div className="bg-white pt-1 px-2 pb-2 rounded" >
          <h3 className="text-2xl mb-2 text-slate-900">Personal Insurance</h3>
          <button className='text-xl cursor-pointer bg-red-600 hover:bg-red-700 py-1.5 px-5 rounded shadow text-white'>Learn more</button> 
          </div>
          </div>
          <div className='w-1/3 overflow-hidden p-3 hover:scale-105 transition-transform duration-200 ease-in-out'>
            <img className='rounded cursor-pointer' src="./images/u.jpg" alt="nice house" />
            <div className="bg-white pt-1 px-2 pb-2 rounded" >
          <h3 className="text-2xl mb-2 text-slate-900">Industrial Building</h3>
          <button className='text-xl cursor-pointer bg-red-600 hover:bg-red-700 py-1.5 px-5 rounded shadow text-white'>Learn more</button> 
          </div>
          </div>
          <div className='w-1/3 overflow-hidden p-3 hover:scale-105 transition-transform duration-200 ease-in-out'>
            <img className='rounded cursor-pointer' src="./images/v.jpg" alt="nice house" />
            <div className="bg-white pt-1 px-2 pb-2 rounded" >
          <h3 className="text-2xl mb-2 text-slate-900">Residential Building</h3>
          <button className='text-xl cursor-pointer bg-red-600 hover:bg-red-700 py-1.5 px-5 rounded shadow text-white'>Learn more</button> 
          </div>
          </div>
        </div>
      </div>
        {/*About Us*/}
        <div className='flex items-center justify-between home-foot p-10'>
          <div className='w-1/2 pl-48'>
            <img className='rounded w-48 item center'  id='customer' src="./images/e.png" alt="" />
            </div>
          <div className='w-1/2 pr-20'>
            <h1 className='text-4xl mb-2'>What Our Customers Saying About Us</h1>
            <p className='mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos repudiandae optio non expedita consequuntur perspiciatis aut, aliquam amet odio saepe minus.</p>
            <p className="mb-2">soluta eos corrupti, hic placeat perspiciatis laudantium, corporis nobis ad ipsum?</p>
            <h3 className="text-2xl">Lanre Bayode</h3>  
            <p className="mb-2">A Happy Client</p>
            <div className="flex">
              <div className="rounded-full bg-red-500 p-5 items-center content-center">ff</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Body
  