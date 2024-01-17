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
            title="Video Player"
            src="https://embed.lottiefiles.com/animation/96048"
            className="w-full h-full"
          ></iframe>
          
        </div>
      <div className='aboutUsText-aboutpage'>
        <div className='abouttxt'>
        <div className='termsUsAnimWrapper'>
    <LottieAnimation
      lottieRef={(ref) => ref && ref.setSpeed(0.5)} // Optional: Adjust animation speed
      animationData={animationData}
      loop={true}
      autoplay={true}
    />
  </div>
        <h2>Terms and Conditions</h2>

        <h6>Welcome to JaffnaMarriage.com, a premier Jaffna-based matrimonial website connecting individuals worldwide. These Terms and Conditions (the "Terms") govern your use of our services, including but not limited to accessing, browsing, or registering on JaffnaMarriage.com (the "Website"). By using our services, you agree to abide by these Terms. Please read them carefully.</h6>
        
        <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Agreement</h2>
         <p>These Terms and Conditions include Our Privacy Policy. They may be amended from time to time. They will govern your [“You”] access and use of the website JaffnaMarriage.com and its related services. By accessing and using JaffnaMarriage.com and its related services You agree to be legally bound by these Terms and Conditions.</p>
         <p>If you do not agree with any part of these Terms, you may not use our services.</p>

         <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>About Us</h2>
          <p>Jaffnamarriage.com website operating under watson solutions established in Sri Lanka [“we”, “us”, or “our”] and third party licensees provide matrimonial services* to the Jaffna community in Sri Lanka and abroad.</p>

         <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Services</h2>
          <p>JaffnaMarriage.com provides online matrimonial services for individuals seeking prospective matrimonial partners within the Jaffna  community.</p>
          <p>JaffnaMarriage.com provides online advertising space and related services which You receive for a nominal fee , to advertise personal information and data either of your own or of a consenting third party [“Third Party”] for the purpose of seeking a matching prospective matrimonial partner[“Matrimonial Advertisement”], and also use the related services for such purpose. Users can create profiles, browse other profiles, and connect with potential matches.
               We also offer additional services, such as premium memberships, to enhance your experience. 
          </p>
        
          <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Eligibility Criteria</h2>
           <p>To access and use Jaffnamarriage.com, you and any third party you access and use the website on your behalf:</p>
           <p style={{fontSize:'18px', marginLeft:'10px'}}>Must be at least 18 years of age;
            You (and any third party) must not be a minor under applicable laws and regulations; and
            You (and any third parties) must be legally competent to marry under the laws and regulations that apply to you.
           </p> 
          
           <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Advertising content</h2>
            <p>You will provide the content of matrimonial ads that includes personal information and data in text and images. [“Content”] and you will upload for inclusion on Jaffnamarriage.com. In order to preserve and protect the integrity and ethical profile of Jaffnamarriage.com, we reserve the right to edit or delete any portion of the Content at any time at our sole discretion and without warning or notice to you.</p>
            <p>All images uploaded and available on Jaffnamarriage.com carry a watermark. This provides for easy identification and prevention of images being used for purposes other than those for which you as an advertiser have given consent.</p>
            <p>Conditions Governing Use of the Site</p>
            <p>To ensure that the content you provide and upload for inclusion on the Jaffnamarriage.com website complies with all applicable laws and regulations and does not infringe the contractual rights of a third party or any privacy or data protection rights, as applicable. You are fully responsible.</p>
            <p>You will promptly update and correct any inaccuracies in the Content uploaded or provided by you and such changes will be verified and modified by Jaffnamarriage.com.</p>

            <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>REPRESENTATIONS AND WARRANTIES</h2>
             <p>By accessing and using Jaffnamarriage.com, you represent and warrant that: You and any third parties for whom you use the Site, meet the eligibility criteria in item 2 above;
