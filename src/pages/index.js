import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from '../components/hero'
import Blocks from '../components/collectionBlocks' 
import ProdSlider from '../components/productCarousels'
import Banner from "../components/banner"
import SocialBlocks from "../components/social"



export const query = graphql`
query  {

  allGraphCmsNavigation {
    edges {
      node {
        linkTitle
      }
    }
  }

  allGraphCmsHomePageHero {
    edges {
      node {
        header
        subHeader
        heroImages {
          url
        }
        cta
        ctaLink
        fontColor {
          hex
        }
      }
    }
  }

 allGraphCmsCollection {
    edges {
      node {
        collectionImage {
          url
        }
        collectionTitle
      }
    }
  }


  allGraphCmsProduct {
    edges {
      node {
        productTitle
        productPrice
        productDescription
        productPic {
          url
        }
      }
    }
  }



  allGraphCmsSocialBlock {
    edges {
      node {
        socialPics {
          url
        }
      }
    }
  }


  allGraphCmsBranding {
    edges {
      node {
        logo {
          url
        }
      }
    }
  }

  allGraphCmsBanner {
    edges {
      node {
        bannerHeader
        bannerSubHeader
        cta
        ctaLink
        bannerPic {
          url
        }
      }
    }
  }


}

`;






const IndexPage = ({data}) => {

const navigation = data.allGraphCmsNavigation.edges;
const collections = data.allGraphCmsCollection.edges;
const heros = data.allGraphCmsHomePageHero.edges;
const products =data.allGraphCmsProduct.edges;
const socialPics = data.allGraphCmsSocialBlock.edges;
const logo = data. allGraphCmsBranding.edges;
const banner = data. allGraphCmsBanner.edges;

console.log( navigation)

  return(

  <Layout  logo={logo }navLinks = {navigation}>
    <Seo title="Home" />
     <Hero heros ={heros}/>
     <Blocks collections={collections}/>
     <ProdSlider products ={products}/>
     <Banner banner={banner}/>
     <SocialBlocks socialPics ={socialPics}/>
  </Layout>
);

}

export default IndexPage
