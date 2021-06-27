import React from 'react';
import * as Icon from 'react-feather';
import PageBanner from '../components/PageBanner'
const ContactInfo = () => {
    return (
        <div>
            <PageBanner pageTitle="Contact Me"/>
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                               <a target="_blank" href="mailto:saisrinu.lakkakula@gmail.com"><Icon.Mail /></a> 
                            </div>
                            <h3>Email me</h3>
                           
                            <p><a target="_blank" href="mailto:saisrinu.lakkakula@gmail.com">saisrinu.lakkakula@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <a target="_blank" href="https://www.linkedin.com/in/sai-srinivas-lakkakula-344317bb/"><Icon.Linkedin /></a>
                                
                            </div>
                            <h3>Linkendin</h3>
                            <p><a target="_blank" href="https://www.linkedin.com/in/sai-srinivas-lakkakula-344317bb/">@saisrinivaslakkakula</a></p>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <a target="_blank" href="https://www.facebook.com/saisrinivas.lakkakula/"><Icon.Facebook /></a>
                                
                            </div>
                            <h3>Facebook</h3>
                            <p><a target="_blank" href="https://www.facebook.com/saisrinivas.lakkakula/">@saisrinivas.lakkakula</a></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ContactInfo;  