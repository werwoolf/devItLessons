import React, {useCallback, useState} from 'react';
import MobileSideBar from "../MobileSideBar/MobileSideBar.jsx";
import Image from "next/image.js";
import Logo from '../../public/images/Header/Logo.png';
import arrow from '../../public/images/Header/arrow.png';
import hamburger from '../../public/images/Header/mobile-hamburge.png';
import styles from './header.module.scss'

const Header = () => {
    const [styleMobile, setStyleMobile] = useState(styles.mobileSideBar)

    const toActiveMobileSideBar = useCallback(() => {
        const newStyle =
            styleMobile === styles.mobileSideBar ?
                styles.mobileSideBar_active
                : styles.mobileSideBar;
        setStyleMobile(newStyle)
    }, [styleMobile, setStyleMobile]);

    return (
        <header className={styles.container}>
            <div><Image src={Logo.src} alt='' width={300} height={34.23}/></div>
            <div className={styles.navigation}>
                <a href='#' className={styles.homeLink}>Home</a>
                <div className={styles.shopifyApps}>
                    <div className={styles.nameLink}>
                        <a href='#'> Shopify Apps</a>
                        <div style={{width: 17, height: 12}} className={styles.arrow}>
                            <Image src={arrow}/>
                        </div>
                    </div>

                    <div className={styles.dropDown}>
                        <a href='#'>React flow</a>
                        <a href='#'>ReChange</a>
                        <a href='#'>Extra Sell</a>
                        <a href='#'>All apps</a>
                    </div>
                </div>
                <a href='#' className={styles.GetAppNow}>Get app now</a>
                <button className={styles.hamburger} >
                    <div className={styleMobile}><MobileSideBar deActivate={toActiveMobileSideBar}/></div>
                    <div onClick={toActiveMobileSideBar}><Image src={hamburger}/></div>
                </button>
            </div>

        </header>
    );
};

export default Header;