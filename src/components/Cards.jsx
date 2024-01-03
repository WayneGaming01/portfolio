import "../index.scss";

const Cards = () => {
  const cards = [
    {
      id: 1,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
        >
          <g
            id="SVGRepo_bgCarrier"
            strokeWidth="0"
            transform="translate(0,0), scale(1)"
          ></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="1.152"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.9868 5L12 12.4149L10.0132 19.8297"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
      name: "Frontend Developer",
      description: "",
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
      name: "Backend Developer",
      description: "",
    },
  ];

  return (
    <>
      <div className="grid">
        {cards.map((cards) => (
          <div className="card" key={cards.id}>
            <span className="icon">{cards.icon}</span>
            <h4>{cards.name}</h4>
            <p>{cards.description}</p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>

              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
