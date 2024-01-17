
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/items/home/Navbar';
import Homepage from './components/pages/Homepage';
import LoginPage from './components/items/home/LoginPage';
import RegisterPage from './components/items/home/RegisterPage';
import Aboutus from './components/pages/Aboutus';
import Privacy from './components/pages/Privacy';
import RefundsPrivacy from './components/pages/RefundPrivacy';
import Terms from './components/pages/Terms';
import Contactpage from './components/pages/Contactpage';
import RegProcesswrap from './components/items/home/RegProcesswrap';
import UserDashbord from './components/pages/userPanel/UserDashbord';
import ForgetPassword from './components/items/home/ForgetPassword';
import ExplorePage from './components/pages/ExplorePage';
import MatchDetailsPage from './components/pages/MatchDetailsPage';
import ProfilePage from './components/pages/profilepage/ProfilePage';
import Admin from './components/pages/Admin';
import ImagesUploader from './components/items/home/userImagesUploader';
import UserProfilePicUploader from './components/items/home/userProfilePicUploader';
import Preloader from '../src/components/preloader';
import web_banner_new from '../src/assests/home/web_banner_new.jpeg';
const imageUrls = [web_banner_new];

const App = () => {
  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loaderdisbled, setLoaderDisabled] = useState(false);
  const handleImagesLoaded = () => {
    setImagesLoaded(true);
    setTimeout(() => {
      setLoaderDisabled(true);
    }, 3000);
  };

  
  return (
    <Preloader images={imageUrls} onImagesLoaded={handleImagesLoaded}>
      {imagesLoaded &&(
            <Router> 
              {!loaderdisbled ?(
                <div className="centered-container" >
                <span className="loader"></span>
              </div>
              ):(
 <div  >
 <Navbar />
 <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/forget-password" element={<ForgetPassword />} />
  <Route path="/about" element={<Aboutus />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/refundsprivacy" element={<RefundsPrivacy />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/contact" element={<Contactpage />} />
  <Route path="/regiter-process" element={<RegProcesswrap />} />
  <Route path="/user-panel" element={<UserDashbord />} />
  <Route path="/browse" element={<ExplorePage />} />
  <Route path="/match/:id" element={<MatchDetailsPage />} />
  <Route path="/userProfile/:id" element={<ProfilePage />} />
  <Route path="/administration" element={<Admin />} />
  <Route path="/userImagesUploader" element={<ImagesUploader />} />
  <Route path="/userProfilePicUploader" element={<UserProfilePicUploader />} />
  
 </Routes>
 </div> 
              )}
                
      </Router>
      )}
    </Preloader>

  );
};

export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/items/home/Navbar";
// import Homepage from "./components/pages/Homepage";
// import LoginPage from './components/items/home/LoginPage';
// import RegisterPage from "./components/items/home/RegisterPage";
// import Aboutus from './components/pages/Aboutus';
// import Privacy from './components/pages/Privacy';
// import RefundsPrivacy from './components/pages/RefundPrivacy';
// import Terms from './components/pages/Terms';
// import Contactpage from "./components/pages/Contactpage";
// import RegProcesswrap from "./components/items/home/RegProcesswrap";
// import UserDashbord from "./components/pages/userPanel/UserDashbord";
// import ForgetPassword from "./components/items/home/ForgetPassword";
// import "./App.css";
// import ExplorePage from "./components/pages/ExplorePage";
// import MatchDetailsPage from "./components/pages/MatchDetailsPage";
// // import Footer from "./components/items/home/Footer";
// import ProfilePage from "./components/pages/ProfilePage";
// import Admin from "./components/pages/Admin";
// import ImagesUploader from "./components/items/home/userImagesUploader";
// import UserProfilePicUploade from "./components/items/home/userProfilePicUploader";
// import Preloader from './components/preloader'; 
// const App = () => {
//   return (
//     <Router>
//      <Navbar/>
//      {/* <Preloader/> */}
//      <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/forget-password" element={<ForgetPassword />} />
//         <Route path="/about" element={<Aboutus />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/refundsprivacy" element={<RefundsPrivacy />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/contact" element={<Contactpage />} />
//         <Route path="/regiter-process" element={<RegProcesswrap />} />
//         <Route path="/user-panel" element={<UserDashbord />} />
//         <Route path="/browse" element={<ExplorePage />} />
//         <Route path="/match/:id" element={<MatchDetailsPage />} />
//         <Route path="/userProfile/:id" element={<ProfilePage />} />
//         <Route path="/administration" element={<Admin />} />
//         <Route path="/userImagesUploader" element={<ImagesUploader />} />
//         <Route path="/userProfilePicUploader" element={<UserProfilePicUploade />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;