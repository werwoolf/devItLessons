import React from 'react';
import logo from '../../public/images/Header/Logo.png'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.section1}>
                <img src={logo.src} alt="" className={styles.logo}/>
                <div className={styles.descript}>
                    is premium e-commerce solutions come together
                    to optimize your Shopify store, save valuable
                    time and grow business faster.
                </div>
            </div>

            <div className={styles.section2}>
                <a href='#' className={styles.primary}>Home</a>
                <a href='#' className={styles.normal}>Status page</a>
                <a href='#' className={styles.normal}>About Us</a>
                <a href='#' className={styles.normal}>Contact us</a>
            </div>
            <div className={styles.section3}>
                <a href='#' className={styles.primary}>Support</a>
                <a href='#' className={styles.normal}>Help Center</a>
                <a href='#' className={styles.normal}>Privacy Policy</a>
                <a href='#' className={styles.normal}>Terms of Service</a>
            </div>


<div className={styles.rights}>Devit software © 2021. All rights reserved.</div>

        </div>
    );
};

export default Footer;