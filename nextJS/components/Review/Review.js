import React from 'react';
import styles from './review.module.scss';
import Image from "next/image.js";
import stars from '../../public/images/Review/Star.png';



const Review = ({image, description, text}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imagePeople}><Image src={image}/></div>

            <div className={styles.rightBlock}>
                <div className={styles.contentBlock}>
                    <div className={styles.quote}> ”</div>
                    <div className={styles.descript1}> {description}</div>
                    <div className={styles.descript2}> {text}
                    </div>
                    <div className={styles.reviewStar}>
                        <div>Reviews</div>
                        <div style={{ height:38 ,width:290}} className={styles.stars}> <Image src={stars}/></div>
                    </div>


                </div>
            </div>
        </div>)
        ;
};

export default Review;