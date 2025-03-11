import React, { Fragment, useState } from "react";
import "../../components/css/product.css";
import switc from "../../assets/mobile_switches.png";
import routerpro from "../../assets/router_product.png";
import serverpro from "../../assets/server_pro.png";

const Product = () => {

  const [activeTab, setActiveTab] = useState("switches");

  return (

    <Fragment>
      <section className="container">
        <div className="row">
          <div className="col-md-3">
            <div>
              <button
                onClick={() => setActiveTab("switches")}
                className={`b-nav-tab ${activeTab === "switches" ? "active" : ""}`}
              >
                Switches
              </button>

            </div>
            <div>
              <button
                onClick={() => setActiveTab("Router")}
                className={`b-nav-tab ${activeTab === "Router" ? "active" : ""}`}
              >
                Router
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveTab("Servers")}
                className={`b-nav-tab ${activeTab === "Servers" ? "active" : ""}`}
              >
                Servers
              </button>
            </div>
          </div>

          <div className="col-md-9">
            <div id="switches" className={`b-tab ${activeTab === "switches" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-6">
                  <h3>Switches</h3>
                  <h4>
                    Switches - High-Speed, Reliable, and Scalable Network Solutions
                  </h4>
                  <p>
                    Empower your business with enterprise-grade network switches that deliver high-speed connectivity, enhanced security, and seamless scalability. Whether you need managed or unmanaged switches, Layer 2 or Layer 3 switching, or advanced security features, our solutions ensure optimized performance for businesses, data centers, and enterprise networks.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src={switc} alt="switc" />
                </div>
                <div>

                  <h3>Comprehensive Switching Solutions</h3>
                  <ul>
                    <li>Managed & Unmanaged Switches - Choose from flexible solutions that fit your IT requirements, from simple plug-and-play unmanaged switches to fully managed switches with advanced control and monitoring features.</li>
                    <li>Layer 2 & Layer 3 Switching - Improve network efficiency with advanced Layer 2 switching for seamless data forwarding and Layer 3 switching for optimized routing and traffic management.</li>
                    <li>Power over Ethernet (PoE) Support - Easily power IP phones, cameras, and wireless access points with PoE-enabled switches, reducing cable clutter and simplifying deployment.</li>
                  </ul>
                </div>
                <div>
                  <h3>
                    Enhanced Performance & Security
                  </h3>
                  <ul>
                    <li>
                      Advanced VLAN & QoS Features - Ensure network segmentation, traffic prioritization, and seamless data flow with Virtual LANs (VLAN) and Quality of Service (QoS) capabilities.
                    </li>
                    <li>
                      Robust Security & Access Control - Protect your network with advanced security features, including MAC-based authentication, access control lists (ACLs), and port security.
                    </li>
                    <li>
                      High Availability & Redundancy - Minimize downtime with features like link aggregation, spanning tree protocol (STP), and dual power supply options.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>
                    Energy Efficiency & Scalability
                  </h3>
                  <ul>
                    <li>
                      Green Networking Technology - Reduce operational costs with energy-efficient switch designs that optimize power consumption without compromising performance.
                    </li>
                    <li>
                      Scalable & Future-Ready - Easily expand your network with stackable switches and modular options that grow with your business needs.
                    </li>

                  </ul>
                </div>
                <div>
                  <h3>
                    Seamless Integration
                  </h3>
                  <ul>
                    <li>Interoperability with Existing Infrastructure - Our switches are designed for seamless compatibility with routers, firewalls, and other networking devices, ensuring smooth deployment.</li>
                    <li>
                      Cloud & Remote Management - Monitor and control your network remotely with cloud-managed switches that provide real-time insights and configurations.
                    </li>

                  </ul>
                </div>

                <div>
                  <h3>
                    Why Choose Our Switches?
                  </h3>
                  <ul>
                    <li> High-performance networking for enterprises, data centers, and SMBs.                    </li>
                    <li>   Advanced security and reliability to protect critical business data.</li>

                    <li>   Cost-effective solutions with energy-efficient designs.</li>
                    <li>Seamless scalability to future-proof your network.</li>
                  </ul>
                </div>


              </div>

            </div>
            <div id="Router" className={`b-tab ${activeTab === "Router" ? "active" : ""}`}>
              <h3>Router</h3>
              <div className="row">
                <div className="col-md-8 ">
                  <span className="justify-content-center">



                    <h4>
                      Routers - Secure, High-Performance, and Scalable Connectivity
                    </h4>
                    <p>
                      Empower your business with high-speed, reliable, and secure network routing solutions. Our advanced routers are designed to optimize connectivity, ensure seamless communication, and enhance network security for businesses of all sizes.
                    </p>
                  </span>
                </div>
                <div className="col-md-4">

                  <img src={routerpro} alt="routerpro" />

                </div>
                <div className="">
                  <h3>
                    Comprehensive Routing Solutions
                  </h3>
                  <ul>
                    <li>Wired & Wireless Routers - Choose from high-performance wired routers for stable connectivity or advanced wireless routers with Wi-Fi 6 and mesh networking for superior coverage.</li>
                    <li>
                      Enterprise-Grade & SMB Routers - Whether you need a compact solution for small businesses or high-performance enterprise routers for large-scale deployments, we have the perfect fit.
                    </li>
                    <li>
                      Multi-WAN & Load Balancing - Enhance network reliability with multi-WAN support, allowing automatic failover and load balancing for uninterrupted internet access.
                    </li>
                  </ul>

                </div>

                <div className="">
                  <h3>
                    Optimized Performance & Security
                  </h3>
                  <ul>
                    <li>
                      High-Speed Data Routing - Benefit from fast and efficient data transfer with support for Gigabit Ethernet, 10G, and beyond for high-bandwidth applications.
                    </li>

                    <li>
                      Advanced Firewall & VPN Capabilities - Secure your business with built-in firewall protection, deep packet inspection (DPI), and encrypted VPN tunnels for secure remote access.
                    </li>
                    <li>
                      Quality of Service (QoS) & Traffic Prioritization - Optimize bandwidth allocation to ensure mission-critical applications get the priority they need
                    </li>
                  </ul>

                </div>

                <div className="">
                  <h3>
                    Next-Gen Features for Modern Networks
                  </h3>
                  <ul>
                    <li>
                      High-Speed Data Routing - Benefit from fast and efficient data transfer with support for Gigabit Ethernet, 10G, and beyond for high-bandwidth applications.
                    </li>

                    <li>
                      AI-Powered Network Optimization - Intelligent traffic management and automated performance tuning for seamless connectivity.
                    </li>
                    <li>
                      Dual-Band & Tri-Band Wi-Fi - Experience lag-free performance with advanced Wi-Fi technology for smooth video conferencing, VoIP, and cloud applications.
                    </li>
                  </ul>

                </div>


                <div className="">
                  <h3>
                    Scalability & Future-Ready Connectivity
                  </h3>
                  <ul>
                    <li>
                      Modular & Scalable Design - Expand your network effortlessly with modular routers and software-defined networking (SDN) support.</li>

                    <li>
                      IoT & Smart Device Compatibility - Seamlessly integrate with IoT devices and smart office solutions for a connected ecosystem.</li>
                    <li>
                      5G & LTE-Enabled Routers - Ensure business continuity with high-speed cellular backup for failover connectivity.</li>
                  </ul>

                </div>
                <div className="">
                  <h3>
                    Why Choose Our Routers?
                  </h3>
                  <ul>
                    <li>
                      High-speed, reliable connectivity for businesses of all sizes.
                    </li>

                    <li>
                      Enhanced security & encryption to safeguard sensitive data.
                    </li>

                    <li>
                      Seamless integration with existing network infrastructure.</li>
                    <li>
                      Scalable solutions to future-proof your network.
                    </li>
                  </ul>

                </div>
              </div>
            </div>
            <div id="Servers" className={`b-tab ${activeTab === "Servers" ? "active" : ""}`}>
              <h3>Servers</h3>
              <div className="row">
                <div className="col-md-8">

                  <h4>
                    Servers - Reliable, High-Performance Computing Solutions
                  </h4>
                  <p>
                    Power your IT infrastructure with enterprise-grade server solutions designed for performance, security, and scalability. At Square Network Solutions, we provide cutting-edge server technologies that support virtualization, cloud computing, big data processing, and mission-critical enterprise applications.
                  </p>

                </div>
                <div className="col-md-4">
                  <img src={serverpro} alt="server" />
                </div>

              </div>
              <div className="row">
                <div className="">
                  <h3>Comprehensive Server Solutions</h3>
                  <ul>
                    <li>
                      Rack, Tower & Blade Servers - Choose from high-density rack servers, space-efficient tower servers, or scalable blade server architectures.
                    </li>
                    <li>
                      Virtualization & Software-Defined Infrastructure - Optimize computing resources with VMware, Hyper-V, and software-defined networking (SDN) solutions.
                    </li>
                    <li>
                      Enterprise Storage & High Availability - Ensure seamless operations with RAID configurations, redundant power supplies, and failover clustering for 24/7 uptime.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>Optimized Performance & Security</h3>
                  <ul>
                    <li>
                      Multi-Core Processing Power - Leverage the latest Intel Xeon & AMD EPYC processors for high-speed computing.
                    </li>
                    <li>
                      ECC Memory & NVMe SSDs - Minimize downtime with error-correcting RAM and ultra-fast NVMe storage for high-speed data retrieval.
                    </li>
                    <li>
                      Integrated Cybersecurity & Server Hardening - Protect critical data with TPM security modules, encrypted storage, and role-based access control.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3> Server Management & Remote Infrastructure Support</h3>
                  <ul>
                    <li>
                      Remote Infrastructure Management (RIMS) - Real-time monitoring, asset management, patch automation, and performance optimization.
                    </li>
                    <li>
                      Cloud & Hybrid Cloud Deployment - Scalable on-premise, hybrid, and multi-cloud server solutions.
                    </li>
                    <li>
                      Disaster Recovery & Business Continuity - Reduce risks with automated backups, high-availability clusters, and DR solutions.

                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Scalability & Future-Ready Solutions
                  </h3>
                  <ul>
                    <li>
                      Edge Computing & AI-Optimized Servers - Deploy edge servers for IoT and AI workloads with GPU acceleration.
                    </li>
                    <li>
                      Software-Defined Storage (SDS) & Hyperconverged Infrastructure (HCI) - Consolidate computing, storage, and networking into a single, scalable solution.
                    </li>
                    <li>
                      Green IT & Energy-Efficient Servers - Reduce power consumption with intelligent cooling and dynamic resource allocation.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Why Choose Square Network Solutions?
                  </h3>
                  <ul>
                    <li>
                      Over 25 years of expertise in IT hardware solutions.
                    </li>
                    <li>
                      Trusted by 1000+ customers, including SMEs, enterprises, and government sectors.
                    </li>
                    <li>
                      ISO 9001:2015 Certified for quality IT infrastructure solutions.
                    </li>
                    <li>
                      Global partnerships with 50+ leading OEMs.
                    </li>
                    <li>
                      End-to-end IT lifecycle support - from procurement to after-sales service.
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

    </Fragment>
  );
};

export default Product;
