import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Mail />
                            </div>
                            <h3>Mail Here</h3>
                           
                            <p><a href="mailto:info@startp.com">info@aeehpress.com</a></p>
                        </div>
                    </div>

                

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Phone />
                            </div>
                            <h3>Call Here</h3>
                            <p><a href="tel:+1-(650)650-7275">+1-(650)650-7275</a></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  