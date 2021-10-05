import React from 'react';
import styles from './review.module.scss';
import Image from "next/image.js";
import stars from '../../public/images/Review/Star.png';
import arrow1 from '../../public/images/Review/Arrow1.png';
import arrow2 from '../../public/images/Review/Arrow2.png';
import review from "../../public/images/Review/Review.png";


const Review = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imagePeople}><Image src={review}/></div>

            <div className={styles.rightBlock}>
                <div className={styles.contentBlock}>
                    <div className={styles.quote}> ”</div>
                    <div className={styles.descript1}> Light o' lantern</div>
                    <div className={styles.descript2}> Very good staff, qualified and effective! Easy to use & the
                        application have lot of differents languages
                    </div>
                    <div className={styles.reviewStar}>
                        <div>Reviews</div>
                        <div style={{ height:38 ,width:290}} className={styles.stars}> <Image src={stars}/></div>
                        <div className={styles.arrows}>
                            <div style={{ height:18 ,width:50}}> <Image src={arrow2}/></div>
                            <div style={{ height:18 ,width:50}}> <Image src={arrow1}/></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>)
        ;
};

export default Review;