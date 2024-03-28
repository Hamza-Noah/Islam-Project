import React from "react";
import style from "./send-mail.module.css";

export default function SendMail() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-body">
            <h2>Contact Form</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
