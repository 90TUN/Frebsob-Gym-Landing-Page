import React, { useState } from "react";

const Sidebar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id); // Default to the first section

  const scrollToSection = (id) => {
    const contentContainer = document.querySelector(".content");
    const section = document.getElementById(id);

    if (section && contentContainer) {
      const sectionTop = section.getBoundingClientRect().top;
      const containerTop = contentContainer.getBoundingClientRect().top;
      const scrollPosition =
        sectionTop - containerTop + contentContainer.scrollTop;

      contentContainer.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      // Set the clicked section as active
      setActiveSection(id);
    } else {
      console.error("Section or content container not found");
    }
  };

  return (
    <div className="sidebar">
      <ul>
        {sections.map((section, index) => (
          <li
            key={section.id}
            className={activeSection === section.id ? "active" : ""}
            onClick={() => scrollToSection(section.id)}
            style={{ paddingLeft: "16px", paddingRight: "16px" }}
          >
            {index + 1}. <span className="section-title">{section.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
