// ###################### Gihan 06.11.23 ############################## 


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


 import imageData from './ImageData';
 import Cards from './card/Card';
 import "./SuccessStories.css";

 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';


 // import required modules
 import { Autoplay,Pagination,Navigation } from 'swiper/modules';


 function SuccessStories() {
  
   return (
      
    
     <div className='s-container'>
      <h1 className="text-amber-500 text-4xl m-2 font-serif text-center"><b>Success Stories</b></h1>
        <p className="text-xl mt-3 font-serif text-center" style={{opacity:'0.8'}}>
          JaffnaMarriage.com will help you find your perfect match with just a few
          steps. You focus on what is most important to you, we do all the work.
        </p>
        <div className='s-container-sub'>
        <Swiper 
         slidesPerView={3}
         spaceBetween={20}
         modules={[Autoplay,Navigation, Pagination]}
         loop
         Pagination
         breakpoints={{
          0: {
            slidesPerView: 1,
            
         },

          390: {
            slidesPerView: 1,
            
         }, 
        
        
          414: {
            slidesPerView: 1,
            
         },
          
          768: {
            slidesPerView: 2,
            
          },
          
          
          1024: {
            slidesPerView: 3,
            
          },
          
         

        }} 
        //  autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }} 
       >
         {imageData.map((data) => (
           
           <SwiperSlide>
            <div className='slider-container'>
             <Cards img={data.url} title={data.title} des={data.des} />
             </div>
           </SwiperSlide>
         ))}
         
       </Swiper>
        </div>

      </div>
       
       
    
   );
 }

 export default SuccessStories;


// ############################ Gihan ################################


