import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import photo1 from '../../../assests/home/girlphoto.jpeg';
// import { get } from 'react-scroll/modules/mixins/scroller';
import suc1 from "../../../assests/newstmembers/1.jpeg";
import suc2 from "../../../assests/newstmembers/2.jpg";
import suc3 from "../../../assests/newstmembers/3.jpeg";
import suc4 from "../../../assests/newstmembers/4.jpg";

const Newmember = () => {

  const [fullDeviceWidth, setFullDeviceWidth] = useState(0);

  const [cardVisibility, setCardVisibility] = useState({ card1: false, card2: false, card3: false });

  const toggleCardVisibility = (card) => {
    setCardVisibility({ ...cardVisibility, [card]: !cardVisibility[card] });
  };
  useEffect(() => {
    function handleResize() {
      setFullDeviceWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

  }, [fullDeviceWidth]);

  function getCenterSlidePercentage() {
    const fullDeviceWidth = window.innerWidth;
    if (fullDeviceWidth > 1600) {
      return 26.5;
    } else if (fullDeviceWidth > 1200) {
      return 30;
    } else if (fullDeviceWidth > 700) {
      return 45;
    }else {
      return 100;
    }
  }


  return (
    <div className="bg-white h-708 white-box ">
      <div className="flex pl-4 pr-4 pt-5  flex-col items-center justify-center">
        <h1 className="text-amber-500 text-4xl m-2 font-serif text-center"><b>Newest Members</b></h1>
        <p className="text-xl mt-3 font-serif text-center" style={{opacity:'0.8'}}>
          JaffnaMarrige will help you find your perfect match with just a few steps.
          You focus on what is most important to you we do all the work.
        </p>
      </div>
      <div className="flex justify-center mt-10 py-2 px-4">
        {/* user profile scroll slide bar */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={getCenterSlidePercentage()}
          className="w-full"
          
        >
          {/* Success Story Card 1 */}
          <div className="flex justify-center" >
            <div className="phone-wrapper">
            <div className="background-image-wrapper" style={{backgroundImage: `url(${suc1})`}}>
             {/* Your content goes here */}
            </div>
              <div className="details-wrapper">
                <div className="names-wrapper">
                  <div className="name-label" onClick={() => toggleCardVisibility('card1')} >
                    Sathya
                  </div>
                  {cardVisibility.card1 && (
                    <div className={`person-details ${cardVisibility.card1 ? 'visible' : ''}`}>
                     <div class="description">
			   		Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum hic tempore doloribus unde temporibus blanditiis dolore illo fuga
				  </div>
				{/* <div class="phone">
					+90 90 90234 4894
				</div>
				<div class="email">
					rebecca.watson@about.me
				</div> */}
                    </div>
                  )}
                </div>
                <div class="stats-wrapper">
      <span class="star-cb-group">
      <button
  type="submit"
  style={{
    background: "rgba(255, 255, 255, 0.1)", // White background with opacity
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid white",
    fontWeight:'bold'
  }}
  className="text-white py-2 px-4 flex items-center space-x-2"
>
  <span class="follow-text">Follow</span>
  <span>&#43;</span> {/* This is the plus (+) sign icon */}
</button>
  </span>

		</div>
              </div>
            </div>
          </div>

          {/* Success Story Card 2 */}
          <div className="flex justify-center">
            <div className="phone-wrapper">
            <div className="background-image-wrapper" style={{backgroundImage: `url(${suc2})`}}>
  {/* Your content goes here */}
</div>
              <div className="details-wrapper">
                <div className="names-wrapper">
                  <div className="name-label" onClick={() => toggleCardVisibility('card2')}>
                    Gayathri
                  </div>
                  {cardVisibility.card2 && (
                    <div className="person-details">
                     <div class="description">
			   		Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum hic tempore doloribus unde temporibus blanditiis dolore illo fuga
				  </div>
				{/* <div class="phone">
					+90 90 90234 4894
				</div>
				<div class="email">
					rebecca.watson@about.me
				</div> */}
                    </div>
                  )}
                </div>
                <div class="stats-wrapper">
      <span class="star-cb-group">
      <button
  type="submit"
  style={{
    background: "rgba(255, 255, 255, 0.1)", // White background with opacity
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid white",
    fontWeight:'bold'
  }}
  className="text-white py-2 px-4 flex items-center space-x-2"
>
  <span class="follow-text">Follow</span>
  <span>&#43;</span> {/* This is the plus (+) sign icon */}
</button>




      </span>
		  </div>
              </div>
            </div>
          </div>

          {/* Success Story Card 3 */}
          <div className="flex justify-center">
            <div className="phone-wrapper">
            <div className="background-image-wrapper" style={{backgroundImage: `url(${suc3})`}}>
  {/* Your content goes here */}
</div>
              <div className="details-wrapper">
                <div className="names-wrapper">
                  <div className="name-label" onClick={() => toggleCardVisibility('card3')}>
                    Priyanka
                  </div>
                  {cardVisibility.card3 && (
                    <div className="person-details">
                      <div class="description">
			   		Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum hic tempore doloribus unde temporibus blanditiis dolore illo fuga
				  </div>
				{/* <div class="phone">
					+90 90 90234 4894
				</div>
				<div class="email">
					rebecca.watson@about.me
				</div> */}
                    </div>
                  )}
                </div>
                <div class="stats-wrapper">
      <span class="star-cb-group">
      <button
  type="submit"
  style={{
    background: "rgba(255, 255, 255, 0.1)", // White background with opacity
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid white",
    fontWeight:'bold'
  }}
  className="text-white py-2 px-4 flex items-center space-x-2"
>
  <span class="follow-text">Follow</span>
  <span>&#43;</span> {/* This is the plus (+) sign icon */}
</button>
  </span>

		</div>
              </div>
            </div>
          </div>

          {/* Success Story Card 3 */}
          <div className="flex justify-center">
            <div className="phone-wrapper">
            <div className="background-image-wrapper" style={{backgroundImage: `url(${suc4})`}}>
  {/* Your content goes here */}
</div>
              <div className="details-wrapper">
                <div className="names-wrapper">
                  <div className="name-label" onClick={() => toggleCardVisibility('card4')}>
                    Nithya
                  </div>
                  {cardVisibility.card4 && (
                    <div className="person-details">
                      <div class="description">
			   		Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum hic tempore doloribus unde temporibus blanditiis dolore illo fuga
				  </div>
				{/* <div class="phone">
					+90 90 90234 4894
				</div>
				<div class="email">
					rebecca.watson@about.me
				</div> */}
                    </div>
                  )}
                </div>
                <div class="stats-wrapper">
      <span class="star-cb-group">
      <button
  type="submit"
  style={{
    background: "rgba(255, 255, 255, 0.1)", // White background with opacity
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid white",
    fontWeight:'bold'
  }}
  className="text-white py-2 px-4 flex items-center space-x-2"
>
  <span class="follow-text">Follow</span>
  <span>&#43;</span> {/* This is the plus (+) sign icon */}
</button>
  </span>

		</div>
              </div>
            </div>
          </div>
          {/* Add more success story cards as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Newmember;
