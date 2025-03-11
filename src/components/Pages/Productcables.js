import React, { useState } from "react";

const Productcables = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "TAB-1", heading: "Heading of tab one", content: "Content of tab one" },
    { id: "tab2", label: "TAB-2", heading: "Heading of tab two", content: "Content of tab two" },
    { id: "tab3", label: "TAB-3", heading: "Heading of tab three", content: "Content of tab three" },
    { id: "tab4", label: "TAB-4", heading: "Heading of tab four", content: "Content of tab four" },
  ];

  return (
    <div className="tab-container">
      {/* Tab Menu */}
      <div className="tab-menu">
        <ul>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <a
                href="#"
                className={`tab-a ${activeTab === tab.id ? "active-a" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      {tabs.map((tab) => (
        <div key={tab.id} className={`tab ${activeTab === tab.id ? "tab-active" : ""}`}>
          <h2>{tab.heading}</h2>
          <p>{tab.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Productcables;
