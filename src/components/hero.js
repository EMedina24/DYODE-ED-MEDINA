import * as React from "react"
import PropTypes from "prop-types"
import SwiperCore, {
    Pagination
  } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Pagination]);


const Hero= () => {


return(
  <>
 <Swiper
      pagination={true}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src= "https://dummyimage.com/1400x638/000/fff"/></SwiperSlide>
      <SwiperSlide><img src= "https://dummyimage.com/1400x638/000/fff"/></SwiperSlide>
      <SwiperSlide><img src= "https://dummyimage.com/1400x638/000/fff"/></SwiperSlide>
      <SwiperSlide><img src= "https://dummyimage.com/1400x638/000/fff"/></SwiperSlide>
     
    </Swiper>
</>

);




}
 




Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
