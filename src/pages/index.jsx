import * as React from "react"
import Layout from "../layout/Layout"
import HomeLanding from "./HomePage/HomeLanding"
import '../styles/pages/HomePage/HomePage.scss'

const IndexPage = () => {
  return (
    <Layout>
      <HomeLanding/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Broomstick</title>
