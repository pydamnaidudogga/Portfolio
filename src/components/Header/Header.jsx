import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import photo1 from '../light.mode.png';
import photo2 from '../photooo.blackkk.png';
import SocialMedia from '../socialNetwork/SocialMedia';
import Theam from './Theam';
import Tech from '../socialNetwork/Tech';
import './Header.css';
import Myresume from '../Pydamnaidu_Dogga_resume.pdf'
function Header() {



  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };





 
  const dark = 'Dark mode';
  const [background,setBackground] = useState(dark);
  const [photo,setPhoto] = useState(photo1);
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--background_color');
  const secondryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondry_color');

    const handleChange = (e)=>{
      let color =e.target.value;
      let arr = color.split('&');
        // console.log(arr);
      if(bgColor === 'black'){
        document.documentElement.style.setProperty('--my_photo_bgcolor','black');

      }else{
        document.documentElement.style.setProperty('--my_photo_bgcolor',arr[1]);

      }
      document.documentElement.style.setProperty('--primary_color', arr[0]);
      document.documentElement.style.setProperty('--secondry_color', arr[1]);
      

    }
    const backgroundHandler = (e)=>{
      if(background===dark){
        setBackground('Light mode');
        document.documentElement.style.setProperty('--background_color', 'black'); 
        document.documentElement.style.setProperty('--project_dataColor', '#e0e0e0');    

      }else{
        setBackground('Dark mode');
        document.documentElement.style.setProperty('--background_color', '#fce6ff');
        document.documentElement.style.setProperty('--project_dataColor', 'black');    

      }

    }
    useEffect(()=>{ 
      if(bgColor==='black'){
        console.log('black');
        setPhoto(photo2);
        document.documentElement.style.setProperty('--my_photo_bgcolor','black');    
      }else{
        console.log('white');
        setPhoto(photo1);
        document.documentElement.style.setProperty('--my_photo_bgcolor',secondryColor);      
      }
  
    },[secondryColor,bgColor])



  return (
    <section  id='home'>
      <Theam backgroundTheams={backgroundHandler} colors={handleChange} backgroundColor={background} />
      <div className='container' >
        <div className='info' >
          <div id='my_info'className='typed'>
            <h5 >WELCOME TO MY WORLD</h5>
            <h1>Hi, I'm <span >PYDAMNAIDU DOGGA</span> </h1>
            <h2>Fullstack WEB Developer</h2>
            <div className='buttons'>
              <a href={Myresume} download className='button'>DownloadCV</a>
              <a rel='noreferrer'  href="https://wa.me/9133726921" target='_blank' className='button' >Let's Talk</a>
            </div>
            <div className='socialMedia' >
              < SocialMedia />
              < Tech />
            </div>
          </div>
        </div>
        <div className={`${pulsing ? "pulse" : ""} loadable photo`}
                 
            
        >
          <motion.img id='my_photo'   alt="my name" 

initial={{ height: "16rem", opacity: 0 }}
style={{ height: imageLoading ? "6rem" : "auto" }}
animate={{
  height: imageLoading ? "6rem" : "auto",
  opacity: imageLoading ? 0 : 1
}}
transition={
  ({ height: { delay: 0, duration: 0.4 } },
  { opacity: { delay: 0.5, duration: 0.4 } })
}
onLoad={imageLoaded}
width="100%"
src={photo}
  
          />
        </div>
      </div>
      <div className='my_discription' >
        <p style={{color:'gray'}}>
          Hi There I'm Pydamnaidu Dogga. A Full Stack <span>Web Developer</span>  having specialization in backed & front end development.I'm a fresher but I had made lot of frontend & backed based projects.I have skills on NodeJs, Data Structures, OOPS, Problem Solving, Java, HTML, CSS,
          JavaScript, Express, Mongoose, passportjs-auth, APIs,
          Git, Linux.
        </p>
      </div>
        
    </section>
  )
}

export default Header
