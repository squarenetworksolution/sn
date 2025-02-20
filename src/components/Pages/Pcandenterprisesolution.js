import React, { Fragment } from 'react'
import "../css/solution.css";
import web from "../../assets/web-app.png";
import mobileapp from "../../assets/mobile-app.png";
import api from "../../assets/api.png";
import thick from "../../assets/thick.png";
import networkcy from "../../assets/network_cy.png";
import cloud from "../../assets/cloud_cy.png";
import iot from "../../assets/iot.png";
import firewall from "../../assets/firewall.png";
import ad from "../../assets/ad.png";
import cable from "../../assets/cables.png";

const Pcandenterprisesolution = () => {
  return (
    <Fragment>
         <section className="cyber-security-section cyber-security-section2 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="cyber-content aos-init aos-animate" data-aos="fade-up-left">
                            <h3 className='rapid_hed'> Rapid | Affordable  <span className="cyber-text">Cyber Security </span>Solutions Provider</h3>
                            <p className="security-services-p" align="justify">We offer prompt and cost-effective cybersecurity solutions. Our team comprises seasoned professionals who leverage cutting-edge technologies and tools to safeguard your systems against a wide array of cyber threats, encompassing malware, viruses, phishing attacks, and more.<br/> We recognize the paramount significance of data security and are unwavering in our commitment to furnish you with the utmost protection to instill peace of mind. Our security protocols are meticulously devised to furnish unparalleled protection against unauthorized access, theft, and other potential risks.</p>
                            <p className="security-services-p cyber-p-margin-bottom">We are available 24/7 to help protect your data.</p>
                            <div className="cyber-contact-btn">
                                <a href="/contact" className="text-decoration-none">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 text-md-right text-center">
                        <div className="cyber-content-img-right aos-init aos-animate" data-aos="fade-up-right">
                            <figure className="mb-0"><img width="135%" src={cable} alt=""  className=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<section className="about-us-section-start about-us-section-2 overflow-hidden">
            <div className="about-right-icon position-relative">
                <figure className="about2-left-img"><img src="./images/about-section2-left-img.png" alt=""  className="img-fluid" />
                </figure>
            </div>
            <div className="container">
               
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content about-margin-bottom aos-init aos-animate" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0"><img  width="48px" height="48px" src={web} alt="" />
                                </figure>
                            </div>
                            <h4>Web App Security Audit</h4>
                            <p className="security-services-p" align="justify">Our web application penetration testing (VAPT) service is designed to ensure the security and reliability of your web applications. Our team of specialized security experts utilizes advanced tools and techniques to thoroughly evaluate your web applications, identify any potential vulnerabilities, and provide comprehensive mitigation strategies to safeguard your data.</p>
                            {/* <a href="./services/web-app-security-audit.html" className="text-decoration-none ">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a>  */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content about-margin-bottom aos-init aos-animate" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0 icon-color"><img  width="48px" height="48px" src={mobileapp} alt="" />
                                </figure>
                            </div>
                            <h4>Mobile App Security Audit</h4>
                            <p className="security-services-p" align="justify">Our mobile application penetration testing (VAPT) service is the ultimate solution to secure and guarantee the reliability of your mobile apps. Our specialized security team utilizes cutting-edge tools and techniques to thoroughly evaluate your mobile applications, identify any potential risk and provide mitigation strategies to safeguard your data.</p>
                            {/* <a href="./services/mobile-app-security-audit.html" className="text-decoration-none ">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a>  */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content about-margin-bottom aos-init aos-animate" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0"><img  width="48px" height="48px" src={api} alt="" />
                                </figure>
                            </div>
                            <h4>API Security Audit</h4>
                            <p className="security-services-p" align="justify">Our API security assessment services involve a comprehensive analysis of API to detect any potential vulnerabilities that may exist. We conduct a series of tests to identify any weaknesses that could be exploited by attackers and provide recommendations to mitigate such risks, ensuring that your API infrastructure is entirely protected against any possible cyber threats.</p>
                            {/* <a href="./services/api-security-audit.html" className="text-decoration-none ">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a>  */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content aos-init" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0"><img  width="48px" height="48px" src={thick} alt="" />
                                </figure>
                            </div>
                            <h4>Thick Client Security Audit</h4>
                            <p className="security-services-p" align="justify">Our thick client security audit is a comprehensive analysis of the security measures implemented on a client-side software application. This type of audit assesses the overall security posture of the application, including its design, configuration, and integration. It involves identifying potential threats that could compromise of the application and its data.</p>
                            {/* <a href="./services/thick-client-security-audit.html" className="text-decoration-none ">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a>  */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content aos-init" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0"><img  width="48px" height="48px" src={networkcy} alt="" />
                                </figure>
                            </div>
                            <h4>Network Security Audit</h4>
                            <p className="security-services-p" align="justify">Our Network Security Audit is a detailed assessment of a system's security measures aimed at identifying potential risks. It involves a thorough evaluation of all network components, including hardware, software, protocols, and policies, to determine whether they meet industry standards and best practices. It helps organizations to protect their data from unauthorized access.</p>
                            
                            {/* <a href="./services/network-security-audit.html" className="text-decoration-none ">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a>  */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content aos-init" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0"><img  width="48px" height="48px" src={cloud} alt="" />
                                </figure>
                            </div>
                            <h4>Cloud Security Audit</h4>
                            <p className="security-services-p" align="justify">Our cloud security audit is a thorough evaluation of the security measures in place within a cloud computing environment. Its purpose is to identify any potential risks, vulnerabilities, and threats that may compromise the data stored in the cloud. The audit typically includes a review of access controls, network infrastructure, IAM policy, Server, NAT, and VPC with relevent cloud security standards.</p>
                            {/* <a href="./services/cloud-security-audit.html" className="text-decoration-none ">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a>  */}
                    </div>
                </div>
                 </div>
                <div className="row" >
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content aos-init" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0"><img  width="48px" height="48px" src={iot} alt="" />
                                </figure>
                            </div>
                            <h4>IoT Security Audit</h4>
                            <p className="security-services-p" align="justify">We offer an IoT security audit service that helps identify any potential vulnerabilities, threats, or risks in your IoT devices. Our team conducts penetration testing to identify any weaknesses in the security controls of the devices. Our main goal is to ensure that your organization's IoT devices are secure, reliable, and resilient against cyber attacks and data breaches. </p>
                            {/* <a href="./services/iot-security-audit.html" className="text-decoration-none ">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a>  */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content aos-init" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0"><img  width="48px" height="48px" src={firewall} alt="" />
                                </figure>
                            </div>
                           <h4>Firewall Security Audit</h4>
                        <p className="security-services-p" align="justify">Our firewall audit includes an assessment of our firewall configurations, rules, and policies. It also involves analyzing our network traffic to ensure that our firewall is effectively blocking any unauthorized access attempts. Once the audit is complete, we provide a detailed report that outlines our findings and recommendations for improving our firewall security.</p>
                        {/* <a href="./services/firewall-security-audit.html" className="text-decoration-none">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a> */}
                          </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="about-us-content aos-init" data-aos="fade-up">
                            <div className="icons-rounded-box">
                                <figure className="mb-0"><img  width="48px" height="48px" src={ad} alt="" />
                                </figure>
                            </div>
                            <h4>AD Security Audit</h4>
                            <p className="security-services-p" align="justify">We offer a comprehensive security audit for Active Directory (AD) environments that includes an analysis of configuration settings to ensure they align with industry best practices. Our audit covers a detailed examination of user and group permissions, password policies, domain controller configuration, and GPO that affect the security posture of AD environment. </p>
                            {/* <a href="./services/ad-security-audit.html" className="text-decoration-none">Learn More <span className="forword-arrow"><i className="fa fa-angle-right"></i></span></a> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Fragment>
)
}

export default Pcandenterprisesolution
