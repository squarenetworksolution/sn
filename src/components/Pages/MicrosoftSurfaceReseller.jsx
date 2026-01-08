// import React from "react";
import React, { Fragment, useState } from "react";

import { Helmet } from "react-helmet-async";
import resale from "../../assets/Microsoft-Surface-Authorized-Reseller-in-India-surface-laptop.png";
import l1 from "../../assets/lap-microsoft-surface-authorized-reseller-folding-laptop.png";
import l2 from "../../assets/lap-microsoft-surface-authorized-reseller-laptop.png";
import l3 from "../../assets/lap-microsoft-surface-authorized-reseller-pen-surface-laptop.png";
import l4 from "../../assets/lap-microsoft-surface-authorized-reseller-snapdragon.png";
import l5 from "../../assets/lap-microsoft-surface-authorized-reseller-tab.png";
import l6 from "../../assets/lap-microsoft-surface-authorized-reseller.png";
import posterImg from "../../assets/microsoft-surface-authorized-reseller-tamilnadu-square-network.avif";
import surfaceVideo from "../../assets/microsoft-surface-authorized-reseller-tamilnadu.mp4";
import l7 from "../../assets/new-lap-microsoft-surface-authorized-reseller-chennai.png";
import l8 from "../../assets/new-lap-microsoft-surface-authorized-reseller-guindy.png";
import l9 from "../../assets/new-lap-microsoft-surface-authorized-reseller-india.png";
import l10 from "../../assets/new-lap-microsoft-surface-authorized-reseller-online.png";
import l11 from "../../assets/new-lap-microsoft-surface-authorized-reseller-tamilnadu.png";
import newsurface from "../../assets/new-surface-laptop-resaller-group.png";
import mssurfacesquare  from "../../assets/ms-laptop-squarentwork.png";

const MicrosoftSurfaceReseller = () => {
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
                name: "Microsoft Surface Authorized Reseller in India",
                item: "https://www.squarenet.in/microsoft-surface-authorized-reseller-india",
              },
            ],
          })}
        </script>

        <title>
          Microsoft Surface Authorized Reseller in India | Square Network
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
      </Helmet>

      <Helmet>
        <title>
          Microsoft Surface Authorized Reseller in India | Square Network
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
          <source src={surfaceVideo} type="video/mp4" />
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
            <h1>Microsoft Surface Authorized Reseller in India</h1>

            <p>
              Square Network Solutions Pvt Ltd is an officially authorized
              Microsoft Surface Devices Reseller, recognized and listed on
              Microsoft’s global partner directory in India.
            </p>

            <p>
              We provide genuine Microsoft Surface devices for enterprises,
              educational institutions, and government organizations, including
              consultation, bulk procurement, deployment, and post-sales
              support.
            </p>
          </div>

          <div className="col-md-6">
            <img
              className=""
              src={resale}
              alt="Microsoft Surface Authorized Reseller in India"
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
                        src={l1}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Laptop ZPX 00048</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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

          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l2}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Laptop 7 - EP2 21101</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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

          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l3}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Pro 12 - EP2 41579</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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

          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l4}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Pro 12 - EP2 27213</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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

          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l5}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Laptop 7 - EP2 22911 </p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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

          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l6}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Pro 7 - EP2 21101</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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
          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l7}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Pro 10 - ZDW 00032</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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
          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l8}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Laptop ZLQ 00048</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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
          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l9}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Laptop ZLU 00048</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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
          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l8}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Pro 12 - EP2 27196</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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
          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l10}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Pro 9 - QIA 00031</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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
          <div className="col-md-3 col-sm-6">
            <div className="card-wrapper">
              <div className="card-box">
                <div className="card">
                  <div className="overlay">
                    <div className="profile-img">
                      <img
                        className=""
                        src={l11}
                        alt="Microsoft Surface Authorized Reseller in India"
                      />
                    </div>

                    <div className="card-body">
                      <h2>Microsoft Surface</h2>
                      <p>Laptop ZLQ 00048</p>
                    </div>
                    {/* 
                  <div className="social-icon">
                    <span><i className="fa-brands fa-facebook" /></span>
                    <span><i className="fa-brands fa-whatsapp" /></span>
                    <span><i className="fa-brands fa-linkedin" /></span>
                    <span><i className="fa-brands fa-instagram" /></span>
                  </div> */}

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

<div className="row">
 <div className="col-md-6">
 <img className=""style={{borderRadius:"20px",}} src={newsurface} alt="Microsoft Surface Authorized Reseller in India" />

</div>
          <div className="col-md-6"style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <h2>Microsoft Surface Devices for Business & Enterprise</h2>
            <ul>
              <li>Microsoft Surface Pro for business professionals</li>
              <li>Microsoft Surface Laptop for enterprise users</li>
              <li>Microsoft Surface Hub for meeting rooms & collaboration</li>
              <li>Bulk Surface device procurement</li>
              <li>Surface deployment, imaging & Intune integration</li>
          </ul>
          
          </div>
