// import FooterImage from "../../../assests/home/footerwave.svg";
import brandlogo from '../../../assests/home/b1.jpeg';
import "../../../App.css";
import { FaArrowRight, FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div    style={{
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#1a202c',
      color: 'white',
    }}>
      <footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left" style={{margin:'0', backgroundColor: '#1a202c', color:'white'}}>
    

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-5 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* <!-- Tailwind Elements section --> */}
          <div className="footerFirst">
           
            {/* <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p> */}
            <p >
              <img src={brandlogo} style={{width:'200px'}} />
              <p style={{ fontSize: '10px',marginTop:'5px',width:'250px',fontStyle:'italic' }}>உங்கள் நன்மையே எங்கள் நோக்கம்</p>
            </p>
          </div>
          {/* <!-- Products section --> */}
          {/* <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >Angular</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >React</a>
            </p>
            <p className="mb-4">
              <a className="text-neutral-600 dark:text-neutral-200"
              >Vue</a>
            </p>
            <p>
              <a className="text-neutral-600 dark:text-neutral-200"
              >Laravel</a>
            </p>
          </div> */}
          {/* <!-- Useful links section --> */}
          <div className=''>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Quick Links
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaCaretRight className="mr-3 h-5 w-5 footerArrowIcons"></FaCaretRight>
              <Link to="/" className='footer-link-styled '>Home</Link>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaCaretRight className="mr-3 h-5 w-5 footerArrowIcons"></FaCaretRight>
              <Link to="/browse" className='footer-link-styled'>Explore</Link>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaCaretRight className="mr-3 h-5 w-5 footerArrowIcons"></FaCaretRight>
              <Link to="/about" className='footer-link-styled'>About Us</Link>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaCaretRight className="mr-3 h-5 w-5 footerArrowIcons"></FaCaretRight>
              <Link to="/contact" className='footer-link-styled'>Contact</Link>
            </p>
            
            {/* <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                  clipRule="evenodd" />
              </svg>
              + 01 234 567 89
            </p> */}
          </div>
          
          {/* <!-- Contact section --> */}
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Help
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start hover:text-yellow-500">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              info@jaffnamarriage.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd" />
              </svg>
              + 01 234 567 88
            </p>
          </div>

           {/* <!-- Legal --> */}
           <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
             Legal
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaCaretRight className="mr-3 h-5 w-5 footerArrowIcons"></FaCaretRight>
              <Link to="/about" className='footer-link-styled'>About Us</Link>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaCaretRight className="mr-3 h-5 w-5 footerArrowIcons"></FaCaretRight>
              <Link to="/terms" className='footer-link-styled'>Terms and Conditions</Link>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaCaretRight className="mr-3 h-5 w-5 footerArrowIcons"></FaCaretRight>
              <Link to="/privacy" className='footer-link-styled'>Privacy policy</Link>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaCaretRight className="mr-3 h-5 w-5 footerArrowIcons"></FaCaretRight>
              <Link to="/refundsprivacy" className='footer-link-styled'>Refund Privacy</Link>
            </p>
            
          </div>

          <div className='FollowUsIcons'>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Follow us on
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
            <div className="flex justify-center">
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              color='white'
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 hover:text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              color='white'
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 hover:text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              color='white'
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 hover:text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          
        </div>
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700" style={{margin:'0', backgroundColor: '#11141c', color:'white', fontSize:'14px'}}>
        <span style={{opacity:'0.9'}}>Copyright © 2023. All Rights Reserved By</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
          style={{color:'white', opacity:'0.9'}}
        > JaffnaMariage.com</a>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
