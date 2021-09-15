import * as React from "react"
import PropTypes from "prop-types"
import SwiperCore, {
    Pagination,
    Autoplay
  } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Pagination,Autoplay]);


const Hero= ({heros}) => {
console.log('heros',heros)

return(
  <>
 <Swiper
      pagination={true}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        "delay": 1500,
        "disableOnInteraction": false
      }}
    >
       {heros.map((hero) => (
      <SwiperSlide>
        <div className="w-full  relative ">
          
        <img className="heroImg" src= {hero.node.heroImages[0].url}/>

        <div className=" w-full m-auto mt-40 sm:w-auto sm:m-20 text-center absolute z-50 sm:top-48 sm:left-80  top-0 ">
        <h1 className="sm:m-5 m-auto" style={{color:`${hero.node.fontColor.hex}`}}>{hero.node.header}</h1>
        <h2 className="sm:m-5 m-auto " style={{color:`${hero.node.fontColor.hex}`}}>{hero.node.subHeader}</h2>
        <button className="  ctaButton mt-10 sm:mt-0 sm:m-5 m-auto">{hero.node.cta}</button>
        </div>
      
        </div>
      </SwiperSlide>
     
      ))}
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