Any third party to whom you have uploaded content has consented to you doing so.
All personal information and data placed by you on the matrimonial advertisement is true, accurate, current, complete and legally valid; and
You and any third party on whose behalf you use the Website (if any) are not prohibited by the laws and regulations applicable to each individual or by any contractual third party right to disclose, advertise, license and/or publish your personal information. and data on Jaffnamarriage.com and or to permit the disclosure or publication of such information in the magazine. You and a third party using the Site on your behalf (if any) are not prohibited by applicable laws and regulations or by a contractual third party right to information and data.
             </p>
              
             <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Confidentiality</h2>
             <p>Without your prior consent, your personal information, data and identity (and that of any third party you access or use Jaffnamarriage.com) will be kept confidential except to the extent set out in these terms and conditions. An obligation to disclose arises:

to comply with the law or any regulations; and or
To protect and enforce our rights or those of others using Jaffnamarriage.com
Privacy Policy The Privacy Policy explains how personal information and data is collected, used, shared, disclosed or otherwise processed. The website uses cookies and similar technologies.

By using Jaffnamarriage.com you consent to the collection, processing, use, sharing and or disclosure of personal information and data provided by you in accordance with the Privacy Policy. Please read the privacy policy for details.

Withdrawal and Cancellation of Marriage Advertisements
Advertisers can opt out of publishing their ads themselves at any time. If they want all content removed from our database, they can request so by email
</p>

            <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Intellectual property</h2>
            <p>Jaffnamarriage.com, and its databases, text, photographs, logos, trademarks and all other intellectual property created and used on Jaffnamarriage.com, including without limitation all software, design work, layout, appearance, graphics, etc. are owned by us. . Licensed to us and protected by Australia's intellectual property laws. No material on Jaffnamarriage.com may be copied, downloaded, reproduced, republished, stored, photographed, transmitted, installed, posted or distributed without our written permission.</p>
            
            <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Disclaimer</h2>
            <p>We do not accept any responsibility for your use of Jaffnamarriage.com. You agree that we shall not be liable to you in any way for any loss, damage or injury arising out of or in any way related to the following:
including, but not limited to, errors or technical and typographical errors in the content of Jaffnamarriage.com; inability or lack of access to or use of Jaffnamarriage.com; Your use of Jaffnamarriage.com or the Content; or a Your use of any software associated with Jaffnamarriage.com
</p> 
             <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Compensation</h2>
             <p>By accessing and using Jaffnamarriage.com you agree to indemnify and hold harmless its officers, directors, employees and agents from and against all claims or actions of third parties and for all losses, costs, damages and expenses including attorney's fees. Any breach by you of these terms and conditions, including your negligent or misconduct in accessing and using Jaffnamarriage.com.</p>
             
             <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Termination</h2>
             <p>Termination/Consequences thereof This Agreement will terminate immediately in the following cases:

At the end of the advertising period; or a
When withdrawing your matrimonial ad during the advertising period; or a
Breach of any of these Terms and Conditions, including any representation or warranty by you and any third party using our Services on your behalf, or any applicable law or regulation; or a
Consequences of termination include the right to terminate your access to and use of Jaffnamarriage.com immediately and without notice to you. and delete your content from the site.

JaffnaMarriage.com reserves the right to terminate or suspend user accounts for violations of these Terms or for any other reason. Consequences of termination may include the removal of user content from the site.
</p>

             <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Amendments to Terms</h2>.
             <p>These Terms may be updated from time to time.
             Updated Terms will be effective immediately upon posting on JaffnaMarriage.com.
             Continued use of the site after updates constitutes acceptance of the revised Terms.
             </p>

             <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Governing Law & Jurisdiction</h2>
             <p>These Terms shall be governed by the laws of Sri Lanka.
   Any disputes shall be subject to the exclusive jurisdiction of the courts in Sri Lanka.
</p>

<h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Contact Us</h2>
<p>If you have any questions or concerns about these Terms, please contact us at info@JaffnaMarriage.com.

By using JaffnaMarriage.com, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
</p>

           <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Privacy policy</h2>
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

         <h2 style={{fontSize:'28px', textDecoration:'underline', marginTop:'10px'}}>Refund Policy</h2>
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
