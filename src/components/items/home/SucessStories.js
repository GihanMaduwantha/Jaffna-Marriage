import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../../App.css';
import suc1 from "../../../assests/sucessStories/1.jpeg";
import suc2 from "../../../assests/sucessStories/3.jpeg";
import suc3 from "../../../assests/sucessStories/6.jpeg";
import suc4 from "../../../assests/sucessStories/5.jpeg";

function SuccessStories() {
  const [cardVisibility, setCardVisibility] = useState({ card1: false, card2: false, card3: false });

  const toggleCardVisibility = (card) => {
    setCardVisibility({ ...cardVisibility, [card]: !cardVisibility[card] });
  };

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
  

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    // Callback function to handle intersection events
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe the component's root element
    const target = document.querySelector(".success-stories");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className={`success-stories ${visible ? "zoom-in" : "zoom-out"} ${visible ? "white-box" : ""}`}>
      <div className="h-597 min-w-full mt-10 flex flex-col items-center justify-center ">
        <h1 className="text-amber-500 text-4xl m-2 font-serif text-center"><b>Success stories</b></h1>
        <p className="text-xl mt-3 font-serif text-center" style={{opacity:'0.8'}}>
          JaffnaMarriage will help you find your perfect match with just a few
          steps. You focus on what is most important to you, we do all the work.
        </p>
      </div>
      {/* Success stories carousel section */}
      <div className="flex justify-center mt-5 py-2 px-4" >
        {/* User profile scroll slide bar */}
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
                  <div className="name-label" onClick={() => toggleCardVisibility('card1')}>
                    Rebecca Watson
                  </div>
                  {cardVisibility.card1 && (
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
      <input type="radio" id="rating-5" name="rating" value="5" checked="checked"/>
      <label for="rating-5"></label>
      <input type="radio" id="rating-4" name="rating" value="4" checked="checked" />
      <label for="rating-4"></label>
      <input type="radio" id="rating-3" name="rating" value="3" />
      <label for="rating-3"></label>
      <input type="radio" id="rating-2" name="rating" value="2" />
      <label for="rating-2"></label>
      <input type="radio" id="rating-1" name="rating" value="1" />
      <label for="rating-1"></label>
      <input type="radio" id="rating-0" name="rating" value="0"  />
   <label for="rating-0"></label>
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
                    Another Name
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
      <input type="radio" id="rating-5" name="rating" value="5" checked="checked"/>
      <label for="rating-5"></label>
      <input type="radio" id="rating-4" name="rating" value="4" checked="checked" />
      <label for="rating-4"></label>
      <input type="radio" id="rating-3" name="rating" value="3" />
      <label for="rating-3"></label>
      <input type="radio" id="rating-2" name="rating" value="2" />
      <label for="rating-2"></label>
      <input type="radio" id="rating-1" name="rating" value="1" />
      <label for="rating-1"></label>
      <input type="radio" id="rating-0" name="rating" value="0"  />
   <label for="rating-0"></label>
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
                    Yet Another Name
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
      <input type="radio" id="rating-5" name="rating" value="5" checked="checked"/>
      <label for="rating-5"></label>
      <input type="radio" id="rating-4" name="rating" value="4" checked="checked" />
      <label for="rating-4"></label>
      <input type="radio" id="rating-3" name="rating" value="3" />
      <label for="rating-3"></label>
      <input type="radio" id="rating-2" name="rating" value="2" />
      <label for="rating-2"></label>
      <input type="radio" id="rating-1" name="rating" value="1" />
      <label for="rating-1"></label>
      <input type="radio" id="rating-0" name="rating" value="0"  />
   <label for="rating-0"></label>
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
                    Yet Another Name
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
      <input type="radio" id="rating-5" name="rating" value="5" checked="checked"/>
      <label for="rating-5"></label>
      <input type="radio" id="rating-4" name="rating" value="4" checked="checked" />
      <label for="rating-4"></label>
      <input type="radio" id="rating-3" name="rating" value="3" />
      <label for="rating-3"></label>
      <input type="radio" id="rating-2" name="rating" value="2" />
      <label for="rating-2"></label>
      <input type="radio" id="rating-1" name="rating" value="1" />
      <label for="rating-1"></label>
      <input type="radio" id="rating-0" name="rating" value="0"  />
   <label for="rating-0"></label>
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
}

export default SuccessStories;
