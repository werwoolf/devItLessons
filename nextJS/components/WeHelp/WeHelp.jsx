import React from 'react';
import styles from './weHelp.module.scss';
import Image from "next/image.js";
import gadjet from '../../public/images/WeHelp/image.png';
import man from '../../public/images/WeHelp/image2.png';
import people from "../../public/images/WeHelp/peopleImage.png";
import rocket from "../../public/images/WeHelp/rocketImage.png";

const WeHelp = () => {
    console.log(rocket)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container1}>

                <div className={styles.leftBlock}>
                    <div className={styles.descript}>
                        We help clients take their
                        online business to the next
                        level
                    </div>
                    <div className={styles.sectionContainer}>
                        <div className={styles.section1}>
                            <span className={styles.countYears}>7</span>
                            <div>Years expertise</div>
                        </div>
                        <div className={styles.section2}>
                            <div className={styles.descript1}>Great applications with striking features</div>
                            <div className={styles.descript2}>Solving customers everyday challenges and help them grow
                                their business
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.gadjetImage}><Image src={gadjet}/></div>
            </div>

            <div className={styles.container2}>

                <div className={styles.manImage}><Image src={man}/></div>
                <div className={styles.rightBlock}>

                    <div className={styles.section1}>
                        <div className={styles.descript1}>300+</div>
                        <div className={styles.descript2}>5 star reviews on Shopify</div>

                    </div>

                    <div className={styles.section2}>

                        <div className={styles.descript1}>Solutions for different e-business tasks+</div>
                        <div className={styles.descript2}>Our apps help solving multiple tasks for improving Shopify
                            online stores
                        </div>

                    </div>

                    <div className={styles.section3}>
                        <div><Image src={rocket}/></div>
                    </div>

                </div>
            </div>

            <div className={styles.container3}>
                <div className={styles.leftBlock}>
                    <div className={styles.section1}>
                        <div className={styles.primaryText}>5000+</div>
                        <div className={styles.descript}>Active Merchants</div>
                    </div>
                    <div className={styles.section2}>
                        <div className={styles.primaryText}>190+</div>
                        <div className={styles.descript}>Countries</div>
                    </div>
                    <div className={styles.section3}>
                        <div className={styles.descript1}>Boost sales with minimum efforts</div>
                        <div className={styles.descript2}>User-friendly design, simple navigation,
                            automated processes, and affordable prices
                        </div>
                    </div>

                </div>
                <div className={styles.peopleImage}>
                    <Image src={people}/>
                </div>
            </div>

        </div>
    );
};

export default WeHelp;