import React from 'react';
import PageBannerForBlog from '../components/PageBannerForBlog'; 
import BlogSidebar from '../components/BlogSideBar';
import {Container,Row,Col} from 'react-bootstrap'
 
const BlogDetails = () => {
    return (
        <div>
            <PageBannerForBlog  AuthorName="Mohamed E Fayad" profession="Professor, San Jose State University & International Golden Gate Research Group" /> 
            <Container >
                <Row >
                <Col>
                    <p className="article-image">
                        <img src="/images/blog-image/MFayad.jpeg" alt="image" />
                    </p>
                    <Row>
                        <Col>
                        <div className="article-content">
                                <BlogSidebar />
                        </div>
                        </Col>
                    </Row>
                </Col>
                <Col >
                    <div className="article-content">
                    <blockquote>
                            <p>Dr. Fayad is a full professor of Computer Engineering at SJSU since 2002. Previously, he was J.D. Edwards professor of Software Engineering in Computer Science & Engineering (UNE-Lincoln 1999 -2002) and an associate professor at Computer Engineering (UNV1995-1999). He has 15+ years of industrial experience plus ten years as a software architect in companies, such as McDonnell Douglas and Philips Research Laboratory. He is a recognized authority in software engineering</p>
                    </blockquote>
                        <p>Dr. M.E. Fayad is a full professor of Computer Engineering at San Jose State University since 2002. Previously, he was  J.D. Edwards professor of Software Engineering in the Department of Computer Science & Engineering at the University of Nebraska-Lincoln , from 1999 to 2002. Between 1995 and 1999, he was an associate professor of Computer Science and a faculty of Computer Engineering at the University of Nevada. He has more than fifteen years of industrial experience in addition to ten years as a software architect in companies, such as McDonnell Douglas and Philips Research Laboratory. His reputation has grown by his achievements in the industry—he has been an IEEE distinguished speaker, an associate editor, editorial advisor, a columnist for The Communications of the ACM (his column is Thinking Objectively), a columnist for Al-Ahram Egyptians Newspaper (2 million subscribers), an editor-in-chief for IEEE Computer Society Press—Computer Science and Engineering Practice Press (1995–1997), a general chair of IEEE/Arab Computer Society International Conference on Computer Systems and Applications (AICCSA 2001), Beirut, Lebanon, June 26–29, 2001, and the founder and president of Arab Computer Society (ACS) from April 2004 to April 2007.</p>
                        <p>Dr. Fayad is a well-known and recognized authority in the domain of theory and the applications of software engineering. Fayad’s publications are in the very core, archival journals and conferences in the field of software engineering. Dr. Fayad was a guest editor on 11 theme issues: CACM’s OO Experiences, October 1995, IEEE Computer’s Managing OO Software Development Projects, September 1996, CACM’s Software Patterns, October 1996, CACM’s OO Application Frameworks, October 1997, ACM Computing Surveys—OO Application Frameworks, March 2000, IEEE Software—Software Engineering in-the-small, September/October 2000, and International Journal on Software Practice and Experiences, July 2001, IEEE Transaction on Robotics and Automation—Object-Oriented Methods for Distributed Control Architecture, October 2002, Annals of Software Engineering Journal—OO Web-Based Software Engineering, October 2002, Journal of Systems and Software, Elsevier, Software Architectures and Mobility, July 2010, and Pattern Languages: Addressing the Challenges, the Journal of Software, Practice and Experience, March–April 2012.</p>
                        <p>Dr. Fayad has published more than 300 high-quality articles, which include profound and well-cited reports (more than 50 in number) in reputed journals, and over 100 advanced articles in refereed conferences, more than 25 well-received and cited journal columns, 16 blogged columns, 11 well-cited theme issues in prestigious journals and flagship magazines, 24 different workshops in very respected conferences, over 125 tutorials, seminars, and short presentations in more than 25 States in USA since 1978 and 30 different countries, such as,  Hong Kong (April 1996), Canada (12 times), Bahrain (2 times), Saudi Arabia (4 times), Egypt (25 times), Lebanon (2), UAE (2 times), Qatar (2 times), Portugal (October 1996, July 1999), Finland (2 times), UK (3 times), Holland (3 times), Germany (4 times), Mexico (October 1998), Argentina (3 times), Chile (2000), Peru (2002),  Spain (2002), Brazil (2004), China (4), Morocco (March 2017), and Poland (April 2017). He is the founder of 7 new online journals, NASA Red Team Review of QRAS and NSF-USA Research Delegations’ Workshops to Argentina and Chile, Expert witness for Alcatel for major cases between Alcatel (Won) and Cisco 2000-2002 and patent infringement matter -- iRobot Corporation v. Hoover, Inc., and more than ten authoritative books, of which 3 of them are translated into different languages such as Chinese and over 8 books currently in progress. Dr. Fayad is also filling for 8 new, valuable, and innovative patents and has developed over 800 stable software patterns and brought a  breakthrough in software engineering field. Dr. Fayad earned an MS and a PhD in computer science from the University of Minnesota at Minneapolis. His research topic was OO Software Engineering: Problems and Perspectives. He is the lead author of several classic Wiley books: Transition to OO Software Development, August 1998, Building Application Frameworks, September 1999, Implementing Application Frameworks, September 1999, Domain-Specific Application Frameworks, October 1999, and several books by CRC Press, Taylor & Francis Group: Software Patterns, Knowledge Maps, and Domain Analysis, December 2014 and Stable Analysis Pattern for Software and Systems (May 2017), Stable Design Pattern for Software and Systems (September 2017). Several new books in progress for Taylor & Francis—Unified Business Rules Standard (UBRS) (expected to be January 2018), Software Architecture On Demand, and Unified Software Engineering Reuse (USER), Unified Software Engineering (USE) in progress (expected to be published during 2018) and several books in production and progress with German Omniscriptum Publishing Group (expected to be published during 2017 and 2018).</p>
                    </div>
                </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default BlogDetails;