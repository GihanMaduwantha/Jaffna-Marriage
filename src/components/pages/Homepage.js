import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Helmet } from "react-helmet";
import { useSpring, animated, config } from 'react-spring';
import { Element, Link } from 'react-scroll';
// import { FaUser, FaSearch, FaLink } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import LottieAnimation from "lottie-react";
import WebBanner from "../items/home/WebBanner";
import NewMember from "../items/home/newmember/NewMember";
import ContactForm from "../items/home/ContactForm";
import SucessStories from "../items/home/successstories/SucessStories";
import Description from "../items/home/description/Description";
import RegisterIcon from "../../assests/home/REGISTER.png";
import ConnectIcon from "../../assests/home/çonnect.png";
import FindIcon from "../../assests/home/search.png";
import Footer from "../items/home/Footer";
import animationData from "../../assests/home/bg-remover/lottie/riarrow.json";
// import axios from 'axios';
import axiosInstance from '../../api';
import '../../App.css';

const token = localStorage.getItem('api_token');
// Print the value of the api_token cookie

if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // Print the headers to verify if the authorization header is set
  axiosInstance.get('/validToken')
  .then(response => {
    // Token is valid, handle the response

    // Handle the response based on the message
    if (response.data.message === 'valid') {
      localStorage.setItem('login', 'true'); // Set boolean value as string 'true'
    } else {
      localStorage.removeItem('login');
        localStorage.removeItem('api_token');
        localStorage.removeItem('logiRole');
        // window.location.href = '/';
      localStorage.setItem('login', 'false'); // Set boolean value as string 'false'
    }
  })
  .catch(error => {
    // Handle the error
    localStorage.removeItem('login');
    localStorage.removeItem('api_token');
    localStorage.removeItem('logiRole');
     window.location.href = '/';
    localStorage.setItem('login', 'false'); // Set boolean value as string 'false'
    console.error(error);
    localStorage.setItem('login', 'false'); // Set boolean value as string 'false' for error case
  });
}


