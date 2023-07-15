import React from 'react';
import styles from './Header.module.css';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
const HeaderSocials = () => {
  return (
    <div className={styles.header_socials}>
      <a href='https://www.linkedin.com/in/hariharan-t-1447ba210/' target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/Hariharan10202' target='_blank' rel='noreferrer'>
        <GoMarkGithub />
      </a>
      <a href='https://www.instagram.com/hariharan10202/' target='_blank' rel='noreferrer'>
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
