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

    {collections.map((collection,index) => (
      <div class={  " p-2 w-1/2 h-full" + (index=='2'?  " w-full sm:w-1/3":' sm:w-1/3')}>
        <div class=" DyodeGreen h-full  overflow-hidden">
          <img class="  sm:h-auto h-96 w-full object-cover object-center" src={collection.node.collectionImage.url} alt="blog"/>
          <div class=" flex p-4    justify-center">
            
            <h2 class="title-font text-lg font-medium text-white mb-3">{collection.node.collectionTitle}</h2>
          
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
 



export default Blocks