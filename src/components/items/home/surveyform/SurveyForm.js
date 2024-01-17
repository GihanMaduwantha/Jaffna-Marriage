import React, { useState } from 'react';
import './SurveyForm.css';
import {Button, FormControl, InputLabel, Input, Select, MenuItem,Radio, RadioGroup, FormControlLabel, TextField,} from '@mui/material';


function SurveyForm() {


    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    // const handleSurveySubmit = () => {
      
    //   console.log('Selected option:', selectedOption);
    // };

    return(
<div className='SurveyContainer'>
        <div className='survey-Q'>
            <h1 >How did you hear about JaffnaMarriage.com?</h1>
        </div>
        <RadioGroup
        aria-label="survey"
        name="survey"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <FormControlLabel value="online-advertisement" control={<Radio />} label="Online Advertisement" />
        <FormControlLabel value="social-media" control={<Radio />} label="Social Media" />
        <FormControlLabel value="word-of-mouth" control={<Radio />} label="Word of Mouth" />
        <FormControlLabel value="leaflets" control={<Radio />} label="Leaflets" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
        <div >

        </div>

</div>
    )
}

export default SurveyForm;