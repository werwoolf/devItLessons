import React from 'react';
import Image from "next/image.js";
import styles from './findout.module.scss';
import click from '../../public/images/FindOut/icon click.png';
import circuits from "../../public/images/FindOut/findout.png";

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

                <div className={styles.mainCircuit}>
                    <div className={styles.click}>
                        <div>About us</div>
                        <div  className={styles.mouse}><Image src={click}/></div>
                    </div>
                </div>

                <div style={{width: 406, height: 360}} className={styles.circuits}><Image src={circuits}/></div>
            </div>
        </div>
    );
};

export default FindOut;