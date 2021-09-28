import React from 'react';
import styles from './helpCommerceBlock.module.scss';
import Image from "next/image.js";
import mouse from '../../public/images/HelpCommerceBlock/icon click.png'
import fone from '../../public/images/HelpCommerceBlock/icon call.png'


const HelpCommerceBlock = () => {
    return (
        <div className={styles.container}>
            <p className={styles.mainTextBlock}>We help e-commerce owners <br/>
                run Shopify their business <br/>
                easier
            </p>
            <p className={styles.textBlock}>There is a reason many Shopify sellers have given us a 5-star<br/>
                rating on the Shopify App Store. Because we help online store<br/> owners sell more on Shopify.</p>
            <div className={styles.mainImage}></div>
            <p className={styles.textBlock}>There is a reason many Shopify sellers have given us a 5-star<br/>
                rating on the Shopify App Store. Because we help online store<br/> owners sell more on Shopify.</p>

            <div className={styles.connectTypeBlock}>
                <pre className={styles.connectType}>Go to app    <Image src={mouse} height={28} width={54}/></pre>
                <pre className={styles.connectType}>Book a call   <Image src={fone} height={28} width={54}/></pre>
            </div>
        </div>
    );
};

export default HelpCommerceBlock;