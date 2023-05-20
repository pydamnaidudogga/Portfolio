import React from 'react';
import { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import sscLogo from '../school.3d.name.png';
import interLogo from '../interr.3D.name.png';
import graduationLogo from '../graduate.3D.name1.png';
import './Education.css';
import { motion} from "framer-motion";
function Education() {
  //  const education = [
  //   {
  //     id:'1',
  //     course:'DEGREE',
  //     collengeName:'Sri Chanakya Degree College',
  //     stream:'BSC Computer Science',
  //     cgpa:'6.5',
  //     year:'2021',
  //     discription:' Going to university was the best way for me to get the qualifications and experience I needed to become a successful engineer, but I’ve realised that being a student is about so much more than the degree you get at the end. It’s about learning new things, making friends and figuring out who you are as an adult. A lot of the lessons I’ve learned outside of the classroom have been just as valuable as what I’ve learned about my subject.'

  //   },
  //   {
  //     id:'2',
  //     course:'INTERMEDIATE',
  //     collengeName:'Naraya Junior College',
  //     stream:'MPCS',
  //     cgpa:'9.0',
  //     year:'2018',
  //     discription:'There are college leaders, beauty kings, and queens and even at the workplace, you will always find there is a boss under every department. Decision-making and independence are some important aspects of the lives of human beings. Knowing what to do under different circumstances is important for an individual to be successful in life. The process of decision making at times may be challenging depending on the matter at hand, but a good decision maker always carries the day. As I progressed, there was a need to cope with pressure from fellow children and even teachers in some instances.'

  //   },
  //   {
  //     id:'3',
  //     course:'SSC',
  //     collengeName:'Z.P.H School',
  //     stream:'',
  //     cgpa:'9.3',
  //     year:'2016',
  //     discription:'School will always have an impact on a person. Weather that influence is positive or negative, school has the ability to influence the rest of ones life. It is not only a place where one will learn the Pythagorean Theorem, or what the power house of a cell is, or even how to spell onomatopoeia. It is a place where we learn about the types of people out there in the world are, where we learn that everyone has their own story to tell, and where we learn the power of choice.'

  //   }
  //  ]

    const [show, setShow] = useState('0');



    const cardVariants= {
      offscreen: {
        opacity: 0
      },
      onscreen: {
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.4
          
        }
      }
    };




  return (
    <section id='education'>
      <h1>Education</h1>
      <div
     
      id='education_container'>
        <motion.div   className='pop'
        
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        
        
        
        
        > 
          <motion.img src={sscLogo} id='image1' className='glass_effect' alt='ssc' variants={cardVariants} onClick={()=>{setShow(1)}} />
          {
            show===1?<div className='model' >
              <div className='education'>
                      <AiFillCloseCircle className='close' onClick={()=>{setShow(0)}} />
                     
                      <div className='content' >
                        <h3>SSC</h3>
                        <div className='education_data' >
                          <div>
                            <span><h4>Z.P.H School</h4> </span>
                          </div> 
                          <div>
                            <span><h4>CGPA : 9.3</h4></span>
                          </div>
                        </div>
                        <div className='date'  >
                          <span> <h4>2016</h4> </span>
                        </div>

                      </div>
                      <div className='year' >
                        <p>
                        School will always have an impact on a person. Weather that influence is positive or negative, school has the ability to influence the rest of ones life. It is not only a place where one will learn the Pythagorean Theorem, or what the power house of a cell is, or even how to spell onomatopoeia. It is a place where we learn about the types of people out there in the world are, where we learn that everyone has their own story to tell, and where we learn the power of choice.
                       
                        </p>          
                      </div>




            </div>
                    </div>:null
          }
        </motion.div>
        <motion.div   className='pop'
        
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }} 


        
        > 
          <motion.img src={interLogo} id='image2' alt='INTERMEDIATE' variants={cardVariants} className='glass_effect' onClick={()=>{setShow(2)}} />
          {
            show===2?<div className='model' >
            <div className='education' >
              
                      <AiFillCloseCircle className='close' onClick={()=>{setShow(0)}} />
                      <div className='content' >
                        <h3>INTERMEDIATE  </h3>
                        <div className='education_data' >
                          <div>
                            <span><h4>Naraya Junior College</h4> </span>
                          </div>
                          <div>
                            <span> <h4>MPCS</h4></span>
                          </div> 
                          <div>
                            <span><h4>CGPA : 9.0</h4></span>
                          </div>
                        </div>
                        <div className='date'  >
                          <span> <h4>2018</h4> </span>
                        </div>

                      </div>
                      <div className='year' >
                        <p>
                        There are college leaders, beauty kings, and queens and even at the workplace, you will always find there is a boss under every department. Decision-making and independence are some important aspects of the lives of human beings. Knowing what to do under different circumstances is important for an individual to be successful in life. The process of decision making at times may be challenging depending on the matter at hand, but a good decision maker always carries the day. As I progressed, there was a need to cope with pressure from fellow children and even teachers in some instances.
                       
                        </p>          
                      </div> 
              </div>       
                    </div>:null
          }
        </motion.div>
        <motion.div   className='pop'
        
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        
        > 
          <motion.img src={graduationLogo} id='image3' alt='GRADUATION' className='glass_effect' variants={cardVariants} onClick={()=>{setShow(3)}} />
          {
            show===3?<div className='model' >
            <div className='education' >
              <AiFillCloseCircle className='close' onClick={()=>{setShow(0)}} />

              <div className='content' >
                        <h3>DEGREE</h3>
                        <div className='education_data' >
                          <div>
                            <span><h4>Sri Chanakya Degree College</h4> </span>
                          </div>
                          <div>
                            <span> <h4>BSC</h4></span>
                          </div> 
                          <div>
                            <span> <h4>Computer science</h4></span>
                          </div>
                          <div>
                            <span><h4>CGPA : 6.5</h4></span>
                          </div>
                        </div>
                        <div className='date'  >
                          <span> <h4>2021</h4> </span>
                        </div>

                      </div>
                      <div className='year' >
                        <p>
                          Going to university was the best way for me to get the qualifications and experience I needed to become a successful engineer, but I’ve realised that being a student is about so much more than the degree you get at the end. It’s about learning new things, making friends and figuring out who you are as an adult. A lot of the lessons I’ve learned outside of the classroom have been just as valuable as what I’ve learned about my subject.
                       
                        </p>          
                      </div>
                      
              </div>
                    </div>:null
          }
        </motion.div>
                
      </div>
        
        
    </section>
  
  )
}

export default Education
