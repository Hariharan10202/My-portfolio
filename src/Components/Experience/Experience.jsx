import React from 'react';
import styles from './Experience.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience' className={styles.experience}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className={`container ${styles.experience_container}`}>
        <div className={styles.programming}>
          <h3>Programming</h3>
          <div className={styles.content}>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>Java</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className={styles.frontend}>
          <h3>FrontEnd Development</h3>
          <div className={styles.content}>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className={styles.backend}>
          <h3>BackEnd Development</h3>
          <div className={styles.content}>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className={styles.details}>
              <BsPatchCheckFill className={styles.icon} />
              <div className=''>
                <h4>MySQL</h4>
                <small className='text-light'>Basics</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
