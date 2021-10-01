import React from 'react';
import styles from './findout.module.scss'
import click from '../../public/images/FindOut/icon click.png'

const FindOut = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.descript1}>
                    Find out more reasons to use our apps
                </div>
                <div className={styles.descript2}>
                    Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nulla consequat massa quis enim.
                </div>
            </div>

            <div className={styles.rightBlock}>
                <div className={styles.click}>
                    <div>About us</div>
                    <img src={click.src} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FindOut;