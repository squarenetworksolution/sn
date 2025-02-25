import React, { Fragment } from 'react';
import "../css/successstories.css"
import mobile_logo from "../../assets/logo_squarenetwork.jpg";
import tvs from "../../assets/tvs.webp";
import epson from "../../assets/Epson.png";

import canon from "../../assets/canon.png";
import microsoft from "../../assets/microsoft.png";



const Successstories = () => {

  return (

    <Fragment>
      <section>
      <h3 className='container'>Real Success Stories: How Square Network Solution Transforms Businesses with Advanced IT Solutions
      </h3>

<div className="timeline"> 
  <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1 fade-in-down"  data-mdb-animation-on-scroll="repeat">
    <div className="timeline__event__icon">
      <i className="lni-cake">1998</i>
    </div>

    <div className="timeline__event__date">
      <img alt='img' src={mobile_logo}  />
    </div>

    <div className="timeline__event__content ">
     
      <div className="timeline__event__title">
      Square Network Solution Founded
      </div>

      <div className="timeline__event__description">
        <p>
          Square Network Solution was founded with a vision to revolutionize the IT infrastructure landscape by providing cutting-edge solutions in data centers, networking, and cybersecurity. Over the years, the company has established itself as a trusted name in the industry, catering to businesses across six South Indian states. With an unwavering commitment to innovation, security, and efficiency, Square Network Solution continues to drive digital transformation for enterprises of all sizes.
        </p>

      </div>
    </div>
  </div>

  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div className="timeline__event__icon">
      <i className="lni-burger">2004</i>

    </div>
    <div className="timeline__event__date">
      <img alt='img' src={tvs}  data-mdb-animation-on-scroll="repeat" />
    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
      LUCAS TVS Award - Deming Prize
      </div>
     
     <div className="timeline__event__description">
        
        <p>
        In 2004, Square Network Solution was honored with the prestigious Deming Prize from Lucas TVS Ltd. This award recognized our commitment to excellence in IT solutions, quality management, and continuous improvement. It stands as a testament to our dedication to delivering world-class networking, data center, and cybersecurity services that empower businesses to achieve operational excellence.
          </p>

      </div>
    </div>
  </div>

  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div className="timeline__event__icon">
      <i className="lni-burger">2011</i>
    </div>

    <div className="timeline__event__date">
      <img alt='img' src={epson} />
    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
      EPSON Award - Excellence in Epson Product Solutions
      </div>
     
     <div className="timeline__event__description">
        
        <p>
        In 2011, Square Network Solution was honored with the EPSON Award for its exceptional contribution to promoting and integrating Epson's range of products. This recognition underscores our dedication to delivering innovative IT solutions and outstanding customer service.
          </p>
          
      </div>
    </div>
  </div>

  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div className="timeline__event__icon">
      <i className="lni-burger">2012</i>

    </div>

    <div className="timeline__event__date">
      <img alt='img' src={epson}/>
    </div>

    <div className="timeline__event__content">
      <div className="timeline__event__title">
      EPSON Award - Outstanding Performance in Epson Products
    </div>
     
     <div className="timeline__event__description">
        
        <p>

        Building on our success, Square Network Solution received the EPSON Award again in 2012, reaffirming our expertise in providing businesses with high-quality Epson products and seamless technology solutions to enhance operational efficiency.
          
          </p>
          
      </div>
    </div>
  </div>

  
  <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div className="timeline__event__icon">
      <i className="lni-slim">2013</i>
    </div>
    <div className="timeline__event__date">
    <img alt='img' src={canon}/>

    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
      CANON Excellence Award - Recognizing Outstanding Performance
      </div>
      <div className="timeline__event__description">
        <p>
        On December 6, 2013, in Dubai, Square Network Solution was honored with the Canon Excellence Award at the prestigious Canon Achievers League. This recognition highlights our outstanding contribution to Canon's range of products and solutions, reinforcing our commitment to delivering innovative IT and imaging solutions. The Certificate of Achievement reflects our dedication to excellence, customer satisfaction, and industry leadership.
          </p>
      </div>

    </div>

  </div>


  <div className="timeline__event animated fadeInUp timeline__event--type1">
    <div className="timeline__event__icon">
      <i className="lni-cake">2018</i>

    </div>
    <div className="timeline__event__date">

    <img alt='img' src={microsoft}/>

    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
      MICROSOFT Award - Consumer & Device Sales Achiever
      </div>
      <div className="timeline__event__description">
        <p>
        In 2018, Square Network Solution was honored with the Microsoft Consumer and Device Sales Achiever Award. This recognition highlights our excellence in delivering Microsoft's cutting-edge consumer and enterprise solutions, driving sales, and enhancing customer experiences. It reflects our commitment to innovation, technology adoption, and empowering businesses with the best in IT solutions.
          </p>
      </div>
    </div>
  </div>


  <div className="timeline__event animated fadeInUp timeline__event--type1">
    <div className="timeline__event__icon">
      <i className="lni-cake">2024</i>
    </div>

    <div className="timeline__event__date">
    <img alt='img' src={canon}/>

    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
      CANON Excellent Business Contribution Award - CSP Division
      </div>

      <div className="timeline__event__description">

        <p>
        In 2024, Square Network Solution was honored with the Canon Excellent Business Contribution Award for its outstanding performance in the CSP Division. This recognition highlights our dedication to delivering Canon's innovative solutions, driving business growth, and maintaining excellence in service and technology integration. It stands as a testament to our commitment to empowering businesses with cutting-edge imaging and IT solutions.
        </p>

      </div>
    </div>
  </div>


</div>
      </section>
    </Fragment>
  )
}

export default Successstories

