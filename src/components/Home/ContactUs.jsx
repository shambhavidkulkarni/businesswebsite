import React from "react";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <>
      <div
        className="content"
        style={{ backgroundColor: "#1f211d", color: "white" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                  <h2 className="mb-5">Contact Us</h2>

                  <form
                    className="border-right pr-5 mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          id="fname"
                          placeholder="First name"
                          style={{ backgroundColor: "#1f211d" }}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          id="lname"
                          placeholder="Last name"
                          style={{ backgroundColor: "#1f211d" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="fname"
                          id="fname"
                          placeholder="First name"
                          style={{ backgroundColor: "#1f211d" }}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="lname"
                          id="lname"
                          placeholder="Last name"
                          style={{ backgroundColor: "#1f211d" }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          placeholder="Write your message"
                          style={{ backgroundColor: "#1f211d" }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn rounded-0 py-2 px-4 mt-5"
                          style={{ backgroundColor: "darkorange" }}
                        />
                        <span className="submitting"></span>
                      </div>
                    </div>
                  </form>

                  <div id="form-message-warning mt-4"></div>
                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div>
                </div>
                <div className="col-lg-4 ml-auto">
                  <h3 className="mb-4">Let's talk about everything.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil deleniti itaque similique magni. Magni, laboriosam
                    perferendis maxime!
                  </p>
                  <p>
                    <a href="#">Read more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
