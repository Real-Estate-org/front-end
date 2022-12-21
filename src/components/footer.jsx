import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF,faTwitter,faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
    <div className="p-12 footer">
             {/*Subcribe*/}
      <div className='flex items-center justify-between home-foot mb-10'>
        
        <div className='w-1/2 text-4xl'>Subcribes to Our Newsletter</div>
        <div className="w-1/2">
        <form action="">
        <div className='w-80 flex rounded border-solid border-2 border-slate-200 p-2 items-center'>
        <FontAwesomeIcon className='hover:opacity-0' icon={faEnvelope} />
          <input className='text-xl pl-4' type='email' name='email' placeholder='your email address'></input>
          <button className='text-xl cursor-pointer bg-red-600 hover:bg-red-700 py-1.5 px-5 rounded shadow text-white' type='submit'>Subcribe</button>
        </div>
        </form>
        </div>
      </div>
      {/*footer*/}
      <hr />
      <div className="flex justify-between mt-2 mb-5">
        <div className='w-2/5 pr-8'>
        <h3 className="text-3xl">DesignPlus.</h3>
        <p className="text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit!</p>
        </div>
        <div className="w-1/5">
          <p className='mb-4'>Other Page</p>
          <p className='font-thin'>Home</p>
          <p className='font-thin'>About Us</p>
          <p className='font-thin'>Services</p>
          <p className='font-thin'>Contact us</p>
        </div>
        <div className="w-1/5">
        <p className='mb-4'>Quick Link</p>
          <p className='font-thin'>Privacy Policy</p>
          <p className='font-thin'>Term of services</p>
          <p className='font-thin'>Branches</p>
          <p className='font-thin'>Credits</p>
        </div>
        <div className="w-1/5">
        <p className='mb-4'>Contact Us</p>
          <p className='font-thin'>topsiology11@gmail.com</p>
          <p className='font-thin'>+2348086322372</p>
          <p className='font-thin'>6666578</p>
        </div>
      </div>
      <hr />
      <div className='flex justify-between mt-2'>
      <div className="w-1/2 text-xl">Copyright@2023 Topmarktech x Hademathtech</div>
      <div className='w-1/2 flex pl-64 space-x-50'>
      <div className="text-2xl cursor-pointer border-2 bg-white hover:bg-slate-300 py-2 px-3 rounded-full shadow text-slate-900 mr-4 flex items-center">
        <FontAwesomeIcon  icon={faFacebookF} />
      </div>
      <div className="text-2xl cursor-pointer border-2 bg-white hover:bg-slate-300 py-2 px-3 rounded-full shadow text-slate-900 mr-4 flex items-center">
        <FontAwesomeIcon  icon={faTwitter} />
      </div>
      <div className="text-2xl cursor-pointer border-2 bg-white hover:bg-slate-300 py-2 px-3 rounded-full shadow text-slate-900 mr-4 flex items-center">
        <FontAwesomeIcon  icon={faGithub} />
      </div>
      </div>
      </div>
    </div>
    )
  }
  
  export default Footer
  