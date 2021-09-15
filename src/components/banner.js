import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Banner = ({banner}) => {
console.log(banner)

return(
  <>

<div className="w-full  relative ">
        <img className="w-full" src= {banner[0].node.bannerPic.url}/>
        <div className=" pb-10 h-full bg-gray-200 sm:bg-transparent text-white w-full m-auto sm:mt-40 sm:w-auto sm:m-20 text-center sm:absolute z-30 sm:top-0 sm:right-80  top-0 ">
        <h1 className="sm:m-5 m-auto" >{banner[0].node.bannerHeader}</h1>
        <h2 className="sm:m-5 m-auto " >{banner[0].node.bannerSubHeader}</h2>
        <button className="  ctaButton mt-10 sm:mt-0 sm:m-5 m-auto">{banner[0].node.cta}</button>
        </div>
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