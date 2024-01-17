import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { FaTimes, FaFilter, FaHeart, FaLandmark, FaLocationArrow, FaSpeakap, FaBirthdayCake, FaGraduationCap, FaFemale, FaRuler, FaMale, FaRegHeart, FaInfoCircle, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import { Link,useNavigate   } from 'react-router-dom';
import { userImageBASE_URL } from '../../api';
import { baseURL } from '../../api';
import axiosInstance from '../../api';
import '../../App.css'; // Import the external CSS file
import './css/ExplorePage.css';
import { useLocation } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FormControl, InputLabel, MenuItem, Select, Slider, colors, Autocomplete, TextField, Box, Typography, Avatar,InputAdornment  } from '@mui/material';

import imageData from './ImageData';


function ExplorePage() {
    const [showFilter, setShowFilter] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [exploreItems, setExploreItems] = useState([]);
    const [exploreItemsOriginal, setExploreItemsOriginal] = useState([]);
    const [userData, setUserData] = useState({});
    const [genderFilter, setGenderFilter] = useState("");
    const [ageFilter, setageFilter] = useState("");
    const [openedCardID, setOpenedCardId] = useState(null);
    const [selectuserData, selectsetUserData] = useState(null);
    const [selectagevalue, setagetslectValue] = React.useState([20, 37]);
    const [setreligion, setReligion] = useState('');
    const [loading, setLoading] = useState(true); // Step 1: Initialize loading state
    const location = useLocation();
    
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    function toggleFilter() {
        setShowFilter(!showFilter)
    }
    function toggleFavorites() {
        setShowFavorites(!showFavorites)
    }

    function setGenderFilterFunc(gende) {
        setExploreItems(null);
        setLoading(true);
        const filtered = exploreItemsOriginal.filter((item) => {
            const age = item.details ? item.details.age : 0; // Assuming age is a property of 'details'
            const gender = item.details ? item.details.gender : '';
            const religion = item.details ? item.details.religion: '';
            return (
              age >= selectagevalue[0] &&
              age <= selectagevalue[1] &&
              (genderFilter === '' || gender === gende) &&
              ( !setreligion || religion === setreligion)
            );
        });
        setTimeout(() => {
            setLoading(false);
            setExploreItems(filtered);
            setGenderFilter(gende);
          }, 1000);
          

          let filteredItems = []

          if (gende === 'male') {
  
  
              if (genderFilter === 'male') {
                  setGenderFilter('')
                  setExploreItems(exploreItemsOriginal)
  
              } else {
  
  
                  exploreItemsOriginal.forEach((item) => {
                      if (item.details.gender === 'male') {
                          filteredItems.push(item)
                      }
                  })
                  setExploreItems(filteredItems)
                  setGenderFilter('male')
  
              }
  
  
  
          } else if (gende === 'female') {
  
              if (genderFilter === 'female') {
                  setGenderFilter('')
                  setExploreItems(exploreItemsOriginal)
  
              } else {
  
  
  
                  exploreItemsOriginal.forEach((item) => {
                      if (item.details.gender === 'female') {
                          filteredItems.push(item)
                      }
                  })
  
                  setExploreItems(filteredItems)
                  setGenderFilter('female')
              }
  
  
          }

    }

    const [foodReferenceOptions, setFoodReferenceOptions] = useState([
        'Vegetarian',
        'Non-Vegetarian',
        'Vegan',
        
        
        // Add more food reference options as needed
      ]);
    
      const [selectedFoodReference, setSelectedFoodReference] = useState(null);

    const [maritalStatusOptions, setMaritalStatusOptions] = useState([
        'Single',
        'Married',
        'Divorced',
        'Separated',
        'Other',
        // Add more marital status options as needed
      ]);

      const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);

    const [languageOptions, setLanguageOptions] = useState([
        'English',
        'Tamil',
        'Sinhala',
        // Add more language options as needed
      ]);
    


    const [educationOptions, setEducationOptions] = useState([
        'O/L',
        'A/L',
        'Diploma',
        'Higher Diploma',
        'Bachelor',
        'MSc',
        'Ph.D',
        // Add more education qualification options as needed
      ]);
    
      const [selectedEducation, setSelectedEducation] = useState(null);

    const [weightOptions, setWeightOptions] = useState([
        '50 kg',
        '60 kg',
        '70 kg',
        '80 kg',
        // Add more weight options as needed
      ]);
    
      const [selectedWeight, setSelectedWeight] = useState(null);



    const [heightOptions, setHeightOptions] = useState([
        '5 feet 0 inches',
        '5 feet 1 inch',
        '5 feet 2 inches',
        '5 feet 3 inches',
        // Add more height options as needed
      ]);
    
      const [selectedHeight, setSelectedHeight] = useState(null);

    const [languageList, setLanguageList] = useState([
        'English',
        'Tamil',
        'Sinhala',
        
        
        // Add more languages as needed
      ]);
    
      const [selectedLanguage, setSelectedLanguage] = useState(null);


    const [castList, setCastList] = useState([
        "Anglo Indian",
        "Anglican",
        "AOG",
        "Basel Mission",
        "Baptist",
        "Born Again",
        "Brethren",
        "CMS",
        // Add more cast names as needed
      ]);
    
      const [selectedCast, setSelectedCast] = useState(null);

    


      const [countries, setCountries] = useState([]);
      const [selectedCountry, setSelectedCountry] = useState(null);
    
      useEffect(() => {
        // Fetch countries data from the REST Countries API
        fetch('https://restcountries.com/v3.1/all')
          .then(response => response.json())
          .then(data => {
            // Extract country information including name and flag
            const countryInfo = data.map(country => ({
              name: country.name.common,
              flag: country.flags.png,
            }));
            setCountries(countryInfo);
          })
          .catch(error => console.error('Error fetching countries:', error));
      }, []);
      
      const handleCountryClick = (selectedOption) => {
        // Do something with the selected country
        setSelectedCountry(selectedOption);
    };

    const [minAge, setMinAge] = useState(''); // New state for minimum age
    const [maxAge, setMaxAge] = useState(''); // New state for maximum age
  
    // Function to handle changes in the minimum age selection
    const handleChangeMinAge = (event) => {
      setMinAge(event.target.value);
    };
  
    // Function to handle changes in the maximum age selection
    const handleChangeMaxAge = (event) => {
      setMaxAge(event.target.value);
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



    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
   

    const calculateIndices = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return { startIndex, endIndex };
      };

      const totalPages = Math.ceil(exploreItems.length / itemsPerPage);

      const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
      const { startIndex, endIndex } = calculateIndices();
   

    function getItemById(id) {
        // Find the item with the matching ID in exploreItemsOriginal
        const item = exploreItemsOriginal.find((item) => item.id === id);
    
        // Return the found item if it exists, or a default object if not found
        return item || { photo: '', name: '', town: '', country: '', spokenLnguage: '', age: '', education: '', occupation: '', height: '', postedOn: '' };
    }
    


    function checkIfLiked(id) {

        if (userData.likedItems.includes(id)) {
            return true
        } else {
            return false
        }
    }

    function updateItemLikeStatus(id) {
        let likedItems = userData.likedItems;
    
        axiosInstance
            .post('/likeUsers/' + id)
            .then((response) => {
                console.log(response);
    
                // Check the response message to determine if the item was liked or unliked
                if (response.data.message === 'Item liked successfully.') {
                    // If the item was liked, add it to likedItems array
                    likedItems.push(id);
                } else if (response.data.message === 'Item unliked successfully.') {
                    // If the item was unliked, remove it from likedItems array
                    const index = likedItems.indexOf(id);
                    if (index !== -1) {
                        likedItems.splice(index, 1);
                    }
                }
    
                // Update the state with the updated likedItems array
                setUserData({ ...userData, likedItems: likedItems });
            })
            .catch((error) => {
                // Handle errors here
            });
    }
    


    useEffect(() => {
        
        const searchParams = new URLSearchParams(location.search);
      
        // Access individual query parameters
        const lookingFor = searchParams.get('lookingFor');
        const ageFrom = searchParams.get('ageFrom');
        const ageTo = searchParams.get('ageTo');
        const religion = searchParams.get('religion');
      
        // Now you have the values of the query parameters
        console.log('Looking For:', lookingFor);
        console.log('Age From:', ageFrom);
        console.log('Age To:', ageTo);
        console.log('Religion:', religion);
        // Using Axios for making the request
        
        if (!searchParams.has('lookingFor') && !searchParams.has('ageFrom') && !searchParams.has('ageTo') && !searchParams.has('religion')) {
        
         axiosInstance
         .get('/allActiveUsers')
         .then((response) => {
         // Handle the successful response here
         const data = response.data;
         if (data.activeUsersWithImagesAndDetails && data.activeUsersWithImagesAndDetails.length > 0) {
        // Access elements of the array safely
        setExploreItemsOriginal(data.activeUsersWithImagesAndDetails);
        setLoading(false);
        console.log(data.activeUsersWithImagesAndDetails);
        // ... rest of your code ...
        } else {
        setLoading(false);
        // Handle the case where the array is empty or undefined
        console.log('The array is empty or undefined');
       }
  

      })
      .catch((error) => {
       // Handle any errors here
       setExploreItemsOriginal([]);
       setLoading(false);  
       console.error('Error fetching data:', error);
      });
        }else{
            
            axiosInstance.post('/getSearchData', {
                
                  gender: lookingFor,        // Empty string for gender
                  ageFrom: ageFrom,        // Age range from 1
                  ageTo: ageTo,         // Age range up to 50
                  religion: religion,      // Empty string for religion
                
              })
              .then(response => {
                const data = response.data;
                console.log(data);
                if (data.activeUsersWithImagesAndDetails && data.activeUsersWithImagesAndDetails.length > 0) {
                // Access elements of the array safely
                setExploreItemsOriginal(data.activeUsersWithImagesAndDetails);
                setLoading(false);
                }else{
                setExploreItemsOriginal([]);
                setLoading(false);  
                }
              })
              .catch(error => {
                // Handle errors here
                setExploreItemsOriginal([]);
                setLoading(false);  
                console.error('Error fetching data:', error);
              });
              
        }
        

        let user = {
            name: 'user',
            likedItems: [],
        };
        
        axiosInstance
            .post('/likeUsers')
            .then((response) => {
                // Assuming the response contains an array of liked item IDs
                const likedItemIds = response.data.liked_item_ids;
        
                // Update the user object's likedItems array with the received data
                user.likedItems = likedItemIds;
    
            })
            .catch((error) => {
                // Handle errors here
            });
           
            setUserData(user);
    }, [])

    useEffect(() => {

        setExploreItems(exploreItemsOriginal);


    }, [exploreItemsOriginal])

    const likedItems = userData?.likedItems || [];

    const [rele, setRele] = React.useState('');

    const handleChangeRel = (event) => {
        setRele(event.target.value);
    };

    function openCard(id) {
        setLoading(true);
        axiosInstance
            .get('/selectUserProfile/' + id)
            .then((response) => {
                const userDataArray = response.data.activeUserWithImagesAndDetails;
                setTimeout(() => {
                 selectsetUserData(userDataArray);
                 setLoading(false);
                }, 1000);
                console.log(userDataArray);
            })
            .catch((error) => {
                // Handle errors here
            });
    }
    function closeCard() {
        selectsetUserData(null)
    }

    const handleselectageChange = (event, newValue) => {
        setagetslectValue(newValue);
        setAgeFilterFunc();
    };
    function setAgeFilterFunc() {
        setExploreItems(null);
        setLoading(true);
        const filtered = exploreItemsOriginal.filter((item) => {
            const age = item.details ? item.details.age : 0; // Assuming age is a property of 'details'
            const gender = item.details ? item.details.gender : '';
            const religion = item.details ? item.details.religion: '';
            return (
              age >= selectagevalue[0] &&
              age <= selectagevalue[1] &&
              (genderFilter === '' || gender === genderFilter) &&
              ( !setreligion || religion === setreligion)
            );
        });
        setTimeout(() => {
            setLoading(false);
            setExploreItems(filtered);
          }, 1000);
          
    }
    
    
  const handleChangeReligion = (event) => {
        setExploreItems(null);
        setLoading(true);
    const selectedValue = event.target.value;

    const filtered = exploreItemsOriginal.filter((item) => {
        const details = item.details;
        const age = item.details ? item.details.age : 0; // Assuming age is a property of 'details'
        const gender = item.details ? item.details.gender : '';
      
            return (
              age >= selectagevalue[0] &&
              age <= selectagevalue[1] &&
              (genderFilter === '' || gender === genderFilter) && 
              ( !selectedValue || details.religion === selectedValue)
            );
      });
      setTimeout(() => {
        setLoading(false);
        setExploreItems(filtered);
        setReligion(selectedValue);
      }, 1000);

  };
    return (
        <div className=''>  

            {/* <h1 style={{ marginTop:'85px',backgroundColor:'aqua',height:'230px',marginLeft:'125px',marginRight:'125px' }}></h1>   */}
         
            <div className='mainExploreContainer'>

               

                
                
            {loading &&(  <div className="centered-container" style={{  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
                          <span className="loader"></span>
                         </div>
            )}
                <div className={showFilter ? 'filterOpen filterOptionsContainer' : 'filterClosed filterOptionsContainer'}>
                    <div className='filterOptionsToggleBtn'>
                        {showFilter ? <FaTimes onClick={toggleFilter} /> : <FaFilter onClick={toggleFilter} />}
                    </div>
                    <div style={{ backgroundColor:'rgba(228, 200, 89, 0.25)',height:"96px" }}>
                            <h1 style={{ borderRadius:'10px',margin:"0px",paddingLeft:"29px" }}>Hi<p style={{ fontSize:'16px' }}>Find Your Lover</p> </h1>
                        </div>
                        <h1 style={{ color:'rgba(0, 0, 0, 0.69)',fontSize:'18px',marginTop:"20px", marginLeft:"25px",fontFamily:"Jomolhari" }}>I'm Looking For</h1>

                    <div className='filterOptions'>
                        
                        <div className='genderFFilter eachOption'>
                            
                                
                                

                            
                            <div className='opt-2'>
                                <div className={genderFilter === 'female' ? 'smallFilterOptionCardSelected smallFilterOptionCard' : 'smallFilterOptionCard'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
<path d="M33.2497 14.25C33.2497 10.2917 31.8643 6.92708 29.0934 4.15625C26.3226 1.38542 22.958 0 18.9997 0C15.0413 0 11.6767 1.38542 8.90592 4.15625C6.13508 6.92708 4.74966 10.2917 4.74966 14.25V15.0664C1.73143 22.7852 0.148102 28.2773 -0.000335909 31.543C-0.0992943 33.7201 3.29003 34.8086 10.1676 34.8086C12.79 36.9362 15.734 38 18.9997 38C22.4632 38 25.4072 36.9362 27.8317 34.8086C34.6103 34.8086 37.9997 33.7201 37.9997 31.543C37.8512 28.2773 36.2679 22.7852 33.2497 15.0664V14.25ZM18.9997 34.8086C15.932 34.8086 13.3219 33.7324 11.1696 31.5801C9.01724 29.4277 7.94107 26.8177 7.94107 23.75V14.25C7.94107 11.3802 8.98013 8.78255 11.0583 6.45703C12.2458 10.6133 18.5296 12.6914 29.9098 12.6914C30.0088 12.9883 30.0583 13.5078 30.0583 14.25V23.75C30.0583 26.8177 28.9821 29.4277 26.8297 31.5801C24.6774 33.7324 22.0674 34.8086 18.9997 34.8086ZM18.9997 25.3086C20.0387 25.3086 20.5583 24.7891 20.5583 23.75V22.1914H17.4411V23.75C17.4411 24.7891 17.9606 25.3086 18.9997 25.3086ZM14.2497 17.4414C14.2497 17.8372 14.0889 18.196 13.7672 18.5176C13.4456 18.8392 13.0869 19 12.6911 19C12.2458 19 11.8623 18.8392 11.5407 18.5176C11.2191 18.196 11.0583 17.8372 11.0583 17.4414C11.0583 16.9961 11.2191 16.6126 11.5407 16.291C11.8623 15.9694 12.2458 15.8086 12.6911 15.8086C13.0869 15.8086 13.4456 15.9694 13.7672 16.291C14.0889 16.6126 14.2497 16.9961 14.2497 17.4414ZM26.9411 17.4414C26.9411 17.8372 26.7803 18.196 26.4587 18.5176C26.137 18.8392 25.7536 19 25.3083 19C24.9124 19 24.5537 18.8392 24.2321 18.5176C23.9105 18.196 23.7497 17.8372 23.7497 17.4414C23.7497 16.9961 23.9105 16.6126 24.2321 16.291C24.5537 15.9694 24.9124 15.8086 25.3083 15.8086C25.7536 15.8086 26.137 15.9694 26.4587 16.291C26.7803 16.6126 26.9411 16.9961 26.9411 17.4414ZM17.4411 30.0586H20.5583C21.4489 30.0586 22.2034 29.7493 22.8219 29.1309C23.4404 28.5124 23.7497 27.7826 23.7497 26.9414H14.2497C14.2497 27.7826 14.5589 28.5124 15.1774 29.1309C15.7959 29.7493 16.5504 30.0586 17.4411 30.0586Z" fill="black" fill-opacity="0.78" className='filterOptionIcon' onClick={() => setGenderFilterFunc("female")}/>
</svg>
                                
                                    {/* <FaFemale className='filterOptionIcon' onClick={() => setGenderFilterFunc("female")} /> */}
                                </div>
                                
                                <div></div>
                                <div className={genderFilter === 'male' ? 'smallFilterOptionCardSelected smallFilterOptionCard' : 'smallFilterOptionCard'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" className='filterOptionIcon' onClick={() => setGenderFilterFunc("male")}>
<path d="M34.3668 16.875C33.9073 4.09391 30.8631 1.1875 19 1.1875C7.13688 1.1875 4.09272 4.0945 3.63316 16.875C2.77162 17.0929 1.78125 17.9004 1.78125 20.463C1.78125 23.4086 3.42238 24.3604 4.97859 24.6003C5.83003 29.9268 8.90863 33.3159 15.4862 36.2241C16.3305 36.5982 17.6118 36.8125 19 36.8125C20.3894 36.8125 21.6695 36.5982 22.5138 36.2241C29.0914 33.3153 32.1694 29.9256 33.0226 24.6003C34.5776 24.3604 36.2188 23.4086 36.2188 20.463C36.2188 17.8992 35.2284 17.0923 34.3668 16.875ZM32.4591 23.4888L31.9758 23.5226L31.9123 23.9946C31.1083 29.9885 27.379 32.7922 22.0275 35.1595C21.3412 35.4635 20.2101 35.6446 19.0006 35.6446C17.7923 35.6446 16.6606 35.4629 15.9737 35.1595C10.6216 32.7928 6.89225 29.9885 6.08891 23.9946L6.02656 23.5226L5.54206 23.4888C3.762 23.3641 2.96875 22.4307 2.96875 20.463C2.96875 18.8088 3.38972 17.971 4.22216 17.971C4.26253 17.971 4.30588 17.9728 4.34981 17.9764C4.46322 18.5808 4.598 19.0214 4.75891 19.3159C5.16622 20.0581 5.93275 20.4624 6.01825 20.5057L7.04247 21.0247L6.878 19.9025C6.87681 19.89 6.70522 18.6966 6.76756 17.0733C7.23603 10.3882 7.65819 9.94828 10.3776 9.94828C11.093 9.94828 11.9753 10.0053 12.9984 10.0706C14.5742 10.1715 16.5365 10.2974 19.0006 10.2974C21.4647 10.2974 23.427 10.1715 25.0028 10.07C26.0258 10.0047 26.9082 9.94769 27.6224 9.94769C30.343 9.94769 30.7652 10.3888 31.2312 17.0691C31.293 18.7019 31.122 19.89 31.1196 19.9019L30.954 21.0247L31.9794 20.5052C32.0661 20.4618 32.832 20.0575 33.2387 19.3153C33.4008 19.0202 33.5356 18.5802 33.6502 17.9758C34.5687 17.9069 35.0289 18.7275 35.0301 20.4624C35.0312 22.4313 34.238 23.3647 32.4591 23.4888Z" fill="black" fill-opacity="0.6"/>
<path d="M23.8094 28.2026H14.1912C13.6568 28.2026 13.6568 28.7114 13.6568 28.7114C13.6568 30.748 16.3287 31.7651 19.0006 31.7651C21.6725 31.7651 24.3443 30.748 24.3443 28.7114C24.3438 28.7114 24.3438 28.2026 23.8094 28.2026ZM14.8438 18.4847C14.8438 18.1569 14.7767 17.8476 14.6686 17.5572C15.2796 18.0008 15.7724 18.5981 16.0312 19.3741C16.0312 14.6253 7.71875 14.6253 7.71875 18.7816C8.10588 17.8126 9.00244 17.1666 10.0718 16.8507C9.7031 17.3157 9.50169 17.8913 9.5 18.4847C9.5 19.1933 9.7815 19.8729 10.2826 20.374C10.7836 20.8751 11.4632 21.1566 12.1719 21.1566C12.8805 21.1566 13.5601 20.8751 14.0612 20.374C14.5622 19.8729 14.8438 19.1933 14.8438 18.4847ZM21.9688 19.3741C22.2276 18.5975 22.7192 18.0008 23.3314 17.5572C23.2179 17.8534 23.1586 18.1675 23.1562 18.4847C23.1562 19.1933 23.4378 19.8729 23.9388 20.374C24.4399 20.8751 25.1195 21.1566 25.8281 21.1566C26.5368 21.1566 27.2164 20.8751 27.7174 20.374C28.2185 19.8729 28.5 19.1933 28.5 18.4847C28.4978 17.8914 28.2964 17.316 27.9282 16.8507C28.9976 17.1666 29.8941 17.8126 30.2812 18.7816C30.2812 14.6253 21.9688 14.6253 21.9688 19.3741ZM19 26.4213C21.4819 26.4201 22.7228 24.6401 21.4819 24.6401H16.5187C15.2784 24.6401 16.5181 26.4213 19 26.4213Z" fill="black" fill-opacity="0.6"/>
</svg>
                                    {/* <FaMale className='filterOptionIcon' onClick={() => setGenderFilterFunc("male")} /> */}
                                    
                                </div >
                                
                            </div>

                            <div style={{height:"2px", width:"280px", backgroundColor:"rgba(0, 0, 0, 0.27)" }}></div>

    <div className='opt-2'>
    
    <div className='smallFilterOptionCards'>
    <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px", fontWeight:"400", fontFamily:"Jomolhari"  }}>Min Age</h1>
        <Autocomplete
        options={Array.from({ length: 53 }, (_, i) => i + 18)}
        getOptionLabel={(option) => option.toString()}
        value={minAge}
        onChange={(event, newValue) => setMinAge(newValue)}
        size="small"
        renderInput={(params) => (
            <TextField 
            {...params}
            
            
            variant="outlined"
            InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true}} // Remove arrowhead
            
            />
        )}
        />
        </div>
        <div className='smallFilterOptionCards'>
        <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px",fontWeight:"400", fontFamily:"Jomolhari"  }}>Max Age</h1>
        <Autocomplete className='filter-opt'
        options={Array.from({ length: 53 }, (_, i) => i + 18)}
        getOptionLabel={(option) => option.toString()}
        value={maxAge}
        onChange={(event, newValue) => setMaxAge(newValue)}
        size="small"
        renderInput={(params) => (
            <TextField
            {...params}
            
            variant="outlined"
            InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }} // Remove arrowhead
            />
        )}
        />
    </div>
    </div>

    
    
    <div className='smallFilterOptionCards'>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label">{setreligion? setreligion: 'Relegion'}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={rele}
                onChange={handleChangeReligion}
                label= {setreligion? setreligion: 'Relegion'}
                InputProps={{  disableUnderline: true }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"hindu"}>hindu</MenuItem>
                <MenuItem value={"cristian"}>cristian</MenuItem>
                <MenuItem value={"buddist"}>buddist</MenuItem>
            </Select>
        </FormControl>
    </div>

            

                            
                            <div className='smallFilterOptionCards'>
    <h1 style={{ color: "rgba(0, 0, 0, 0.69)", fontSize: "18px", fontWeight: "400", fontFamily: "Jomolhari" }}>Country</h1>
    <Autocomplete
        className='filter-opt'
        options={countries}
        getOptionLabel={(option) => option.name}
        value={selectedCountry}
        onChange={(event, newValue) => setSelectedCountry(newValue)} 
        renderInput={(params) => (
            <TextField
            {...params}
            size="small"
            variant="outlined"
            sx={{ minWidth: 200 }}
            InputProps={{
                ...params.InputProps,
                endAdornment: selectedCountry ? (
                    <InputAdornment position="end">
                        <Avatar className="smallFilterOptionCardSelected"
                            alt={selectedCountry.name}
                            src={selectedCountry.flag}
                            sx={{ width: 24, height: 24, marginRight: 1 }}
                        />
                    </InputAdornment>
                ) : null,
                disableUnderline: true,
            }}
        />
        )}
        renderOption={(props, option) => (
            <Box display="flex" alignItems="center">
                
                    <Avatar
                        alt={option.name}
                        src={option.flag}
                        sx={{ width: 24, height: 24, marginRight: 1 }}
                        onClick={() => handleCountryClick(option)}
                    />

                    <Typography onClick={() => handleCountryClick(option)}>{option.name}</Typography>
                
            </Box>
        )}
    />
</div>
  

        <div className='smallFilterOptionCards'>
        <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px",fontWeight:"400", fontFamily:"Jomolhari"  }}>Cast</h1>
            <Autocomplete className='filter-opt'
                options={castList}
                value={selectedCast}
                onChange={(event, newValue) => setSelectedCast(newValue)}
                renderInput={(params) => (
                <TextField
                    {...params}
                    size="small"
                    variant="outlined"
                    sx={{ minWidth: 200 }}
                    InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }}
                />
                )}
            />
            
            </div>

            <div className='smallFilterOptionCards'>
            <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px",fontWeight:"400", fontFamily:"Jomolhari"  }}>Language</h1>
                <Autocomplete className='filter-opt'
                    options={languageList}
                    value={selectedLanguage}
                    onChange={(event, newValue) => setSelectedLanguage(newValue)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        size="small"
                        variant="outlined"
                        sx={{ minWidth: 200 }}
                        InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }}
                    />
                    )}
                />
                
                </div>

                <div className='smallFilterOptionCards'>
                <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px",fontWeight:"400", fontFamily:"Jomolhari"  }}>Education Qualification</h1>
                    <Autocomplete className='filter-opt'
                        options={educationOptions}
                        value={selectedEducation}
                        onChange={(event, newValue) => setSelectedEducation(newValue)}
                        renderInput={(params) => (
                        <TextField 
                            {...params}
                            size="small"
                            variant="outlined"
                            sx={{ minWidth: 200 }}
                            InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }}
                        />
                        )}
                    />
                
                    </div>

                <div className='smallFilterOptionCards'>
                <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px",fontWeight:"400", fontFamily:"Jomolhari"  }}>Height</h1>
                <Autocomplete className='filter-opt'
                    options={heightOptions}
                    value={selectedHeight}
                    onChange={(event, newValue) => setSelectedHeight(newValue)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        size="small"
                        variant="outlined"
                        sx={{ minWidth: 200 }}
                        InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }}
                    />
                    )}
                />
                
                </div>

                <div className='smallFilterOptionCards'>
                <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px", fontWeight:"400", fontFamily:"Jomolhari" }}>Weight</h1>
                    <Autocomplete className='filter-opt'
                        options={weightOptions}
                        value={selectedWeight}
                        onChange={(event, newValue) => setSelectedWeight(newValue)}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            size="small"
                            variant="outlined"
                            sx={{ minWidth: 200 }}
                            InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }}
                        />
                        )}
                    />
                    
                    </div>

                    <div className='smallFilterOptionCards'>
                    <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px", fontWeight:"400", fontFamily:"Jomolhari" }}>Speaking Language</h1>
                        <Autocomplete className='filter-opt'
                            options={languageOptions}
                            value={selectedLanguage}
                            onChange={(event, newValue) => setSelectedLanguage(newValue)}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                size="small"
                                variant="outlined"
                                sx={{ minWidth: 200 }}
                                InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }}
                            />
                            )}
                        />
                        
                        </div>
                        <div className='smallFilterOptionCards'>
                        <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px", fontWeight:"400", fontFamily:"Jomolhari" }}>Marital Status</h1>
                            <Autocomplete className='filter-opt'
                                options={maritalStatusOptions}
                                value={selectedMaritalStatus}
                                onChange={(event, newValue) => setSelectedMaritalStatus(newValue)}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    size="small"
                                    variant="outlined"
                                    sx={{ minWidth: 200 }}
                                    InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }}
                                />
                                )}
                            />
                            
                            </div>

                            <div className='smallFilterOptionCards'>
                            <h1 style={{ color:"rgba(0, 0, 0, 0.69)", fontSize:"18px", fontWeight:"400", fontFamily:"Jomolhari" }}>Food Reference</h1>
                                <Autocomplete className='filter-opt'
                                    options={foodReferenceOptions}
                                    value={selectedFoodReference}
                                    onChange={(event, newValue) => setSelectedFoodReference(newValue)}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        size="small"
                                        variant="outlined"
                                        sx={{ minWidth: 200 }}
                                        InputProps={{ ...params.InputProps, endAdornment: null, disableUnderline: true }}
                                    />
                                    )}
                                />
                                
                                </div>



                            


                        </div>
                    </div>
                </div>
                
                <div>
                
                {exploreItems && exploreItems.length > 0 && !loading ? (
                    <div className='exploreItems '>

                {exploreItems.slice(startIndex, endIndex).map((item, index) => (

                    
                        <div className='exploreItemCard' key={index}>
                            <div className='exploreItemImg'>
                                <div className='likeBtn'>
                                    {checkIfLiked(item.user_id) ? <FaHeart onClick={() => updateItemLikeStatus(item.user_id)} style={{ color: "red" }} /> : <FaRegHeart onClick={() => updateItemLikeStatus(item.user_id)} />}
                                </div>
                                <>
                                <img src={userImageBASE_URL + item.images[0].image_path} alt={item.name} />
                                </>
                                    
                                
                                
                            </div>

                          
                            <div className='exploreItemDetails'>
   
                                <div className='nameAndAddressForCard'>
                                    <div className='exploreItemName'>{item.name}</div>
                                    <div className='exploreItemAddress'><FaLocationArrow className='addressIcon' /> {item.details.town}, {item.details.livingPlace}</div>
                                </div>
   
                                <div className='generalDetails'>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {item.details.spokenLnguage}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {item.details.age}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {item.details.education}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {item.details.gender}</div>
                                    </div>
                                    {/* <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {item.details.height}</div>
                                    </div> */}
   
                                </div>
                                <div className='exploreItemPostedOn'>{item.created_at}
                                
                                </div>

                            
                              
                            {/* <span>
                                <button className='view-btn' onClick={() => openCard(item.user_id)}>
                                    <span className='view-txt'>View More</span>
                                </button>
                            </span> */}

                            

                            <span>
                                <button className='view-btn'>
                                <Link to={`/match/${item.user_id}`}>
                                    <span className='view-txt'>More Details</span>
                                </Link>
                                </button>
                                
                            </span>
                               
                        
                            </div>
      
            
                        </div>
                        
                    ))}
                                    
                   
                </div>
                

                
                 ) : (
                 <div>   { !loading && ( <div className="no-data-found">
                    <FaInfoCircle></FaInfoCircle>
                    <p>No Data Found</p>
                  </div> )}
                  </div>
                 )}
                 
                </div>

               


                <div className={showFavorites ? 'favOpen favoritesPane' : 'favClosed favoritesPane'}>
                    <div className={showFavorites ? 'favsToggleBtn' : 'favsToggleBtnClosed'}>
                        {showFavorites ? <FaTimes onClick={toggleFavorites} /> : <FaHeart onClick={toggleFavorites} style={{ color: "red" }} />
}
                    </div>
                    <div className='favorites'>
                        <div>Favorites</div>
                        <div className='favoritesList'>
                            {likedItems.map((item, index) => (
                                <div className='favoriteItem'>
                                    <div className='favImg'>
                                    <img src={userImageBASE_URL + getItemById(item.user_id)?.images[0]?.image_path} alt='fav' />
                                    </div>
                                    <div className='favName'>{getItemById(item.user_id).name} </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                
            </div>

            


            {selectuserData  && (
                <div className='openedCardOverlay' onClick={closeCard}></div>
            )}
            {selectuserData && (
                <div className='openedCardContainer'>
                    <div className='p-margin'>
                    <div className='openedCard'>
                        
                    <div>
      <div className="gallery">
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
    </div>
                           
              

                   
                   {/* <div className='openedCardDetails'>
                       <div className='openedCardName'>{selectuserData.name}</div>
                       {selectuserData && (
                        <div className='openedCardAddress'>
                         <FaLocationArrow className='addressIcon-2' /> {selectuserData.details && selectuserData.details.town ? selectuserData.details.town : 'Unknown'}
                        </div>
                       )}

                       <div className='openedCardGeneralDetails'>
                           <div className='eachGeneralDetail'>
                               {selectuserData && selectuserData.details && selectuserData.details.spokenLnguage && (
                                 <div className='eachGeneralDetailInner-2'>
                                  <FaSpeakap className='gdIcon-2' /> {selectuserData.details.spokenLnguage}
                                 </div>
                               )}
                           </div>
                           <div className='eachGeneralDetail'>
                           {selectuserData && selectuserData.details && selectuserData.details.age && (
                               <div className='eachGeneralDetailInner-2'><FaBirthdayCake className='gdIcon-2' />  {selectuserData.details.age}</div>
                           )}
                               </div>
                           <div className='eachGeneralDetail'>
                           {selectuserData && selectuserData.details && selectuserData.details.education && (
                               <div className='eachGeneralDetailInner-2'><FaGraduationCap className='gdIcon-2' />  {selectuserData.details.education}</div>
                           )}
                               </div>
                           <div className='eachGeneralDetail'>
                           {selectuserData && selectuserData.details && selectuserData.details.gender && (
                               <div className='eachGeneralDetailInner-2'><FaFemale className='gdIcon-2' /> {selectuserData.details.gender}</div>
                           )}
                               </div>
                           <div className='eachGeneralDetail'>
                           {selectuserData && selectuserData.details && selectuserData.details.height && (
                               <div className='eachGeneralDetailInner-2'><FaRuler className='gdIcon-2' /> {selectuserData.details.height}</div>
                           )}
                               </div>

                       </div>
                       <div className='openedCardPostedOn'>{selectuserData.created_at}</div>
                       <div className='viewButtonDiv'>
                           <div className='viewButton'>
                               <Link to={`/match/${selectuserData.user_id}`} className='viewProfileBtn'>Contact</Link>
                           </div>
                       </div>
                   </div> */}
                   <div className='closeCardBtn' onClick={closeCard}><FaTimes /></div>
                   
               </div>
                    </div>
                    
                    
                </div>
            )}

{exploreItems && exploreItems.length > 0 && !loading && (
                    <div className='pagination-container'>
                        <div className="pagination-controls">


                        <button className='prev-btn'
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1} 
                        ><FaAngleDoubleLeft className='prv-icon' /> <span>Previous</span>
                        </button>

                        

                        {[...Array(totalPages)].map((_, index) => (
                            <button 
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                            >
                            {index + 1}
                            </button>
                        ))}


                       
                        <button className='next-btn'
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === Math.ceil(exploreItems.length / itemsPerPage)}
                        >
                         <span>Next</span><span><FaAngleDoubleRight className='nxt-icon'/></span> 
                        </button>
                        </div>
                    </div>
                                        )}
        </div>
        
    )
}

export default ExplorePage