import * as React from "react"
import Layout from "../layout/Layout"
import HomeLanding from "./HomePage/HomeLanding"
import HomeProductFeature from "./HomePage/HomeProductFeature"
import '../styles/pages/HomePage/HomePage.scss'
import HomeProductSpotlight from "./HomePage/HomeProductSpotlight"
import HomeUntoldStory from "./HomePage/HomeUntoldStory"
import HomeProductFeature2 from "./HomePage/HomeProductFeature2"
import HomeBackedBy from "./HomePage/HomeBackedBy"
import Faqs from "./FAQs/Faqs"
import Collage from "./HomePage/Collage"

const IndexPage = () => {
  return (
    <Layout>
      <HomeLanding/>
      <HomeProductFeature/>
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
