import Picture from "../assets/project1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import json from "../assets/projects.json";

const Cards = () => {
  const cards = json;

  const closeSidebar = (id) => {
    const shadowBg = document.getElementById("shadow-cards-bg-" + id);
    const sidebar = document.getElementById("cards-sidebar-" + id);

    shadowBg.classList.remove("!block");
    shadowBg.classList.add("!hidden");
    sidebar.classList.add("!right-[-835px]");
    sidebar.classList.remove("!right-[0]");

    return { shadowBg, sidebar };
  };

  const openSidebar = (id) => {
    const shadowBg = document.getElementById("shadow-cards-bg-" + id);
    const sidebar = document.getElementById("cards-sidebar-" + id);

    shadowBg.classList.add("!block");
    shadowBg.classList.remove("!hidden");
    sidebar.classList.add("!right-[0]");
    sidebar.classList.remove("!right-[-835px]");

    return { shadowBg, sidebar };
  };

  return (
    <>
      {/* Sidebar for cards */}
      {cards.map((cards) => (
        <React.Fragment key={cards.id}>
          <div
            className="z-[103] shadow-2xl cards-sidebar"
            id={"cards-sidebar-" + cards.id}
          >
            <div className="sidebar-body">
              <div className="sidebar-title">
                <div
                  className="close-sidebar"
                  onClick={() => closeSidebar(`${cards.id}`)}
                >
                  <FontAwesomeIcon
                    className="faTimesSidebar"
                    icon={faArrowRightLong}
                  />
                </div>
                <span>Back to project</span>
              </div>
              <div className="content-body">
                <div className="content-title">
                  <span>{cards.name}</span>
                  <p>
                    {cards.credentials} | {cards.date}
                  </p>
                </div>
                <div className="content-image shadow-lg">
                  <img src={`${cards.image}`} />
                </div>
                <div className="content-about">
                  <span>About</span>
                  <p>{cards.description}</p>
                </div>
                <div className="content-stack">
                  {cards.stack.map((stack, index) => (
                    <span key={index}>{stack}</span>
                  ))}
                </div>
                <div className="content-links">
                  <Link to={cards.url}>
                    <button>Visit Link</button>
                  </Link>
                  <Link to={cards.githubURL}>
                    <button>View in Github</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => closeSidebar(`${cards.id}`)}
            className="z-[102] shadow-cards-bg"
            id={"shadow-cards-bg-" + cards.id}
          ></div>
        </React.Fragment>
      ))}

      <div className="cards">
        {cards.map((cards) => (
          <div
            onClick={() => openSidebar(`${cards.id}`)}
            className="project-card"
            key={cards.id}
          >
            <div className="content">
              <p className="date">{cards.date}</p>
              <p className="title">{cards.name}</p>
              <p className="credential">{cards.credentials}</p>
            </div>
            <img src={cards.image} alt="cover" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
