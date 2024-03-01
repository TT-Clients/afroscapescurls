import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import Button from '@mui/material/Button';
import PhoneInput from 'react-phone-number-input'
import emailjs from '@emailjs/browser'
import SendIcon from '@mui/icons-material/Send';

const Contact: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    emailjs.init('user_5aNeYLvMcIJvX8yXbk5tx')
    //info@afroscapescurls.org
    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(name, email, phone, message)
        const formData = new FormData()

        const serviceID = 'default_service'
        const templateID = 'template_183Hqqzf'
        emailjs.send(serviceID, templateID, { name, email, phone, message }).then(
            () => {
                setName('');
                setEmail('');
                setPhone('')
                setMessage('')
            },
            (err) => {
                //btn.value = 'Send Email';
                alert(JSON.stringify(err))
            }
        )
    }


    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Reach out to the house!</h3>
                </div>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name="from_name"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                />
                                <div className="invalid-feedback" data-sb-feedback="name:required">
                                    A name is required.
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="reply_to"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email *"
                                    required
                                />
                                <div className="invalid-feedback" data-sb-feedback="email:required">
                                    An email is required.
                                </div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">
                                    Email is not valid.
                                </div>
                            </div>
                            <div className="form-group mb-md-0">
                                {/* <input className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}  id="phone" name="phone" type="tel" placeholder="Your Phone" /> */}

                                <PhoneInput
                                    defaultCountry="US"
                                    useNationalFormatForDefaultCountryValue="true"
                                    className="form-control"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(val) => {
                                        const phoneNum: string = val ? val : ''
                                        setPhone(phoneNum)
                                    }}
                                />
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
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
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
                        <Button variant="contained" endIcon={<SendIcon />} size="large">
                          {submitted ? 'Message Sent!' : 'Send Message'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
