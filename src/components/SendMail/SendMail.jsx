import React from 'react';
import style from "./send-mail.module.css";


export default function SendMail() {
  return (
    
      <div
            className={`${style.modal} modal fade`}
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className={`modal-dialog ${style["modal-dialog"]}`}>
              <div className={`modal-content bg-dark ${style["modal-content"]}`} >
                <div className="modal-body"></div>
                    <h2>Contact Form</h2>
              </div>
            </div>
          </div>
    )
}
