import React from 'react';
import styles from './featured.module.scss';

const Featured = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.featuredBy}>Featured by</div>
            <div className={styles.container}>

                <div className={styles.brand1}> </div>
                <div className={styles.brand2}> </div>
                <div className={styles.brand3}> </div>
                <div className={styles.brand4}> </div>

            </div>

        </div>
    );
};

export default Featured;