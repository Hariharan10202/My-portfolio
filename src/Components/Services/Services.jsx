import React from 'react';
import Styles from './Services.module.css';
import { BsCheckLg } from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className={`container ${Styles.service_container}`}>
        <article className={Styles.services}>
          <div className={Styles.serviceHead}>
            <h3>UI/UX Designer</h3>
          </div>
          <div className={Styles.service_list}>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
          </div>
        </article>
        <article className={Styles.services}>
          <div className={Styles.serviceHead}>
            <h3>Development</h3>
          </div>
          <div className={Styles.service_list}>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
            <li>
              <BsCheckLg className={Styles.icons} />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, officia?</p>
            </li>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
