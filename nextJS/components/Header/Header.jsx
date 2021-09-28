import React from 'react';
import Logo from '../../public/images/Header/Logo.png'
import arrow from '../../public/images/Header/arrow.png'
import Image from "next/image.js";
import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <Image src={Logo.src} alt='' className={styles.logo} width={300} height={34.23}/>
            <div className={styles.navigation}>
                <a href='#' className={styles.homeLink}>Home</a>
                <a href='#' className={styles.shopifyApps}>
                   <div className={styles.nameLink}>Shopify Apps
                       <Image src={arrow.src} width={17} height={12} className={styles.arrow}/>
                   </div>

                    <div className={styles.dropDown}>
                        <a href='#' className={styles.selectLink}>React flow</a>
                        <a href='#'>ReChange</a>
                        <a href='#'>Extra Sell</a>
                        <a href='#'>All apps</a>
                    </div>
                </a>

                <a href='#' className={styles.GetAppNow}>Get app now</a>
            </div>
        </div>
    );
};

export default Header;