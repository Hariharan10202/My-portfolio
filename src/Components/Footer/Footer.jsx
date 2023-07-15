import React from 'react';
import styles from './Footer.module.css';
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
      <a href='#' className={styles.footer}>
        Hariharan
      </a>
      <ul className={styles.permalinks}>
        <a href='#'>Home</a>
        <a href='#About'>About</a>
        <a href='#Experience'>Experience</a>
        <a href='#services'>Services</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#testimonials'>Testimonials</a>
        <a href='#contact'>Contact</a>
      </ul>
      <div className={styles.footer_socials}>
        <a
          href='https://www.linkedin.com/in/hariharan-t-1447ba210/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
        <a href='https://github.com/Hariharan10202' target='_blank' rel='noreferrer'>
          <GoMarkGithub />
        </a>
        <a href='https://www.instagram.com/hariharan10202/' target='_blank' rel='noreferrer'>
          <GrInstagram />
        </a>
      </div>
      <div className={styles.footer_socials_copyright}>
        <small>&copy; Hariharan. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
