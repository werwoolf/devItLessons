import React from 'react';
import styles from './weHelp.module.scss';

const WeHelp = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container1}>

                <div className={styles.leftBlock}>
                    <div className={styles.descript}>
                        We help clients take their<br/>
                        online business to the next<br/>
                        level
                    </div>

                    <div className={styles.section1}>
                        <div>7</div>
                        <div>Years expertise</div>
                    </div>
                    <div className={styles.section2}>
                        <div>Great applications with striking features</div>
                        <div>Solving customers everyday challenges and help them grow their business</div>
                    </div>

                </div>
                <div className={styles.gadjetImage}></div>
            </div>
        </div>
    );
};

export default WeHelp;