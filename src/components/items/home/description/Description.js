
import brandlogo from '../../../../assests/home/b1.png';
import { FaArrowRight, FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Description.css';
import { HiMiniUsers, HiMiniShieldCheck, HiMiniLockClosed } from "react-icons/hi2";

import img1 from "../../../../assests/icons/American_Express-Logo.wine.svg";
import img2 from "../../../../assests/icons/di.png";
import img3 from "../../../../assests/icons/discover.png";
import img4 from "../../../../assests/icons/frimi.png";
import img5 from "../../../../assests/icons/mastercard.svg";
import img6 from "../../../../assests/icons/up.png";
import img7 from "../../../../assests/icons/visa 1.svg";
import img8 from "../../../../assests/icons/viswa.png";



function Description() {
    return(
        <dev className="maindescriptcontainer">
            <div className='trusted'>
               

                <div className="wrapper">

      <div className='header'>
        <button className='t-btn'>Trusted by Most People</button>
      </div>

      <div className="columns">

        <div className="column">
          <h2 className='e-col'>
           <span className='d-icon'><HiMiniUsers /></span> <span className='col-text'>Best Matches</span>
        </h2>
          
        </div>

        <div className="column">
          <h2 className='e-col'>
          <span className='d-icon'><HiMiniLockClosed /></span><span className='col-text'>100% Privacy</span>
          </h2>
          
        </div>

        <div className="column">
          <h2 className='e-col'>
          <span className='d-icon'><HiMiniShieldCheck /></span><span className='col-text'>Verified Profile</span>
        </h2>
          
        </div>

      </div>

      <div className='footer'>
      <div className='main-icon'>
        <img src={brandlogo} style={{width:'200px'}} alt='' />
        <div className='t-text' style={{ fontSize: '10px',marginTop:'5px',width:'250px',fontStyle:'italic' }}>உங்கள் நன்மையே எங்கள் நோக்கம்...</div>
      </div>
      <div className='site-description'>
      <p className='d-p'>Welcome to JaffnaMarriage.com, a premier matrimonial website deeply rooted in the rich tapestry of the Jaffna community. Our platform is dedicated to connecting individuals globally, fostering genuine connections among Jaffna peoples in Sri Lanka and beyond. With a focus on cultural compatibility, traditions, and shared values, JaffnaMarriage.com offers a unique and personalized matchmaking experience. We understand the significance of preserving cultural identity and celebrating diversity within the Jaffna community. Whether you're in Jaffna or residing abroad, our website provides a secure and community-centric space where you can explore meaningful relationships. Our commitment to privacy, security, and a user-friendly interface ensures that your journey to finding a life partner is not only exciting but also safe and seamless. Join JaffnaMarriage.com today and embark on a journey to discover love, companionship, and lifelong connections within the warmth of the Jaffna community.</p>
      </div>
        
      </div>

      <div className='logo-section'>
      <div>
      <img src={img1} style={{width:'100px'}} alt='' />
      </div>
      <div>
      <img src={img2} style={{width:'100px'}} alt='' />
      </div>
      <div>
      <img src={img3} style={{width:'100px'}} alt='' />
      </div>
      <div>
      <img src={img4} style={{width:'100px'}} alt='' />
      </div>
      <div>
      <img src={img5} style={{width:'100px'}} alt='' />
      </div>
      <div>
      <img src={img6} style={{width:'100px'}} alt='' />
      </div>
      <div>
      <img src={img7} style={{width:'100px'}} alt='' />
      </div>
      <div>
      <img src={img8} style={{width:'100px'}} alt='' />
      </div>
    </div>

    </div>

   

    

            </div>




        </dev>

    );
}
export default Description;