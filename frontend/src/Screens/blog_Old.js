import React from 'react';
import Footer from "../components/Footer";
import PageBannerForBlog from '../components/PageBannerForBlog'; 
import BlogSidebar from '../components/BlogSideBar';
import Header from '../components/Header';
 
const BlogDetails = () => {
    return (
        <div>
            <PageBannerForBlog  AuthorName="Mohamed E Fayad" profession="Professor,
San Jose State University & International Golden Gate Research Group" /> 

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog-image/MFayad.jpeg" alt="image" />
                                </div>
                                <div className="article-content">
                                <BlogSidebar />
                                </div>
                                
                            {/*<div className="startp-post-navigation">
                                <div className="comments-area">
                                    <h3 className="comments-title">2 Comments:</h3>

                                    <ol className="comment-list">
                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/client-image/client1.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Jones</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        April 24, 2019 at 10:59 am
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>

                                                <div className="reply">
                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                </div>
                                            </article>

                                            <ol className="children">
                                                <li className="comment">
                                                    <article className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/client-image/client2.jpg" className="avatar" alt="image" />
                                                                <b className="fn">Steven Smith</b>
                                                                <span className="says">says:</span>
                                                            </div>
                
                                                            <div className="comment-metadata">
                                                                April 24, 2019 at 10:59 am
                                                            </div>
                                                        </footer>
                
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>
                
                                                        <div className="reply">
                                                            <a href="#" className="comment-reply-link">Reply</a>
                                                        </div>
                                                    </article>
                                                </li>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src="/images/client-image/client3.jpg" className="avatar" alt="image" />
                                                                    <b className="fn">Sarah Taylor</b>
                                                                    <span className="says">says:</span>
                                                                </div>
                    
                                                                <div className="comment-metadata">
                                                                    April 24, 2019 at 10:59 am 
                                                                </div>
                                                            </footer>
                    
                                                            <div className="comment-content">
                                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                            </div>
                    
                                                            <div className="reply">
                                                                <a href="#" className="comment-reply-link">Reply</a>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </ol>
                                        </li>

                                        <li className="comment">
                                            <article className="comment-body">
                                                <footer className="comment-meta">
                                                    <div className="comment-author vcard">
                                                        <img src="/images/client-image/client4.jpg" className="avatar" alt="image" />
                                                        <b className="fn">John Doe</b>
                                                        <span className="says">says:</span>
                                                    </div>

                                                    <div className="comment-metadata">
                                                        April 24, 2019 at 10:59 am 
                                                    </div>
                                                </footer>

                                                <div className="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>

                                                <div className="reply">
                                                    <a href="#" className="comment-reply-link">Reply</a>
                                                </div>
                                            </article>

                                            <ol className="children">
                                                <li className="comment">
                                                    <article className="comment-body">
                                                        <footer className="comment-meta">
                                                            <div className="comment-author vcard">
                                                                <img src="/images/client-image/client5.jpg" className="avatar" alt="image" />
                                                                <b className="fn">James Anderson</b>
                                                                <span className="says">says:</span>
                                                            </div>
                
                                                            <div className="comment-metadata">
                                                                April 24, 2019 at 10:59 am
                                                            </div>
                                                        </footer>
                
                                                        <div className="comment-content">
                                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                        </div>
                
                                                        <div className="reply">
                                                            <a href="#" className="comment-reply-link">Reply</a>
                                                        </div>
                                                    </article>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>

                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>

                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked 
                                                <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" cols="45" rows="5" maxLength="65525" required="required"></textarea>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" name="url" />
                                            </p>
                                            <p className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                                <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post Comment" />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                        <div className="article-content">
                                    <blockquote>
                                            <p>Dr. Fayad is a full professor of Computer Engineering at SJSU since 2002. Previously, he was J.D. Edwards professor of Software Engineering in Computer Science & Engineering (UNE-Lincoln 1999 -2002) and an associate professor at Computer Engineering (UNV1995-1999). He has 15+ years of industrial experience plus ten years as a software architect in companies, such as McDonnell Douglas and Philips Research Laboratory. He is a recognized authority in software engineering</p>
                                    </blockquote>
    
                                        <p>Dr. M.E. Fayad is a full professor of Computer Engineering at San Jose State University since 2002. Previously, he was  J.D. Edwards professor of Software Engineering in the Department of Computer Science & Engineering at the University of Nebraska-Lincoln , from 1999 to 2002. Between 1995 and 1999, he was an associate professor of Computer Science and a faculty of Computer Engineering at the University of Nevada. He has more than fifteen years of industrial experience in addition to ten years as a software architect in companies, such as McDonnell Douglas and Philips Research Laboratory. His reputation has grown by his achievements in the industry—he has been an IEEE distinguished speaker, an associate editor, editorial advisor, a columnist for The Communications of the ACM (his column is Thinking Objectively), a columnist for Al-Ahram Egyptians Newspaper (2 million subscribers), an editor-in-chief for IEEE Computer Society Press—Computer Science and Engineering Practice Press (1995–1997), a general chair of IEEE/Arab Computer Society International Conference on Computer Systems and Applications (AICCSA 2001), Beirut, Lebanon, June 26–29, 2001, and the founder and president of Arab Computer Society (ACS) from April 2004 to April 2007.</p>
    
                                        <p>Dr. Fayad is a well-known and recognized authority in the domain of theory and the applications of software engineering. Fayad’s publications are in the very core, archival journals and conferences in the field of software engineering. Dr. Fayad was a guest editor on 11 theme issues: CACM’s OO Experiences, October 1995, IEEE Computer’s Managing OO Software Development Projects, September 1996, CACM’s Software Patterns, October 1996, CACM’s OO Application Frameworks, October 1997, ACM Computing Surveys—OO Application Frameworks, March 2000, IEEE Software—Software Engineering in-the-small, September/October 2000, and International Journal on Software Practice and Experiences, July 2001, IEEE Transaction on Robotics and Automation—Object-Oriented Methods for Distributed Control Architecture, October 2002, Annals of Software Engineering Journal—OO Web-Based Software Engineering, October 2002, Journal of Systems and Software, Elsevier, Software Architectures and Mobility, July 2010, and Pattern Languages: Addressing the Challenges, the Journal of Software, Practice and Experience, March–April 2012.</p>
    
                                        
    
                                        <p>Dr. Fayad has published more than 300 high-quality articles, which include profound and well-cited reports (more than 50 in number) in reputed journals, and over 100 advanced articles in refereed conferences, more than 25 well-received and cited journal columns, 16 blogged columns, 11 well-cited theme issues in prestigious journals and flagship magazines, 24 different workshops in very respected conferences, over 125 tutorials, seminars, and short presentations in more than 25 States in USA since 1978 and 30 different countries, such as,  Hong Kong (April 1996), Canada (12 times), Bahrain (2 times), Saudi Arabia (4 times), Egypt (25 times), Lebanon (2), UAE (2 times), Qatar (2 times), Portugal (October 1996, July 1999), Finland (2 times), UK (3 times), Holland (3 times), Germany (4 times), Mexico (October 1998), Argentina (3 times), Chile (2000), Peru (2002),  Spain (2002), Brazil (2004), China (4), Morocco (March 2017), and Poland (April 2017). He is the founder of 7 new online journals, NASA Red Team Review of QRAS and NSF-USA Research Delegations’ Workshops to Argentina and Chile, Expert witness for Alcatel for major cases between Alcatel (Won) and Cisco 2000-2002 and patent infringement matter -- iRobot Corporation v. Hoover, Inc., and more than ten authoritative books, of which 3 of them are translated into different languages such as Chinese and over 8 books currently in progress. Dr. Fayad is also filling for 8 new, valuable, and innovative patents and has developed over 800 stable software patterns and brought a  breakthrough in software engineering field. Dr. Fayad earned an MS and a PhD in computer science from the University of Minnesota at Minneapolis. His research topic was OO Software Engineering: Problems and Perspectives. He is the lead author of several classic Wiley books: Transition to OO Software Development, August 1998, Building Application Frameworks, September 1999, Implementing Application Frameworks, September 1999, Domain-Specific Application Frameworks, October 1999, and several books by CRC Press, Taylor & Francis Group: Software Patterns, Knowledge Maps, and Domain Analysis, December 2014 and Stable Analysis Pattern for Software and Systems (May 2017), Stable Design Pattern for Software and Systems (September 2017). Several new books in progress for Taylor & Francis—Unified Business Rules Standard (UBRS) (expected to be January 2018), Software Architecture On Demand, and Unified Software Engineering Reuse (USER), Unified Software Engineering (USE) in progress (expected to be published during 2018) and several books in production and progress with German Omniscriptum Publishing Group (expected to be published during 2017 and 2018).</p>
    
                        </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;