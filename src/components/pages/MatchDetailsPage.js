import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowLeft, FaBackward, FaBirthdayCake, FaFacebookMessenger, FaFemale, FaGraduationCap, FaLocationArrow, FaPhone, FaRuler, FaSpeakap, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { baseURL } from '../../api';
import { userImageBASE_URL } from '../../api';
import './css/ExplorePage.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import imageData from './ImageData';
import Footer from '../items/home/Footer';
function MatchDetailsPage() {

    const navigate = useNavigate();


    const [matchData, setMatchData] = useState(null);

    const { id } = useParams();
    const backButton = () => {
        navigate("/browse");
    };

    


    const [modalSrc, setModalSrc] = useState(null);

    const openModal = (src) => {
      setModalSrc(src);
    };
  
    const closeModal = () => {
      setModalSrc(null);
    };
  
    const handleKeyUp = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const [currentImage, setCurrentImage] = useState(0);
    const [noOfImages, setNoOfImages] = useState(0);
    const [mainImageSrc, setMainImageSrc] = useState('');
  
    useEffect(() => {
      setNoOfImages(imageData.length);
  
      // Set the initial main image source
      if (imageData.length > 0) {
        setMainImageSrc(imageData[0].url);
      }
    }, []);
  
    useEffect(() => {
      document.addEventListener('keyup', handleArrowKey);
      return () => {
        document.removeEventListener('keyup', handleArrowKey);
      };
    }, [currentImage]);
  
    const handleThumbnailClick = (index) => {
      setCurrentImage(index);
      setMainImageSrc(imageData[index].url);
    };
  
    const handleArrowKey = (e) => {
      if (e.keyCode === 39) {
        setCurrentImage((prevImage) => (prevImage + 1) % noOfImages);
      } else if (e.keyCode === 37) {
        setCurrentImage((prevImage) => (prevImage - 1 + noOfImages) % noOfImages);
      }
    };

    const [selectuserData, selectsetUserData] = useState(null);

    useEffect(() => {
      const getMatchById = async () => {
        try {
          let response = await fetch(
            baseURL + `/selectUserProfile/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let result = await response.json();
          if (response.status === 200) {
            selectsetUserData(result.activeUserWithImagesAndDetails); // Update the state here
            // console.log(result.activeUserWithImagesAndDetails);
            console.log(selectuserData);
          } else if (response.status === 401) {
            console.log("you are not authorized");
          } else {
            console.log("Some error occurred");
          }
        } catch (err) {
          console.log("Not authorized", err);
        }
      };
      getMatchById();
    }, [id]);



    return (

      <div>


<div className='openedCardName'><h1 className='user-nme'>{selectuserData?.name}</h1>
{selectuserData && (
 <div className='openedCardAddress'>
   <h1 className='user-addrs'>{selectuserData.details && selectuserData.details.town ? selectuserData.details.town : 'Unknown'}</h1>
 </div>
)}
</div>


                  
                  <div className='openedCard flex flex-col sm:flex-row'>
                  
              {selectuserData && (
                <div className="gallery w-full  sm:h-full md:h-1/2 p-4 left-cont">
                
                <div className="inner">
            <div
                className="main"
                onClick={() => openModal(mainImageSrc)}
                style={{ backgroundImage: `url(${mainImageSrc})` }}
            ></div>
            {modalSrc && (
            <div
                style={{
                background: `RGBA(0,0,0,.5) url(${modalSrc}) no-repeat center`,
                backgroundSize: 'contain',
                width: '100%',
                height: '100%',
                position: 'fixed',
                zIndex: '10000',
                top: '0',
                left: '0',

            }}
                onClick={closeModal}
                onKeyUp={handleKeyUp}
                role="button"
                tabIndex={0}
            />
            )}
            <div className="thumb-roll">
            {imageData.map((image, index) => (
            <div
                key={image.id}
                className={`thumb ${index === currentImage ? 'current' : ''}`}
                style={{ backgroundImage: `url(${image.url})` }}
                onClick={() => handleThumbnailClick(index)}
                ></div>
            ))}
                </div>
            </div>
            </div>
              )}
              
              
                  


  

 <div className='openedCardGeneralDetails grid grid-cols-1 md:grid-cols-2 gap-5 right-cont'>
  
  <div className=''>

  <div>
     {selectuserData &&(
         <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='sp-detail'>Gender : {selectuserData.details.gender}</h1></label>
           
          
     )}
         </div>

  <div >
         {selectuserData &&(
           
             <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Spoken Language : {selectuserData.details.spokenLnguage}</h1></label>
           
         )}
     </div>
     <div >
     {selectuserData &&(

          <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Age : {selectuserData.details.age}</h1></label>
          
     )}
         </div>
     <div>
     {selectuserData &&(

         <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Education : {selectuserData.details.education}</h1></label>
           
           
     )}
         </div>

         <div >
     {selectuserData &&(

          <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Work Details : {selectuserData.details.workDetails}</h1></label>
         
         
     )}
         </div>
  </div>
     
     <div className=''>
     
     <div >
     {selectuserData &&(
         
          <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='sp-detail'>Height : {selectuserData.details.height}</h1></label>
          

     )}
         </div>

         <div >
     {selectuserData &&(
         
          <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Weight :  {selectuserData.details.weight}</h1></label>
          
           
     )}
         </div>

         <div >
     {selectuserData &&(
         
          <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Phone No. : {selectuserData.details.pno}</h1></label>
           
         
     )}
         </div>

         <div >
     {selectuserData &&(
         
         <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Email Addrerss : {selectuserData.email}</h1></label>
         
       
     )}
         </div>

         <div>
     {selectuserData &&(
         
          <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Cast : {selectuserData.details.cast}</h1></label>
           
           
     )}
         </div>

    

         <div >
     {selectuserData &&(
          
         <label className='block bg-gray-200 p-0 rounded-lg label-set'><h1 className='detail-2'>Marital Status : {selectuserData.marriedStatus}</h1></label>
         
         
     )}
         </div>
     </div>
     <div className='openedCardPostedOn'>{selectuserData?.created_at}</div>

 </div>
 
 



</div>







< Footer />

      </div>
        
                



                
          
         
    )
}

export default MatchDetailsPage