import React from "react";
import './genpage.css';
import Form from "../Form/form";

function Genpage() {
  return (
    <div className="Genpage">
        <div className="wrapper">
          <div className="twobox">
            <div className="titleBox">
              <h1 className="title">Fleet One eManager</h1>
              {/* <h1 className="title">Highest level of security.</h1> */}
              <p className="texti">Transforming the Industry's Payment Solutions</p>
              {/* <p className="texti">For assistance with your Secure Entry, please contact your company eManager adminstrator. If you are the company eManager administrator, please contact your EFS Account Manager.</p> */}
            </div>
            <Form/>
          </div>
        </div>
    </div>
  );
}

export default Genpage;