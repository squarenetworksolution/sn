import React from 'react'
import { Fragment } from "react";

import "../css/solution.css";
import networksolution from "../../assets/network_solution.jpg";


const Networkingsolutions = () => {

    return (

        <Fragment>

            <section className='container'>
                <div className='row'>

                    <div className='col-md-6'>
                        <h3>
                            Empowering Connectivity with Cutting-Edge Networking Solutions
                        </h3>
                        <p>
                            At Square Network Solutions, we specialize in delivering comprehensive, secure, and scalable networking solutions that cater to businesses of all sizes. With over two decades of expertise, we ensure seamless connectivity, enhanced network performance, and robust security for your IT infrastructure.
                        </p>
                    </div>

                    <div className='col-md-6'>

                        <img src={networksolution} className="" alt="switches_squarenetwork" />

                    </div>
                </div>
                <section>

                    <div className='row'>
                        <h3>Our Networking Solutions</h3>

                        <div className='col-md-4'>
                            <h4>
                                Enterprise Networking
                            </h4>
                            <ul>
                                <li>Network Infrastructure: Design and deployment of scalable network architectures.</li>
                                <li>
                                    Network Visibility & Automation: Real-time monitoring and automated troubleshooting.
                                </li>
                                <li>
                                    Software-Defined Networking (SDN): Intelligent network management and virtualization.
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-4'>
                            <h4>Wireless & Mobility Solutions</h4>
                            <ul>
                                <li>Enterprise Wireless: High-speed, secure wireless connectivity for seamless operations.
                                </li>
                                <li>
                                    Mobility Device Management: Secure access and control over mobile devices within your network
                                </li>
                                <li>
                                    Mobility Applications: Custom solutions to enhance workforce mobility and productivity.
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-4'>
                            <h4>
                                Software-Defined Wide Area Network (SD-WAN)
                            </h4>
                            <ul>
                                <li>Intelligent Routing: Optimized data traffic flow for better application performance.</li>
                                <li>Secure & Scalable: Built-in security and easy scalability across multiple locations.</li>
                                <li>Cost-Efficient: Reduces dependency on expensive legacy networking infrastructure.</li>
                            </ul>
                        </div>
                    </div>

                </section>




                <section>
                    <div className='row'>
                        
                        <div className='col-md-4'>
                            <h4>
                                Collaboration & Communication
                            </h4>
                            <ul>
                                <li>
                                    Voice, Video & Web Conferencing: Reliable, high-quality communication solutions for businesses.
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <h4> Network Security Solutions</h4>
                            <ul>
                                <li>SSL Visibility & Decryption: Secure and analyze encrypted traffic for threat detection.</li>
                                <li>Network Access Control & Behavior Analysis: Advanced monitoring and control for secure network access.</li>
                                <li>Anti-APT & Anti-DDoS Protection: Safeguard your network from advanced persistent threats and cyberattacks.</li>
                            </ul>
                        </div>

                        <div className='col-md-4'>

                            <h4>Why Choose Square Network Solutions?</h4>
                            <ul>
                                <li>Industry Expertise: 27+ years of experience in IT networking.</li>
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

export default Networkingsolutions