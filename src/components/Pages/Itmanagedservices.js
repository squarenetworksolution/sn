import React, { Fragment } from 'react'
import "../css/solution.css";
import Itmanaged from "../../assets/It_managed_service.jpg";


const Itmanagedservices = () => {
    return (
        <Fragment>

            <section className='container'>
                <div className='row'>

                    <div className='col-md-6 d-flex'>
                        
                        <div className='cyb_hed'>

                        <h3>
                            IT Managed Services - Optimize & Secure Your IT Infrastructure
                        </h3>
                        <p>
                            At Square Network Solutions, we offer end-to-end IT Managed Services that help businesses streamline operations, enhance security, and reduce IT costs. Our team of experts ensures your IT infrastructure remains secure, efficient, and up to date, so you can focus on your core business
                        </p>
                        </div>
                    </div>

                    <div className='col-md-6'>

                        <img style={{borderRadius: "10px"}} src={ Itmanaged } className="" alt="Itmanagedservices" />

                    </div>
                </div>
                <section>

                    <div className='row'>
                        <h3>Our IT Managed Services</h3>

                        <div className='col-md-4'>
                            
                            <h4>
                                Remote Infrastructure Management (RIM)
                            </h4>

                            <ul>
                                <li>
                                    24/7 Monitoring & Support: Continuous tracking of IT systems to prevent downtime.
                                </li>
                                <li>
                                    Server & Network Management: Ensure high availability and performance.
                                </li>
                                <li>
                                    Cloud & On-Premise Infrastructure Support: Secure management of hybrid environments.
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-4'>
                            <h4>
                                IT Helpdesk & End-User Support</h4>

                            <ul>
                                <li>
                                    Multi-Tier Helpdesk Support: Fast issue resolution for employees.
                                </li>
                                <li>
                                    Remote & On-Site Assistance: Troubleshooting for hardware, software, and network issues.
                                </li>
                                <li>
                                    Asset Management & Software Licensing: Keep track of IT assets and ensure compliance.
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-4'>
                            <h4>
                                Cybersecurity Management
                            </h4>
                            <ul>
                                <li>
                                    Proactive Threat Monitoring: Detect and respond to cyber threats in real-time.
                                </li>
                                <li>
                                    Firewall & Endpoint Protection: Advanced security measures to safeguard your data. </li>
                                <li>
                                    Data Backup & Disaster Recovery: Prevent data loss with automated backups and recovery plans.
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>




                <section>
                    <div className='row'>

                        <div className='col-md-4'>
                            <h4>
                                Cloud & Data Center Services
                            </h4>
                            <ul>
                                <li>
                                    Cloud Migration & Management: Seamless transition and optimization of cloud services.
                                </li>
                                <li>
                                    Data Center Virtualization: Improve efficiency and scalability of IT resources.
                                </li>
                                <li>
                                    Storage & Backup Solutions: Secure storage management with redundancy options.
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <h4> IT Consulting & Strategy</h4>
                            <ul>
                                <li>
                                    IT Roadmap & Planning: Develop a customized IT strategy aligned with business goals.
                                </li>
                                <li>
                                    Technology Upgrades & Optimization: Improve system performance with the latest technologies.
                                </li>
                                <li>
                                    Compliance & Risk Assessment: Ensure adherence to industry regulations and security standards.
                                </li>
                            </ul>
                        </div>

                        {/* <div className='col-md-4'>

<h4>Why Choose Square Network Solutions?</h4>
<ul>
<li>Industry Expertise: 25+ years of experience in IT networking.</li>
<li>Global OEM Partnerships: Collaborations with 50+ top technology brands.</li>
<li>Tailored Solutions: Customized networking solutions for diverse industries. </li>
<li> End-to-End Support: Consultation, deployment, and 24/7 after-sales service.</li>
<li>Certified & Trusted: ISO 9001:2015 certified for IT hardware and networking solutions.</li>
</ul>
</div> */}

                        <div className='col-md-4'>

                            <h4>Annual Maintenance Contracts (AMC) & SLA-Based Support</h4>
                            <ul>
                                <li>Comprehensive IT Maintenance: Regular system health checks and proactive maintenance.</li>
                                <li>Flexible SLAs: Tailored support agreements for different business needs.</li>
                                <li>
                                    Multi-Vendor & Pan-India Support: Expertise in handling diverse IT environments </li>

                            </ul>
                        </div>

                    </div>

                </section>



            </section>


        </Fragment>
    )
}

export default Itmanagedservices