import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";





const Header = ({ siteTitle,navLinks,logo }) => {

  const [Open, setOpen] = React.useState(false);


function test(){
  console.log("opening")
}

return(
  <>
{ !isMobile||!BrowserView?(
 <>
<section class="  p-4 h-9 w-full sm:flex justify-center bg-black m-auto fixed z-50    ">
<p class="  font-bold text-xs text-white">FREE SHIPPING ON ALL ORDERS OVER $75</p>
</section>
<header class="text-gray-600 body-font DyodeGreen pt-5 sm:block hidden fixed z-40 w-full mt-5">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src={logo[0].node.logo.url}/>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    {navLinks.map((nav) => (
      <a class="mr-5 hover:text-gray-900 text-white" >{nav.node.linkTitle}</a>
    ))}
    </nav>
    <div className=" flex justify-center ">
      <a className="text-white p-5"><FontAwesomeIcon icon={ faSearch}/></a>
      <a  className="text-white p-5"><FontAwesomeIcon icon={ faShoppingCart}/></a>
      <a className="text-white p-5"><FontAwesomeIcon icon={ faUser}/></a>
    </div>
  </div>
</header>
</>
): null}


{ isMobile||MobileView?(
  <>
 
<nav class="DyodeGreen shadow dark:bg-gray-800 sm:hidden block fixed w-full z-40">
        <div class="container px-6 py-4 mx-auto mt-10">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex items-center justify-between">
                    <div class="flex md:hidden ">
                        <button onClick={() => setOpen(!Open)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <a class="flex title-font font-medium items-center ">
                     <img className="w-20" src={logo[0].node.logo.url}/>
                    </a>

                    <div className="flex ">
                    <a className="text-white p-2"><FontAwesomeIcon icon={ faSearch}/></a>
                    <a  className="text-white p-2"><FontAwesomeIcon icon={ faShoppingCart}/></a>
                    <a className="text-white p-2"><FontAwesomeIcon icon={ faUser}/></a>
                     </div>
                     </div>
                <div className={'flex-1 md:flex md:items-center md:justify-between hidden'+  (Open ? "block":" hidden" )}>
                    <div class="flex justify-center -mx-4 md:flex-row md:items-center md:mx-8">

                    {navLinks.map((nav) => (
                     <a class="mr-5 hover:text-gray-900 text-white" >{nav.node.linkTitle}</a>
                      ))}
                    </div>

                    <div class="flex items-center mt-4 md:mt-0">
                        <button class="hidden mx-4 text-gray-600 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </nav>

</>
): null}



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
