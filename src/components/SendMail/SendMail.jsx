import { useForm, ValidationError } from "@formspree/react";
import style from "./send-mail.module.css";

export default function SendMail() {
  const [state, handleSubmit] = useForm("mwkgrqne");
  if (state.succeeded) {
    return
  }

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
            <h2 className="fw-bolder">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              {/* <div className="from-group">
                <input type="text" placeholder="Enter Your Name" />
              </div> */}
              <div className="from-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="from-group">
                <textarea name="message" placeholder="Your Message"></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" disabled={state.submitting}>
                Submit Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
