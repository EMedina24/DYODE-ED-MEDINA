import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const SocialBlocks = () => {


return(
  <>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
        </div>
      </div>
    </div>
  </div>
</section>

</>

);




}
 




SocialBlocks.propTypes = {
  siteTitle: PropTypes.string,
}

SocialBlocks.defaultProps = {
  siteTitle: ``,
}

export default SocialBlocks