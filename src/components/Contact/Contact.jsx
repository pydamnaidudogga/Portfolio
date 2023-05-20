import React from 'react';
import './Contact.css';
import{HiOutlineMail} from 'react-icons/hi';
import {RiWhatsappLine} from 'react-icons/ri';
import {FiInstagram} from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x7e5hia', 'template_2kz8u1n', form.current, 'YDT2kgvALw_nq3Plo')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
   




  return (
    <section id='contact'>
        <h5>
          Get in touch
        </h5>
        <h1>
          contact me
        </h1>

        < div id='contact_container' >
          <div id='contact_options'>
            <article className='contact_option'>
            
            <a href="mailto:paidam360@gmail.com" rel="noreferrer" target='_blank'><HiOutlineMail className='contact_option_icon' /></a>

            </article>
            <article className='contact_option'>
              
              <a href="https://wa.me/9133726921" rel="noreferrer" target='_blank'>< RiWhatsappLine className='contact_option_icon' /></a>

            </article>
            <article className='contact_option'>
              <a rel="noreferrer" href="https://www.instagram.com/pydamnaidu_dogga/" target='_blank'>< FiInstagram className='contact_option_icon' /></a>

            </article>
          </div>
          <form ref={form} onSubmit={sendEmail} > 

            <input type='text' name='name' placeholder='your Full Name' />
            <input type='email' name='email' placeholder='your Email' />
            <textarea rows={5} name='message' placeholder='Enter Your Message' ></textarea>
            <button type='submit'  >Submit</button>
        
          </form>

          

        </div>
        
      </section>
  )
}

export default Contact
