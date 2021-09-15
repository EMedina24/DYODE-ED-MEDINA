import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabFace,faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {


return(
  <>

<section class=" DyodeGreen text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Sign Up & Stay Connected</h1>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full text-white">
        <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
      </div>
      <div class="relative flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-white">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white border-white DyodeGreen border-2 py-2 px-8 focus:outline-none  text-lg">Subscribe</button>
    </div>
  </div>
</section>




<footer class="text-gray-600 body-font bg-black">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-left md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <h1 class="ml-3 text-xl text-white">Follow-Us</h1>
      </a>
      <div className="flex">
      <a className="text-white p-5"><FontAwesomeIcon  icon={faFacebookSquare}/></a>
      <a  className="text-white p-5"><FontAwesomeIcon  icon={faInstagram}/></a>
      <a className="text-white p-5"><FontAwesomeIcon  icon={faTwitter}/></a>
      </div>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 sm:text-left text-left order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white  tracking-widest text-sm mb-3">Customer Service</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white  hover:text-gray-800">Accessibility</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Contact Use</a>
          </li>
          <li>
            <a class="text-white  hover:text-gray-800"> Return Policy</a>
          </li>
          <li>
            <a class="text-white  hover:text-gray-800">FAQ</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Company</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">About Us</a>
          </li>
          <li>
            <a class="text-white  hover:text-gray-800">Careers</a>
          </li>
          <li>
            <a class="text-white  hover:text-gray-800">Press</a>
          </li>
          <li>
            <a class="text-white  hover:text-gray-800">Affiliates</a>
          </li>
        </nav>
      </div>
     
     
    </div>
  </div>

</footer>
  

</>

);




}
 




export default Footer 
