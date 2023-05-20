import React from 'react';
import './Theam.css';
function Theam(props) {
 
  return (
    <div id='theam' >
       
        <div id='background'>
          <span onClick={props.backgroundTheams}>{props.backgroundColor}</span>

        </div>
        <div id='select_option'>
        <select value='e' onChange={props.colors} >
            <option value='hi' hidden> colors</option>
            <option value='#4d4d4d&#ff004f' >folly</option>
            <option value='#4d4d4d&#17bebf' >Topaz</option>
            <option value='#ffb0ea&#bf1793' > Violet   </option>
            <option value='#d09bf8&#7d1ec5' >Purple </option>
            {/* <option value='hiiii' >green</option> */}
        </select>
        </div>
      
    </div>
  )
}

export default Theam
