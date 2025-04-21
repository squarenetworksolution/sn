// Testpage.jsx

import React, { useState } from "react";
import Swal from "sweetalert2";

const data = {
  Karnataka: {
    Bangalore: "+919176676935",
    Mysore: "+919123456789",
    Mangalore: "+919987654321",
  },
  "Tamil Nadu": {
    Chennai: "+918765432109",
    Coimbatore: "+919345678901",
    Madurai: "+919456789012",
  },
  Kerala: {
    Kochi: "+919567890123",
    Thiruvananthapuram: "+919678901234",
    Kozhikode: "+919789012345",
  },
};

const ADMIN_NUMBER = "+916374336909"; // Your default Admin number

const Testpage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedSubdivision, setSelectedSubdivision] = useState("");
  const [subdivisions, setSubdivisions] = useState([]);
  const [whatsappContact, setWhatsappContact] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [category, setCategory] = useState("");

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
    if (!userName || !userMessage || !selectedState || !selectedSubdivision || !category) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill all fields before sending.",
      });
      return;
    }

    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${userName}. I am from ${selectedSubdivision}, ${selectedState}. I am interested in ${category}. ${userMessage}`
    );

    if (whatsappContact) {
      try {
        // Remove '+' from phone numbers
        const adminNum = ADMIN_NUMBER.replace('+', '');
        const subdivisionNum = whatsappContact.replace('+', '');
        
        // Create WhatsApp URLs
        const adminURL = `https://api.whatsapp.com/send?phone=${adminNum}&text=${encodedMessage}`;
        const subdivisionURL = `https://api.whatsapp.com/send?phone=${subdivisionNum}&text=${encodedMessage}`;

        // Open both chats
        window.open(adminURL, '_blank');
        setTimeout(() => {
          window.open(subdivisionURL, '_blank');
        }, 1000);

        // Clear form after successful send
        setUserName("");
        setUserMessage("");
        setCategory("");
        setSelectedState("");
        setSelectedSubdivision("");
        setWhatsappContact("");
        setSubdivisions([]);

        Swal.fire({
          icon: "success",
          title: "Messages Sent",
          text: "Messages sent to both contacts!",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send messages. Please try again.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "No Contact Selected",
        text: "Please select a valid subdivision to send the message.",
      });
    }
};

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Contact Form
      </h2>

      <label style={{ fontWeight: "bold" }}>Your Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "5px 0 15px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ fontWeight: "bold" }}>Select Category:</label>
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        style={{
          width: "100%",
          padding: "10px",
          margin: "5px 0 15px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
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
        style={{
          width: "100%",
          padding: "10px",
          margin: "5px 0 15px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
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
            style={{
              width: "100%",
              padding: "10px",
              margin: "5px 0 15px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
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
        style={{
          width: "100%",
          padding: "10px",
          margin: "5px 0 20px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
          minHeight: "100px",
        }}
      />
      {
      whatsappContact && (
        <button
          onClick={sendMessageToWhatsApp}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "5px",
            backgroundColor: "#25D366",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message to WhatsApp
        </button>
      )}
    </div>
  );
};

export default Testpage;
