import React, { useEffect } from 'react'
import { useState } from 'react'
import LottieAnimation from 'lottie-react';
import animationData from '../../assests/home/bg-remover/lottie/Hand Love.json'; // Replace with the path to your downloaded Lottie animation file
import Footer from '../items/home/Footer';
import "../../App.css";
function Aboutus() {
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
      <div className='aboutUsText-aboutpage'>
        <div className='abouttxt'>
        <div className='aboutUsAnimWrapper'>
    <LottieAnimation
      lottieRef={(ref) => ref && ref.setSpeed(0.5)} // Optional: Adjust animation speed
      animationData={animationData}
      loop={true}
      autoplay={true}
    />
  </div>
          <h2> About us</h2>
          <h6>Introduction:</h6>

          <p>

            Welcome to JaffnaMarriage.com, a premier matrimonial platform dedicated to uniting individuals from the Jaffna-rooted Tamil community and beyond. We take immense pride in fostering connections and facilitating the journey to a lifelong commitment. Our platform is designed to extend its services to the global Tamil diaspora, catering to the unique needs and preferences of those seeking to celebrate their cultural roots while embracing modern pathways to love and companionship.

            Our origins lie in a deep understanding and appreciation of the rich traditions, values, and heritage that characterize the Jaffna community. We founded this platform with the vision of providing a safe, accessible, and efficient space for individuals to discover their life partners, in line with their cultural and personal beliefs.

          </p>
          <h6>Vision:</h6>
          <p>
            At JaffnaMarriage.com, we envision a world where love knows no boundaries and cultural diversity is cherished. Our primary goal is to be the catalyst that brings hearts together, fostering meaningful relationships deeply rooted in tradition, respect, and shared values.

            We strive to be the epitome of trust and reliability, offering a user-friendly, secure, and advanced platform that simplifies the search for a life partner. Through our services, we seek to preserve and propagate the unique cultural heritage of the Jaffna-rooted Tamil community while welcoming members from all walks of life.

            We aspire to create a community where individuals can embark on the beautiful journey of marriage with confidence, knowing that they are supported by a platform that prioritizes authenticity, integrity, and their emotional well-being. By combining the time-honored traditions of our community with the power of technology, we aim to make the process of finding a life partner exciting, enjoyable, and successful.

            Join us at JaffnaMarriage.com, where every connection is a step towards a harmonious union, and every match is a celebration of love, culture, and togetherness.
            </p>
        </div>
      </div>
      <Footer />
        </div>
      )}

    </div>
  );
}

export default Aboutus;
