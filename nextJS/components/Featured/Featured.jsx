import React from 'react';
import Image from "next/image.js";
import {Swiper, SwiperSlide} from 'swiper/react';

import anna from "../../public/images/Featured/anna_ij_logo 1.png";
import lala from "../../public/images/Featured/lala logo.png";
import sneaker from "../../public/images/Featured/Sneaker world.png";
import cosyspeed from "../../public/images/Featured/Cosyspeed.png";
import arrowLeft from "../../public/images/Featured/mobile-chevron_major (1).png"

import arrowRight from "../../public/images/Featured/mobile-chevron_major.png"
import styles from './featured.module.scss';

const Featured = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.featuredBy}>Featured by</div>
            <div className={styles.container}>

                <div><Image src={anna}/></div>
                <div><Image src={lala}/></div>
                <div><Image src={sneaker}/></div>
                <div><Image src={cosyspeed}/></div>

            </div>

            <div className={styles.mobileSlider}>
                <div className='button-prev'><Image src={arrowLeft}  height={20}/></div>
                <Swiper navigation={{
                    prevEl: '.button-prev',
                    nextEl: '.button-next'
                }}
                        slidesPerView={1}
                        spaceBetween={5}>

                    <SwiperSlide>
                        <div><Image src={anna}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><Image src={lala}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><Image src={sneaker}/></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><Image src={cosyspeed}/></div>
                    </SwiperSlide>
                </Swiper>
                <div className='button-next'><Image src={arrowRight}  height={20}/></div>
            </div>
        </div>
    );
};

export default Featured;