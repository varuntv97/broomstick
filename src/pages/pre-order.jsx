import React from "react";
import '../styles/pages/PreOrder/preOrder.scss'
import Layout from "../layout/Layout";
import PreOrderLanding from "./PreOrder/preOrderLanding";
export default function PreOrder(){
    return(
       <Layout>
        <PreOrderLanding></PreOrderLanding>
       </Layout>
    )
}