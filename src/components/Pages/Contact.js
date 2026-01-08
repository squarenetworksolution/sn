import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";
import "../../components/css/contact.css";
import resale from "../../assets/Microsoft-Surface-Authorized-Reseller-in-India-surface-laptop.png"
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
import newsurface from "../../assets/new-surface-laptop-resaller-group.png";
import mssurfacesquare  from "../../assets/ms-laptop-squarentwork.png";



const data = {
  Karnataka: {
    Bangalore: "+919840987432",
  },

  "Tamil Nadu": {
    Chennai: "+919840987432",
    vellore: "+919840987432",
    Krishnagiri: "+919840987432",
  },

  "Andhra Pradesh": {
    Tirupati: "+919840987432",
  },
};

export const Contact = () => {

  const [selectedState, setSelectedState] = useState("");
  const [selectedSubdivision, setSelectedSubdivision] = useState("");
  const [subdivisions, setSubdivisions] = useState([]);
  const [whatsappContact, setWhatsappContact] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [category, setCategory] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSubdivisions(Object.keys(data[state] || {}));
    setSelectedSubdivision("");
    setWhatsappContact("");

  };

  const handleSubdivisionChange = (event) => {
    const subdivision = event.target.value;
    setSelectedSubdivision(subdivision);
    setWhatsappContact(data[selectedState]?.[subdivision] || "");
};

  const sendMessageToWhatsApp = () => {
    if (!userName || !userMessage || !selectedState || !selectedSubdivision || !category || !userEmail) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill all fields before sending.",
      });
      return;
    }

    if (!validateEmail(userEmail)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${userName}. I am from ${selectedSubdivision}, ${selectedState}. I am interested in ${category}. ${userMessage}\n\nEmail: ${userEmail}`
    );

    const whatsappURL = `https://wa.me/${whatsappContact}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    
  };

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
          margin: 0
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
      
      <section className="container cnt_hder">
        <h2 style={{margin:0,textAlign:"center"}}><b>CONTACT</b></h2>
        <p className="text-center">Our team will happily assist you with ideal recommendations for your needs.</p>
      </section>

      <section className="cnt_frm">
        <div style={{  maxWidth: "600px", margin: "20px auto", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(45px)" }}>
          <h2 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", color: "#333" }}>Contact Form</h2>

          <label style={{ fontWeight: "bold" }}>Your Name:</label>
         
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" }}
          />

          <label style={{ fontWeight: "bold" }}>Your Email:</label>
         
          <input
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" }}
          />

          <label style={{ fontWeight: "bold" }}>Select Category:</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" }}
          >

            <option value="">-- Select a Category --</option>
            <option value="Service">Service</option>
            <option value="Buy Product">Buy Product</option>
            <option value="Data Center">Data Center</option>
          </select>

          <label style={{ fontWeight: "bold" }}>Select State:</label>
          <select
            onChange={handleStateChange}
            value={selectedState}
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            <option value="">-- Select a State --</option>
            {Object.keys(data).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          {selectedState && (
            <>
              <label style={{ fontWeight: "bold" }}>Select Subdivision:</label>
              
              <select
                onChange={handleSubdivisionChange}
                value={selectedSubdivision}
                style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" }}
              >
                <option value="">-- Select a Subdivision --</option>
                {subdivisions.map((subdivision) => (
                  <option key={subdivision} value={subdivision}>
                    {subdivision}
                  </option>
                ))}
              </select>
            </>
          )}

          <label style={{fontWeight: "bold" }}>Your Message:</label>
         
          <textarea
            placeholder="Enter your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc", minHeight: "100px" }}
          />
          <label style={{ color:"#061bbeff",fontSize:"15px",fontWeight: "700" }}>Note: Please fill in all the required fields with valid information. The Send option will be enabled once the form is complete.</label>

          {whatsappContact && (
            <button
              onClick={sendMessageToWhatsApp}
              style={{ width: "100%", padding: "10px", marginTop: "10px", borderRadius: "5px", backgroundColor: "#25D366", color: "white", fontSize: "16px", border: "none", cursor: "pointer" }}
            >
              Send Message to WhatsApp
            </button>
          )}

        </div>
      </section>

      {/* The rest of your locations/contact sections remain unchanged below this */}
      {/* ... */}

      <section className="container">

<div className="row">


<div className="col-md-6"style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
  <h1>Microsoft Surface Authorized Reseller in India</h1>
  
  <p>
     Square Network Solutions Pvt Ltd  
 is an officially  authorized Microsoft Surface   Devices Reseller, recognized and listed on Microsoft’s global partner directory in India.
 
</p>


 <p>
  We provide genuine Microsoft Surface devices for enterprises, educational institutions, and government organizations, including consultation, bulk procurement, deployment, and post-sales support.
 </p>


</div>

<div className="col-md-6">
 <img className="" src={resale} alt="Microsoft Surface Authorized Reseller in India" />
</div>

</div>

<div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="card-wrapper">
            <div className="card-box">
              <div className="card">
                <div className="overlay">
                  <div className="profile-img">
                     <img className="" src={l1} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l2} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l3} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l4} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l5} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l6} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l7} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l8} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l9} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l8} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l10} alt="Microsoft Surface Authorized Reseller in India" />

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
                     <img className="" src={l11} alt="Microsoft Surface Authorized Reseller in India" />

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


      <div className="row">

          <div className="col-md-3">
            <div className="box_sdw">

              <h3>Sales</h3>
              <p>mail :
                <b>sales@squarenet.in</b>
              </p>
              <p>Contact :
                <b>(+91) 98409 87432 </b>
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="box_sdw">

              <h3>Service</h3>
              <p>mail :
                <b>service@squarenet.in</b>
              </p>
              <p>Contact :
                <b>(+91) 95000 58825</b>
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="box_sdw">

              <h3>Support</h3>
              <p>mail :
                <b>info@squarenet.in</b>
              </p>
              <p>Contact :
                <b>(+91) 98409 97427</b>
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="box_sdw">

              <h3>Enquiry</h3>
              <p>mail :
                <b>enquiry@squarenet.in
                </b>
              </p>
              <p>Contact :
                <b>(+91) 98407 55175</b>
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="container cnt_hder">

        <h2><b>Our Presence</b></h2>
        <br />
        <div className="row">
          <div>

          </div>

          <div className="col-md-4">
            <div className="box_sdw">

              <h3> Chennai - Head Office
              </h3>
              <p>  Upstairs, ICICI Bank, Old No-25, New, 49, Royapettah High Rd, Royapettah, Chennai, Tamil Nadu 600014
                                            
              </p>
            </div>

          </div>

          <div className="col-md-4">
            <div className="box_sdw">

              <h3>Vellore</h3>

              <p>Door
                No.5, 1st Floor,
                Bangalore Bye Pass Road,
                Upstairs Sri Renugambal Travels,
                Vellore-632004.
              </p>
              <p>mail :
                <b>vellore@squarenet.in</b>
              </p>
              <p>Contact :
                <b>Ph :+91 416-2904461</b>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="box_sdw">

              <h3>Tirupathi</h3>
              <p>Door No. 8/136, Ground Floor, Motor workers Colony,
              Tiruchanoor Road, Padmavathi Puram, Tirupati, Andhra Pradesh - 517501.
              </p>
              <p>mail :
                <b>sivav@squarenet.in
                </b>
              </p>
              <p>Contact :
                <b>Ph:+91 97035 57777</b>
              </p>
            </div> 
          </div>

        </div>

      </section>


      <section className="container">

        <div className="row">

          <div className="col-md-4">
            <div className="box_sdw">
              <h3>Bengaluru</h3>
              <p>
              
           Door No. 22, 12th B Main Rd, HAL 2nd Stage, Doopanahalli, Indiranagar, Bengaluru, Karnataka 560008
              </p>

              <p>Mail :
                <b>bangalore@squarenet.in</b>
              </p>
              <p>Contact :
                <b>(+91)98407 55175</b>
              </p>
            </div>
          </div>

          <div className="col-md-4">

            <div className="box_sdw">

              <h3>Hosur</h3>
              <p>Door No.80/6,Thally Road,
                Opp.Vellankanni School,
                Hosur-635109.

              </p>

              <p>Mail :
                <b>hosur@squarenet.in</b>
              </p>
              <p>Contact :
                <b>(+91)4344-267030 / (+91)9600007747</b>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="box_sdw">

              <h3>Multi Brand Showroom</h3>
              <p>Door No:18/35,Shop No:3 ,
                Denkanikottai Main Road,
                Santhi Nagr,Hosur - 635109
              </p>

              <p>Mail :
                <b>cishosur@squarenet.in
                </b>
              </p>
              <p>Contact :
                <b>(+91)4344-222743 / (+91)9600007747</b>
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="container" style={{ marginTop: "60px" }}>
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

    </Fragment>
  );
};