const Homepage = () => {
  
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility by 3 seconds
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); 

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  
  const [visibleRegister, setVisibleRegister] = useState(false);
  const [visibleFind, setVisibleFind] = useState(false);
  const [visibleConnect, setVisibleConnect] = useState(false);
  const [visibleFirstTitle, setVisibleFirstTitle] = useState(false);
  const [visibleFirstNewMember, setVisibleFirstNewMember] = useState(false);
  const [visibleFirstContactForm, setVisibleFirstContactForm] = useState(false);
  const [visibleFirstSucessStories, setVisibleFirstSucessStories] = useState(false);
  const [visibleFirstDescription, setVisibleFirstDescription] = useState(false);
  
  const [refFirstNewMember, inViewFirstNewMember] = useInView({
    rootMargin: '-40% 0px -40% 0px',
  });
  const [refFirstContactForm, inViewFirstContactForm] = useInView({
 
    rootMargin: '-40% 0px -40% 0px',
  });
  const [refFirstSucessStories, inViewFirstSucessStories] = useInView({
 
    rootMargin: '-40% 0px -40% 0px',
  });
  const [refFirstDescription, inViewFirstDescription] = useInView({
 
    rootMargin: '-40% 0px -40% 0px',
  });
  const [refFirstTitle, inViewFirstTitle] = useInView({
 
    rootMargin: '-40% 0px -40% 0px',
  });

  const [refRegister, inViewRegister] = useInView({
 
    rootMargin: '-40% 0px -40% 0px',
  });

  const [refFind, inViewFind] = useInView({

    rootMargin: '-40% 0px -40% 0px',
  });

  const [refConnect, inViewConnect] = useInView({
   
    rootMargin: '0% -40px 0% -40px',
  });


  useEffect(() => {
    if (inViewFirstDescription) {
      setVisibleFirstDescription(true);
    } else {
      setVisibleFirstDescription(false);
    }
  }, [inViewFirstDescription]);
  useEffect(() => {
    if (inViewFirstNewMember) {
      setVisibleFirstNewMember(true);
    } else {
      setVisibleFirstNewMember(false);
    }
  }, [inViewFirstNewMember]);
  useEffect(() => {
    if (inViewFirstContactForm) {
      setVisibleFirstContactForm(true);
    } else {
      setVisibleFirstContactForm(false);
    }
  }, [inViewFirstContactForm]);
  useEffect(() => {
    if (inViewFirstSucessStories) {
      setVisibleFirstSucessStories(true);
    } else {
      setVisibleFirstSucessStories(false);
    }
  }, [inViewFirstSucessStories]);

  useEffect(() => {
    if (inViewFirstTitle) {
      setVisibleFirstTitle(true);
    } else {
      setVisibleFirstTitle(false);
    }
  }, [inViewFirstTitle]);

  useEffect(() => {
    if (inViewRegister) {
      setVisibleRegister(true);
    } else {
      setVisibleRegister(false);
    }
  }, [inViewRegister]);

  useEffect(() => {
    if (inViewFind) {
      setVisibleFind(true);
    } else {
      setVisibleFind(false);
    }
  }, [inViewFind]);

  useEffect(() => {
    if (inViewConnect) {
      setVisibleConnect(true);
    } else {
      setVisibleConnect(false);
    }
  }, [inViewConnect]);

  // Remove the following useEffect block if you don't need it
  useEffect(() => {
    const scrollHandler = () => {
      // Logic for the overall scroll, if needed
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

    const triggerRef = useRef(null);

 

  return (
    <div className="smooth-scroll-container">
      <div ref={scrollRef} className="content">
      <div  className="js-scroll">
  
  <div>
    
      <div>
        <Helmet>
          {isHomePage && (
            <script type="text/javascript">
              {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/64b18508cc26a871b0287207/1h5amvajm';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
            </script>
          )}
        </Helmet>

        <WebBanner />

        <div>


          {isVisible &&(
<div className="howItWorks containerWithPadding">
<div className="containerForNewMem mx-auto ">
 {/* how to work
if add border: border-solid border-2 border-gray-800 */}
 <div className={`h-597 min-w-full mb-20  ${visibleFirstTitle ? 'zoom-in-homepage-FirstTitle' : 'zoom-out-homepage-FirstTitle'}`} ref={refFirstTitle}>
   <div className="flex pl-4 pr-4 flex-col items-center justify-center">
     <h1 className="text-amber-500 text-4xl m-2 font-serif text-center">
     <b>How It Works</b>  
     </h1>
     <h1 className="textSize6 m-1 text-black font-serif">
       Find Your Partner In Just a Few Steps
     </h1>
     <p className="text-2xl mt-4 font-serif text-gray-500 text-center">
       JaffnaMarriage.com will help you find your perfect match with just
       a few steps. You focus on what is most important to you, we do
       all the work.
     </p>
   </div>
 </div>
 {/* s2 div-sub: */}
 <div   className={`h-597 min-w-full mb-10 flex flex-col items-center justify-center`}
 >
   <div className="stepsCardCont flex items-center">

     <div ref={refRegister} className={`stepsCard  ${visibleRegister  ? 'zoom-in-homepage-registerProcess' : 'zoom-out-homepage-registerProcess'}`} >

       <div   className={`flex justify-center hover:scale-110 `} >
         <img src={RegisterIcon} alt="Register" />
       </div>
       <h2 className="stepsCardHeading text-2xl font-bold text-center">
         Registration Process
       </h2>
       <h2 className="text-lg text-center ">
         Start by creating your profile and providing
         information about yourself. Tell us your preferences,
         interests, and what you're looking for in a partner.
       </h2>

     </div>
     <div className="stepsCardArrow">

       <div className={`w-179 h-146 ${visibleRegister  ? 'zoom-in-homepage-registerProcess' : 'zoom-out-homepage-registerProcess'}`}>
         <LottieAnimation
           lottieRef={(ref) => ref && ref.setSpeed(0.5)}
           animationData={animationData}
           loop={true}
           autoplay={true}
         />
       </div>

     </div>
     <div ref={refFind} className={`stepsCard ${visibleFind ? 'zoom-in-homepage-findProcess' : 'zoom-out-homepage-findProcess'}`}>

       <div   className={`flex justify-center hover:scale-110 `}>
         <img src={FindIcon} alt="Find" />
       </div>
       <h2 className="stepsCardHeading text-2xl font-bold text-center">
         Find Your Partner
       </h2>
       <h2 className="text-lg text-center ">
         Browse through profiles and find potential matches.
         Connect with them through our messaging system and get
         to know each other better.
       </h2>

     </div>
     <div className="stepsCardArrow">

       <div className={`w-179 h-146 ${visibleRegister  ? 'zoom-in-homepage-findProcess' : 'zoom-out-homepage-findProcess'}`}>
         <LottieAnimation
           lottieRef={(ref) => ref && ref.setSpeed(0.5)}
           animationData={animationData}
           loop={true}
           autoplay={true}
         />
       </div>

     </div>
     <div ref={refConnect} className={`stepsCard ${visibleConnect ? 'zoom-in-homepage-findConnect' : 'zoom-out-homepage-findConnect'}`}>

       <div className={`flex justify-center hover:scale-110 `}>
         <img src={ConnectIcon} alt="Connect" />
       </div>
       <h2 className="stepsCardHeading text-2xl font-bold text-center">
         Connect with Your Partner
       </h2>
       <h2 className="text-lg text-center">
         Once you've found your ideal partner, take the next
         step and start your journey together. Plan dates,
         share experiences, and build a meaningful
         relationship.
       </h2>

     </div>



   </div>
 </div>
 {/* s3 div */}

</div>

{/* get started contact form */}
</div>
          )}
      
    <div>
    <div ref={refFirstNewMember} className={`fade-section ${visibleFirstNewMember ? 'zoom-in-homepage-FirstTitle fade-in' : 'zoom-out-homepage-FirstTitle'}`}>
      {isVisible && <NewMember />}
    </div>
    <div ref={refFirstContactForm} className={`fade-section ${visibleFirstContactForm ? 'zoom-in-homepage-FirstTitle fade-in' : 'zoom-out-homepage-FirstTitle'}`}>
      {isVisible && <ContactForm />}
    </div>
    <div ref={refFirstSucessStories} className={`fade-section ${visibleFirstSucessStories ? 'zoom-in-homepage-FirstTitle fade-in' : 'zoom-out-homepage-FirstTitle'}`}>
      {isVisible && <SucessStories />}
    </div>
    <div ref={refFirstDescription} className={`fade-section ${visibleFirstDescription ? 'zoom-in-homepage-FirstTitle fade-in' : 'zoom-out-homepage-FirstTitle'}`}>
      {isVisible && <Description />}
    </div>
  </div>


        </div>
        <div style={{paddingBottom:'60px'}}>
        
        </div>
        
        <Footer />
      </div>
    
  </div>
  </div>
      </div>
    </div>
  );
};

export default Homepage;


