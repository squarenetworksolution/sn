// import React from 'react'

// import React, { Fragment } from "react";
import React, { Fragment, useState } from "react";

import "../../components/css/canon.css"

import { Helmet } from "react-helmet-async";
import canonr1 from "../../assets/Canon-EOS-R1.png";
import canonr5 from "../../assets/canon-EOS-R5-Mark-II.png";
import CanonR50 from "../../assets/Canon-EOS-R50-V.png";
import canonrp from "../../assets/canon-eos-rp.png";
import canonvideocamera from "../../assets/canonvideocamera.png";
import cameravideo from "../../assets/cameravideo.png"
import resale from "../../assets/Microsoft-Surface-Authorized-Reseller-in-India-surface-laptop.png";
import posterImg from "../../assets/hosur-cameras-hero.svg";
import canon from "../../assets/canon-showroom-hosur.mp4";
import newsurface from "../../assets/new-surface-laptop-resaller-group.png";
import mssurfacesquare from "../../assets/ms-laptop-squarentwork.png";
import canoncamera from "../../assets/canon-camera.svg";


const Canon = () => {




  const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
      
      <div style={{ borderBottom: "1px solid #ddd", padding: "15px 0" }}>
        <h3
        
          onClick={() => setOpen(!open)}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "16px",
            margin: 0,
          }}
        >
          {question}
          
          <span style={{ fontSize: "22px" }}>{open ? "−" : "+"}</span>
        </h3>

        {open && (
          <p style={{ marginTop: "10px", color: "#555", lineHeight: "1.6" }}>
            {answer}

          </p>
        )}
      </div>
    );
  };
  return (
    <Fragment>

      <>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.squarenet.in/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Microsoft Solutions",
                  item: "https://www.squarenet.in/microsoft-solutions",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Canon Authorized Reseller in Hosur | Square Network Solutions",
                  item: "https://www.squarenet.in/microsoft-surface-authorized-reseller-india",
                },
              ],
            })}
          </script>

          <title>
            Canon Authorized Reseller in Hosur | Square Network Solutions | Square Network
            Solutions
          </title>

          <meta
            name="description"
            content="Square Network Solutions Pvt Ltd is an authorized Microsoft Surface reseller in India offering Surface laptops, Surface Pro, Surface Hub, enterprise deployment and support."
          />

          <link
            rel="canonical"
            href="https://www.squarenet.in/microsoft-surface-authorized-reseller-india"
          />

          {/* FAQ Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Square Network Solutions an authorized Microsoft Surface reseller?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Square Network Solutions Pvt Ltd is officially listed on Microsoft’s website as an authorized Microsoft Surface Devices reseller in India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide Microsoft Surface Hub solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We provide Microsoft Surface Hub supply, installation, configuration, and meeting room integration services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you support bulk and enterprise Microsoft Surface orders?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We specialize in bulk procurement, enterprise deployment, device imaging, and lifecycle support for Microsoft Surface devices.",
                  },
                },
              ],
            })}
          </script>

          {/* Organization Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Square Network Solutions Pvt Ltd",
              "url": "https://www.squarenet.in/",
              "logo": "https://www.squarenet.in/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 98409 87432",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["English"]
              },

              "sameAs": [
                "https://www.linkedin.com/company/square-network-solutions"
              ]
            })}
          </script>

          {/* LocalBusiness Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Square Network Solutions",
              "image": "https://www.squarenet.in/logo.png",
              "url": "https://www.squarenet.in/",
              "telephone": "+91 98409 87432",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600032",
                "addressCountry": "IN"
              },

              "areaServed": [
                "Chennai",
                "Bangalore",
                "Hyderabad",
                "Coimbatore",
                "Kochi",
                "Trivandrum"
              ]

            })}
          </script>

        </Helmet>

        <Helmet>
          <title>
            Canon Authorized Reseller in Hosur | Square Network Solutions | Square Network
            Solutions
          </title>

          <meta
            name="description"
            content="Square Network Solutions Pvt Ltd is an authorized Microsoft Surface reseller in India offering Surface laptops, Surface Pro, Surface Hub, enterprise deployment and support."
          />

          <link
            rel="canonical"
            href="https://www.squarenet.in/microsoft-surface-authorized-reseller-india"
          />
        </Helmet>

        <div>
          <video
            className="plp-hero-media"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Microsoft Surface Authorized Reseller Reseller tamil nadu"
            title="Microsoft Surface Authorized Reseller tamil nadu"
            poster={posterImg}
          >
            <source src={canon} type="video/mp4" />
          </video>
        </div>
        <section className="container">
          <div className="row">
            <div
              className="col-md-6"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1> Canon Authorized Reseller in Hosur | Square Network Solutions</h1>

              <p>
                Looking for a trusted Canon authorized reseller in Tamil Nadu?
                Welcome to Square Network Solutions your reliable destination for Canon cameras, mirrorless systems, DSLR cameras, RF lenses, cinema cameras, professional video solutions, and accessories for creators, photographers, filmmakers, businesses, and enterprises.
              </p>

              <p>
                We provide the latest Canon imaging products with genuine warranty support, expert consultation, competitive pricing, and professional assistance across Tamil Nadu.
              </p>
              <p>
                Whether you are a content creator, YouTuber, wedding photographer, filmmaker, corporate studio, educational institution, or enterprise business, we help you choose the right Canon solution for your creative and professional needs.
              </p>
            </div>

            <div className="col-md-6">
              <img
                className=""
                src={canoncamera}
                alt="canon camera"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="card-wrapper">
                <div className="card-box">
                  <div className="card">
                    <div className="overlay">
                      <div className="profile-img">
                        <img
                          className=""
                          src={canonr1}
                          alt="Canon Authorized Reseller in Hosur | Square Network Solutions | Canon EOS R1"
                        />
                      </div>

                      <div className="card-body">
                        <h2>Canon EOS R1</h2>
                        <p>high speed action, including sports photography, wildlife photography, and professional photojournalism </p>
                      </div>
                      {/* 
<div className="social-icon">
<span><i className="fa-brands fa-facebook" /></span>
<span><i className="fa-brands fa-whatsapp" /></span>
<span><i className="fa-brands fa-linkedin" /></span>
<span><i className="fa-brands fa-instagram" /></span>
</div> */}

                      <div className="button-box">
                        <a href="tel:+919600007747" className="btn-wrap">
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card-wrapper">
                <div className="card-box">
                  <div className="card">
                    <div className="overlay">
                      <div className="profile-img">
                        <img
                          className=""
                          src={canonr5}
                          alt="Canon Authorized Reseller in Hosur | Square Network Solutions | Canon EOS R5 Mark II"
                        />
                      </div>

                      <div className="card-body">
                        <h2>Canon EOS R5 Mark II</h2>
                        <p>High-Speed Sports & Wildlife Photography, Professional Cinematography,Action Tracking (AI Autofocus)</p>
                      </div>


                      <div className="button-box">
                        <a href="tel:+919600007747" className="btn-wrap">
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card-wrapper">
                <div className="card-box">
                  <div className="card">
                    <div className="overlay">
                      <div className="profile-img">
                        <img
                          className="" s
                          src={CanonR50}
                          alt="Canon Authorized Reseller in Hosur | Square Network Solutions | CanonR50"
                        />
                      </div>

                      <div className="card-body">
                        <h2>Canon EOS R50</h2>
                        <p>content creation,vlogging, and casual photography, Travel and Lifestyle Photography</p>
                      </div>

                      {/* 
<div className="social-icon">
<span><i className="fa-brands fa-facebook" /></span>
<span><i className="fa-brands fa-whatsapp" /></span>
<span><i className="fa-brands fa-linkedin" /></span>
<span><i className="fa-brands fa-instagram" /></span>
</div> */}

                      <div className="button-box">
                        <a href="tel:+919600007747" className="btn-wrap">
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card-wrapper">
                <div className="card-box">
                  <div className="card">
                    <div className="overlay">
                      <div className="profile-img">
                        <img
                          className=""
                          src={canonrp}
                          alt="Canon Authorized Reseller in Hosur | Square Network Solutions"
                        />
                      </div>

                      <div className="card-body">
                        <h2>Canon EOS RP</h2>
                        <p>Travel and Portrait Photography, Vlogging and Content Creation, Entry Level Full Frame Transition</p>
                      </div>


                      {/* 
<div className="social-icon">
<span><i className="fa-brands fa-facebook" /></span>
<span><i className="fa-brands fa-whatsapp" /></span>
<span><i className="fa-brands fa-linkedin" /></span>
<span><i className="fa-brands fa-instagram" /></span>
</div> */}

                      <div className="button-box">
                        <a href="tel:+919600007747" className="btn-wrap">
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <img className="" style={{ borderRadius: "20px", }} src={canonvideocamera} alt="Canon Authorized Reseller in Hosur | Square Network Solutions" />

              </div>
              <div className="col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2>Canon Professional Video Cameras</h2>
                <ul>
                  <li>Square Network Solutions also provides Canon professional video cameras designed for</li>
                  <li>Live Streaming</li>
                  <li>Corporate Production</li>
                  <li>Broadcasting</li>
                  <li>Educational Studios</li>
                  <li>YouTube Production</li>
                  <li>Event Coverage</li>
                </ul>

              </div>
            </div>

            <div className="row">

              <div className="col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2>Why Choose Square Network Solutions for Canon Products?</h2>

                <ul>
                  <li><b>Authorized Canon Product Supplier in Tamil Nadu</b></li>
                  <li>Genuine Canon Cameras & Accessories</li>
                  <li>Expert Guidance for Photographers & Filmmakers</li>
                  <li>Enterprise & Business Imaging Solutions</li>
                  <li>Competitive Pricing & Bulk Orders</li>
                  <li>Support for Corporate, Studio & Educational Requirements</li>
                  <li>Fast Delivery Across Tamil Nadu</li>
                  <li>Professional Consultation for Camera Setup & Production Workflows</li>
                </ul>

              </div>


              <div className="col-md-6">
                <img className="" style={{ borderRadius: "20px", }} src={cameravideo} alt="Canon Authorized Reseller in Hosur | Square Network Solutions" />


              </div>

              <div className="col-md-6">

              </div>
            </div>

            <div className="row" style={{ margin: "30px 0" }}>

              <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
                Service Locations
              </h2>

              <p style={{ marginBottom: "24px" }}>
                We supply and support Canon across{" "}
                <strong>

                  Hosur, Chennai, Bangalore, Hyderabad, Coimbatore, Kochi, Trivandrum
                </strong>{" "}
                and other major cities in India.
              </p>




            </div>
          </div>

        </section>

        <section className="container">
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
            Frequently Asked Questions
          </h2>

          <FAQItem
            question="Is Square Network Solutions an authorized Canon reseller in Hosur?"
            answer="Yes, Square Network Solutions provides genuine Canon cameras, lenses, accessories, and professional imaging solutions with trusted support and assistance for customers in Hosur and Tamil Nadu."
          />

          <FAQItem
            question="What Canon products are available at Square Network Solutions?"
            answer="We offer a wide range of Canon products including ,Canon Mirrorless Cameras,Canon DSLR Cameras, Canon RF Lenses,Canon Cinema EOS Cameras, Professional Video Cameras,  "
          />

          <FAQItem
            question="Can I buy Canon mirrorless cameras in Hosur?"
            answer="Yes, you can purchase the latest Canon mirrorless cameras such as, Canon EOS R50, Canon EOS R6 Mark II, Canon EOS R7, Canon EOS R10, Canon EOS R100 through Square Network Solutions."
          />

          <FAQItem
            question="Does Square Network Solutions provide Canon RF lenses?"
            answer="Yes, we provide Canon RF lenses for photography, videography, wildlife, portraits, events, and filmmaking applications."
          />

          <FAQItem
            question="Do you offer Canon cameras for YouTube creators and vloggers?"
            answer="Yes. We help content creators, YouTubers, vloggers, and social media influencers choose suitable Canon creator cameras like the EOS R50 V and EOS R50."
          />

          <FAQItem
            question="Can businesses and studios purchase Canon cinema cameras from Square Network Solutions?"
            answer="Absolutely. We supply Canon Cinema EOS cameras and professional video equipment for
