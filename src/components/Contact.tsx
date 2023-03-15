import React from 'react'
import profile from '../images/profile.jpg'

const Contact: React.FC = () => {
    
    const obj={}

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Reach out to the house!</h3>
                </div>
                <form id="contactForm">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" name="from_name" id="name" type="text" placeholder="Your Name *" required />
                                <div className="invalid-feedback" data-sb-feedback="name:required">
                                    A name is required.
                                </div>
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="reply_to" id="email" type="email" placeholder="Your Email *" required />
                                <div className="invalid-feedback" data-sb-feedback="email:required">
                                    An email is required.
                                </div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">
                                    Email is not valid.
                                </div>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" name="phone" type="tel" placeholder="Your Phone" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">
                                    A phone number is required.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    placeholder="Your Message *"
                                    data-sb-validations="required"
                                ></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">
                                    A message is required.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
