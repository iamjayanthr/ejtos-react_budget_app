import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function Currency() {


  const { symbol,setSymbol } = useContext(AppContext);
  
  

  const handleSelect=(e)=>{
    setSymbol(e)
  }
  

  
  return (
  <div class="dropdown" >
     
     
     
     
      <DropdownButton 
      title={"Currency"+ symbol}     
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="($ Dollar)">$ Dollar</Dropdown.Item>
              <Dropdown.Item eventKey="(£ Pound)">£ Pound</Dropdown.Item>
              <Dropdown.Item eventKey="(€ Euro)">€ Euro</Dropdown.Item>
              <Dropdown.Item eventKey="(₹ Ruppee)">₹ Ruppee</Dropdown.Item>
      </DropdownButton>
      
      
      
      
  </div>
    );
}
export default Currency
