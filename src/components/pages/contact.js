import React, { useState } from 'react'
import Footer from '../footer/footer'
import '../../styles/contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('');
    const [btnsuccess, setBtnSuccess] = useState('');
    const [btnerror, setBtnError] = useState('');
    const [btnText, setBtnText] = useState('Submit')
    

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // Form Validation
        if(!name || name === " "){
           return setNameError('*Name is required')
        }else{
            setNameError('')
        } 

        const verified = /\S+@\S+\.\S+/.test(email) 
        if(!email || verified === false){
          return setEmailError('*Enter a valid email')
        }else{
            setEmailError('')
        }

        if(!message || message === " "){
            return setMessageError('*Message is blank')
        }else{
            setMessageError('')
        }

        if(name && email && message){
            setBtnText('Sending...')
        }
        //Preparing the mail message body
        const templateParams = {
            contact_number: Math.random() * 100000 | 0,
            user_name: name,
            user_email: email,
            message: message
        }
        emailjs.send('portfolio_contact', 'portfolio_contact', templateParams, 'user_dEyBAFeF6wkeYp8eAsFU1')
            .then((response) => {
                setBtnSuccess('Your message was sent successfully!');
                setBtnText('Submit')
                setBtnError('');
                setName('');
                setEmail('');
                setMessage('');
            }, (err) => {
                setBtnError('*Something went wrong, please try again later');
                setBtnSuccess('')
        })
        
    }
    
    return (
        <div className="contact_container">
            <div className="container cont_holder">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h3>Get In Touch</h3>
                    <p className="contact_intro">If you have any fun project that you want me to help build or you feel that
                       I will be a great addition to your team.</p>
                    <p className="contact_intro">Feel free to reach out to me. I'm always looking to work on fun projects.</p>
                    <div className="social_links">
                        <a href="https://github.com/its-nedum" target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span></a>
                        <a href="https://www.twitter.com/its_nedum" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></a>
                        <a href="https://www.linkedin.com/in/chinedu-emesue" target="_blank" rel="noopener noreferrer"><span className="fab fa-linkedin"></span></a>
                        <a href="https://www.facebook.com/itsnedum" target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook"></span></a>
                    </div>
                    </div>
                    <form className="col-sm-12 col-md-6" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" id="fullname" className="form-control" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required=""/>
                                    <p className="error_msg">{nameError}</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" className="form-control" placeholder="john.doe@gmail.com" value={email} onChange={e => setEmail(e.target.value)} required=""/>
                                    <p className="error_msg">{emailError}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows="8" placeholder="Hello..." value={message} onChange={e => setMessage(e.target.value)} required=""></textarea>
                                    <p className="error_msg">{messageError}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="submit_btn">
                                <input type="submit" className="form-control btn btn-primary" value={btnText} onClick={handleSubmit} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="btnsuccess_msg">{btnsuccess}</p>
                                <p className="btnerror_msg">{btnerror}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
