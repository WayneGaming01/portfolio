import { Link } from "react-router-dom";

const FooterDiv = () => {
  const links = [
    {
      id: 1,
      url: "https://github.com/WayneGaming01",
      name: "github",
      className: "",
      link: true,
    },
    {
      id: 2,
      url: "",
      name: "muichirooooooooooooooooooooooo - Discord",
      className: "!normal-case !no-underline",
      link: false,
    },
  ];

  return (
    <>
      <div className="shadow-inner footer p-[2rem] text-[#121212]">
        <div className="footer-contacts">
          <h1 className="footer-text">Feel free to ask.</h1>
          <p className="footer-description mb-[15px]">
            Thank you for reaching out. I am currently looking for freelance
            work. Feel free to contact me about anything.
          </p>
          <Link className="mailto-footer" to="mailto:justin@muidev.me">
            justin@muidev.me
          </Link>
        </div>
        <div className="footer-links">
          <span className="footer-_text">Links</span>
          <div>
            {links.map((links) => (
              <li key={links.id}>
                {links.link ? (
                  <Link target="_blank" to={links.url}>
                    <span className={"footer-link " + links.className}>
                      {links.name}
                    </span>
                  </Link>
                ) : (
                  <span className={"footer-link " + links.className}>
                    {links.name}
                  </span>
                )}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterDiv;
