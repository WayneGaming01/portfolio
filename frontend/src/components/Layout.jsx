import React, { useEffect } from "react";
import Header from "./Header";
import FooterDiv from "./Footer";
import moment from "moment";

const Layout = ({ children }) => {
  return (
    <>
      <main className="overflow-auto flex flex-col h-screen z-[99]">
        <header>
          <Header />
        </header>
        <section className="flex-1 flex-col flex">
          <div className="overflow-auto">{children}</div>
          <div className="relative bottom-0">
            <footer>
              <FooterDiv />
            </footer>
            <section className="copyright">
              <span className="copyright-text">
                © Copyright {moment().format("YYYY")} muidev.me
              </span>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default React.memo(Layout);
