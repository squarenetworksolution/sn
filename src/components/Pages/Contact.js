import React, { Fragment, useState } from "react";
import Swal from "sweetalert2";
import "../../components/css/contact.css";

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

  return (
    <Fragment>
      <section className="container cnt_hder">
        <h2 style={{margin:0}}><b>CONTACT</b></h2>
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

          <label style={{ fontWeight: "bold" }}>Your Message:</label>
          <textarea
            placeholder="Enter your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            style={{ width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc", minHeight: "100px" }}
          />

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
    </Fragment>
  );
};
