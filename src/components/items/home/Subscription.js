import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCheck  } from 'react-icons/fa';

const Subscription = ({ handleSelectedPlans }) => {
  const [selectedPlans, setSelectedPlans] = useState();

  const handleSelect = (plan) => {
    // Clear the selected plans array
    setSelectedPlans(plan);
  
    // Call the handleSelectedPlans function with the updated selectedPlans array
    handleSelectedPlans(plan);
  };
  
  

  return (
    <div className="w-861 h-645 mx-auto subscriptionscroller" >
      <h1 className="text-2xl text-center font-bold mb-4 bg-gray-200 rounded-xl p-2">
        Subscription Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 subscriptionCardMain">
  {/* Basic Plan */}
  <div className="bg-white text-black subscriptionCard rounded-lg shadow-lg border-solid border-orange-500 border-2 p-6 hover:bg-gradient-to-t from-orange-300 to-rose-300 hover:text-white ">
    <h3 className="text-xl font-bold mb-4">Basic Package</h3>
    <p className="mb-4"><b>Features -</b></p>


    <div className='basic-featureoptioin'>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Access to basic matrimonial profiles</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Limited daily profile views</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Basic search filters</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Email support</h1>
    </div>
    
    {/* <ul className="feature-list">
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <h1 className='each-feature'>Access to basic matrimonial profiles</h1>
  </li>
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <h1 className='each-feature'>Limited daily profile views</h1>
  </li>
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <h1 className='each-feature'>Basic search filters</h1>
  </li>
  <li>
  <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <h1 className='each-feature'>Email support</h1>
  </li>
</ul> */}

  <div className="subscriptionCardfooter"> 
  <h1 className="price-text">Price 4999 LKR/month</h1>
    <button
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
      onClick={() => handleSelect('Basic Package')}
      style={{
        background: selectedPlans === 'Basic Package' && 'silver' ,
        boxShadow: selectedPlans === 'Basic Package' ? '0 0 5px 2px white' : 'none' 
      }}
    >
    <b>Select Plan</b>  
    </button>
  </div>
  </div>

  {/* Standard Plan */}
  <div className=" silverSubscriptionCard text-black rounded-lg shadow-lg p-6 border-solid border-gray-700 border-2 hover:bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600 hover:text-white ">
    <h3 className="text-xl font-bold mb-4">Silver  Package </h3>
    <p className="mb-4"><b>Features -</b></p>
    

    <div className='basic-featureoptioin'>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Access to a wider range of matrimonial profiles</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Increased daily profile views</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Advanced search filters</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Priority email support</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Access to customer support hotline</h1>
    </div>
    {/* <ul class="feature-list">
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicMatrimonialProfiles">Access to a wider range of matrimonial profiles</label>
  </li>
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="limitedDailyProfileViews">Increased daily profile views</label>
  </li>
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicSearchFilters">Advanced search filters</label>
  </li>
  <li>
  <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicSearchFilters">Priority email support</label>
  </li>
  <li>
  <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicSearchFilters">Access to customer support hotline</label>
  </li>
</ul> */}

   <div class="subsilverscriptionCardfooter"> 
    <h1 className="price-text">Price 7500 LKR/month</h1>
    <button
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
      onClick={() => handleSelect('Silver Package')}
      style={{
        background: selectedPlans === 'Silver Package' && 'silver' ,
        boxShadow: selectedPlans === 'Silver Package' ? '0 0 5px 2px white' : 'none' 
      }}
    >
    <b>Select Plan</b>  
    </button>
    </div>
  </div>

  {/* Premium Plan */}
  <div className=" goldSubscriptionCard text-black  rounded-lg shadow-lg p-6 border-solid border-amber-500 border-2 hover:bg-gradient-to-b from-amber-900 to-yellow-300 hover:text-white">
    <h3 className="text-xl font-bold mb-4">Gold  Package </h3>
    <p className="mb-4"><b>Features -</b></p>

    <div className='basic-featureoptioin'>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Unlimited access to all matrimonial profiles</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Unlimited daily profile views</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Premium search filters</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>premium customer support</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Personalized matchmaking assistance</h1>
     <h1 className='each-feature'><span className='feature-icon'><FaCheck /></span>Verified and background-checked profiles</h1>
    </div>
    
    {/* <ul class="feature-list">
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicMatrimonialProfiles">Unlimited access to all matrimonial profiles</label>
  </li>
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="limitedDailyProfileViews">Unlimited daily profile views</label>
  </li>
  <li>
    <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicSearchFilters">Premium search filters</label>
  </li>
  <li>
  <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicSearchFilters">24/7 premium customer support</label>
  </li>
  <li>
  <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicSearchFilters">Personalized matchmaking assistance</label>
  </li>
  <li>
  <i class="fa fa-check orange-icon" aria-hidden="true"></i>
    <label for="basicSearchFilters">Verified and background-checked profiles</label>
  </li>
</ul> */}

   <div class="subgoldscriptionCardfooter"> 
    <h1 className="price-text">Price 9500 LKR/month</h1>
    <button
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
      onClick={() => handleSelect('Gold Package')}
      style={{
        background: selectedPlans === 'Gold Package' && 'silver' ,
        boxShadow: selectedPlans === 'Gold Package' ? '0 0 5px 2px white' : 'none' 
      }}
    >
    <b>Select Plan</b>  
    </button>
    </div>
  </div>

</div>

</div>
  );
};

export default Subscription;
