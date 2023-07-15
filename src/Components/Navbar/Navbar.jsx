import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Navbar = () => {
  const [active, setActive] = useState('#');
  return (
    <div className={styles.navbar}>
      <a
        href='#home'
        onClick={() => setActive('#')}
        className={active === '#' ? styles.active : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => setActive('#about')}
        className={active === '#about' ? styles.active : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? styles.active : ''}
      >
        <BiBook />
      </a>
      <a
        href='#services'
        onClick={() => setActive('#services')}
        className={active === '#services' ? styles.active : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? styles.active : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default Navbar;
