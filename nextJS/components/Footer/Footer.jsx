import React from 'react';
import Image from "next/image.js";
import styles from './footer.module.scss'
import socialIcons from '../../public/images/Footer/Social Icons.png'


const Footer = () => {

    return (
        <footer className={styles.container}>

            <div className={styles.sectionContainer}>
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
                <div className={styles.socialMedia}>
                    <div className={styles.primary}>Social media</div>
                    <div><Image src={socialIcons}/></div>
                </div>
            </div>

            <div className={styles.rights}>Devit software © 2021. All rights reserved.</div>

        </footer>
    );
};

export default Footer;