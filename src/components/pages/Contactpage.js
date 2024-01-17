import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../items/home/Footer';
import { FaArrowLeft, FaCar, FaEnvelope, FaGlobe } from 'react-icons/fa';



const Contactpage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
 {loading ? (
      <div className="centered-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
        <span className="loader"></span>
      </div>
    ) :(
 <div>
  <div className="flex justify-center items-center h-full mt-2 hart-box-desktop-about">
          <iframe
            src="https://embed.lottiefiles.com/animation/96048"
            className="w-full h-full"
            title="Animation"
            allowFullScreen
            frameBorder="0"
          ></iframe>

          {/* lottiefiles hart animated */}
          <iframe
            src="https://embed.lottiefiles.com/animation/96048"
            className="w-full h-full"
          ></iframe>
          
        </div>
      <div class="map">
        <div id='map' >  </div>
        <div class="map-c">
          <h1>Jaffna Marriage</h1>
          <p>If you have any questions or concerns about these Terms, please contact us</p>

          <div class="det"><FaEnvelope />info@JaffnaMarriage.com</div>
          <div class="det"><FaGlobe /> JaffnaMarriage.com</div>
          <center>
            <button><FaEnvelope />  </button>
          </center>
        </div>
      </div>

      <Footer />
    </div>
    )}
    </div>

  );
};

export default Contactpage;