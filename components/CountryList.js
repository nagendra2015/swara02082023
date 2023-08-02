import optionsData from '/static/countries.json';
import React,{ useState } from 'react';

import Select from 'react-select';
import { Container } from 'react-bootstrap';



const CountryList=({onSelectValue})=> {

  const [selectedOption, setSelectedOption] = useState('');


  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelectValue(value);    
  };
  


  return (

<div> 

    <select   value={selectedOption} className="form-control" 
      
      onChange={handleSelectChange}
      >
       {optionsData.map((option, index) => (
         <option key={index}  value={option.code}>
            {option.name} 
         </option>
       ))}
     </select>




</div>


  );
}

export default CountryList;

