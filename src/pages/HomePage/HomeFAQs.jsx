import React from "react";
import Faq from "react-faq-component";
import { Link } from "gatsby";

function Faqs() {
  const data = {
    title: "FAQs",
    rows: [
      {
        title: "How does this sweep and mop combo product work?",
        content:
          "This product features an innovative design that allows you to sweep and mop simultaneously in one simple motion. The built-in mechanism efficiently collects dust and debris while mopping the floor, saving you time and effort.",
      },
      {
        title: "What types of surfaces can this product be used on?",
        content:
          "This product is suitable for a wide range of surfaces, including hardwood, tile, laminate, linoleum, and other hard floors. It's designed to adapt to different floor types for effective cleaning.",
      },
      {
        title: "Is the product cordless or does it require electricity?",
        content:
          "The product is completely cordless, making it incredibly convenient and easy to maneuver around your home. You won't have to worry about finding power outlets or tripping over cords during cleaning.",
      },
      {
        title: "What is the expected battery life of the product?",
        content:
          "The battery life may vary based on usage and settings, but on average, it can last approximately 45-50 minutes on a single charge.",
      },
      {
        title: "How long does it take to charge the product?",
        content:
          "To charge the battery from zero to full, it takes on average about 3-4 hours.",
      },
    ],
  };
  const styles = {
    rowContentTextSize: "16px",
    rowContentPaddingTop: "1em",
    rowContentPaddingBottom: "1em",
    rowContentPaddingLeft: "1em",
    rowContentPaddingRight: "1em",
  };

  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          padding: "3em",
        }}
      >
        <Faq data={data} styles={styles} />
        <div
          style={{
            marginTop: "1em",
          }}
        >
          <Link to="/faqs">More FAQs</Link>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
