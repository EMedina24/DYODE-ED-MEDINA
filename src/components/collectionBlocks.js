import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Blocks = ({collections}) => {

console.log("collections",collections)
return(
  <>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

    {collections.map((collection) => (
      <div class="p-4 md:w-1/3 h-full">
        <div class=" bg-green-700 h-full  overflow-hidden">
          <img class="  sm:h-auto h-96 w-full object-cover object-center" src={collection.node.collectionImage.url} alt="blog"/>
          <div class=" flex p-6    justify-center">
            
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{collection.node.collectionTitle}</h1>
          
          </div>
        </div>
      </div>
     ))}
     
    </div>
  </div>
</section>

</>

);




}
 




Blocks.propTypes = {
  siteTitle: PropTypes.string,
}

Blocks.defaultProps = {
  siteTitle: ``,
}

export default Blocks