import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const SocialBlocks = ({ socialPics}) => {


return(
  <>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font  text-gray-900">Follow Us On Instagram</h1>
         </div>
    <div class="inline-flex sm:flex   ">
    {socialPics.map((social,index) => (
      <div  index={index } class={"sm:w-1/5 w-28 flex p-2 " + (index == "3"|| index=='4' ? " hidden sm:block":" block")   + (index== "2" ? " w-full" : " w-auto")}>
        <div class="h-full flex flex-col items-center text-center">
          <img  index={index }key={index}  class={"flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" + (index == "3"|| index=='4' ? " hidden sm:block":" block")   + (index== "2" ? " w-full" : " w-auto")} src={social.node.socialPics.url}/>
        </div>
      </div>
    ))}

    </div>
  </div>
</section>

</>

);




}
 





export default SocialBlocks