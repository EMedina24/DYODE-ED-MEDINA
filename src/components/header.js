import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle,navLinks,logo }) => {
console.log("logo",logo)

return(
  <>
<section class="  p-4 h-9 w-full sm:flex hidden  justify-center bg-black">
<p class="  font-bold text-xs text-white">FREE SHIPPING ON ALL ORDERS OVER $75</p>
</section>
<header class="text-gray-600 body-font bg-green-800 pt-5">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src={logo[0].node.logo.url}/>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    {navLinks.map((nav) => (
      <a class="mr-5 hover:text-gray-900 text-white" >{nav.node.linkTitle}</a>
    ))}
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

</>

);




}
 




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
