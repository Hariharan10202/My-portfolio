import React from 'react';
import styles from './About.module.css';
import Image from '../../Assets/pexels-chloe-1043474.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineProject } from 'react-icons/ai';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`container ${styles.about_container}`}>
        <div className={styles.about_me}>
          <div className={styles.about_me_image}>
            <img src={Image} alt='' />
          </div>
        </div>
        <div className={styles.about_content}>
          <div className={styles.cards}>
            <article className={styles.card}>
              <FaAward className={styles.icons} />
              <h5>Experience</h5>
              <small>5 Months Working Experience</small>
            </article>

            <article className={styles.card}>
              <FiUsers className={styles.icons} />
              <h5>Clients</h5>
              <small>100+ Clients Worldwide</small>
            </article>

            <article className={styles.card}>
              <AiOutlineProject className={styles.icons} />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id dolorem beatae ab
            sed nostrum at quidem, incidunt voluptatem nam tenetur ipsam soluta, necessitatibus
            iusto repudiandae laboriosam dicta fugiat odit.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
