import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap'
import BlogAreaBooks from '../components/BlogAreaBooks'

const BlogSidebar = () => {
    return (
        <div className="widget-area" id="secondary">
            <div className="widget widget_startp_posts_thumb">
                <h3 className="widget-title">Popular Publications</h3>
                <Container fluid>
                    <Row>
                        <Col md={4}>
                             <BlogAreaBooks bookName={"Stable Analysis Patterns for Systems"} BookImage={"/images/blog-image/book1.tif"}/>
                        </Col>
                        <Col>
                             <BlogAreaBooks bookName={"Stable Analysis Patterns for Systems"} BookImage={"/images/blog-image/book1.tif"}/>
                        </Col>
                        <Col>
                             <BlogAreaBooks bookName={"Stable Analysis Patterns for Systems"} BookImage={"/images/blog-image/book1.tif"}/>
                        </Col>
                    </Row>
                </Container>
                
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Interests</h3>

                <ul>
                    <li><a to={"#"}>Software, Systems</a></li>
                    <li><a to={"#"}>Application and Enterprise Frameworks</a></li>
                    <li><a to={"#"}>Software Stability</a></li>
                    <li><a to={"#"}>Software applications in Intelligent Systems</a></li>
                    <li><a to={"#"}>Robotics</a></li>
                </ul>
            </div>

            
        </div>
    )
}

export default BlogSidebar;  