import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from '../../images/banner-1.png'
import banner2 from '../../images/banner-2.jpg'
import banner3 from '../../images/banner-3.jpg'


const Slider = () => {
    
    return (
        <div>
                <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <img src={banner2} alt="product " />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={banner1} alt="product " />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={banner3} alt="product " />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={banner1} alt="product " />
                </SwiperSlide>

                </Swiper>
        </div>
    );
};

export default Slider;