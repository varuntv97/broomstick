import * as React from "react"
import Layout from "../layout/Layout"
import HomeLanding from "./HomePage/HomeLanding"
import HomeProductFeature from "./HomePage/HomeProductFeature"
import '../styles/pages/HomePage/HomePage.scss'
import HomeProductSpotlight from "./HomePage/HomeProductSpotlight"
import HomeUntoldStory from "./HomePage/HomeUntoldStory"
import HomeProductFeature2 from "./HomePage/HomeProductFeature2"
import HomeBackedBy from "./HomePage/HomeBackedBy"
import Faqs from "./HomePage/HomeFAQs"
import Collage from "./HomePage/Collage"
import HomeProductFeatures from "./HomePage/HomeProductFeatures"

const IndexPage = () => {
  return (
    <Layout>
      <HomeLanding/>
      <HomeProductFeatures></HomeProductFeatures>
      {/* <HomeProductFeature/> */}
      <HomeProductSpotlight/>
      <HomeUntoldStory/>
      <HomeProductFeature2/>
      <HomeBackedBy/>
      <Faqs/>
      <Collage/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Broomstick</title>
