import React from "react";
import Layout from "../layout/Layout";
import Contact from "./ContactUs/Contact";
import '../styles/pages/Contact/contact.scss'

function contactUs() {
  return (
    <>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}

export default contactUs;
