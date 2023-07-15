import React from 'react';
import CV from '../../Assets/Resume.pdf';
import styles from './Header.module.css';
const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={CV} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
