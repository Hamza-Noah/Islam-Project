import { useForm, ValidationError } from "@formspree/react";
import style from "./send-mail.module.css";

export default function SendMail() {
  const [state, handleSubmit] = useForm("xbjnpvaz");

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
            {state.succeeded ? (
              <div className={style.successMessage}>
                <h2 className="fw-bolder">Message Sent Successfully!</h2>
                <p>Thank you for contacting us.</p>
              </div>
            ) : (
              <>
                <h2 className="fw-bolder mb-4">Contact Form</h2>
                <form onSubmit={handleSubmit}>
                <div className="from-group mb-3 w-75 mx-auto">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="form-control"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="from-group mb-3 w-75 mx-auto">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-control"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="from-group mb-3 w-75 mx-auto">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="form-control"
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <button type="submit" className="bg-primary text-white fw-bolder border-0 rounded w-50" disabled={state.submitting}>
                    Submit your message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
