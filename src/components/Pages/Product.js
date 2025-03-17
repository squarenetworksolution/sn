import React, { Fragment, useState } from "react";
import "../../components/css/product.css";
import switc from "../../assets/mobile_switches.png";
import routerpro from "../../assets/router_product.png";
import serverpro from "../../assets/server_pro.png";
import wifirouter from "../../assets/wifi_router.png";
import firewall from "../../assets/firewall_security.png";
import loadbalance from "../../assets/load_balance.png";
import networkattachedstorage from "../../assets/nework_attached_storage.png";
import serverdcs from "../../assets/data_center_solution.png";
import Surveillance from "../../assets/security_surveillance_solution.jpg";
import collaboration from "../../assets/collaboration.jpg";



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
            <div>
              <button
                onClick={() => setActiveTab("wifi")}
                className={`b-nav-tab ${activeTab === "wifi" ? "active" : ""}`}
              >
                Wifi
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveTab("firewall")}
                className={`b-nav-tab ${activeTab === "firewall" ? "active" : ""}`}>
                Firewalls
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveTab("loadbalancer")}
                className={`b-nav-tab ${activeTab === "loadbalancer" ? "active" : ""}`}
              >
                Load Balancers
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveTab("nas")}
                className={`b-nav-tab ${activeTab === "nas" ? "active" : ""}`}
              >
                NAS
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveTab("serverdcs")}
                className={`b-nav-tab ${activeTab === "serverdcs" ? "active" : ""}`}
              >
                Servers & DCS
              </button>
            </div>

            <div>
              <button
                onClick={() => setActiveTab("Security")}
                className={`b-nav-tab ${activeTab === "Security" ? "active" : ""}`}
              >
                Security
              </button>
            </div>
            <div>
              <button
                onClick={() => setActiveTab("enterprise")}
                className={`b-nav-tab ${activeTab === "enterprise" ? "active" : ""}`}
              >
                Collaboration 
              </button>
            </div>

          </div>

          <div className="col-md-9">
            <div id="switches" className={`b-tab ${activeTab === "switches" ? "active" : ""}`}>
              <div className="row">
                <h3>Switches</h3>
                <div className="col-md-6 justify_content_center">
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
                    <li>
                      <b>

                      Managed & Unmanaged Switches -
                      </b> 
                       Choose from flexible solutions that fit your IT requirements, from simple plug-and-play unmanaged switches to fully managed switches with advanced control and monitoring features.</li>
                    <li>
                      <b>
                      Layer 2 & Layer 3 Switching -
                      </b>
                       Improve network efficiency with advanced Layer 2 switching for seamless data forwarding and Layer 3 switching for optimized routing and traffic management.</li>
                    <li>
                      <b>
                      Power over Ethernet (PoE) Support -
                      </b>
                       Easily power IP phones, cameras, and wireless access points with PoE-enabled switches, reducing cable clutter and simplifying deployment.</li>
                  </ul>
                </div>
                <div>
                  <h3>
                    Enhanced Performance & Security
                  </h3>
                  <ul>
                    <li>
                      <b>

                      Advanced VLAN & QoS Features -
                      </b>
                       Ensure network segmentation, traffic prioritization, and seamless data flow with Virtual LANs (VLAN) and Quality of Service (QoS) capabilities.
                    </li>
                    <li>
                      <b>
                      Robust Security & Access Control -

                      </b>
                       Protect your network with advanced security features, including MAC-based authentication, access control lists (ACLs), and port security.
                    </li>
                    <li>
                      <b>
                      High Availability & Redundancy -
                      </b>
                       Minimize downtime with features like link aggregation, spanning tree protocol (STP), and dual power supply options.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>
                    Energy Efficiency & Scalability
                  </h3>
                  <ul>
                    <li>
                      <b>

                      Green Networking Technology -
                      </b>
                       Reduce operational costs with energy-efficient switch designs that optimize power consumption without compromising performance.
                    </li>
                    <li>
                      <b>
                       Scalable & Future-Ready -
                      </b>
                       Easily expand your network with stackable switches and modular options that grow with your business needs.
                    </li>

                  </ul>
                </div>
                <div>
                  <h3>
                    Seamless Integration
                  </h3>
                  <ul>
                    <li>
                      <b>

                      Interoperability with Existing Infrastructure -
                      </b>
                       Our switches are designed for seamless compatibility with routers, firewalls, and other networking devices, ensuring smooth deployment.</li>
                    <li>
                      <b>

                      </b>
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
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>Router</h3>
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
                <div className="col-md-8 justify_content_center">

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
            <div id="wifi" className={`b-tab ${activeTab === "wifi" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>wifi</h3>

                  <h4>
                    Seamless Connectivity with High-Performance Wireless Access Points
                  </h4>
                  <p>
                    At Square Network Solutions, we provide cutting-edge Wireless Access Points (WAPs) to ensure reliable, secure, and high-speed connectivity for businesses of all sizes. Our solutions are designed to enhance network efficiency, scalability, and performance.
                  </p>

                </div>
                <div className="col-md-4">
                  <img src={wifirouter} alt="wifirouter" />
                </div>

              </div>
              <div className="row">
                <div className="">
                  <h3>
                    Why Choose Our Wireless Access Points?
                  </h3>
                  <ul>
                    <li>
                      Enterprise-Grade Performance - High-speed Wi-Fi with superior coverage and low latency.
                    </li>
                    <li>
                      Wi-Fi 6 & Next-Gen Technologies - Future-ready solutions for faster data transfer and better device handling.
                    </li>
                    <li>
                      Seamless Roaming & Mesh Networking - Ensures uninterrupted connectivity across large areas.
                    </li>
                    <li>
                      Advanced Security Features - WPA3 encryption, intrusion detection, and guest access controls.
                    </li>
                    <li>
                      Cloud & On-Premise Management - Flexible control options for centralized network monitoring.
                    </li>
                    <li>
                      Scalability & Customization - Solutions for SMEs, corporate offices, campuses, and industrial environments.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Indoor Wireless Access Points
                  </h3>
                  <ul>
                    <li>

                      High-performance APs for offices, retail spaces, and educational institutions
                    </li>
                    <li>

                      Dual-band and tri-band options for optimized network traffic.
                    </li>
                    <li>
                      MU-MIMO and Beamforming technologies for efficient multi-user connectivity.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Outdoor Wireless Access Points
                  </h3>
                  <ul>
                    <li>
                      Weather-resistant and rugged APs for extended coverage in open areas. </li>
                    <li>
                      Long-range connectivity with adaptive signal strength.
                    </li>
                    <li>
                      Mesh networking for seamless outdoor-to-indoor transitions.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Wi-Fi 6 & Next-Gen Access Points
                  </h3>
                  <ul>
                    <li>
                      Increased capacity, reduced latency, and better power efficiency.
                    </li>
                    <li>
                      Ideal for high-density environments such as stadiums, auditoriums, and smart cities.
                    </li>
                    <li>
                      OFDMA & BSS Coloring to minimize interference and boost efficiency.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Industries We Serve
                  </h3>
                  <ul>
                    <li>
                      Corporate Offices - Secure, high-speed connectivity for employees and guests.
                    </li>
                    <li>
                      Education & Universities - Campus-wide Wi-Fi for seamless learning.
                    </li>
                    <li>
                      Healthcare - Reliable networking for medical devices and patient care.
                    </li>
                    <li>
                      Retail & Hospitality - Enhanced customer experience with fast, secure Wi-Fi.
                    </li>
                    <li>
                      Industrial & Warehousing - Optimized connectivity for IoT and automation.
                    </li>

                  </ul>
                </div>
              </div>

            </div>
            <div id="firewall" className={`b-tab ${activeTab === "firewall" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>
                    Firewalls (Next-Gen, UTM, Cloud-Based)
                  </h3>

                  <h4>
                    Advanced Firewall Solutions for Robust Network Security
                  </h4>

                  <p>
                    At Square Network Solutions, we provide cutting-edge firewall solutions designed to safeguard your network from cyber threats, unauthorized access, and malicious attacks. Whether you need an on-premise Next-Generation Firewall (NGFW), a Unified Threat Management (UTM) system, or a Cloud-Based Firewall, we have the right security solution for your business.
                  </p>

                </div>

                <div className="col-md-4">
                  <img src={firewall} alt="firewall" />
                </div>

              </div>
              <div className="row">
                <div className="">
                  <h3>
                    Why Choose Our Firewalls?
                  </h3>
                  <ul>
                    <li>
                      Comprehensive Threat Protection - Blocks malware, ransomware, and intrusion attempts.
                    </li>
                    <li>
                      Next-Gen Security Features - Deep packet inspection, sandboxing, and application-layer filtering.
                    </li>
                    <li>
                      AI-Driven Threat Intelligence - Proactive defense against evolving cyber threats.
                    </li>
                    <li>
                      Seamless Integration - Compatible with existing IT infrastructure and cloud environments.
                    </li>
                    <li>
                      Scalable & Customizable - Solutions for SMEs, enterprises, and data centers.
                    </li>
                    <li>
                      24/7 Monitoring & Support - Continuous security updates and real-time threat detection.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Next-Generation Firewalls (NGFW)
                  </h3>
                  <ul>
                    <li>
                      Granular control over applications, users, and content.
                    </li>

                    <li>
                      Deep packet inspection (DPI) for advanced threat detection.
                    </li>

                    <li>
                      Integrated Intrusion Prevention System (IPS) to stop attacks in real time.

                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Unified Threat Management (UTM) Firewalls
                  </h3>
                  <ul>
                    <li>
                      All-in-one security solutions for SMEs and branch offices.
                    </li>
                    <li>
                      Includes firewall, antivirus, anti-spam, content filtering, and VPN.
                    </li>
                    <li>
                      Simplified security management with centralized control.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Cloud-Based Firewalls
                  </h3>
                  <ul>
                    <li>
                      Scalable security for remote offices, hybrid cloud, and SaaS applications.
                    </li>
                    <li>
                      Zero-trust architecture for securing endpoints and cloud environments.
                    </li>
                    <li>
                      Global threat intelligence and real-time analytics for enhanced security.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Web & Application Firewalls
                  </h3>
                  <ul>
                    <li>
                      Protection against web-based threats, SQL injections, and DDoS attacks.
                    </li>
                    <li>
                      Secure access to business-critical applications.
                    </li>
                    <li>
                      Load balancing and traffic management for improved performance.
                    </li>



                  </ul>
                </div>

                <div className="">
                  <h3>
                    Industries We Serve
                  </h3>
                  <ul>
                    <li>
                      Corporate Enterprises - Secure business networks from cyber threats.
                    </li>
                    <li>
                      Government & Defense - Ensure compliance and national security.
                    </li>
                    <li>
                      Healthcare & Pharmaceuticals - Protect sensitive patient data and medical devices.
                    </li>
                    <li>
                      Financial Services - Safeguard online transactions and prevent fraud.
                    </li>
                    <li>
                      IT & Telecom - Secure data centers and cloud services
                    </li>

                  </ul>
                </div>
              </div>

            </div>
            <div id="loadbalancer" className={`b-tab ${activeTab === "loadbalancer" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>
                    load Balancers
                  </h3>

                  <h4>
                    Enhance Network Performance with Intelligent Load Balancers
                  </h4>

                  <p>
                    At Square Network Solutions, we provide high-performance Load Balancers designed to optimize traffic distribution, improve application availability, and ensure seamless user experiences. Whether you're managing data centers, cloud environments, or enterprise networks, our load balancing solutions enhance efficiency, reliability, and security.
                  </p>

                </div>

                <div className="col-md-4">
                  <img src={loadbalance} alt="load_balancer" />
                </div>

              </div>
              <div className="row">
                <div className="">
                  <h3>
                    Why Choose Our Load Balancers?
                  </h3>
                  <ul>
                    <li>
                      Optimized Traffic Distribution - Balances network traffic across multiple servers to prevent overload.
                    </li>
                    <li>
                      High Availability & Fault Tolerance - Ensures continuous uptime with failover capabilities.
                    </li>
                    <li>
                      Security & DDoS Protection - Built-in security features to protect against cyber threats.
                    </li>
                    <li>
                      Application Acceleration - Reduces latency and enhances application performance.
                    </li>
                    <li>
                      Scalable & Flexible - Supports on-premises, cloud, and hybrid environments.
                    </li>
                    <li>
                      SSL Offloading - Offloads SSL encryption to improve server efficiency.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Hardware Load Balancers
                  </h3>
                  <ul>
                    <li>
                      Enterprise-grade load balancers for data centers and mission-critical applications.
                    </li>

                    <li>
                      Layer 4 & Layer 7 traffic management for optimized network performance.
                    </li>

                    <li>
                      Redundancy and failover support for continuous uptime.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Software Load Balancers
                  </h3>
                  <ul>
                    <li>
                      Scalable software-based solutions for virtualized environments.
                    </li>
                    <li>
                      Ideal for cloud, hybrid, and multi-cloud architectures.
                    </li>
                    <li>
                      Customizable traffic distribution policies for application-specific needs.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Cloud Load Balancers
                  </h3>
                  <ul>
                    <li>
                      Global load balancing for distributed applications and cloud workloads.
                    </li>
                    <li>
                      AI-driven traffic management with real-time analytics.
                    </li>
                    <li>
                      Auto-scaling capabilities for handling variable traffic loads.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Application Load Balancers (ALB)
                  </h3>
                  <ul>
                    <li>
                      Layer 7 intelligent routing for optimizing web and application traffic.
                    </li>
                    <li>
                      Secure API gateway integration for modern applications.
                    </li>
                    <li>
                      Web Application Firewall (WAF) for protection against cyber threats.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Global Server Load Balancing (GSLB)
                  </h3>
                  <ul>
                    <li>
                      Manages traffic across multiple data centers worldwide.
                    </li>
                    <li>
                      Ensures disaster recovery and business continuity.
                    </li>
                    <li>
                      Intelligent DNS-based traffic distribution for seamless user experiences.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Industries We Serve
                  </h3>
                  <ul>
                    <li>
                      Enterprise IT & Data Centers - Optimize traffic distribution and improve server efficiency.
                    </li>
                    <li>
                      Cloud & SaaS Providers - Ensure high availability for cloud-based applications.
                    </li>
                    <li>
                      Financial Services - Secure online transactions with high-speed processing
                    </li>
                    <li>
                      Gaming & Streaming - Reduce latency for a seamless user experience.
                    </li>
                    <li>
                      Healthcare & E-Commerce - Maintain uptime for critical applications and transactions.
                    </li>

                  </ul>
                </div>
              </div>

            </div>
            <div id="nas" className={`b-tab ${activeTab === "nas" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>
                    Network Attached Storage (NAS)
                  </h3>

                  <h4>
                    Reliable & Scalable Network Attached Storage (NAS) Solutions
                  </h4>

                  <p>
                    At Square Network Solutions, we offer high-performance NAS solutions designed to provide centralized, secure, and scalable storage for businesses of all sizes. Whether you need data sharing, backup, or cloud integration, our NAS devices ensure seamless access and management of your critical business data.
                  </p>

                </div>

                <div className="col-md-4">
                  <img src={networkattachedstorage} alt="network_attached_storage" />
                </div>

              </div>
              <div className="row">
                <div className="">
                  <h3>
                    Why Choose Our NAS Solutions
                  </h3>
                  <ul>
                    <li>
                      Centralized Data Storage - Manage files securely in one location for easy access and collaboration.
                    </li>
                    <li>
                      High-Speed Performance - Optimized data transfer rates for efficient storage operations.
                    </li>
                    <li>
                      Scalability & Expansion - Expandable storage to meet growing business demands.
                    </li>
                    <li>
                      Advanced Security Features - Encryption, access control, and ransomware protection.
                    </li>
                    <li>
                      Cloud & Remote Access - Seamless integration with cloud storage and remote file access.
                    </li>
                    <li>
                      Backup & Disaster Recovery - Reliable data protection with automated backups and snapshots.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Enterprise NAS Solutions
                  </h3>
                  <ul>
                    <li>
                      Enterprise-grade load balancers for data centers and mission-critical applications.

                    </li>

                    <li>
                      Multi-bay configurations with SSD caching for optimized performance.
                    </li>

                    <li>
                      Redundant power supplies and hot-swappable drives for maximum uptime.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    SMB & Office NAS Solutions
                  </h3>
                  <ul>
                    <li>
                      Cost-effective storage for small businesses and workgroups.
                    </li>
                    <li>
                      User-friendly management interface with easy file sharing and backup.
                    </li>
                    <li>
                      RAID support for data protection and redundancy.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Cloud-Integrated NAS
                  </h3>
                  <ul>
                    <li>
                      Hybrid cloud storage with synchronization between on-premise and cloud environments.
                    </li>
                    <li>
                      Access data securely from anywhere with remote access capabilities.
                    </li>
                    <li>
                      AI-driven analytics for intelligent data management.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Surveillance NAS Solutions
                  </h3>
                  <ul>
                    <li>
                      Optimized NAS storage for IP camera recordings and video surveillance systems.
                    </li>
                    <li>
                      High-speed data writing for continuous recording and playback
                    </li>
                    <li>
                      AI-powered video analytics and motion detection storage.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Backup & Disaster Recovery NAS
                  </h3>
                  <ul>
                    <li>
                      Automated scheduled backups to protect business-critical data.
                    </li>
                    <li>
                      Snapshot technology for quick data restoration.
                    </li>
                    <li>
                      Offsite and multi-version backup support for added security.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Industries We Serve
                  </h3>
                  <ul>
                    <li>
                      Corporate & Enterprise IT - Centralized data storage for seamless collaboration.
                    </li>
                    <li>
                      Healthcare & Pharmaceuticals - Secure storage for patient records and research data.
                    </li>
                    <li>
                      Government & Education - Scalable NAS solutions for public institutions.
                    </li>
                    <li>
                      Media & Entertainment - High-performance NAS for video editing and content creation.
                    </li>
                    <li>
                      Retail & E-Commerce - Secure storage for transaction and customer data.</li>

                  </ul>
                </div>
              </div>

            </div>
            <div id="serverdcs" className={`b-tab ${activeTab === "serverdcs" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>
                    Servers & Data Center Solutions
                  </h3>
                  <h4>
                    High-Performance Servers & Data Center Solutions for Enterprise Needs
                  </h4>


                  <p>
                    At Square Network Solutions, we offer high-performance NAS solutions designed to provide centralized, secure, and scalable storage for businesses of all sizes. Whether you need data sharing, backup, or cloud integration, our NAS devices ensure seamless access and management of your critical business data.
                  </p>

                </div>

                <div className="col-md-4">
                  {/* <div id="serverdcs" className={`b-tab ${activeTab === "serverdcs" ? "active" : ""}`}> */}
                  <img src={serverdcs} alt="serverdcs" />
                  {/* </div> */}

                </div>
                <div className="row">
                  <div className="">
                    <h3>
                      Why Choose Our Servers & Data Center Solutions?
                    </h3>
                    <ul>
                      <li> Enterprise-Grade Performance - High-speed processing, reliability, and scalability.   </li>
                      <li>Modular & Scalable Infrastructure - Designed for future expansion and flexibility.</li>
                      <li> Energy-Efficient Solutions - Optimized power consumption for reduced operational costs.</li>
                      <li> Robust Security & Compliance - Advanced threat protection and regulatory compliance.</li>
                      <li>Cloud & Hybrid Integration - Seamless integration with cloud and virtualization environments.</li>
                      <li>24/7 Support & Maintenance - Expert assistance for maximum uptime and performance.</li>

                    </ul>
                  </div>

                  <div className="">
                    <h3>
                      Enterprise Servers
                    </h3>
                    <ul>
                      <li>
                        Enterprise-Grade Performance - High-speed processing, reliability, and scalability.

                      </li>
                      <li>
                        Blade Servers - Compact, modular design for scalable IT infrastructure.
                      </li>
                      <li>
                        Tower Servers - Reliable, space-efficient solutions for small businesses.
                      </li>
                      <li>
                        Hyper-Converged Infrastructure (HCI) - Integrated computing, storage, and networking in one platform.
                      </li>

                    </ul>
                  </div>
                  <div className="">
                    <h3>
                      Data Storage Solutions
                    </h3>
                    <ul>
                      <li>
                        Storage Area Network (SAN) - High-speed storage for mission-critical workloads.
                      </li>
                      <li>
                        Network Attached Storage (NAS) - Scalable, centralized storage for easy data access.
                      </li>
                      <li>
                        Disaster Recovery & Backup - Secure solutions for data protection and recovery.</li>


                    </ul>
                  </div>
                  <div className="">
                    <h3>
                      Virtualization & Cloud Integration
                    </h3>
                    <ul>
                      <li>
                        Private & Hybrid Cloud Solutions - Scalable cloud infrastructure for businesses.
                      </li>
                      <li>
                        Server Virtualization - VMware, Hyper-V, and Citrix-based virtualization for optimized resource utilization.
                      </li>
                      <li>
                        Software-Defined Data Centers (SDDC) - Flexible, automated data center management.
                      </li>

                    </ul>
                  </div>
                  <div className="">
                    <h3>
                      Data Center Infrastructure
                    </h3>
                    <ul>
                      <li>
                        Cooling & Power Management - Energy-efficient cooling and backup power solutions.
                      </li>
                      <li>
                        Rack & Enclosure Solutions - Secure and modular racking for optimized space utilization.
                      </li>
                      <li>
                        Network & Security Infrastructure - High-speed connectivity and firewall protection.
                      </li>

                    </ul>
                  </div>
                  <div className="">
                    <h3>
                      Managed IT & Data
                    </h3>
                    <ul>
                      <li>
                        Center Services Remote Infrastructure Management (RIMs) - Proactive monitoring and management.
                      </li>
                      <li>
                        Annual Maintenance Contracts (AMC) - Comprehensive support and troubleshooting.
                      </li>
                      <li>
                        Data Center Migration & Optimization - Seamless transitions with minimal downtime.
                      </li>

                    </ul>
                  </div>
                  <div className="">
                    <h3>
                      Industries We Serve
                    </h3>
                    <ul>
                      <li>
                        Enterprises & Corporate IT - Scalable solutions for business-critical applications.
                      </li>
                      <li>
                        Government & Defense - Secure and compliant IT infrastructure.
                      </li>
                      <li>
                        Healthcare & Research - High-performance servers for medical data and AI-driven analytics.
                      </li>
                      <li>
                        Banking & Financial Services - Reliable, secure data processing and transactions.
                      </li>
                      <li>
                        Media & Entertainment - High-speed storage and processing for content creation.
                      </li>

                    </ul>
                  </div>

                </div>


              </div>

              <div id="Security" className={`b-tab ${activeTab === "Security" ? "active" : ""}`}>
                <div className="row">
                  <div className="col-md-8 justify_content_center">

                    <h3>
                      Security & Surveillance Solutions
                    </h3>

                    <p>
                      At Square Network Solutions, we provide cutting-edge Security & Surveillance solutions to protect your business from cyber threats, unauthorized access, and physical security risks. Our advanced systems ensure real-time monitoring, intrusion prevention, and secure identity management for enterprises, government agencies, and critical infrastructure.
                    </p>

                  </div>

                  <div className="col-md-4">
                    <img src={networkattachedstorage} alt="network_attached_storage" />
                  </div>

                </div>
                <div className="row">
                  <div className="">
                    <h3>Why Choose Our Security & Surveillance Solutions?</h3>
                    <li>Multi-Layered Protection - Combines physical security and cybersecurity measures.</li>
                    <li>
                      Real-Time Threat Detection - AI-powered monitoring and automated alerts.
                    </li>
                    <li>
                      Advanced Cyber Defense - Next-gen firewalls, EDR, and SIEM integration.
                    </li>
                    <li>
                      Scalable & Customizable - Tailored security solutions for different industries.
                    </li>
                    <li>
                      Cloud & On-Premises Security - Hybrid solutions for maximum flexibility.
                    </li>
                    <li>
                      24/7 Monitoring & Support - Proactive security operations and rapid response.
                    </li>
                  </div>

                </div>
              </div>

            </div>
            <div id="Security" className={`b-tab ${activeTab === "Security" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>
                    Security & Surveillance Solutions
                  </h3>

                  <h4>
                    Comprehensive Security & Surveillance Solutions for Your Business
                  </h4>

                  <p>
                    At Square Network Solutions, we provide cutting-edge Security & Surveillance solutions to protect your business from cyber threats, unauthorized access, and physical security risks. Our advanced systems ensure real-time monitoring, intrusion prevention, and secure identity management for enterprises, government agencies, and critical infrastructure.
                  </p>

                </div>

                <div className="col-md-4">
                  <img src={Surveillance} alt="Surveillance" />
                </div>

              </div>
              <div className="row">
                <div className="">
                  <h3>
                    Why Choose Our Security & Surveillance Solutions?
                  </h3>
                  <ul>
                    <li>
                      Multi-Layered Protection - Combines physical security and cybersecurity measures.
                    </li>
                    <li>
                      Real-Time Threat Detection - AI-powered monitoring and automated alerts.
                    </li>
                    <li>
                      Advanced Cyber Defense - Next-gen firewalls, EDR, and SIEM integration.
                    </li>
                    <li>
                      Advanced Security Features - Encryption, access control, and ransomware protection.

                    </li>
                    <li>
                      Scalable & Customizable - Tailored security solutions for different industries.
                    </li>
                    <li>
                      Cloud & On-Premises Security - Hybrid solutions for maximum flexibility.
                    </li>
                    <li>
                      24/7 Monitoring & Support - Proactive security operations and rapid response.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Firewalls & Intrusion Prevention Systems (IPS)
                  </h3>
                  <ul>
                    <li>
                      Next-Generation Firewalls (NGFW) for advanced threat protection.
                    </li>

                    <li>
                      Intrusion Prevention Systems (IPS) to detect and prevent cyberattacks.
                    </li>

                    <li>
                      Redundant power supplies and hot-swappable drives for maximum uptime.

                    </li>
                    <li>


                      Deep Packet Inspection (DPI) for granular traffic analysis.
                    </li>
                    <li>
                      AI-powered threat intelligence to block evolving cyber threats.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Endpoint Detection & Response (EDR)
                  </h3>
                  <ul>
                    <li>
                    Real-time monitoring and threat hunting for endpoints.
                    </li>
                    <li>
                    Behavioral analysis to detect and respond to advanced threats.
                    </li>
                    <li>
                    Automated remediation and rollback for ransomware attacks.
                    </li>
                    <li>
Cloud-managed security for remote workforces.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Access Control & Identity Management
                  </h3>
                  <ul>
                    <li>
                    Biometric authentication and multi-factor authentication (MFA).
                    </li>
                    <li>
                    Privileged Access Management (PAM) for secure IT environments.
                    </li>
                    <li>
                    Role-based access control (RBAC) to enforce security policies.
                    </li>
                    <li>
                    Zero Trust security model for enhanced protection.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  CCTV Surveillance Systems
                  </h3>
                  <ul>
                    <li>
                    High-definition (HD) and IP-based surveillance cameras.
                    </li>
                    <li>
                    AI-powered video analytics for real-time threat detection.
                    </li>
                    <li>
                    Motion detection, facial recognition, and intrusion alerts.
                    </li>
                    <li>
                    Cloud-based video storage and remote access.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Security Information & Event Management (SIEM)
                  </h3>
                  <ul>
                    <li>
                    Centralized log management for threat intelligence.
                    </li>
                    <li>
                    Real-time event correlation and anomaly detection.
                    </li>
                    <li>
                    AI-powered security analytics for rapid incident response
                    </li>
                    <li>
                    Compliance reporting for regulatory frameworks (ISO, GDPR, etc.)
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                    Industries We Serve
                  </h3>
                  <ul>
                    <li>
                    Corporate Enterprises - End-to-end security for IT infrastructure and offices.
                    </li>

                    <li>
                    Government & Defense - Secure national infrastructure with compliance-driven security
                    </li>
                    <li>
                    Healthcare & Pharmaceuticals - Protect patient data and medical facilities.
                    </li>
                    <li>
                    Financial Services - Prevent fraud and secure digital transactions.
                    </li>
                    <li>
                    Retail & Hospitality - Enhance customer safety and prevent data breaches.
                      </li>

                  </ul>
                </div>
              </div>

            </div>
            <div id="enterprise" className={`b-tab ${activeTab === "enterprise" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>
                  Enterprise Collaboration & Communication
                  </h3>

                  <h4>
                  Enhancing Business Connectivity with Advanced Communication Solutions
                  </h4>

                  <p>
                  At Square Network Solutions, we offer cutting-edge Enterprise Collaboration & Communication solutions designed to improve workplace efficiency, enhance team connectivity, and streamline business operations. Our solutions enable seamless communication through IP telephony, video conferencing, and unified communication platforms tailored for businesses of all sizes.
                  </p>

                </div>

                <div className="col-md-4">
                  <img src={collaboration} alt="Surveillance" />
                </div>

              </div>
              <div className="row">
                <div className="">
                  <h3>
                  Why Choose Our Collaboration & Communication Solutions?
                  </h3>
                  <ul>
                    <li>
                    Seamless Business Communication - Uninterrupted connectivity across multiple channels.
                    </li>
                    <li>
                    HD Voice & Video Quality - Crystal-clear communication for meetings and remote work.
                    </li>
                    <li>
                    Scalable & Cloud-Enabled - Flexible solutions for on-premise, cloud, and hybrid environments.
                    </li>
                    <li>
                    Secure & Encrypted Communication - End-to-end protection for data and calls.
                    </li>
                    <li>
                    Easy Integration with Existing Systems - Compatible with CRM, ERP, and IT networks.
                    </li>
                    <li>
                      Cloud & On-Premises Security - Hybrid solutions for maximum flexibility.
                   
                    </li>
                    <li>
                    24/7 Support & Monitoring - Ensuring maximum uptime and efficiency.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  IP Telephony & VoIP Solutions
                  </h3>
                  <ul>
                    <li>
                    Advanced VoIP systems for cost-effective voice communication.
                    </li>

                    <li>
                    Cloud-based and on-premise PBX solutions.
                    </li>

                    <li>
                    Multi-site connectivity with high-quality audio transmission.
                    </li>
                    <li>
                    SIP Trunking for secure and scalable voice communication.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Video Conferencing Systems
                  </h3>
                  <ul>
                    <li>
                    HD video and audio conferencing solutions for businesses.
                    </li>
                    <li>
                    Integrated meeting platforms for remote collaboration.
                    </li>
                    <li>
                    AI-powered noise cancellation and real-time transcription.
                    </li>
                    <li>Multi-device compatibility for seamless communication
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Unified Communication Platforms     </h3>
                  <ul>
                    <li>
                    One-stop solution for voice, video, messaging, and collaboration.
                    </li>
                    <li>

                    Presence management, call forwarding, and team collaboration tools.
                    </li>
                    <li>
                    Cloud-based or on-premise deployment for business flexibility.
                    </li>
                    <li>
                    Integration with Microsoft Teams, Zoom, Webex, and other platforms.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Call Center & Help Desk Solutions
                  </h3>
                  <ul>
                    <li>
Intelligent call routing and auto-attendant features.
                    </li>
                    <li>
                    IVR (Interactive Voice Response) for automated customer interactions
                    </li>
                    <li>
                    CRM integration for seamless customer experience.
                    </li>
                    <li>
                    Performance analytics and reporting for improved service delivery.
                    </li>
                  </ul>
                </div>

              

                <div className="">
                  <h3>
                    Industries We Serve
                  </h3>
                  <ul>
                    <li>
                    Corporate Enterprises - Secure and efficient communication for business operations.
                    </li>

                    <li>
                    Government & Public Sector - Reliable communication infrastructure for public services.
                    </li>
                    <li>
                    Healthcare & Telemedicine - Secure voice and video solutions for patient engagement.
                    
                    </li>
                    <li>
                    Banking & Financial Services - Compliance-driven communication solutions.
                    </li>
                    <li>
                    Retail & Customer Support - Call center solutions for superior customer service.
                     
                      </li>

                  </ul>
                </div>
              </div>

            </div>
            <div id="cloud" className={`b-tab ${activeTab === "cloud" ? "active" : ""}`}>
              <div className="row">
                <div className="col-md-8 justify_content_center">
                  <h3>
                  Cloud & Virtualization Solutions
                  </h3>

                  <h4>
                  Empower Your Business with Scalable Cloud & Virtualization Solutions
                  </h4>

                  <p>
                  At Square Network Solutions, we provide industry-leading Cloud and Virtualization solutions to help businesses enhance scalability, security, and operational efficiency. Our solutions support digital transformation by enabling flexible, cost-effective, and high-performance IT infrastructure.
                  </p>

                </div>

                <div className="col-md-4">
                  <img src={collaboration} alt="Surveillance" />
                </div>

              </div>
              <div className="row">
                <div className="">
                  <h3>
                  Why Choose Our Collaboration & Communication Solutions?
                  </h3>
                  <ul>
                    <li>
                    Seamless Business Communication - Uninterrupted connectivity across multiple channels.
                    </li>
                    <li>
                    HD Voice & Video Quality - Crystal-clear communication for meetings and remote work.
                    </li>
                    <li>
                    Scalable & Cloud-Enabled - Flexible solutions for on-premise, cloud, and hybrid environments.
                    </li>
                    <li>
                    Secure & Encrypted Communication - End-to-end protection for data and calls.
                    </li>
                    <li>
                    Easy Integration with Existing Systems - Compatible with CRM, ERP, and IT networks.
                    </li>
                    <li>
                      Cloud & On-Premises Security - Hybrid solutions for maximum flexibility.
                   
                    </li>
                    <li>
                    24/7 Support & Monitoring - Ensuring maximum uptime and efficiency.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  IP Telephony & VoIP Solutions
                  </h3>
                  <ul>
                    <li>
                    Advanced VoIP systems for cost-effective voice communication.
                    </li>

                    <li>
                    Cloud-based and on-premise PBX solutions.
                    </li>

                    <li>
                    Multi-site connectivity with high-quality audio transmission.
                    </li>
                    <li>
                    SIP Trunking for secure and scalable voice communication.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Video Conferencing Systems
                  </h3>
                  <ul>
                    <li>
                    HD video and audio conferencing solutions for businesses.
                    </li>
                    <li>
                    Integrated meeting platforms for remote collaboration.
                    </li>
                    <li>
                    AI-powered noise cancellation and real-time transcription.
                    </li>
                    <li>Multi-device compatibility for seamless communication
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Unified Communication Platforms     </h3>
                  <ul>
                    <li>
                    One-stop solution for voice, video, messaging, and collaboration.
                    </li>
                    <li>

                    Presence management, call forwarding, and team collaboration tools.
                    </li>
                    <li>
                    Cloud-based or on-premise deployment for business flexibility.
                    </li>
                    <li>
                    Integration with Microsoft Teams, Zoom, Webex, and other platforms.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h3>
                  Call Center & Help Desk Solutions
                  </h3>
                  <ul>
                    <li>
Intelligent call routing and auto-attendant features.
                    </li>
                    <li>
                    IVR (Interactive Voice Response) for automated customer interactions
                    </li>
                    <li>
                    CRM integration for seamless customer experience.
                    </li>
                    <li>
                    Performance analytics and reporting for improved service delivery.
                    </li>
                  </ul>
                </div>

              

                <div className="">
                  <h3>
                    Industries We Serve
                  </h3>
                  <ul>
                    <li>
                    Corporate Enterprises - Secure and efficient communication for business operations.
                    </li>

                    <li>
                    Government & Public Sector - Reliable communication infrastructure for public services.
                    </li>
                    <li>
                    Healthcare & Telemedicine - Secure voice and video solutions for patient engagement.
                    
                    </li>
                    <li>
                    Banking & Financial Services - Compliance-driven communication solutions.
                    </li>
                    <li>
                    Retail & Customer Support - Call center solutions for superior customer service.
                     
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
