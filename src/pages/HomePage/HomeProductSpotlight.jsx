import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function HomeProductSpotlight() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "HomePage" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);
  const spotlightList = [
    {
      img: "sweepEasy.png",
      title: "Sweep and Mop in one easy step",
      paragraph:
        "Saves time and effort, making your routine easy and efficient.",
    },
    {
      img: "lightWeight.png",
      title: "Lightweight & Cordless",
      paragraph:
        "Cleaning should not feel like a workout, and with broomstick it doesn't have to! Thanks to its weightlessness and portabililty",
    },
    {
      img: "flawless.png",
      title: "Flawless maneuverability",
      paragraph:
        "Being nimble and easy to handle, while producing a force of 20N means tough messes in every nook and corner are handled",
    },
    {
      img: "waterSupply.png",
      title: "Continuous fresh water supply",
      paragraph:
        "Built in water tank for cleaning with fresh water. No more pushing around dirty water like you do with a mop.",
    },
    {
      img: "noiseLessPerformance.png",
      title: "Noiseless Performance",
      paragraph:
        "It's even quieter than an electric toothbrush, guaranteeing a smooth and slick ear experience.",
    },
    {
      img: "compactStorage.png",
      title: "Compact storage",
      paragraph:
        "Designed with Indian houses in mind, our product is ingeniously designed to fit seamlessly into any space ensuring hassle free storage.",
    },
    {
      img: "lastingCharge.png",
      title: "Lasting Charge",
      paragraph:
        "Maximize the advantages of cleaning your Home with a broomstick, Enjoy up to 45 Minutes of continuous operation.",
    },
  ];
  return (
    <>
      <div className="spotLight_container">
        <div className="spotLight_wrapper">
          <h1>Product Spotlight</h1>
          <div className="spotLight_list">
            {spotlightList.map((item, index) => {
              const image = data.allFile.nodes.find(
                (node) => node.relativePath === `HomePage/${item.img}`
              );

              if (!image) return null;

              const imageData = getImage(image);

              return (
                <div className="spotLight_items" key={index}>
                  <div className="spotLight_item">
                    <div className="spotLight_item__left">
                      <GatsbyImage image={imageData} alt={item.title} />
                    </div>
                    <div className="spotLight_item__right">
                      <h1>{item.title}</h1>
                      <h4>{item.paragraph}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProductSpotlight;

// .parent {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-template-rows: repeat(4, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     }

//     .div1 { grid-area: 4 / 1 / 5 / 3; }
