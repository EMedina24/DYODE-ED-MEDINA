import * as React from "react"
import PropTypes from "prop-types"
import SwiperCore, {
    Navigation
  } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from 'swiper/react';




// install Swiper modules
SwiperCore.use([Navigation]);


const ProdSlider = ({ products}) => {
console.log("products",products)

return(
  <>

<div class="flex justify-center">
  <h1>New Arrivals</h1>
</div>

 <Swiper
      loop={true}
      spaceBetween={30}
      navigation={true}
      slidesPerView={2}
      breakpoints={{
        "640": {
          "slidesPerView": 2,
          
        },
        "768": {
          "slidesPerView": 3,
        
        },
        "1024": {
          "slidesPerView": 4,
          
        }
      }}
    >
       {products.map((product) => (
      <SwiperSlide>
      <div class="sm:w-full p-4 w-28">
        <a class="block relative h-full rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={product.node.productPic.url}/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-lg font-medium">{product.node.productTitle}</h2>
          <p class="text-gray-500 text-xs tracking-widest title-font mb-1">{product.node.productDescription}</p>
          
          <p class="mt-1">{product.node.productPrice}</p>
        </div>
      </div>
      </SwiperSlide>
         ))}
    </Swiper>

  


</>

);




}
 




ProdSlider.propTypes = {
  siteTitle: PropTypes.string,
}

ProdSlider.defaultProps = {
  siteTitle: ``,
}

export default ProdSlider
