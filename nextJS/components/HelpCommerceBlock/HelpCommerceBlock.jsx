import React from 'react';
import styles from './helpCommerceBlock.module.scss';
import Image from "next/image.js";
import mouse from '../../public/images/HelpCommerceBlock/icon click.png';
import fone from '../../public/images/HelpCommerceBlock/icon call.png';
import mainImage from '../../public/images/HelpCommerceBlock/We help e-commerce.png';


const HelpCommerceBlock = () => {
    return (
        <div className={styles.container}>
            <p className={styles.mainTextBlock}>We help e-commerce owners
                run Shopify their business
                easier
            </p>
            <p className={styles.textBlock}>There is a reason many Shopify sellers have given us a 5-star<br/>
                rating on the Shopify App Store. Because we help online store<br/> owners sell more on Shopify.</p>
            <div className={styles.mainImage} ><Image src={mainImage}/></div>

            <div className={styles.connectTypeBlock}>
                <pre className={styles.connectType}>Go to app
                    <div style={{width: 30, height: 57}}> <Image
                    src={mouse}/></div></pre>

                <pre className={styles.connectType}>Book a call  <div style={{width: 43, height: 43}}> <Image
                    src={fone}/></div></pre>
            </div>
        </div>
    );
};

export default HelpCommerceBlock;