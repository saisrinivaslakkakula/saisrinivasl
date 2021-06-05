import React from 'react';
import {Link} from 'react-router-dom'
import * as Icon from 'react-feather';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div>
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link to={"/it-startup"}>
                                    
                                        <img src="/images/AeehPressLogo.png" alt="logo" />
                                    
                                </Link>
                            </div>
                            <p>Aeeh Press is a Legal entity under Aeeh ITG</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link to={"/aboutus"}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/services-1"}>
                                        Services
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to={"/error"}>
                                        Latest News
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link to={"/error"}>
                                        FAQ's
                                    </Link>
                                </li>
                                {/*<li>
                                    <Link to={"/privacy-policy"}>
                                        Privacy Policy
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to={"/terms"}>
                                        Terms & Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/team"}>
                                        Team
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    Aeeh Press, Inc, San Jose <br /> CA 95151, USA
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:startp@gmail.com">support@aeehpress.com</a>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:+1-(650)650-7275">+1-(650)650-7275</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <Link to={"#"} className="facebook" target="_blank">
                                        <Icon.Facebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="twitter" target="_blank">
                                        <Icon.Twitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="instagram" target="_blank">
                                        <Icon.Instagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} className="linkedin" target="_blank">
                                        <Icon.Linkedin />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} Aeeh ITG. All rights reserved by <a href="https://aeehitg.com/" target="_blank" rel="noreferrer">Aeeh ITG</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
        </div>
    )
     
}

export default Footer; 