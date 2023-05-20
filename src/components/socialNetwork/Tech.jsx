
import React from 'react';
import {FiGithub} from 'react-icons/fi';
import {SiLeetcode} from 'react-icons/si';
import {CgStudio} from 'react-icons/cg';

function Tech() {
  return (
    <div>
      <div className='Social' >
        <a rel="noreferrer" href="https://github.com/pydamnaidudogga" target='_blank' ><FiGithub /></a>
        <a rel="noreferrer" href="https://leetcode.com/Pydamnaidudogga/" target='_blank' ><SiLeetcode /></a>
        <a rel="noreferrer" href="https://www.codingninjas.com/codestudio/profile/c7637c34-4151-4704-aff4-553c9ed0e3a8" target='_blank' ><CgStudio /></a>
      </div>
      <span className='social_heading'>Tech</span>
    </div>
  )
}

export default Tech;