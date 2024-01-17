import React from 'react'
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { FaArrowLeft, FaBirthdayCake, FaEdit, FaFemale, FaGraduationCap, FaLocationArrow, FaRuler, FaSpeakap, FaWindowClose, FaSave, FaHeart} from 'react-icons/fa';
import { FaRegEdit } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { BsFillSave2Fill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdSaveAlt } from "react-icons/md";
import { baseURL } from '../../../api';
import { Link, useNavigate, useParams } from "react-router-dom";
// import p1 from '../../assests/home/p1.jpeg';
import { Button } from '@mui/material';
import Footer from '../../items/home/Footer';
import { userImageBASE_URL } from '../../../api';
import MuiAlert from '@mui/material/Alert';
import profileImageNofemale from "../../../../src/assests/home/profileImageNofemale.jpg";
import profileImageNomale from "../../../../src/assests/home/profileImageNomale.jpg";
import ConfirmationDialog from '../userProfilePicUploadToProfilePage'
import '../../../App.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import './ProfilePage.css';
import './w3.css';
import axiosInstance from '../../../api';
import { ToastContainer, toast } from "react-toastify";
import ResponsiveDialog from '../../items/alert';
import Form from 'react-bootstrap/Form';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  
  });
function ProfilePage() {

    const navigate = useNavigate();


    // const [userData, setUserData] = useState(null);
    const [editPanel, setEditPanel] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [relegion, seteligion] = useState('');
    const [cast, setCast] = useState('');
    const [language, setLanguage] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');
    const [marritalStatus, setMarriedStatus] = useState('');
    const [matchData, setMatchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [openDialog, setOpenDialog] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [setSelectedimg, setSelectedImage] = useState('');
    
    const [userInfo, setUserInfo] = useState({
      // Initialize userInfo object with default or fetched values
      livingPlace: '',
      // ... other properties
    });
  
    const handleUpdateUserInfo = () => {
      // Here you can perform an action to send userInfo to the server for an update
      console.log('Updated user info:', userInfo);
      // Perform API call or update logic using userInfo
    };
  
    const handleChange = (field, value) => {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [field]: value,
      }));
    };

    const [countryNames ,setCountryNames] = useState([]);
    const [cities ,setCities] = useState([]);
    const [castList ,setCastList] = useState([]);
  
    const addToUserInfo = (key, value) => {
  
      //if key exists, update the value
  
      //if key does not exist, add the key and value
      setUserInfo({
        ...userInfo,
        [key]: value
      });
  
    }
   
    const handleLogout = () => {
      setAnchorEl(null);
      // Handle logout logic
      setDialogOpen(true);
    };

    const handleCloseDialog = () => {
      setDialogOpen(false);
      // Optionally, you can perform any additional logic after closing the dialog
      // For example, you can navigate to another page or execute specific actions
    };
  
    const logout = () => {

      // Make a POST request to the logout endpoint
      axiosInstance.get('/logout')
        .then(response => {
          // Handle the response
          console.log(response.data); // Assuming the response contains a 'message' field
          // Handle logout logic
          toast.success('Logout successful');
          localStorage.removeItem('login');
          localStorage.removeItem('api_token');
          localStorage.removeItem('logiRole');
          handleCloseDialog();
          window.location.href = '/';
        })
        .catch(error => {
          // Handle the error
          console.error(error);
  
          // Perform any error handling or display error messages to the user
        });
  
  
    };

    const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('Selected File:', file);
  };

  const handleButtonClick = () => {
    // Trigger the file input click
    fileInputRef.current.click();
  };
  
  
    useEffect (() => {
      console.log(userInfo);
  
    },[userInfo])
    const casteListHindu = [
      "Adi Dravida",
      "Agamudayar",
      "Brahmin (Iyer)",
      "Chettiar",
      "Devar/Thevar/Mukkulathor",
      "Devendra Kula Vellalar",
      "Gounder",
      "Kongu Vellala Gounder",
      "Korama",
      "Kori",
      "Koshti",
      "Krishnavaka",
      "Kshatriya",
      "Kshatriya (Bhavasar)",
      "Kshatriya/Raju/Varma",
      "Kudumbi",
      "Kulal",
      "Kulalar",
      "Kulita",
      "Kumawat",
      "Kumbara",
      "Kumbhakar/Kumbhar",
      "Kumhar",
      "Kummari",
      "Kunbi",
      "Kurava",
      "Kuravan",
      "Kurmi",
      "Kurmi Kshatriya",
      "Kuruba",
      "Kuruhina Shetty",
      "Kurumbar",
      "Kurup",
      "Kushwaha",
      "Lambadi/Banjara",
      "Lambani",
      "Leva Patil",
      "Lingayath",
      "Lohana",
      "Lohar",
      "Loniya/Lonia/Lunia",
      "Lubana",
      "Madhesiya",
      "Madiga",
      "Mahajan",
      "Mahar",
      "Mahendra",
      "Maheshwari",
      "Mahindra",
      "Mahishya",
      "Majabi",
      "Mala",
      "Malayalee Variar",
      "Mali",
      "Mallah",
      "Mangalorean",
      "Maniyani",
      "Mannadiar",
      "Mannan",
      "Mapila",
      "Marar",
      "Maratha",
      "Maratha (Gomantak)",
      "Maruthuvar",
      "Marvar",
      "Marwari",
      "Matang",
      "Maurya",
      "Meda",
      "Medara",
      "Meena",
      "Meenavar",
      "Meghwal",
      "Mehra",
      "Menon",
      "Meru Darji",
      "Modak",
      "Mogaveera",
      "Monchi",
      "Mudaliar",
      "Mudaliar (Arcot)",
      "Mudaliar (Saiva)",
      "Mudaliar (Senguntha)",
      "Mudiraj",
      "Munnuru Kapu",
      "Muthuraja",
      "Naagavamsam",
      "Nadar",
      "Nagaralu",
      "Nai",
      "Naicken",
      "Naicker",
      "Naidu",
      "Naik",
      "Nair",
      "Nair (Vaniya)",
      "Nair (Velethadathu)",
      "Nair (Vilakkithala)",
      "Namasudra",
      "Nambiar",
      "Nambisan",
      "Namdev",
      "Namosudra",
      "Napit",
      "Nayak",
      "Nayaka",
      "Neeli",
      "Nhavi",
      "OBC - Barber/Naayee",
      "Oswal",
      "Otari",
      "Padmasali",
      "Panchal",
      "Pandaram",
      "Panicker",
      "Paravan",
      "Parit",
      "Parkava Kulam",
      "Partraj",
      "Pasi",
      "Paswan",
      "Patel",
      "Patel (Desai)",
      "Patel (Dodia)",
      "Patel (Kadva)",
      "Patel (Leva)",
      "Patnaick",
      "Patra",
      "Patwa",
      "Perika",
      "Pillai",
      "Pisharody",
      "Poduval",
      "Poosala",
      "Porwal",
      "Prajapati",
      "Pulaya",
      "Raigar",
      "Rajaka/Chakali/Dhobi",
      "Rajbhar",
      "Rajput",
      "Rajput (Kumaoni)",
      "Rajput (Lodhi)",
      "Ramdasia",
      "Ramgharia",
      "Rauniyar",
      "Ravidasia",
      "Rawat",
      "Reddiar",
      "Reddy",
      "Relli",
      "SSK",
      "Sadgop",
      "Sagara (Uppara)",
      "Saha",
      "Sahu",
      "Saini",
      "Saiva Vellala",
      "Saliya",
      "Sambava",
      "Satnami",
      "Savji",
      "Scheduled Caste (SC)",
      "Scheduled Tribe (ST)",
      "Senai Thalaivar",
      "Sepahia",
      "Setti Balija",
      "Shah",
      "Shilpkar",
      "Shimpi",
      "Sindhi (Bhanusali)",
      "Sindhi (Bhatia)",
      "Sindhi (Chhapru)",
      "Sindhi (Dadu)",
      "Sindhi (Hyderabadi)",
      "Sindhi (Larai)",
      "Sindhi (Lohana)",
      "Sindhi (Rohiri)",
      "Sindhi (Sehwani)",
      "Sindhi (Thatai)",
      "Sindhi-Amil",
      "Sindhi-Baibhand",
      "Sindhi-Larkana",
      "Sindhi-Sahiti",
      "Sindhi-Sakkhar",
      "Sindhi-Shikarpuri",
      "Somvanshi",
      "Sonar",
      "Soni",
      "Sozhiya Vellalar",
      "Sri Vaishnava",
      "Srisayana",
      "Subarna Banik",
      "Sugali (Naika)",
      "Sundhi",
      "Surya Balija",
      "Sutar",
      "Suthar",
      "Swakula Sali",
      "Swarnakar",
      "Tamboli",
      "Tanti",
      "Tantuway",
      "Telaga",
      "Teli",
      "Thachar",
      "Thakkar",
      "Thakur",
      "Thandan",
      "Thigala",
      "Thiyya",
      "Thuluva Vellala",
      "Tili",
      "Togata",
      "Turupu Kapu",
      "Udayar",
      "Urali Gounder",
      "Urs",
      "Vada Balija",
      "Vadagalai",
      "Vaddera",
      "Vaduka",
      "Vaish",
      "Vaish (Dhaneshawat)",
    "Vaishnav",
    "Vaishnav (Bhatia)",
    "Vaishnav (Vania)",
    "Vaishya",
    "Vallala",
    "Valluvan",
    "Valmiki",
    "Vanika Vyshya",
    "Vaniya Chettiar",
    "Vanjara",
    "Vankar",
    "Vannan",
    "Vannar",
    "Vanniyakullak Kshatriya",
    "Vanniyar",
    "Variar",
    "Varshney",
    "Veerashaiva",
    "Velaan",
    "Velama",
    "Velar",
    "Vellalar",
    "Veluthedathu (Nair)",
    "Vettuva Gounder",
    "Vishwakarma",
    "Viswabrahmin",
    "Vokkaliga",
    "Vysya",
    "Waada Balija",
    "Yadav",
    "Yellapu",
    "Other"
  ];
  
  const castListChristian = [
    "Anglo Indian",
    "Anglican",
    "AOG",
    "Basel Mission",
    "Baptist",
    "Born Again",
    "Brethren",
    "CMS",
    "Cannonite",
    "Catholic",
    "Catholic Knanya",
    "Catholic Malankara",
    "Ceylon Pentecostal Mission (CPM)",
    "Chaldean Syrian",
    "Cheramar",
    "Church of North India (CNI)",
    "Church of South India (CSI)",
    "Convert",
    "Evangelical",
    "IPC",
    "Indian Orthodox",
    "Intercaste",
    "Jacobite",
    "Jacobite Knanya",
    "Knanaya",
    "Knanaya Catholic",
    "Knanaya Jacobite",
    "Knanaya Pentecostal",
    "Knanya",
    "Latin Catholic",
    "Malankara",
    "Malankara Catholic",
    "Manglorean",
    "Marthoma",
    "Methodist",
    "Mormon",
    "Nadar",
    "Orthodox",
    "Pentecost",
    "Presbyterian",
    "Protestant",
    "RCSC",
    "Roman Catholic",
    "Salvation Army",
    "Scheduled Caste (SC)",
    "Scheduled Tribe (ST)",
    "Seventh-day Adventist",
    "Syrian",
    "Syrian Catholic",
    "Syrian Orthodox",
    "Syro Malabar"
  ];
  
  const castListMuslim = [
    "Ansari",
    "Arain",
    "Awan",
    "Dawoodi Bohra",
    "Dekkani",
    "Dudekula",
    "Jat",
    "Khoja",
    "Lebbai",
    "Mapila",
    "Maraicar",
    "Memon",
    "Mughal",
    "Pathan",
    "Qureshi",
    "Rajput",
    "Rowther",
    "Shafi",
    "Sheikh",
    "Shia",
    "Shia Bohra",
    "Shia Imami Ismaili",
    "Shia Ithna ashariyyah",
    "Shia Zaidi",
    "Siddiqui",
    "Sunni",
    "Sunni Ehle-Hadith",
    "Sunni Hanafi",
    "Sunni Hanbali",
    "Sunni Maliki",
    "Sunni Shafi",
    "Syed"
  ];
  
  
    useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        //order by name
        const sortedCountry = response.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        console.log(sortedCountry);
  
        //get only country names
        const countryNames = sortedCountry.map((country) => country.name.common);
        console.log(countryNames);
  
        setCountryNames(countryNames);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
  
    const getCities = (countryName) => {
  
      // addToUserInfo('livingPlace', countryName);
  
      axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => {
        const country = response.data[0];
        console.log(country);
  
        const cities = country.capital;
        console.log(cities);
  
        setCities(cities);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(countryName);
  
    }
    const addBornCountry = (countryName) => {
      console.log(countryName);
    }
    const addBornCountryConnection = (countryName) => {
      console.log(countryName);
    }
  
    const setCastAccordingToReligion = (religion) => {
  
      const religionLower = religion.toLowerCase();
  
      console.log(religionLower);
      if (religionLower === 'hindu') {
        setCastList(casteListHindu);
      } else if (religionLower === 'christianity') {
        setCastList(castListChristian);
      } else if (religionLower === 'muslim' || religionLower === 'muslim (malay)') {
        setCastList(castListMuslim);
      } else {
        setCastList([]);
      }
    }

    const handleClick = (event, imageValue) => {
      setSelectedImage(imageValue);
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const backButton = () => {
        navigate("/browse");
    };
    
    const editProfilePic = () => {
        setOpenDialog(true);
    };
    const openMoadl = () => {
        setIsModalOpen(true);
    };
      
    const closeModal = () => {
        setIsModalOpen(false);
    };
      
    useEffect(() => {
        const getMatchById = async () => {
          try {
            let response = await fetch(
                baseURL+`/selectUserProfile/${id}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            );
            let result = await response.json();
            console.log(response);
            if (response.status == 200) {
              setLoading(false);
              setMatchData(result.activeUserWithImagesAndDetails);
              setEmail(result.activeUserWithImagesAndDetails.email);
              setCountry(result.activeUserWithImagesAndDetails.details.livingPlace);
              setName(result.activeUserWithImagesAndDetails.name);
              setCity(result.activeUserWithImagesAndDetails.details.town);
              seteligion(result.activeUserWithImagesAndDetails.details.religion);
              setCast(result.activeUserWithImagesAndDetails.details.cast);
              setLanguage(result.activeUserWithImagesAndDetails.details.spokenLnguage);
              setMobile(result.activeUserWithImagesAndDetails.details.pno);
              setGender(result.activeUserWithImagesAndDetails.details.gender);
              setAge(result.activeUserWithImagesAndDetails.details.age);
              setMarriedStatus(result.activeUserWithImagesAndDetails.marriedStatus);
              console.log(result.activeUserWithImagesAndDetails);
            } else if (response.status === 401) {
              console.log("you are not autherized");
            } else {
              console.log("Some error occured");
            }
          } catch (err) {
            console.log("not Authorized", err);
          }
        };
        getMatchById();

    }, [id]);



    function openCard() {
        setEditPanel(true)
    }

    function closeCard() {
        setEditPanel(false)
    }
    const modalStyle = {
        display: 'block',
        position: 'fixed',
        zIndex: 1000, // Adjust as needed
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black overlay
      };
    
      const modalContentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    const handleCancel = () => {
        // Add your logic here to determine whether the dialog should be closed or not
        const shouldCloseDialog = true; // Set this to true or false based on your condition

        if (shouldCloseDialog) {
          setOpenDialog(false); // Close the dialog if shouldCloseDialog is true
        }
      };


      
    return (
        <div>   
           {loading &&(  <div className="centered-container" style={{  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
                          <span className="loader"></span>
                         </div>
            )}
            {matchData && (
                <div class="profile-wrapper" style={{marginTop:'100px'}}>
                  <div className="row" style={{marginLeft:'20px'}}>
                    <div className="col-12">
                        <button onClick={backButton} className="btn btn-primary mt-2">
                            <FaArrowLeft />
                        </button>
                        
                    </div>
                </div>


{/* ################################ gihan 02.12.23 #################################### */}

{/* user profile          */}
<label className="block bg-gray-200 p-0 m-5 rounded-lg "><h1 className='prof-head'>User Profile</h1></label>

  <div className="flex flex-col sm:flex-row " >
        {/* Left Side (25% on desktop, 50% on mobile) */}
        

        <div className="w-full  sm:h-full md:h-1/2  bg-gray-200 p-4 left-container" style={{ backgroundColor:'#F8F1D5' }}>
          <div>
           <div className='avatar'>
            {matchData.profilePic != null ? (
              <img
                src={userImageBASE_URL + matchData.images}
                alt='openedCard'
                width="30" height="30" className="avatar"
                onClick={(event) => handleClick(event, matchData.profilePic)}
              />
            ) : (
              <img
                src={(gender === 'male') ? profileImageNomale : profileImageNofemale}
                alt='openedCard'
                width="60" height="60" className="avatar"
                onClick={(event) => handleClick(event, matchData.profilePic)}
              />
            )}
           </div>

          <h1 className='UserName'>{matchData.name}</h1>
          <div className='UserEmail'>{matchData.email}</div>

          <div className="stacked-button pb-2 sm:pb-4">
            {/* Use 'pb-2' for default padding-bottom and 'sm:pb-4' for small screens */}
            <button className="follow" id="following" style={{ backgroundColor: '#ffb700', borderRadius: '10px' }} onClick={openCard}>
            <FaEdit /><span className="follow-text">Edit Profile</span>
              <span className="following-text">Following</span>
              <span className="unfollow-text">
                
                Unfollow
              </span>
            </button>
          </div>
        </div>

          
          <div className="stacked-button-2 pb-2 sm:pb-4 ">
          <button className="follow" id="following" style={{ backgroundColor: '#ffb700', borderRadius: '10px' }} onClick={handleLogout}>
          <LuLogOut /><span className="follow-text">Logout</span>
              <span className="following-text">Following</span>
              <span className="unfollow-text">
                Unfollow
              </span>
            </button>
            <ResponsiveDialog
              open={dialogOpen}
              onClose={handleCloseDialog}
              contentText="Are you sure you want to logout? Logging out will end your current session."
              contentTitle="Logout Confirmation"
              actionButtonLabel="Logout"
              onActionButtonClick={logout}
              className="padding50"
            />
        </div>
        </div>


        {/* Right Side (75%) */}   
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 right-container">
    <div className="">
    
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='living-place'>Living Country 2222222222222222221111111: {matchData.details.livingPlace}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='Country'>Born Country : {matchData.details.country}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='Language'>Language : {matchData.details.spokenLnguage}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='Age'>Age : {matchData.details.age}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='Education'>Education : {matchData.details.education}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='User-Height'>Height : {matchData.details.height}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='Work-Dtails'>Work Details : {matchData.details.workDetails}</h1></label>
     
    </div>
    

    <div className="">
  
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='Religion'>Religion : {matchData.details.religion}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='Gender'>Gender : {matchData.details.gender}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='Town'>City/Town : {matchData.details.town}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='cast'>Cast : {matchData.details.cast}</h1></label>
      <label className="block bg-gray-200 p-0 rounded-lg label-set"><h1 className='weight'>Weight : {matchData.details.weight}</h1></label>
    </div>

  <div class="profile-body">
   <h1 className='body-head'>Choose Your Image</h1>
    <div className="profile-body-section">  
    {matchData.images.map((url, index) => (
        <img key={index} src={userImageBASE_URL+url} width="110" alt="openedCard" />
    ))}
    
    <button className='add-btn' onClick={handleButtonClick}>
    <FiPlus className='plus-btn' />
    <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
    </button>
    </div>
  </div>


   </div>
</div>  

      {/* ############################# gihan #####################################  */}
</div>
            )}

           
            <ConfirmationDialog open={openDialog}  onClose={handleCancel} />

            {(editPanel === true) && (
                <div className='openedCardOverlay' onClick={closeCard}></div>
            )}
            {(editPanel === true) && (

                <div className='openedCardContainer'>
                 
                    <div className='profEdit'>
                   <div className='close-btn-container bg-gradient-to-tr from-amber-900 to-yellow-300'>
                   <button className='close-btn' onClick={closeCard}>
                   <CgClose />
                       </button>
                      
                   </div>
                      
                 
                    
                     <div className="w-861 h-645">
                      
      <h1 className="mb-2 text-center text-2xl font-bold bg-gray-200 rounded-xl p-2">Edit User Details</h1>
      {/* user details form */}
      <div >
      <div style={{width:'100%', display:'flex', justifyItems:'center'}}>
  <div className="RUserInfoDivCss">
    <div className="mb-4" style={{ width: '100%' }}>
      <label htmlFor="livingPlace" className="block text-gray-700 text-sm font-bold mb-2">
        Living Place
      </label>
      <select
        style={{ width: '100%' }}
        id="livingPlace"
        name="livingPlace"
        value={userInfo.livingPlace}
        onChange={(e) => {
          getCities(e.target.value);
          addToUserInfo('livingPlace', e.target.value);
        }}
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
      >
        <option value="">select --</option>
        {countryNames.map((countryName) => (
          <option key={countryName} value={countryName}>
            {countryName}
          </option>
        ))}
      </select>
    </div>
  </div>

  <div className="RUserInfoDivCss">
    <div className="mb-4" style={{ width: '100%' }}>
      <label htmlFor="religion" className="block text-gray-700 text-sm font-bold mb-2">
        Religion
      </label>
      <select
        style={{ width: '100%' }}
        id="religion"
        name="religion"
        value={userInfo.religion}
        onChange={(e) => {
          setCastAccordingToReligion(e.target.value);
          addToUserInfo('religion', e.target.value);
        }}
        className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
      >
        <option value="">select --</option>
        <option value="hindu">Hindu</option>
        <option value="christianity">Christianity</option>
        <option value="muslim">Muslim</option>
        <option value="muslim (malay)">Muslim (Malay)</option>
        <option value="atheist">Atheist</option>
        <option value="none">Not Following a Religion</option>
      </select>
    </div>
  </div>
</div>

        <div style={{width:'100%', display:'flex', justifyItems:'center'}}>
        <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="livingPlace" className="block text-gray-700 text-sm font-bold mb-2">
                    Born Country
                  </label>
                  <select
                    id="livingPlace"
                    name="livingPlace"
                    value={userInfo.bornCountry}
                    onChange={(e) => {addBornCountry(e.target.value); addToUserInfo('bornCountry', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    {countryNames.map((countryName) => (
                      <option key={countryName} value={countryName}>{countryName}</option>
                    
                    ))}
                  </select>
                </div>
          </div>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="livingPlace" className="block text-gray-700 text-sm font-bold mb-2">
                    How are you connecting with this country?
                  </label>
                  <select
                    id="livingPlace"
                    name="livingPlace"
                    value={userInfo.bornCountryConnection}
                    onChange={(e) => {addBornCountryConnection(e.target.value); addToUserInfo('bornCountryConnection', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    
                      <option value="My parents are from there">My parents are from there</option>
                      <option value="My grand parents are from there">My grand parents are from there</option>
                      <option value="My spouce is from there">My spouce is from there</option>
                    
                   
                  </select>
                </div>
          </div>
          </div>
        <div style={{width:'100%', display:'flex', justifyItems:'center'}}>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
                     Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={userInfo.gender}
                    onChange={(e) => {handleChange('gender', e.target.value); addToUserInfo('gender', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
          </div>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="spokenLnguage" className="block text-gray-700 text-sm font-bold mb-2">
                  Spoken Language
                  </label>
                  <select
                    id="spokenLnguage"
                    name="spokenLnguage"
                    value={userInfo.spokenLnguage}
                    onChange={(e) => {handleChange('spokenLnguage', e.target.value); addToUserInfo('spokenLnguage', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    <option value="tamil">Tamil</option>
                    <option value="english">English</option>
                    <option value="sinhala">Sinhala</option>
                  </select>
                </div>
          </div>
        </div>

        <div style={{width:'100%', display:'flex', justifyItems:'center'}}>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="town" className="block text-gray-700 text-sm font-bold mb-2">
                     City-Town
                  </label>
                  <select
                    id="town"
                    name="town"
                    value={userInfo.town}
                    onChange={(e) => {handleChange('town', e.target.value); addToUserInfo('town', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    {cities.map((cityName) => (
                      <option key={cityName} value={cityName}>{cityName}</option>
                    
                    ))}
                   
                  </select>
                </div>
          </div>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="pno" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone no
                  </label>
                  <input
                    type="number"
                    id="pno"
                    name="pno"
                    value={mobile}
                    placeholder="07X-XXXX-XXX"
                    onChange={(e) => {handleChange('pno', e.target.value); addToUserInfo('mobile', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
          </div>
        </div>

        <div style={{width:'100%', display:'flex', justifyItems:'center'}}>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => {handleChange('age', e.target.value); addToUserInfo('age', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
          </div>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="cast" className="block text-gray-700 text-sm font-bold mb-2">
                    Cast
                  </label>
                  <select
                    id="cast"
                    name="cast"
                    value={userInfo.cast}
                    onChange={(e) => {handleChange('cast', e.target.value); addToUserInfo('cast', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    {castList.map((cast) => (
                      <option key={cast} value={cast}>{cast}</option>
                    ))}
                  </select>
                </div>
          </div>
        </div>

        <div style={{width:'100%', display:'flex', justifyItems:'center'}}>
          <div className="RUserInfoDivCss">
          <div className="mb-2">
                  <label htmlFor="education" className="block text-gray-700 text-sm font-bold mb-2">
                    Education
                  </label>
                  <select
                    id="education"
                    name="education"
                    value={userInfo.education}
                    onChange={(e) => {handleChange('education', e.target.value); addToUserInfo('education', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    <option value="o/l">O/L</option>
                    <option value="a/l">A/L</option>
                    <option value="bachelor">Diploma</option>
                    <option value="bachelor">Higher Diploma</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="msc">MSc</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
          </div>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="workDetails" className="block text-gray-700 text-sm font-bold mb-2">
                    Work Details
                  </label>
                  <textarea
                    id="workDetails"
                    name="workDetails"
                    value={userInfo.workDetails}
                    onChange={(e) => {handleChange('workDetails', e.target.value); addToUserInfo('workDetails', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  ></textarea>
                </div>
          </div>
        </div>

        <div style={{width:'100%', display:'flex', justifyItems:'center'}}>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">
                    Height in ft
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={userInfo.height}
                    onChange={(e) => {handleChange('height', e.target.value); addToUserInfo('height', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
          </div>
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">
                    Weight
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={userInfo.weight}
                    onChange={(e) => {handleChange('weight', e.target.value); addToUserInfo('weight', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
          </div>
        </div>
      </div>
      <div >
                     <div className='save-btn-container bg-gradient-to-tr  from-amber-900 to-yellow-300 '>
                     <span className='Span-style'><FaSave /></span>
                      <button className='save-btn'>             
                      <span className='Save'>Save</span>
                      
                      </button>
                    </div>
                     </div>
                     </div>
                     
                     
                     
                     
                     
                    </div>
                    
                </div>
            )}


            <Footer />

        </div>
    )
}

export default ProfilePage