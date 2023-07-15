import React from 'react';
import styles from './Portfolio.module.css';
import Image from '../../Assets/pexels-fauxels-3183153.jpg';
import { BsGithub } from 'react-icons/bs';
import '../../../node_modules/video-react/dist/video-react.css'; // import css

const Portfolio = () => {
  return (
    <section id='portfolio' className={styles.portfolio}>
      <h5>My Recent Work</h5>

      <h2>Portfolio</h2>
      <div className={`container ${styles.portfolio_container}`}>
        <article>
          <div className={styles.item}>
            <div className=''>
              <h3>Netflix Clone using MERN Stack</h3>
              <div className={styles.cta}>
                <a
                  href='https://github.com/Hariharan10202/Netflix-clone-'
                  rel='noreferrer'
                  target='_blank'
                  className='btn'
                >
                  GitHub <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Image} alt='' />
            </div>
            <div className=''>
              <h3>Social Media using MERN stack</h3>
              <div className={styles.cta}>
                <a
                  href='https://github.com/Hariharan10202/FB-simple-version'
                  rel='noreferrer'
                  target='_blank'
                  className='btn'
                >
                  GitHub <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Image} alt='' />
            </div>
            <div className=''>
              <h3>Event Organization</h3>
              <div className={styles.cta}>
                <a
                  href='https://github.com/Hariharan10202/Event-organization-'
                  rel='noreferrer'
                  target='_blank'
                  className='btn'
                >
                  GitHub <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </article>
        <article>
          <div className={styles.item}>
            <div className={styles.image}>
              <img src={Image} alt='' />
            </div>
            <div className=''>
              <h3>Face Detection</h3>
              <div className={styles.cta}>
                <a href='https://github.com' rel='noreferrer' target='_blank' className='btn'>
                  GitHub <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
