import React, { Fragment } from 'react'
import "../css/solution.css";
import datacenter from "../../assets/data_center_solutions.webp";

const Datacentersolution = () => {
    return (
        <Fragment>
            <section className='container'>
                <div className='row'>

                    <div className='col-md-6 d-flex'>
                        <div className='cyb_hed'>
                        <h3>
                            Data Center Solutions - Scalable, Secure & High-Performance Infrastructure
                        </h3>
                        <p>
                            At Square Network Solutio
                            ns, we provide robust, scalable, and secure Data Center Solutions tailored to meet the demands of modern businesses. Our solutions ensure high availability, efficiency, and security while reducing operational costs. Whether you need on-premise, cloud, or hybrid data center services, we have the expertise to design, implement, and manage your infrastructure.
                        </p>
                        </div>
                    </div>

                    <div className='col-md-6'>

                        <img style={{ borderRadius: "10px" }} src={datacenter} className="" alt="Itmanagedservices" />

                    </div>
                </div>
                <section>

                    <div className='row'>
                        <h3>Our Data Center Solutions</h3>

                        <div className='col-md-4'>

                            <h4>
                                Data Center Infrastructure
                            </h4>

                            <ul>
                                <li>
                                    Server & Storage Solutions: High-performance computing with scalable storage.
                                </li>
                                <li>
                                    Hyper-Converged Infrastructure (HCI): Integrated compute, storage, and networking for simplified management.
                                </li>
                                
                                <li>
                                    Data Center Virtualization: Improve resource efficiency and scalability.
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-4'>
                            <h4>
                                Cloud & Hybrid Data Center Solutions
                            </h4>

                            <ul>
                                <li>
                                    Private & Hybrid Cloud Solutions: Secure and scalable cloud integration.
                                </li>
                                <li>
                                    Cloud Migration & Optimization: Seamless transition with enhanced performance.
                                </li>
                                <li>
                                    Software-Defined Data Center (SDDC): Automated and intelligent IT operations.
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-4'>
                            <h4>
                                Network & Connectivity
                            </h4>
                            <ul>
                                <li>
                                    High-Speed Networking: Optimized data transfer with low latency.
                                </li>
                                <li>
                                    Software-Defined Networking (SDN): Intelligent network management and automation. </li>
                                <li>
                                    Data Center Interconnect (DCI): Secure, high-speed connectivity between data centers.
                                </li>
                            </ul>
                        </div>
                    </div>

                </section>




                <section>
                    <div className='row'>

                        <div className='col-md-4'>
                            <h4>Data Security & Compliance
                            </h4>
                            <ul>
                                <li>
                                    End-to-End Encryption: Protect sensitive data in storage and transit.
                                </li>
                                <li>
                                    Disaster Recovery & Backup Solutions: Minimize downtime with rapid data recovery.
                                </li>
                                <li>
                                    Compliance & Risk Management: Ensure adherence to ISO, GDPR, and other regulatory standards.
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <h4> Power & Cooling Management</h4>
                            <ul>
                                <li>
                                    Energy-Efficient Cooling Systems: Reduce operational costs with intelligent cooling.
                                </li>
                                <li>
                                    Power Backup & Redundancy: Ensure uninterrupted business operations.</li>
                                <li>
                                    DCIM (Data Center Infrastructure Management): Real-time monitoring for optimal efficiency. </li>
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

                            <h4>
                                Managed Data Center Services
                            </h4>
                            <ul>

                                <li>
                                    24/7 Monitoring & Support: Proactive management to prevent downtime.</li>
                                <li>
                                    Infrastructure as a Service (IaaS): Scalable computing resources on demand.
                                </li>
                                <li>
                                    IT Asset Lifecycle Management: Optimize infrastructure with regular upgrades.
                                </li>

                            </ul>
                        </div>

                    </div>

                </section>

            </section>

        </Fragment>
    )
}

export default Datacentersolution
