import insta from '../assets/instagram.svg'
import web from '../assets/website.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
const FooterSection = ({contactRef}) => {
  return (
    <div ref={contactRef} className="bg-black  pt-12 pb-6  ">
      <div className="flex flex-col items-center justify-center w-[70%] mx-auto">
        <h3 className="text-white text-center mb-4">Chemisville</h3>
        <ul className="flex items-center justify-center  gap-3 mb-8 md:flex-row flex-col">
          <li className="text-gray-300 font-mont cursor-pointer">About</li>
          <li className="text-gray-300 font-mont cursor-pointer">Educators</li>
          <li className="text-gray-300 font-mont cursor-pointer">Professors</li>
          <li className="text-gray-300 font-mont cursor-pointer">Students</li>
          <li className="text-gray-300 font-mont cursor-pointer">Contact</li>
          <li className="text-gray-300 font-mont cursor-pointer">Privacy Policy</li>
        </ul>
        <div className="h-[.2px] w-full bg-gray-600"></div>
        <div className="flex md:flex-row flex-col gap-y-3 w-full items-center justify-between mt-7">
          <h3 className="text-gray-300 font-mont text-center">© 2021 Chemisville. All rights reserved </h3>
          <div className='flex items-center gap-3'>
            <img className='cursor-pointer' src={insta} alt="insta" />
          <img  className='cursor-pointer' src={web} alt="web" />
          <img className='cursor-pointer' src={twitter} alt="twitter" />
          <img className='cursor-pointer' src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterSection