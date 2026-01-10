import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import resale from "../../assets/Microsoft-Surface-Authorized-Reseller-in-India-surface-laptop.png";
import l1 from "../../assets/lap-microsoft-surface-authorized-reseller-folding-laptop.png";
import l2 from "../../assets/lap-microsoft-surface-authorized-reseller-laptop.png";
import l3 from "../../assets/lap-microsoft-surface-authorized-reseller-pen-surface-laptop.png";
import l4 from "../../assets/lap-microsoft-surface-authorized-reseller-snapdragon.png";
import l5 from "../../assets/lap-microsoft-surface-authorized-reseller-tab.png";
import l6 from "../../assets/lap-microsoft-surface-authorized-reseller.png";
import l7 from "../../assets/new-lap-microsoft-surface-authorized-reseller-chennai.png";
import l8 from "../../assets/new-lap-microsoft-surface-authorized-reseller-guindy.png";
import l9 from "../../assets/new-lap-microsoft-surface-authorized-reseller-india.png";
import l10 from "../../assets/new-lap-microsoft-surface-authorized-reseller-online.png";
import l11 from "../../assets/new-lap-microsoft-surface-authorized-reseller-tamilnadu.png";

import posterImg from "../../assets/microsoft-surface-authorized-reseller-tamilnadu-square-network.avif";
import surfaceVideo from "../../assets/microsoft-surface-authorized-reseller-tamilnadu.mp4";
import newsurface from "../../assets/new-surface-laptop-resaller-group.png";
import mssurfacesquare from "../../assets/ms-laptop-squarentwork.png";

const MicrosoftSurfaceLaptopChennai = () => {
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
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Microsoft Surface Laptop in Chennai | Authorized Reseller – Square Network
        </title>

        <meta
          name="description"
          content="Buy Microsoft Surface Laptop in Chennai from authorized reseller Square Network Solutions. Enterprise sales, bulk pricing, deployment and support."
        />

        <link
          rel="canonical"
          href="https://www.squarenet.in/microsoft-surface-laptop-chennai"
        />

        {/* Breadcrumb Schema */}
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
                name: "Microsoft Surface Laptop in Chennai",
                item: "https://www.squarenet.in/microsoft-surface-laptop-chennai",
              },
            ],
          })}
        </script>

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
                  text: "Yes. Square Network Solutions Pvt Ltd is officially listed as an authorized Microsoft Surface Devices reseller in India.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support bulk enterprise Microsoft Surface orders?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We specialize in bulk procurement, enterprise deployment, and lifecycle support.",
                },
              },
              {
                "@type": "Question",
                name: "Which locations do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We serve Chennai, Bangalore, Hyderabad, Coimbatore, Kochi, Trivandrum, and other major cities in India.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* ================= HERO VIDEO ================= */}
      <div>
        <video
          className="plp-hero-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Microsoft Surface Laptop Authorized Reseller Chennai"
          title="Microsoft Surface Laptop for Business in Chennai"
          poster={posterImg}
        >
          <source src={surfaceVideo} type="video/mp4" />
        </video>
      </div>

      {/* ================= CONTENT ================= */}
      <section className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Microsoft Surface Laptop for Business in Chennai</h1>

            <p>
              Square Network Solutions Pvt Ltd is an officially authorized Microsoft
              Surface Devices reseller, delivering enterprise-grade Surface laptops
              across Chennai.
            </p>

            <p>
              We support IT companies, cloud teams, enterprises, educational
              institutions, and government organizations with bulk procurement,
              deployment, and post-sales support.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src={resale}
              alt="Microsoft Surface Laptop authorized reseller in Chennai"
            />
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="row">
          {[l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11].map((img, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div className="card-wrapper">
                <div className="card-box">
                  <div className="card">
                    <div className="overlay">
                      <div className="profile-img">
                        <img
                          src={img}
                          alt="Microsoft Surface Laptop for enterprise use in Chennai"
                        />
                      </div>

                      <div className="card-body">
                        <h2>Microsoft Surface</h2>
                        <p>Enterprise Business Model</p>
                      </div>

                      <div className="button-box">
                        <a href="tel:+919840987432" className="btn-wrap">
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BUSINESS SECTION ================= */}
        <div className="row">
          <div className="col-md-6">
            <img
              src={newsurface}
              style={{ borderRadius: "20px" }}
              alt="Microsoft Surface Laptop devices for enterprise customers"
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>Microsoft Surface Devices for Business & Enterprise</h2>
            <ul>
              <li>Surface Laptop for enterprise users</li>
              <li>Surface Pro for business professionals</li>
              <li>Surface Hub for meeting rooms</li>
              <li>Bulk procurement & deployment</li>
              <li>Intune & Autopilot integration</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>Why Choose Square Network Solutions</h2>
            <ul>
              <li>Official Microsoft authorized partner</li>
              <li>Enterprise IT infrastructure expertise</li>
              <li>End-to-end Surface lifecycle support</li>
              <li>Trusted by enterprises across South India</li>
            </ul>
          </div>

          <div className="col-md-6">
            <img
              src={mssurfacesquare}
              style={{ borderRadius: "20px" }}
              alt="Square Network Solutions Microsoft Surface enterprise partner"
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="container">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Frequently Asked Questions
        </h2>

        <FAQItem
          question="Is Square Network Solutions an authorized Microsoft Surface reseller?"
          answer="Yes. We are officially listed as an authorized Microsoft Surface Devices reseller in India."
        />

        <FAQItem
          question="Do you support bulk Microsoft Surface Laptop orders?"
          answer="Yes. We specialize in enterprise and bulk procurement across India."
        />

        <FAQItem
          question="Which cities do you serve?"
          answer="Chennai, Bangalore, Hyderabad, Coimbatore, Kochi, Trivandrum and more."
        />

        <FAQItem
          question="How can I get a quotation?"
          answer="Call us directly at +91 98409 87432 to receive a customized quotation."
        />
      </section>
    </>
  );
};

export default MicrosoftSurfaceLaptopChennai;
