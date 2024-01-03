import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faProjectDiagram,
  faInfo,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const pagesURL = [
    {
      id: 1,
      name: "Home",
      icon: <FontAwesomeIcon icon={faHome} />,
      url: "#home",
      ID: "home-href",
    },
    {
      id: 2,
      name: "About",
      icon: <FontAwesomeIcon icon={faProjectDiagram} />,
      url: "#about",
      ID: "about-href",
    },
    {
      id: 3,
      name: "Projects",
      icon: <FontAwesomeIcon icon={faProjectDiagram} />,
      url: "#projects",
      ID: "projects-href",
    },
    {
      id: 4,
      name: "Contact",
      icon: <FontAwesomeIcon icon={faInfo} className="w-4 h-4" />,
      url: "#contact",
      ID: "contact-href",
    },
  ];

  return (
    <>
      <div className="flex items-center header bg-[#fff] w-full shadow-lg">
        <div className="header-div flex justify-between items-center w-full">
          <div className="title flex items-center text-[#121212]">
            <span className="one">
              <Link to="/">Mui</Link>
            </span>
            <span className="two">Full-stack Developer</span>
          </div>
          <div className="links-div">
            {pagesURL.map((link) => (
              <li className="links" key={link.id}>
                <Link to={link.url} id={link.ID}>
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          <div className="bars" id="headerBars">
            <FontAwesomeIcon
              icon={faBars}
              color="#121212"
              className="bars-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
