import React from "react";
import "./main.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import Genpage from "./Genpage/genpage";

function Main() {
  return (
    <div className="Main">
      <Header />
      <Genpage />
      <Footer />
    </div>
  );
}

export default Main;