Film Production
OTT Content
Corporate Studios
Broadcasting
Commercial Shoots
Educational Media Labs"
          />

          <FAQItem
            question="Do you provide Canon accessories and batteries?"
            answer="Yes, we provide:
Original Canon Batteries
Chargers
Battery Grips
Mount Adapters
Camera Accessories
Compact Photo Printers"
          />

          <FAQItem
            question="Can I get help choosing the right Canon camera?"
            answer="Yes. Our team helps customers select the best Canon camera based on:
Budget
Photography Style
Video Requirements
Content Creation Needs
Professional Workflow"
          />

          <FAQItem
            question="Do you support bulk Canon camera orders for companies and institutions?"
            answer="Yes, we support bulk and enterprise orders for:
Colleges
Media Institutes
Studios
Corporate Teams
Event Companies
Production Houses"
          />

          <FAQItem
            question="Why choose Square Network Solutions for Canon products in Hosur?"
            answer="Customers choose us because we provide:

Genuine Canon Products
Professional Guidance
Competitive Pricing
Business Solutions
Reliable Customer Support
Latest Canon Product Availability"
          />

          <FAQItem
            question="Do you provide Canon professional video cameras?"
            answer="Yes, we offer professional Canon video cameras such as:

Canon XA70
Canon XA75
Canon XF605
Canon XA65

for streaming, events, and production environments."
          />

          <FAQItem
            question="How can I contact Square Network Solutions for Canon products in Hosur?"
            answer="Visit: Square Network Solutions

For product enquiries, business solutions, and Canon camera assistance, contact our team through the website."
          />


        </section>
      </>

    </Fragment>
  )
}

export default Canon
