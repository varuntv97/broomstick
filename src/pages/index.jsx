import * as React from "react"
import Layout from "../layout/Layout"
import HomeLanding from "./HomePage/HomeLanding"
import '../styles/pages/HomePage/HomePage.scss'
import HomeProductSpotlight from "./HomePage/HomeProductSpotlight"

const IndexPage = () => {
  return (
    <Layout>
      <HomeLanding/>
      <HomeProductSpotlight/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Broomstick</title>
