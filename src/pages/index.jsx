import * as React from "react"
import Layout from "../layout/Layout"
import HomeLanding from "./HomePage/HomeLanding"
import '../styles/pages/HomePage/HomePage.scss'
import HomeProductSpotlight from "./HomePage/HomeProductSpotlight"
import HomeUntoldStory from "./HomePage/HomeUntoldStory"
import HomeProductFeature2 from "./HomePage/HomeProductFeature2"

const IndexPage = () => {
  return (
    <Layout>
      <HomeLanding/>
      <HomeProductSpotlight/>
      <HomeUntoldStory/>
      <HomeProductFeature2/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Broomstick</title>