</div>
          
          <div className="row">
          
          <div className="col-md-6" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
           <h2>Why Choose Square Network Solutions</h2>
            <ul>
              <li><b>Official Microsoft authorized partner</b></li>
              <li>Enterprise IT & infrastructure expertise</li>
              <li>End-to-end Surface deployment & lifecycle support</li>
              <li>Trusted by enterprises across South India</li>
          </ul>
          </div>
          
          <div className="col-md-6">
           <img className=""style={{borderRadius:"20px",}} src={mssurfacesquare} alt="Microsoft Surface Authorized Reseller in India" />
          
          </div>
          </div>
          
          <div className="row" style={{ margin: "30px 0" }}>
           
           <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
                    Service Locations
                  </h2>
          
                  <p style={{ marginBottom: "24px" }}>
                    We supply and support Microsoft Surface devices across{" "}
                    <strong>
          
                      Chennai, Bangalore, Hyderabad, Coimbatore, Kochi, Trivandrum
                    </strong>{" "}
                    and other major cities in India.
                  </p>
          
                  <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>
                    Microsoft Authorization
                  </h2>
          
                  <p style={{ marginBottom: "24px" }}>
                    Verify our Microsoft authorization here:{" "}
                    <a
                      href="https://www.microsoft.com/en-in/surface/business/where-to-buy-microsoft-surface"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0067b8", textDecoration: "underline" }}
                    >
                      Microsoft Surface Authorized Reseller – Square Network Solutions
                    </a>
                  </p>
          
          </div>
        </div>

      </section>

      <section className="container">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Frequently Asked Questions
        </h2>

        <FAQItem
          question="Is Square Network Solutions an authorized Microsoft Surface reseller?"
          answer="Yes. Square Network Solutions Pvt Ltd is officially listed on Microsoft’s website as an authorized Microsoft Surface Devices reseller in India."
        />

        <FAQItem
          question="Do you provide Microsoft Surface Hub solutions?"
          answer="Yes. We provide Microsoft Surface Hub supply, installation, configuration, and meeting room integration services."
        />

        <FAQItem
          question="Do you support bulk enterprise Microsoft Surface orders?"
          answer="Yes. We specialize in bulk procurement, enterprise deployment, device imaging, and lifecycle support."
        />

        <FAQItem
          question="Which locations do you serve?"
          answer="We serve Chennai, Bangalore, Hyderabad, Coimbatore, Kochi, Trivandrum, and other major cities across India."
        />

        <FAQItem
          question="How can I contact Square Network Solutions?"
          answer="You can contact us via phone at +91 98409 87432 or email sales@squarenet.in."
        />
        <FAQItem
          question="Do you provide Microsoft Surface devices for government projects?"
          answer="Yes. We supply Microsoft Surface devices for government departments, public sector organizations, and PSU projects with complete compliance and documentation."
        />

        <FAQItem
          question="Can you help with Microsoft Surface device deployment and configuration?"
          answer="Yes. Our team provides complete Surface device deployment, OS imaging, Intune integration, security policies, and enterprise configuration support."
        />

        <FAQItem
          question="Do you offer after-sales support and warranty assistance?"
          answer="Yes. We provide post-sales support, warranty coordination, and service assistance for all Microsoft Surface devices purchased through us."
        />

        <FAQItem
          question="Do you supply Microsoft Surface devices in bulk quantity?"
          answer="Yes. We specialize in bulk and enterprise procurement of Microsoft Surface laptops, Surface Pro, and Surface Hub devices across India."
        />

        <FAQItem
          question="Can educational institutions purchase Microsoft Surface devices from you?"
          answer="Yes. We work with schools, colleges, universities, and training institutes to supply Microsoft Surface devices at institutional pricing."
        />

        <FAQItem
          question="Do you provide Microsoft Surface Hub installation for meeting rooms?"
          answer="Yes. We offer Surface Hub installation, room planning, AV integration, and collaboration setup for conference rooms and boardrooms."
        />

        <FAQItem
          question="What Microsoft Surface models do you supply?"
          answer="We supply Surface Pro, Surface Laptop, Surface Laptop Studio, Surface Go, and Surface Hub models for business and enterprise use."
        />

        <FAQItem
          question="How quickly can you deliver Microsoft Surface devices?"
          answer="Delivery timelines depend on model availability and order quantity. Enterprise orders are usually fulfilled within a few business days."
        />

        <FAQItem
          question="Do you provide onsite support?"
          answer="Yes. We provide onsite support and implementation services across South India including Chennai, Bangalore, and Hyderabad."
        />

        <FAQItem
          question="How can I request a quotation?"
          answer="You can submit the contact form on this page or directly call us at +91 98409 87432 to receive a customized quotation."
        />
      </section>
    </>
  );
};

export default MicrosoftSurfaceReseller;
