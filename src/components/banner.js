import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Banner = () => {


return(
  <>

<div class="w-full">
    <img  class =" w-full"src="https://dummyimage.com/1400x400/000/fff" />
</div>


</>

);




}
 




Banner.propTypes = {
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
}

export default Banner