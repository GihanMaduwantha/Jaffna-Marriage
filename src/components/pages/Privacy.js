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
            title="Animation"
            src="https://embed.lottiefiles.com/animation/96048"
            className="w-full h-full"
          ></iframe>
          
        </div>
      <div className='aboutUsText-aboutpage'>
        <div className='abouttxt'>
        <div className='privacyUsAnimWrapper'>
    <LottieAnimation
      lottieRef={(ref) => ref && ref.setSpeed(0.5)} // Optional: Adjust animation speed
      animationData={animationData}
      loop={true}
      autoplay={true}
    />
  </div>
          <h2>Privacy policy</h2>
          <h6>Thank you for choosing JaffnaMarriage.com for your matrimonial needs. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website and services.</h6>
          <div style={{marginLeft:'10px', marginTop:'20px'}}>
          <p>
             1. Personal Information: We may collect personal information, including but not limited to your name, gender, date of birth, contact information (email, phone number, address), photographs, and other details necessary for our matrimony services.
         </p>
         <p>
             2. Account Information: When you create an account on our platform, we collect information such as your username, password, and preferences.
         </p>
        <p>
             3. Payment Information: In the event of purchasing premium services, we collect payment details, including credit card information or other payment methods.
          </p>
          <p>
           4. User-generated Content: Any information you voluntarily provide, such as profile descriptions, photos, and messages exchanged with other users.
         </p>
         <p>
          5. Usage Data: We collect data on how you use our platform, including log data, device information, and analytics about your interactions with our services.
         </p>
         </div>
         <h6>2. How We Use Your Information </h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
         <p>2.1. Providing Services: We use your information to facilitate your interactions with other users, match profiles, and provide you with our matrimony services.</p>
         <p>2.2. Communication: We may contact you with service-related announcements, updates, and promotional materials.</p>
         <p>2.3. Personalization: We use your data to personalize your experience on our platform, such as recommending potential matches and enhancing user engagement.</p>
         <p>2.4. Legal Compliance: We may use your information to comply with legal obligations, resolve disputes, and enforce our terms of service.</p>

         </div>
         <h6>3. Sharing Your Information </h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
          <p>3.1. User Profiles: Some of your information will be visible to other registered users on our platform, based on your privacy settings.</p>
          <p>3.2. Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services (e.g., payment processors, analytics providers).</p>
          <p>3.3. Legal Requirements: We may disclose your information to law enforcement agencies or regulatory bodies if required by law.</p>
         </div>

         <h6>4. Data Security </h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
          <p>4.1. We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.</p>
         </div>

         <h6>5. Your Choices</h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
          <p>5.1. Access and Update: You can access and update your personal information through your account settings.</p>
          <p>5.2. Communication Preferences: You can manage your communication preferences by adjusting your account settings or unsubscribing from marketing emails.</p>

         </div>

         <h6>6. Amendments </h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
           <p>6.1. JaffnaMarriage.com reserves the right to modify, amend, or update this privacy policy at any time. Changes to the policy will be effective upon posting on our website.
            If you have any questions or concerns about this policy, please contact us at info@JaffnaMarriage.com. Please ensure that you customise this privacy policy to align with your specific business practices, user data handling, and legal requirements. It’s essential to seek legal advice to ensure that your privacy policy complies with applicable privacy laws and regulations.</p>
         </div>
        </div>
      </div>
      <Footer />
        </div>
      )}

    </div>
  );
}

export default Aboutus;
