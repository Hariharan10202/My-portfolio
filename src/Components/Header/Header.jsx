import React from 'react';
import CTA from './CTA';
import styles from './Header.module.css';
import ME from '../../Assets/kisspng-stock-photography-smile-happy-guy-5b2fe1f7f3aaf6.2905141715298646959981.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header id='home'>
      <div className={`container ${styles.header_container}`}>
        <h5>Hi, I'm</h5>
        <h1>Hariharan</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className={styles.scroll_down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
