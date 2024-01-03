import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Picture from "../assets/favicon.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cards from "../components/Cards";

const Home = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({});

  const links = [
    {
      id: 1,
      icon: <FontAwesomeIcon className="intro-icons" icon={faGithub} />,
      url: "https://github.com/WayneGaming01",
    },
  ];

  useEffect(() => {
    document.querySelector("#home-href").addEventListener("click", function () {
      document.querySelector("#home").scrollIntoView();
    });

    document
      .querySelector("#about-href")
      .addEventListener("click", function () {
        document.querySelector("#about").scrollIntoView();
      });

    document
      .querySelector("#projects-href")
      .addEventListener("click", function () {
        document.querySelector("#projects").scrollIntoView();
      });

    document
      .querySelector("#contact-href")
      .addEventListener("click", function () {
        document.querySelector("#contact").scrollIntoView();
      });
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/contact",
        { form },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      setMessage("");
      setName("");
      setEmail("");
      setForm({});

      setLoading(true);

      toast.success("Email successfully sent.");

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);

      navigate("/");
    } catch (err) {
      if (!err?.response) {
        return toast.error("An error just occured, please try again later.");
      }

      if (err.response?.data?.errors) {
        return toast.error(err.response?.data?.errors);
      }

      err.response?.status === 401
        ? toast.error("You are not authorized to use this.")
        : toast.error(err.response?.data?.errors);
      return;
    }
  };

  return (
    <>
      <Layout>
        <section className="home" id="home">
          <div className="intro">
            <div className="intro-body">
              <div className="imageself">
                <img
                  className="shadow-lg rounded-lg"
                  src={Picture}
                  alt="Picture"
                />
              </div>
              <div className="intro-span">
                <h1 className="intro-text">Hi, I'm Justin aka Mui</h1>
                <p className="intro-description mb-[10px]">
                  I'm a full-stack developer that self-taught. My love is
                  innovation and problem-solving based in Manila, Philippines.
                </p>
                <div className="flex flexbox items-center gap-[20px]">
                  <div className="intro-links">
                    {links.map((links) => (
                      <Link target="_blank" to={links.url} key={links.id}>
                        <button className="intro-icon items-center flex capitalize">
                          {links.icon}
                        </button>
                      </Link>
                    ))}
                  </div>
                  <div className="tech-stack">
                    <span>
                      Tech Stack | React, Tailwind, CSS, HTML, Javascript, Node
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <h1 className="section-title">About Me</h1>
          <div className="about-body">
            <h1 className="about-title">
              A passionate junior full-stack developer based in Manila,
              Philippines
            </h1>
            <p className="about-description">
              I'm an intermediate-level full-stack developer with a solid grasp
              of Javascript, HTML, CSS, React, Tailwind, and Node. I excel in
              writing functional scripts, maintaining responsive websites, and
              crafting seamless user experiences. Proficient in producing clear,
              well-optimized code and executing efficient scripts, I am also
              dedicated to staying abreast of the latest web development trends
              and technologies, striving to create solutions that are not only
              effective and efficient but also contemporary and forward-looking.
            </p>
          </div>
        </section>
        <section className="projects" id="projects">
          <h1 className="section-title">Projects</h1>
          <div className="projects-body"></div>
        </section>
        <section className="contact" id="contact">
          <h1 className="section-title">Contact</h1>
          <div className="contactform w-full flex items-center justify-center">
            <div className="contact-form">
              <form onSubmit={submitForm} id="submitForm">
                <div className="input-area mt-[1rem] mb-[1rem]">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-text"
                    placeholder="Name"
                  />
                </div>
                <div className="input-area mb-[1rem]">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-text"
                    placeholder="Email"
                  />
                </div>
                <div className="input-area mb-[.5rem]">
                  <textarea
                    name="message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="input-text"
                    style={{ height: "150px" }}
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  {loading ? (
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                  ) : (
                    <span>Send</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
