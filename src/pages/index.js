import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from '../components/hero'
import Blocks from '../components/collectionBlocks' 
import ProdSlider from '../components/productCarousels'
import Banner from "../components/banner"
import SocialBlocks from "../components/social"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
     <Hero/>
     <Blocks/>
     <ProdSlider/>
     <Banner/>
     <SocialBlocks/>
  </Layout>
)

export default IndexPage
