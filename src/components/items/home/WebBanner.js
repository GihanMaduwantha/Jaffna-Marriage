
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import web_banner from '../../../assests/home/web-banner.jpeg';
// import { useMediaQuery } from 'react-responsive';

import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import web_banner3 from "../../../assests/home/web-banner3.jpeg";
import web_banner2 from "../../../assests/home/web_banner2.png";
import web_banner from "../../../assests/home/web-banner.png";
import web_banner_new from "../../../assests/home/web_banner_new.jpeg";
import web_banner_mobile from "../../../assests/home/web_banner_new-mobile.png";
import { useMediaQuery } from "react-responsive";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "../../../App.css";
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

const WebBanner = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const [lookingFor, setLookingFor] = useState('');
  const [ageFrom, setAgeFrom] = useState('');
  const [ageTo, setAgeTo] = useState('');
  const [religion, setReligion] = useState('');
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageLoadedaftercontent, setImageLoadedaftercontent] = useState(false);
  const [firstIframeLoaded, setFirstIframeLoaded] = useState(false);
  const [secondIframeLoaded, setSecondIframeLoaded] = useState(false);
  const handleSearch = () => {
    // Handle the search here using the selected values (lookingFor, ageFrom, ageTo, religion)
    console.log('Looking For:', lookingFor);
    console.log('Age From:', ageFrom);
    console.log('Age To:', ageTo);
    console.log('Religion:', religion);
    navigate(`/browse?lookingFor=${lookingFor}&ageFrom=${ageFrom}&ageTo=${ageTo}&religion=${religion}`);
  };
   
  const imgContainerRef = useRef(null);
  const [isContainerVisible, setContainerVisible] = useState(false);


  useEffect(() => {
    console.log('isMobile:', isMobile);
    // ... rest of the useEffect code
  }, [isMobile, imageLoaded]);
  
  const boxStyles = {

    // top: '549px',
    // left: '180px',
    // right: '180px',
    // height: '107px',
    // width: '90%',
    // maxWidth: '1105px',
    // background: 'rgba(255, 255, 255, 0.8)',
    // borderRadius: '15px',

    // top: "549px",
    // left: "180px",
    // right: "180px",
    // height: "107px",
    // width: "1105px",
    background: "rgba(255, 255, 255, 0.8)",
    // background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 10%, rgba(255, 215, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 100%)',
    borderRadius: "15px",

  };
  
  const handleImageLoad = () => {
    // setImageLoaded(true);
    // setTimeout(() => {
    //   setImageLoadedaftercontent(true);
    // }, 2000);
  };
  useEffect(() => {
    // Ensure GSAP is ready
    gsap.registerPlugin(CSSRulePlugin);

    // Get the element and the CSS rule
    const imgContainer = imgContainerRef.current;
    const rule = CSSRulePlugin.getRule(`.${imgContainer.className}:after`);

    const tl = gsap.timeline();

    tl.to(imgContainer, { duration: 0.5, autoAlpha: 1 })

      .from(imgContainer.querySelector('img'), {
        duration: 0.5,
        opacity: 0, // Starting opacity
        scale: 1.2,
        ease: "Power2.easeInOut",
        delay: -1,
      })
      .to(imgContainer.querySelector('img'), {
        duration: 1,
        opacity: 1, // Ending opacity
        scale: 1,
        ease: "Power2.easeInOut",
      });
      tl.eventCallback('onComplete', () => {
        setContainerVisible(true);
        setTimeout(() => {
          setImageLoadedaftercontent(true);
        }, 2000);
      });
  }, []);


  const handleFirstIframeLoad = () => {
    setFirstIframeLoaded(true);
  };

  const handleSecondIframeLoad = () => {
    setSecondIframeLoaded(true);
  };

  return (
    
    <div  className={`img-container relative banner-cont ${imageLoaded ? 'img-loaded' : ''}`}
    ref={imgContainerRef}
    style={{
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      opacity: 0,
    }}>

{/* <img
        src={isMobile? web_banner_mobile:web_banner_new}
        alt="web-banner"
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "auto",
        }}
        loading="lazy"
      /> */}
        <div >
      {/* {!imageLoaded && (
       <div
       className='shimmer'
       style={{
         top: 0,
         left: 0,
         width: '100%',
         height: isMobile ? '350px' : '100vh',
       }}
     />
     
     
      )} */}
      <img
        src={isMobile ? web_banner_mobile : web_banner_new}
        alt="web-banner"
        style={{
          width: '100%',
          maxWidth: '100%',
          height: 'auto',
          // display: imageLoaded ? 'block' : 'none',
          
        }}
        onLoad={handleImageLoad}
      />
    </div>
      <div
        className="absolute top-0 left-0 p-4 text-yellow-400 text-box"
        style={{

          width: isMobile ? '80%' : '50%',
          height: isMobile ? 'auto' : '356px',
          fontSize: isMobile ? '24px' : '50px',
          paddingTop: isMobile ? '50px' : '100px',
          fontFamily: 'Berkshire Swash, cursive'
        }}
      >
         {imageLoadedaftercontent &&(
        <div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          autoPlay
          infiniteLoop
          interval={5000}
          style={{ width: "100%", height: "100%" }}
          className={`${isContainerVisible ? 'Carouselwebbannervisible' : 'notCarouselwebbannervisible'}`}
        >
          <div class="webbanner">
            <p className="slider-text  text-center">
              Enjoy life and find your life partner
              <br />
              <span className="pt-7">
                <span className={`text-white text-lg font-serif ${isContainerVisible ? 'CarouselwebbannerTitlevisible' : 'notCarouselwebbannerTitlevisible'}`}>
                "Where love stories begin and dreams come true."
                </span>
                <br />
                <span className="text-white text-lg text-center font-berkshire">
                  JaffnaMariage.com💕
                </span>
              </span>
            </p>
          </div>
          <div>
            <p className="slider-text text-center">
              "Now put your hands together,"
              <br />
              <span className="pt-7">
                <span className="text-white text-lg font-serif">
                  "put your hearts together in your
              hands."
                </span>
                <br />
                <span className="text-white text-lg text-center font-berkshire">
                  JaffnaMariage.com💕
                </span>
              </span>
            </p>
          </div>
          <div>
            <p className="slider-text text-center">
              "Embark on a new chapter of"
              <br />
              <span className="pt-7">
                <span className="text-white text-lg font-serif">
                  "love and happiness.."
                </span>
                <br />
                <span className="text-white text-lg text-center font-berkshire">
                  JaffnaMariage.com💕
                </span>
              </span>
            </p>
          </div>
        </Carousel>
        <div className="flex justify-center items-center h-full mt-2 hart-box-mobile">
          
        <iframe
        src="https://embed.lottiefiles.com/animation/96048"
        className="w-full h-full"
        title="Animation"
        allowFullScreen
        frameBorder="0"
        style={{ visibility:  firstIframeLoaded?'visible':'hidden' ,width: '150px', height: '100px', marginLeft: '0px', position: 'absolute', top: '30px', pointerEvents: 'none' }}
        onLoad={handleFirstIframeLoad}
      ></iframe>

      {/* Second iframe */}
      <iframe
        src="https://embed.lottiefiles.com/animation/96048"
        className="w-full h-full"
        style={{ visibility:  secondIframeLoaded?'visible':'hidden'  ,width: '100%', height: '100px', pointerEvents: 'none' }}
        onLoad={handleSecondIframeLoad}
      ></iframe>
        </div>
        <div className="flex justify-center items-center h-full mt-2 hart-box-desktop">
          <iframe
            src="https://embed.lottiefiles.com/animation/96048"
            className="w-full h-full"
            title="Animation"
            allowFullScreen
            frameBorder="0"
            style={{pointerEvents: 'none'}}
          ></iframe>

          {/* lottiefiles hart animated */}
          <iframe
            src="https://embed.lottiefiles.com/animation/96048"
            className="w-full "
            style={{pointerEvents: 'none'}}
          ></iframe>
        </div>
        </div>
        )}
        <div className="flex justify-center items-center h-full mt-2">
          {isTablet ? <></> : <></>}

        </div>
        {!isTablet && (
          <div className="flex justify-center items-center h-full mt-2">
            {/* Additional content for non-tablet devices */}
          </div>
          
        )}
      </div>
      {/* box like serach Members */}
      {imageLoadedaftercontent &&(
        <div className={`typeSelectionContainer ${isContainerVisible ? 'CarouselwebbannersearchBoxvisible ' : 'notCarouselwebbannersearchBoxvisible '}`}>
        <div className="p-2 typeSelection">
          <div className="w-full userTasteFilter">
            <div className="eachElemTypeFilter">
              <div className="eachOption" >I'm Looking For a</div>
              <div className="eachOption optionCont">
              <select
        className="selectOptionTypeFilt inputField"
        value={lookingFor}
        onChange={(e) => setLookingFor(e.target.value)}
      >
        <option value="" disabled hidden ><label style={{ fontSize: '1px' }}>Select a Gender--</label></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      
              </div>
            </div>
      
            <div className="eachElemTypeFilter">
              <div className="eachOption" >Age</div>
              <div className="eachOption optionCont">
                <input
                  type="number"
                  className="selectOptionTypeFilt inputField" // Added "inputField" class
                  value={ageFrom}
                  onChange={(e) => setAgeFrom(e.target.value)}
                  placeholder="Enter age"
                  
                />
              </div>
            </div>
      
            <div className="eachElemTypeFilter">
              <div className="eachOptionTo " style={{fontWeight: 'bold' }}>To</div>
            </div>
      
            <div className="eachElemTypeFilter">
              <div className="eachOption" >Age</div>
              <div className="eachOption optionCont">
                <input
                  type="number"
                  className="selectOptionTypeFilt inputField" // Added "inputField" class
                  value={ageTo}
                  onChange={(e) => setAgeTo(e.target.value)}
                  placeholder="Enter age"
                  
                />
              </div>
            </div>
      
            <div className="eachElemTypeFilter">
              <div className="eachOption" >Of Religion</div>
              <div className="eachOption optionCont">
              <select
        className="selectOptionTypeFilt inputField"
        value={religion}
        onChange={(e) => setReligion(e.target.value)}
      >
        <option value="" disabled hidden>Select a Religion</option>
        <option value="buddhism">Buddhism</option>
        <option value="hinduism">Hinduism</option>
        <option value="islam">Islam</option>
        <option value="christianity">Christianity</option>
        {/* Add more religion options as needed */}
      </select>
      
              </div>
            </div>
      
            <div className="eachElemTypeFilter">
              <div className="eachOption optionCont">
                <button
                  className="searchTypeFiltBtn bg-gradient-to-tr from-amber-900 to-yellow-300 text-white py-2 px-4 mt-7 rounded flex items-center"
                  onClick={handleSearch}
                >
                  Search
                  <FaSearch className="ml-2" />
                </button>{' '}
              </div>
            </div>
          </div>
        </div>
            </div>
      )}
    
    </div>
  );
};

export default WebBanner;
