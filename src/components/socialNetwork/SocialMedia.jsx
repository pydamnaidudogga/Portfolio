import React from 'react';
import {FiLinkedin} from 'react-icons/fi';
import {FiFacebook} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';
function SocialMedia() {
  return (
    <div>
        <div className='Social'>
           <a rel="noreferrer" href="https://www.linkedin.com/in/dogga-pydamnaidu-998a65226/" target='_blank'><FiLinkedin /></a>
           <a rel="noreferrer" href="https://"><FiFacebook /></a>
           <a rel="noreferrer" href="https://www.instagram.com/pydamnaidu_dogga/" target='_blank'><FiInstagram /></a>
        </div>
        <span className='social_heading' >Social</span>
    </div>  
  )
}

export default SocialMedia;
