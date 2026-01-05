import React from 'react'
import "../css/team.css";
import dhanalakshmi from "../../assets/msdhanalakshmi.png";
import bala from "../../assets/mrbala.png";
import dilli from "../../assets/mrdilli.png";
import kartheepan from "../../assets/mrkartheepan.png";
import karthik from "../../assets/mrkarthikraja.png";
import rahman from "../../assets/mrrahman.png";
import selva from "../../assets/mrselvakumar.png";



const OurTeams = () => {

  const employees = [
{
      name: "Mr Bala Subramani T",
      role: "Assistant Manager - Service",
      email: "📤 bala@squarenet.in",
      phone: "📞 +91 9840316466",

      image: bala
    },

  {
      name: "Mr Dilli Ganesh Dharuman",
      role: "Senior Manager Accounts - Admin & Accounts",
      email: "📤 ganesh@squarenet.in",
      phone: "📞 +91 9940668743",

      image: dilli
    },
  
       {
      name: "Mr Selva Kumar",
      role: "Service Manager",
      email: "📤 selvakumar@squarenet.in",
      phone: "📞 +91 9500049687",
      image: selva
    },

     {
      name: "Mr Kartheepan M",
      role: "Assistant Manager - Service",
      email: "📤 kartheepan@squarenet.in",
      phone: "📞 +91 9789985444",

      image: kartheepan
    },
  
     {
      name: "Mr Karthik Raja G",
      role: "Channel Sales Head",
      email: "📤 karthik@squarenet.in",
      phone: "📞 +91 9500049687",

      image: karthik

    },

    {
      name: "Mr Syed Rahman S",
      role: "Service Engineer",
      email: "📤 service@squarenet.in",
      phone: "📞 +91 9840891799",

      image: rahman

    },


    {
      name: "Ms Dhanalakshmi K",
      role: "HR & Accounts Executive",
      email: "📤 hr@squarenet.in",
      phone: "📞 +91 9500017427",
      image: dhanalakshmi
    },

  ];

  return (

    <div className='team-section'>
      <h2 className='team-title'>Meet Our Expert Team</h2>
      
      <div className='team-grid'>
        {employees.map((emp, index) => (
          <div className='team-card' key={index}>
            <img src={emp.image} alt={emp.name} className='team-img'/>

            <h3 className='team-name'>{emp.name}</h3>
            <p className='team-role'>{emp.role}</p>

            <a href={`mailto:${emp.email}`} className='team-mail'>
              {emp.email}
            </a>
            <a href={`tel:${emp.phone}`} className='team-phone'>
  {emp.phone}
</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeams
