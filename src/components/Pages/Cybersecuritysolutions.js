import React, { Fragment } from 'react'
import "../css/solution.css";
import Cybersecuritysolution from "../../assets/cyber_security_solutions.webp";


const Cybersecuritysolutions = () => {
  return (

    <Fragment>
       <section className='container'>
                       <div className='row'>
       
                           <div className='col-md-6 d-flex'>
                            
                            <div className='cyb_hed'>

                               <h3>
                               Cyber Security Solutions - Protecting Your Digital Infrastructure</h3>
                               <p>
                               At Square Network Solutions, we provide advanced cyber security solutions to safeguard your business from evolving cyber threats. Our comprehensive security services help businesses prevent attacks, detect vulnerabilities, and respond to cyber threats effectively.
                               </p>
                            </div>

                           </div>
       
                           <div className='col-md-6'>
       
                               <img style={{ borderRadius: "10px" }} src={Cybersecuritysolution} className="" alt="switches_squarenetwork" />
       
                           </div>
                       </div>
                       <section>
       
                           <div className='row'>
                               <h3>Our Cyber Security Solutions</h3>
       
                               <div className='col-md-4'>
                                   <h4>
                                   Endpoint Security
                                   </h4>
                                   <ul>
                                       <li>
                                       Next-Gen Antivirus (NGAV) & EDR: Real-time threat detection and response
                                        </li>
                                       <li>
                                       Encryption & Data Protection: Secure sensitive data across devices

                                         </li>
                                       <li>
                                          
                                       User & Entity Behavior Analytics (UEBA): Identify suspicious user activities.
                                       </li>
                                       <li>
                                       IoT & Server Security: Protect endpoints from malware and unauthorized access.
                                       </li>
                                   </ul>
                               </div>
       
                               <div className='col-md-4'>
                                   <h4>Network Security
                                    </h4>
                                   <ul>
                                       <li>
                                       Firewall & Intrusion Prevention Systems (IPS): Block unauthorized access.
                                       </li>
                                       <li>
                                       Network Access Control (NAC): Ensure only authorized devices connect.
                                       </li>
                                       <li>
                                         
                                       Anti-APT & Anti-DDoS Protection: Prevent advanced persistent threats and DDoS attacks.
                                       </li>
                                       <li>
                                       SSL Visibility & Decryption: Monitor encrypted traffic for hidden threats
                                       </li>
                                   </ul>
                               </div>
       
                               <div className='col-md-4'>
                                   <h4>
                                   Content Security
                                    </h4>
                                   <ul>
                                       <li>
                                       Data Loss Prevention (DLP): Protect sensitive information from leaks.
                                        </li>
                                       <li>
                                       Email & Web Security: Prevent phishing and ransomware attacks.
                                       </li>
                                       <li>
                                       Web Application Firewall (WAF): Secure your websites from cyber threats.
                                        </li>
                                        <li>
                                        Application Security (RASP): Monitor and protect web applications.
                                        </li>
                                   </ul>
                               </div>
                           </div>
       
                       </section>
       
       
       
       
                       <section>
                           <div className='row'>
                               
                               <div className='col-md-4'>
                                  
                                   <h4>
                                   Identity & Access Management
                                   </h4>

                                   <ul>
                                       <li>
                                       Privileged Access Management (PAM): Control admin access to critical systems.
                                       </li>

                                       <li>
                                       Multi-Factor Authentication (MFA): Strengthen user authentication.
                                       </li>

                                       <li>
                                       Single Sign-On (SSO): Enhance security with seamless login
                                       </li>
                                   </ul>
                               </div>

                               <div className='col-md-4'>
                                   <h4> Compliance & Risk Management</h4>
                                   <ul>
                                       <li>
                                       Vulnerability Management: Regular security assessments and patching.
                                        </li>
                                       <li>
                                       SIEM & Log Management: Monitor and analyze security incidents. </li>
                                       <li>
                                       Regulatory Compliance: Ensure adherence to industry standards (ISO, GDPR, PCI-DSS).
                                       </li>
                                   </ul>
                               </div>
       
                               <div className='col-md-4'>
       
                                   <h4>Why Choose Square Network Solutions?</h4>
                                   <ul>
                                       <li>Industry Expertise: 25+ years of experience in IT networking.</li>
                                       <li>Global OEM Partnerships: Collaborations with 50+ top technology brands.</li>
                                       <li>Tailored Solutions: Customized networking solutions for diverse industries. </li>
                                       <li> End-to-End Support: Consultation, deployment, and 24/7 after-sales service.</li>
                                       <li>Certified & Trusted: ISO 9001:2015 certified for IT hardware and networking solutions.</li>
                                   </ul>
                               </div>
       
                           </div>
       
                       </section>
       
       
       
                   </section>

    </Fragment>

  )
}

export default Cybersecuritysolutions