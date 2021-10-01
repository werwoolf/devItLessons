import React from 'react';
import styles from './review.module.scss'
import Image from "next/image.js";
import stars from '../../public/images/Review/Star.png'
import arrow1 from '../../public/images/Review/Arrow1.png'
import arrow2 from '../../public/images/Review/Arrow2.png'

const Review = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imagePeople}></div>

            <div className={styles.rightBlock}>
                <div className={styles.contentBlock}>
                    <div className={styles.quote}> ”</div>
                    <div className={styles.descript1}> Light o' lantern</div>
                    <div className={styles.descript2}> Very good staff, qualified and effective! Easy to use & the
                        application have lot of differents languages
                    </div>
                    <div className={styles.reviewStar}>
                        <div>Reviews</div>
                        <img src={stars.src} alt={''} height={38} width={290} className={styles.stars}/>
                    </div>

                    <div className={styles.arrows}>
                        <img src={arrow2.src} height={18} width={50} className={styles.stars}/>
                        <img src={arrow1.src} alt={''} height={18} width={50} className={styles.stars}/>
                    </div>
                </div>
            </div>
        </div>)
        ;
};

export default Review;