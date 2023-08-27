import React from "react";
import AboutLanding from "./About/aboutLanding";
import '../styles/pages/About/about.scss'
import Layout from "../layout/Layout";
export default function About(){
    return(
        <>
        <Layout>
        <AboutLanding></AboutLanding>

        </Layout>
        </>
    )
}