import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import ConfirmationDialog from './userProfilePicUploader';

function RUserInfo({ handleChange, values }) {
  const [countryNames ,setCountryNames] = useState([]);
  const [cities ,setCities] = useState([]);
  const [castList ,setCastList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const addToUserInfo = (key, value) => {

    //if key exists, update the value

    //if key does not exist, add the key and value
    setUserInfo({
      ...userInfo,
      [key]: value
    });

  }
  const handleCancel = () => {
    // Add your logic here to determine whether the dialog should be closed or not
    const shouldCloseDialog = true; // Set this to true or false based on your condition

    if (shouldCloseDialog) {
      setOpenDialog(false); // Close the dialog if shouldCloseDialog is true
    }
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
  "Syro Malabar",
  "Other"
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
  "Syed",
  "Other"
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

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  return (
    <div className="w-861 h-645">
      <h1 className="mb-2 text-center text-2xl font-bold bg-gray-200 rounded-xl p-2">User Details</h1>
      {/* user details form */}
      <div>
      <button onClick={handleOpenDialog}>Upload Photo Here...</button>
      <ConfirmationDialog open={openDialog} onClose={handleCancel} />
    </div>
      

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 full-detailcontainer">
        <div className="each-detailcontainer">
        <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="livingPlace" className="block text-gray-700 text-sm font-bold mb-2">
                    Living Country
                  </label>
                  <select
                    id="livingPlace"
                    name="livingPlace"
                    value={userInfo.livingPlace}
                    onChange={(e) => {getCities(e.target.value); addToUserInfo('livingPlace', e.target.value);}}
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
                  <label htmlFor="religion" className="block text-gray-700 text-sm font-bold mb-2">
                    Religion
                  </label>
                  <select
                    id="religion"
                    name="religion"
                    value={userInfo.religion}
                    onChange={(e) => {setCastAccordingToReligion(e.target.value); addToUserInfo('religion', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    <option value="hindu">Hindu</option>
                    <option value="christianity">Christianity</option>
                    <option value="muslim">Muslim</option>
                    <option value="atheist">Atheist</option>
                    <option value="none">Not Following a Religion</option>

                  </select>
                </div>
          </div>
        
       
        <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="livingPlace" className="block text-gray-700 text-sm font-bold mb-2">
                    Country (Born)
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
                    How are you connecting with Jaffna?
                  </label>
                  <select
                    id="livingPlace"
                    name="livingPlace"
                    value={userInfo.bornCountryConnection}
                    onChange={(e) => {addBornCountryConnection(e.target.value); addToUserInfo('bornCountryConnection', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    <option value="">select --</option>
                    
                      <option value="My parents are from there">I was born in Jaffna.</option>
                      <option value="My grand parents are from there">My father was  born  in Jaffna.</option>
                      <option value="My spouce is from there">My mother was born in Jaffna.</option>
                      <option value="My spouce is from there">Both my Parents are born in Jaffna.</option>
                      <option value="My spouce is from there">My Grandfather was born in Janna.</option>
                      <option value="My spouce is from there">My Grandmother was  Born  in Jaffna.</option>
                      <option value="My spouce is from there">Both My Grandparents are born in Jaffna.</option>
                      <option value="My spouce is from there">My great Grandparents are born in Jaffna.</option>
                      <option value="My spouce is from there">My Generation originated in Jaffna</option>
                    
                   
                  </select>
                </div>
          </div>
          
      
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
        

        <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="town" className="block text-gray-700 text-sm font-bold mb-2">
                  Province
                  </label>
                  <input
                    id="province"
                    name="province"
                    value={userInfo.province}
                    placeholder="Enter Here"
                    onChange={(e) => {handleChange('province', e.target.value); addToUserInfo('province', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                  </input>
                </div>
          </div>

        
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="town" className="block text-gray-700 text-sm font-bold mb-2">
                     City-Town
                  </label>
                  <input
                    id="town"
                    name="town"
                    placeholder="Enter Here"
                    value={userInfo.town}
                    onChange={(e) => {handleChange('town', e.target.value); addToUserInfo('town', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                  
                   
                  </input>
                </div>
          </div>
        </div>
          <div className="each-detailcontainer">
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="pno" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone no
                  </label>
                  <input
                    type="number"
                    id="pno"
                    name="pno"
                    value={userInfo.mobile}
                    placeholder="07X-XXXX-XXX"
                    onChange={(e) => {handleChange('pno', e.target.value); addToUserInfo('mobile', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
          </div>
        

       
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Enter Here"
                    value={userInfo.age}
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
        

        
          <div className="RUserInfoDivCss">
          <div className="mb-4">
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
                    <option value="phd">Other</option>
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
                    placeholder="Enter Here"
                    value={userInfo.workDetails}
                    onChange={(e) => {handleChange('workDetails', e.target.value); addToUserInfo('workDetails', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  ></textarea>
                </div>
          </div>
        

        
          <div className="RUserInfoDivCss">
          <div className="mb-4">
                  <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">
                    Height in ft
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    placeholder="Enter Here"
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
                    placeholder="Enter Here"
                    value={userInfo.weight}
                    onChange={(e) => {handleChange('weight', e.target.value); addToUserInfo('weight', e.target.value);}}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
          </div>
          </div>
          
        
      </div>
    </div>
  );
}

export default RUserInfo;
