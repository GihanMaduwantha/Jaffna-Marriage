import React, { useState } from 'react';
import './PaymentDetails.css';
import {Button, FormControl, InputLabel, Input, Select, MenuItem,Radio, RadioGroup, FormControlLabel, TextField,} from '@mui/material';

function PaymentDetails() {

  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [selectedDuration, setSelectedDuration] = useState('monthly');
  const [promoCode, setPromoCode] = useState('');
  const [subtotal, setSubtotal] = useState(4999); // Default to basic monthly cost
  const [discountedSubtotal, setDiscountedSubtotal] = useState(null);
  const [promoCodeApplied, setPromoCodeApplied] = useState(false);

  // Card details state
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
    updateSubtotal(event.target.value, selectedDuration);
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
    updateSubtotal(selectedPlan, event.target.value);
  };

  const updateSubtotal = (plan, duration) => {
    const planCosts = {
      basic: 4999,
      silver: 7500,
      gold: 9500,
    };

    const durationMultiplier = {
      threemonths: 3,
      sixMonths: 6,
      annually: 12,
    };

    const newSubtotal = planCosts[plan] * durationMultiplier[duration];
    setSubtotal(newSubtotal);

    // Update discounted subtotal if promo code is applied
    if (promoCodeApplied) {
      applyPromoCode(newSubtotal);
    }
  };

  const handlePromoCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const applyPromoCode = (amount) => {
    // Assume the promo code gives a 10% discount
    const discountPercentage = 0.1;
    const discountAmount = amount * discountPercentage;
    const newDiscountedSubtotal = amount - discountAmount;
    setDiscountedSubtotal(newDiscountedSubtotal);
  };

  const handleApplyPromoCode = () => {
    if (promoCode) {
      applyPromoCode(subtotal);
      setPromoCodeApplied(true);
    }
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubscribe = () => {
    // Add logic to handle subscription and payment processing
    console.log('Subscription details:', {
      plan: selectedPlan,
      duration: selectedDuration,
      promoCode,
      subtotal: promoCodeApplied ? discountedSubtotal : subtotal,
      cardNumber,
      expiryDate,
      cvv,
    });
  };
    

    return (
      <div>
      <h2 className='label-ft'>Order Summary</h2>
      <div>
        <FormControl fullWidth >
          <label className='label-st'>Select Your Plan</label>
          <Select
            className='select-container'
            value={selectedPlan}
            onChange={handlePlanChange}
          >
            <MenuItem value="basic">Basic</MenuItem>
            <MenuItem value="silver">Silver</MenuItem>
            <MenuItem value="gold">Gold</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div>
        <FormControl component="fieldset">
          <label className='label-st'>Select Your Plan Time Duration</label>
          <RadioGroup
            className='radio-container'
            value={selectedDuration}
            onChange={handleDurationChange}
          >
            <FormControlLabel
              value="threemonths"
              control={<Radio />}
              label="3 Months"
            />
            <FormControlLabel
              value="sixMonths"
              control={<Radio />}
              label="6 Months"
            />
            <FormControlLabel
              value="annually"
              control={<Radio />}
              label="Annually"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className='details-container'>
        <h3 className='label-ft'>Billing Details</h3>
        <p className='label-st'>Billing Amount: {subtotal} LKR</p>
        <p>Total Amount: {promoCodeApplied ? discountedSubtotal : null} LKR</p>
      </div>

      <div className='promo-container'>
      <label className='label-st'>Promo Code</label>
        <FormControl>
          <TextField
            size='small'
            className='p-code'
            disableUnderline='true'
            type="text"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
        </FormControl>
        <button
          className='btn-app'
          onClick={handleApplyPromoCode}
        >
          Apply
        </button>
      </div>

      <div>

      <h3 className='label-ft'>Card Details</h3>
        <div className='card-detais-container'>
          <FormControl>
            <label className='label-st'>Card Number</label>
            <TextField
              size='small'
              disableUnderline='true'
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </FormControl>

          <FormControl>
            <label className='label-st'>Expiry Date (MM/YY)</label>
            <TextField
              size='small'
              type="text"
              disableUnderline='true'
              value={expiryDate}
              onChange={handleExpiryDateChange}
              
            />
          </FormControl>

          <FormControl>
            <label className='label-st'>CVV</label>
            <TextField 
            size='small'
            type="text"
            disableUnderline='true' 
            value={cvv} onChange={handleCVVChange} 
            />
          </FormControl>
        </div>
      </div>
<div>
<button className='btn-b' onClick={handleSubscribe}>Subscribe and Checkout</button>
</div>
      
    </div>

      
    

    
        );
}
export default PaymentDetails;