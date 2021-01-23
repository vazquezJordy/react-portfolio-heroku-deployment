import React from "react";
import contactImage from "../../../static/assets/images/contact/JV-logo.jpg";
import Icons from "../../helpers/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div className="contact-page-wrapper">
      {/* Number, locaiton, email adress */}
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${contactImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="right-column">
        <div className="left-column-grid">
          <FontAwesomeIcon icon="phone" />
         
          <h3>801-229-2232</h3>
        </div>

        <div className="left-column-grid">
          <FontAwesomeIcon icon="compass" />
          
          <h3>New York, New York</h3>
        </div>

        <div className="left-column-grid">
          <FontAwesomeIcon icon="envelope" />
          
          <h3>JVCEO@jventerprises.com</h3>
        </div>
      </div>
    </div>
  );
}
