import React from "react";
import AboutLanding from "./About/aboutLanding";
import '../styles/pages/About/about.scss'
import Layout from "../layout/Layout";
import AboutFoundingStory from "./About/aboutFoundingStory";
import AboutOurBackers from "./About/aboutOurBackers";
export default function About(){
    return(
        <>
        <Layout>
        <AboutLanding></AboutLanding>
        <AboutFoundingStory></AboutFoundingStory>
        <AboutOurBackers></AboutOurBackers>
        </Layout>
        </>
    )
}