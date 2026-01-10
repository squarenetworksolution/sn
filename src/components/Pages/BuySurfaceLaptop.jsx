import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

// import heroImg from "../../assets/buy-surface-laptop-chennai.png";
import surfaceGroup from "../../assets/new-surface-laptop-resaller-group.png";

const BuySurfaceLaptop = () => {
  const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ borderBottom: "1px solid #e0e0e0", padding: "14px 0" }}>
        <h3
          onClick={() => setOpen(!open)}
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "16px",
            margin: 0,
          }}
        >
          
          {question}
          <span>{open ? "−" : "+"}</span>
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
        <title>Buy Surface Laptop for Business | Authorized Reseller India</title>

        <meta
          name="description"
          content="Buy Surface Laptop from authorized reseller Square Network Solutions. Enterprise pricing, bulk orders, deployment and support across India."
        />

        <link
          rel="canonical"
          href="https://www.squarenet.in/buy-surface-laptop"
        />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where can I buy Surface Laptop in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can buy Surface Laptop from Square Network Solutions, an authorized Microsoft Surface reseller providing enterprise sales across India.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support bulk Surface Laptop purchases?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We specialize in bulk and enterprise Surface Laptop procurement with deployment and support.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide after-sales support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide warranty coordination, deployment assistance, and enterprise support services.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="container" style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Buy Surface Laptop for Business & Enterprise</h1>

            <p>
              Square Network Solutions Pvt Ltd is an authorized reseller offering
              genuine Microsoft Surface Laptops for enterprises, IT companies,
              educational institutions, and government organizations.
            </p>

            <p>
              We support bulk Surface Laptop purchases, enterprise deployment,
              configuration, and post-sales support across India.
            </p>

            <div style={{ marginTop: "20px" }}>
              <a
                href="tel:+919840987432"
                className="btn-wrap"
                style={{ marginRight: "10px" }}
              >
                Call for Best Price
              </a>
              <a
                href="mailto:sales@squarenet.in"
                className="btn-wrap"
              >
                Get Quote
              </a>
            </div>
          </div>

          <div className="col-md-6">
            {/* <img               src={heroImg} alt="Buy Microsoft Surface Laptop from authorized reseller"
              style={{ width: "100%", borderRadius: "20px" }}
            /> */}
          </div>
        </div>
      </section>

      {/* ================= WHY BUY ================= */}
      <section className="container" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={surfaceGroup}
              alt="Surface Laptop models for enterprise buyers"
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>Why Buy Surface Laptop from Square Network Solutions?</h2>
            <ul>
              <li>Authorized Microsoft Surface reseller</li>
              <li>Best pricing for bulk & enterprise orders</li>
              <li>Surface Laptop, Pro, Studio & Hub availability</li>
              <li>Windows Autopilot & Intune deployment</li>
              <li>Warranty & after-sales support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="container" style={{ marginTop: "60px" }}>
        <h2>Who Should Buy Surface Laptop?</h2>
        <ul>
          <li>IT & Cloud companies</li>
          <li>MNCs & corporate offices</li>
          <li>Banks & financial institutions</li>
          <li>Educational institutions</li>
          <li>Government & PSU organizations</li>
        </ul>
      </section>

      {/* ================= FAQ ================= */}
      <section className="container" style={{ marginTop: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Frequently Asked Questions
        </h2>

        <FAQItem
          question="Is Square Network Solutions an authorized Surface Laptop reseller?"
          answer="Yes. We are an officially authorized Microsoft Surface Devices reseller in India."
        />

        <FAQItem
          question="Can I buy Surface Laptop in bulk quantity?"
          answer="Yes. We support bulk and enterprise Surface Laptop purchases with special pricing."
        />

        <FAQItem
          question="Do you provide delivery across India?"
          answer="Yes. We deliver and support Surface Laptop orders across major cities in India."
        />

        <FAQItem
          question="How can I get the best price?"
          answer="Call us directly at +91 98409 87432 or email sales@squarenet.in for a customized quote."
        />
      </section>
    </>
  );
};

 

export default BuySurfaceLaptop
