import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ReviewImage from '../../public/images/Review/Review.png'
import ReviewImage2 from '../../public/images/Review/Review2.png'
import ReviewImage3 from '../../public/images/Review/Review3.png'
import ReviewImage4 from '../../public/images/Review/Review4.png'
import SwiperCore, {Navigation} from 'swiper';
import Review from "./Review.js";


SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <Swiper
            navigation={true}
            slidesPerView={1}
            spaceBetween={5}
        >
            <SwiperSlide><Review image={ReviewImage}
                                 description={"Light o' lantern"}
                                 text={"Very good staff, qualified and effective! " +
                                 "Easy to use & the application have lot of differents languages"}/>
            </SwiperSlide>
            <SwiperSlide><Review image={ReviewImage2}
                                 description={"Natural Organic"}
                                 text={"They keep improving. Whenever needed I received " +
                                 "professional support."}/>
            </SwiperSlide>
            <SwiperSlide><Review image={ReviewImage3}
                                 description={"FORMA"}
                                 text={"Easy to integrate, clear navigation to keep you up to " +
                                 "date with what you still need to apps"}/>
            </SwiperSlide>
            <SwiperSlide><Review image={ReviewImage4}
                                 description={"Hinese mood"}
                                 text={"Finally, an app that really delivers. I like the overview " +
                                 "in the dashboard. Realy easy to see what needs to be fixed. "}/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;