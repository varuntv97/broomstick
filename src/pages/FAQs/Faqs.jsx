import React from "react";
import Faq from "react-faq-component";

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
      {
        title:
          "Can I use the product to clean up spills and stains on the floor?",
        content:
          "Yes, you can use the product to clean up small spills and stains on hard floors. However, for larger spills, we recommend blotting and cleaning them manually before using the sweep and mop combo for overall maintenance.",
      },
      {
        title: "How do I fill the water reservoir for mopping?",
        content:
          "Filling the water reservoir is simple. Just remove the designated compartment, fill it with water and your preferred cleaning solution, and then attach it back to the product. The built-in system will dispense the right amount of water for efficient mopping.",
      },
      {
        title: "Can I use my own cleaning solution with the product?",
        content:
          "Absolutely! You can use your preferred cleaning solution with our product. Just add 5 ml (or half cap) of Lizol or a similar cleaning solution for optimal performance.",
      },
      {
        title: "How do I clean the reusable mop pads?",
        content:
          "The mop pads are designed to be easily removable and machine washable. After use, detach the mop pad, rinse off any excess dirt, and toss it in the washing machine. Make sure to follow the care instructions provided for best results.",
      },
      {
        title: "How often should I replace the mop pads?",
        content:
          "The frequency of replacement depends on usage and maintenance. On average, the mop pads can last for several months with regular cleaning. We recommend replacing them when they show signs of wear or become less effective in cleaning. It is preferable to change mop pads every 6 months.",
      },
      {
        title: "Does the product come with any warranty or guarantee?",
        content:
          "Yes, we stand by the quality of our product. It comes with an 8-month warranty to cover any manufacturing defects.",
      },
      {
        title:
          "Where can I find replacement parts and accessories for the product?",
        content:
          "Please email us for replacement parts and accessories, and we'll arrange courier delivery. Thank you!",
      },
      {
        title: "Is the product suitable for commercial or heavy-duty use?",
        content:
          "For heavy-duty or commercial use, we recommend you stay tuned for our upcoming products.",
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
      </div>
    </div>
  );
}

export default Faqs;
