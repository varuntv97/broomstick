import React, { useState } from "react";
import ReactModal from "react-modal";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { FaAngleRight } from "react-icons/fa6";

ReactModal.setAppElement("#___gatsby");

function HomeProductFeature2() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="productFeature_container">
        <div className="productFeature_wrapper">
          <div className="productFeature_left">
            <div className="productFeature_left__image">
              <StaticImage
                src="../../images/HomePage/productFeature2.png"
                alt="background image"
                style={{ height: "600px", width: "550px" }}
                objectFit={"contain"}
              ></StaticImage>
            </div>
          </div>
          <div className="productFeature_right">
            <div className="productFeature_right__title">
              <h1>
                This is not their vacuum cleaner <br /> This is our broomstick
              </h1>
            </div>
            <div className="productFeature_right__button">
              <button
                className={"button_dark button"}
                onClick={() => {
                  navigate("/pre-order");
                }}
              >
                <p>Pre Order</p>
              </button>
            </div>
            <div className="productFeature_right__paragraph">
              <h1>Bring a broomstick into your house today!</h1>
              <div className="ProductFeature_button">
                <button
                  className={"button_light button"}
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  <p>
                    Product Details
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                      }}
                    >
                      <FaAngleRight
                        style={{
                          scale: "1.5",
                          marginLeft: "10px",
                        }}
                      />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productFeature_form_wrapper">
        <div className="productFeature_form">
          <h1>Be updated about our journey & get exciting offers</h1>
          <input type="text" />
          <button
            className={"button_dark button"}
            onClick={() => {
              navigate("/404");
            }}
          >
            <p>Subscribe</p>
          </button>
        </div>
      </div>

      <ReactModal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={{
          overlay: {
            backgroundColor: `rgba(0,0,0,0.5)`,
            zIndex: "100",
          },
          content: {
            position: "absolute",
            left: "30%",
            height: "650px",
            width: "550px",
            backgroundColor: "#ebebeb",
            overflow: "hidden",
          },
        }}
      >
        <div className="modalFeatures">
          <h1>Product Details</h1>
          <ul>
            <li>
              <span>Run-time:</span> 45 minutes
            </li>
            <li>
              <span>Battery Capacity:</span> 2000mAh
            </li>
            <li>
              <span>Product Weight:</span> 2.5kg
            </li>
            <li>
              <span>Water tank Capacity:</span> 500ml
            </li>
            <li>
              <span>Mopping area coverage:</span> 1200 sq ft
            </li>
            <li>
              <span>Dust-box Capacity:</span> 300 ml
            </li>
            <li>
              <span>Cost:</span> Rs 3599/- Inc Taxes
            </li>
            <li>
              <span>Delivery:</span> 2-3 Working days
            </li>
            <li>
              <span>Warranty period:</span> 8 months
            </li>
          </ul>
        </div>
      </ReactModal>
    </>
  );
}

export default HomeProductFeature2;
