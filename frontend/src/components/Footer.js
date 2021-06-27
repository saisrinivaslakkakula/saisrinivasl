import React from 'react';
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Copyright &copy; {currentYear} Sai Srinivas Lakkakula. </p>
                                <div className="single-footer-widget">
                                    <ul className="social-links">
                                        <li>
                                            <a target="_blank" href="https://www.linkedin.com/in/sai-srinivas-lakkakula-344317bb/" className="linkedin" target="_blank">
                                                <Icon.Linkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://www.facebook.com/saisrinivas.lakkakula" className="facebook" target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://twitter.com/being_patla" className="twitter" target="_blank">
                                                <Icon.Twitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://www.instagram.com/being_patla/" className="instagram" target="_blank">
                                                <Icon.Instagram />
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    )

}

export default Footer;