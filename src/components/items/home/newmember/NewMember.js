// ###################### Gihan 14.11.23 ############################## 


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


 import imageData from './ImageData';
 import Cards from './card/Cards';
 import "./NewMember.css";

 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';
 import 'swiper/css/navigation';


 // import required modules
 import { Autoplay,Pagination,Navigation } from 'swiper/modules';


 function NewMember() {
  
   return (
      
    
     <div className='s-container-2'>
      <div>
      <h1 className="text-amber-500 text-4xl m-2 font-serif text-center"><b>Newest Members</b></h1>
      <p className="text-xl mt-3 font-serif text-center" style={{opacity:'0.8'}}>
          JaffnaMarrige.com will help you find your perfect match with just a few steps.
          You focus on what is most important to you we do all the work.
        </p>
      </div>
      <div className='s-container-2-sub'>
      <Swiper 
         slidesPerView={3}
         spaceBetween={40}
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
         autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }} 
       >
         {imageData.map((data) => (
           
           <SwiperSlide>
            <div className='slider-container-2'>
             <Cards img={data.url} name={data.username} age={data.Age} where={data.where}/>
             </div>
           </SwiperSlide>
         ))}
         
       </Swiper>
      </div>
     </div>
       
       
    
   );
 }

 export default NewMember;


// ############################ Gihan ################################
