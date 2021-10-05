import React from 'react';
import styles from './featured.module.scss';
import Image from "next/image.js";
import anna from "../../public/images/Featured/anna_ij_logo 1.png";
import lala from "../../public/images/Featured/lala logo.png";
import sneaker from "../../public/images/Featured/Sneaker world.png";
import cosyspeed from"../../public/images/Featured/Cosyspeed.png";

const Featured = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.featuredBy}>Featured by</div>
            <div className={styles.container}>

                <div> <Image src={anna}/> </div>
                <div> <Image src={lala}/> </div>
                <div> <Image src={sneaker}/> </div>
                <div> <Image src={cosyspeed}/> </div>

            </div>

        </div>
    );
};

export default Featured;