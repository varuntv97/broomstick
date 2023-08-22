import * as React from "react"
import Layout from "../layout/Layout"
import HomeLanding from "./HomePage/HomeLanding"
import '../styles/pages/HomePage/HomePage.scss'
import HomeProductSpotlight from "./HomePage/HomeProductSpotlight"
import HomeUntoldStory from "./HomePage/HomeUntoldStory"

const IndexPage = () => {
  return (
    <Layout>
      <HomeLanding/>
      <HomeProductSpotlight/>
      <HomeUntoldStory/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Broomstick</title>
