import React from 'react';
import styles from './Contact.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_unlykbi', 'template_wox7fkl', form.current, 'bMj829qKGgQKy6XF0').then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id='contact' className={styles.contact}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${styles.contact_container}`}>
        <div className={styles.contact_options}>
          <article className={styles.contact_option}>
            <MdOutlineEmail className={styles.icons} />
            <h4>Email</h4>
            <h5>hariharan10202@gmail.com</h5>
            <a href='mailto:hariharan10202@gmail.com'>Send Message</a>
          </article>
          <article className={styles.contact_option}>
            <ImWhatsapp className={styles.icons} />
            <h4>Whatsapp</h4>
            <h5>+91 936 070 9021</h5>
            <a href='https://api.whatsapp.com/send?phone=+919360709021'>Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Your Name' name='name' required />
          <input type='email' placeholder='Your Email' name='email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className={`btn btn-primary ${styles.send_btn}`}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
