import React from 'react';
import Image from "next/image.js";
import logo from '../../public/images/Header/Logo.png'
import cross from '../../public/images/mobileSideBar/cross.png'
import styles from './mobileSideBar.module.scss';

const MobileSideBar = ({deActivate}) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div><Image src={logo} width={192} height={28}/></div>
                <div onClick={deActivate} className={styles.cross}>
                    <Image src={cross}/>
                </div>
            </header>
            <nav className={styles.nav}>
            <div className={styles.navItem}>ReactFlow</div>
            <div className={styles.navItem}>ExtraSell</div>
            <div className={styles.navItem}>ReCharge</div>
            </nav>
            <a href='#' className={styles.allAppLink}>View all apps</a>
        </div>
    );
};

export default MobileSideBar;