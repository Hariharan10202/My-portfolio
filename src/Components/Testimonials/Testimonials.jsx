import React from 'react';
import styles from './Testimonials.module.css';
import Image from '../../Assets/pexels-andrea-piacquadio-774909.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials' className={styles.testimonials}>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className={`container ${styles.testimonials_container}`}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className={styles.testimonial}>
          <div className={styles.client_avatar}>
            <img src={Image} alt='' />
          </div>
          <h5>Andrea</h5>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam
            perspiciatis vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum
            neque corporis doloribus iste iusto molestias alias soluta nemo quasi tempore possimus
            ipsam itaque, ratione id excepturi placeat veritatis esse.
          </small>
        </SwiperSlide>
        <SwiperSlide className={styles.testimonial}>
          <div className={styles.client_avatar}>
            <img src={Image} alt='' />
          </div>
          <h5>Andrea</h5>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam
            perspiciatis vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            delectus cupiditate explicabo tempore, autem magni earum corporis quis error, ipsa
            recusandae porro ad eius deserunt praesentium repellat consequuntur inventore. Ex.
          </small>
        </SwiperSlide>
        <SwiperSlide className={styles.testimonial}>
          <div className={styles.client_avatar}>
            <img src={Image} alt='' />
          </div>
          <h5>Andrea</h5>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quibusdam
            perspiciatis vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quam
            facilis adipisci facere suscipit esse nemo id? Quod ea dicta temporibus quibusdam ab
            aperiam? Provident id fugiat mollitia sed perspiciatis?
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
