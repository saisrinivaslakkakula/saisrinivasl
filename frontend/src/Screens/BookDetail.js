import React, { useEffect } from 'react'
import PageBanner from '../components/PageBanner';
import BlogSidebar from '../components/BlogSideBar';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { getBookDetails } from '../actions/bookActions'
const BookDetail = ({ match }) => {
    //const [book, setBook] = useState('')
    const id = match.params.id
    const bookDetails = useSelector(state => state.bookDetails)
    const { books } = bookDetails
    //console.log(books)
    const dispatch = useDispatch()
    useEffect(() => {
        //console.log(id)
        dispatch(getBookDetails(id))
    }, [dispatch])

    return (
        <div>
            <PageBanner pageTitle="Book Details" />
            {books.bookName && (

                <Container >
                    <Row style={{ marginTop: "20px" }} >
                        <Col md={4}>
                            <div >
                                <img style={{ height: '650px', width: "100%" }} alt="Book Image" src={books.bookImage} role="img"></img>
                            </div>
                            <blockquote>
                                <Row>
                                    <Col md={6}>
                                        <ReactStars count={5} value={4.5} isHalf size={24} activeColor="#ffd700" />
                                    </Col>
                                    <Col md={6}>
                                        <Link to="#">

                                            <u>15 Reviews </u>

                                        </Link>
                                    </Col>

                                </Row>
                            </blockquote>

                        </Col>
                        <Col md={8}>
                            <Row>
                                <h1 className="widget-title">
                                    {books.bookName}
                                </h1><hr></hr>

                            </Row>
                            <Row>
                                <Col>
                                    <h6> By {books.authorDetails.authorFirstName} {books.authorDetails.authorLastName}  </h6>
                                    {books.ISBN &&
                                        <p>{books.ISBN}</p>
                                    }

                                </Col>
                                <Col>

                                </Col>
                            </Row>
                            <Row>
                                <blockquote>
                                    <h2>USD <strong>$65</strong></h2>
                                    <a target="_blank" href="https://www.amazon.com/Stable-Analysis-Patterns-Systems-Mohamed/dp/1498702740">
                                        <Button variant='primary'> Buy</Button>
                                    </a>
                                </blockquote>
                                <div className="widget-area" id="secondary">
                                    <div className="widget widget_startp_posts_thumb">
                                        <h3 className="widget-title">Book Description</h3>
                                        <div className="article-content">
                                            <p>
                                                Software design patterns are known to play a vital role in enhancing the quality of software systems while reducing development time and cost. However, the use of these design patterns has also been known to introduce problems that can significantly reduce the stability, robustness, and reusability of software. This book introduces a new process for creating software design patterns that leads to highly stable, reusable, and cost-effective software. The basis of this new process is a topology of software patterns called knowledge maps.
                                                This book provides readers with a detailed view of the art and practice of creating meaningful knowledge maps. It demonstrates how to classify software patterns within knowledge maps according to their application rationale and nature. It provides readers with a clear methodology in the form of step-by-step guidelines, heuristics, and quality factors that simplify the process of creating knowledge maps.
                                                This book is designed to allow readers to master the basics of knowledge maps from their theoretical aspects to practical application. It begins with an overview of knowledge map concepts and moves on to knowledge map goals, capabilities, stable design patterns, development scenarios, and case studies. Each chapter of the book concludes with an open research issue, review questions, exercises, and a series of projects.

                        </p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Col>

                        <div className="startp-post-navigation">
                            <div className="comments-area">
                                <h3 className="comments-title">Reviews</h3>

                                <ol className="comment-list">
                                    <li className="comment">
                                        <article className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="/images/client-image/client1.jpg" className="avatar" alt="image" />
                                                    <b className="fn">Jane Jones</b>
                                                    <ReactStars count={5} value={4} isHalf size={12} activeColor="#ffd700" />
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    April 24, 2019 at 10:59 am
                            </div>
                                            </footer>

                                            <div className="comment-content">
                                                <p>Very nice Book for SE Graduates. Simple and easy explaination.</p>
                                            </div>


                                        </article>
                                    </li>

                                    <li className="comment">
                                        <article className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="/images/client-image/client4.jpg" className="avatar" alt="image" />
                                                    <b className="fn">John Doe</b>
                                                    <ReactStars count={5} value={5} isHalf size={12} activeColor="#ffd700" />
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    April 24, 2019 at 10:59 am
                                        </div>
                                            </footer>

                                            <div className="comment-content">
                                                <p>Made explaination simple. Great!</p>
                                            </div>

                                            <div className="reply">
                                                <a href="#" className="comment-reply-link">Reply</a>
                                            </div>
                                        </article>
                                    </li>
                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Write a Review</h3>

                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                    Required fields are marked
                                    <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-comment">
                                            <label>Rating</label>
                                            <ReactStars count={5} value={0} isHalf size={24} activeColor="#ffd700" />
                                        </p>
                                        <p className="comment-form-comment">
                                            <label>Review</label>
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
                                        <p className="form-submit">
                                            <input type="submit" name="submit" id="submit" className="submit" value="Post Review" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>

            )}

        </div>
    )
}

export default BookDetail
