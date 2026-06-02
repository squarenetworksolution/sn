import React, { Fragment, useState, useEffect } from "react";
import "../../components/css/canon.css";
import { Helmet } from "react-helmet-async";

// Product Images
import canonr1 from "../../assets/Canon-EOS-R1.png";
import canonr5 from "../../assets/canon-EOS-R5-Mark-II.png";
import CanonR50 from "../../assets/Canon-EOS-R50-V.png";
import canonrp from "../../assets/canon-eos-rp.png";
import canonvideocamera from "../../assets/canonvideocamera.png";

// Change SVG to PNG if SVG not loading properly
import canoncamera from "../../assets/canon-camera.png";

import posterImg from "../../assets/microsoft-surface-authorized-reseller-tamilnadu-square-network.avif";
import canon from "../../assets/canon-showroom-hosur.mp4";

// Slider Images
import img1 from "../../assets/slide--camera(1).svg";
import img2 from "../../assets/slide--camera(2).svg";
import img3 from "../../assets/slide--camera(3).svg";
import img4 from "../../assets/slide--camera(4).svg";
import img5 from "../../assets/slide--camera(5).svg";

const sliderImages = [img1, img2, img3, img4, img5];

// FAQ Component
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid #ddd",
        padding: "15px 0",
      }}
    >
      <h3
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "18px",
          margin: 0,
        }}
      >
        {question}
        <span>{open ? "−" : "+"}</span>
      </h3>

      {open && (
        <p
          style={{
            marginTop: "10px",
            color: "#555",
            lineHeight: "1.7",
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
};

const styles = {
  slideWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  slideContainer: {
    width: "600px",
    height: "450px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    background: "#fff",
  },

  imageContainer: {
    display: "flex",
    transition: "transform 1s ease-in-out",
  },

  sliderImage: {
    width: "600px",
    height: "450px",
    objectFit: "contain",
    flexShrink: 0,
    padding: "10px",
    background: "#fff",
  },

  buttonContainer: {
    position: "absolute",
    bottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  sliderButton: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  },
};

const Canon = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>
          Canon Authorized Reseller in Hosur | Square Network Solutions
        </title>

        <meta
          name="description"
          content="Square Network Solutions provides Canon cameras, RF lenses, cinema cameras and accessories in Hosur."
        />
      </Helmet>

      {/* Hero Video */}
      <div>
        <video
          className="plp-hero-media"
          autoPlay
          muted
          loop
          playsInline
          poster={posterImg}
          style={{
            // width: "100%",
            // maxHeight: "600px",
            objectFit: "cover",
          }}
        >
          <source src={canon} type="video/mp4" />
        </video>
      </div>

      <section className="container" style={{ padding: "50px 0" }}>
        {/* Banner */}
        <div className="row">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1>
              Canon Authorized Reseller in Hosur | Square Network Solutions
            </h1>

            <p>
              Looking for a trusted Canon authorized reseller in Tamil Nadu?
              Square Network Solutions provides Canon mirrorless cameras,
              professional video cameras, RF lenses, and creator solutions.
            </p>

            <p>
              We support photographers, filmmakers, YouTubers, studios,
              educational institutions, and enterprise customers.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src={canoncamera}
              alt="Canon Camera"
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Product Cards */}
        <div className="row" style={{ marginTop: "50px" }}>
          {[
            {
              img: canonr1,
              title: "Canon EOS R1",
              desc: "Professional sports and wildlife photography.",
            },
            {
              img: canonr5,
              title: "Canon EOS R5 Mark II",
              desc: "High-speed photography and cinematography.",
            },
            {
              img: CanonR50,
              title: "Canon EOS R50",
              desc: "Perfect for creators and vloggers.",
            },
            {
              img: canonrp,
              title: "Canon EOS RP",
              desc: "Entry-level full frame mirrorless camera.",
            },
          ].map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "20px",
                  marginBottom: "30px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "contain",
                  }}
                />

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <a
                  href="tel:+919600007747"
                  style={{
                    background: "#000",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Camera Section */}
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <img
              src={canonvideocamera}
              alt="Canon Video Camera"
              style={{
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </div>

          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>Canon Professional Video Cameras</h2>

            <ul>
              <li>Live Streaming</li>
              <li>Corporate Production</li>
              <li>Broadcasting</li>
              <li>YouTube Studios</li>
              <li>Educational Media Labs</li>
            </ul>
          </div>
        </div>

        {/* Slider */}
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-md-12">
            <div style={styles.slideWrapper}>
              <div style={styles.slideContainer}>
                <div
                  style={{
                    ...styles.imageContainer,
                    transform: `translateX(-${currentSlide * 600}px)`,
                  }}
                >
                  {sliderImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`slide-${index}`}
                      style={styles.sliderImage}
                    />
                  ))}
                </div>

                <div style={styles.buttonContainer}>
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      style={{
                        ...styles.sliderButton,
                        backgroundColor:
                          currentSlide === index
                            ? "#000"
                            : "rgba(0,0,0,0.3)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="container"
        style={{
          paddingBottom: "80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Frequently Asked Questions
        </h2>

        <FAQItem
          question="Is Square Network Solutions an authorized Canon reseller?"
          answer="Yes. We provide genuine Canon cameras, RF lenses, cinema cameras and accessories."
        />

        <FAQItem
          question="Do you provide Canon cameras for YouTubers?"
          answer="Yes. We help creators and vloggers choose suitable Canon cameras."
        />

        <FAQItem
          question="Do you support enterprise camera orders?"
          answer="Yes. We support bulk orders for studios, colleges and businesses."
        />

        <FAQItem
          question="Do you provide Canon RF lenses?"
          answer="Yes. We provide Canon RF lenses for photography and filmmaking."
        />
      </section>
    </Fragment>
  );
};

export default Canon;