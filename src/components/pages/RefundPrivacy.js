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
          <h2>Refund Policy</h2>
          <p><b>Thank you for choosing JaffnaMarriage.com for your matrimonial needs. We strive to provide you with the best service and experience. Please read our refund policy carefully before using our services.</b></p>
          
         <h6>1. Refund Eligibility</h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
         <p>1.1. Refunds may be eligible under the following circumstances:</p>
         <p style={{fontSize:'18px', marginLeft:'10px'}}>Service Unavailability: If, for any reason, we are unable to provide the services outlined in your chosen package, you may be eligible for a refund. This could include technical issues or <span style={{fontWeight:'bold'}}>unforeseen circumstances</span> that prevent us from delivering the promised features.</p>
         </div>
         <h6>2. Refund Process </h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
          <p>2.1. To request a refund, you must contact our customer support team at info@JaffnaMarriage.com. Please provide your full name, account details, and the reason for your refund request.</p>
          <p>2.2. Refund requests made within the eligible period will be processed within 10 business days of receiving the request. <span style={{fontWeight:'bold'}}> Refund request should made within 5 working days from the problem days</span>.</p>
          <p>2.3. Refunds will be issued using the same payment method used for the original transaction.</p>
         </div>

         <h6>3. Non-Refundable Circumstances </h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
          <p>3.1. Refunds will not be issued in the following circumstances:</p>
          <p style={{fontSize:'18px', marginLeft:'10px'}}>Discontinuation of Use: If you choose to discontinue using our services before the end of your subscription period, a refund will not be provided for the unused  portion of your subscription.</p>
         </div>

         <h6>4. Dispute Resolution</h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
          <p>4.1. If you are dissatisfied with our services or have a dispute regarding a refund, please contact our customer support team. We are committed to resolving any issues to the best of our ability.</p>
         </div>

         <h6>5. Amendments </h6>
         <div style={{marginLeft:'10px', marginTop:'20px'}}>
           <p>5.1. JaffnaMarriage.com reserves the right to modify, amend, or update this refund policy at any time. Changes to the policy will be effective upon posting on our website.</p>
           <p>By using JaffnaMarriage.com, you agree to the terms outlined in this refund policy.</p>
          <p>If you have any questions or concerns about this policy, please contact us at info@JaffnaMarriage.com.
         </p>
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
