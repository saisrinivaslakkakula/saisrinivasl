import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const MyBookCard = ({key,bookInfo}) => {
    
    return (
        <div>
            <div className="shop-area ptb-80">
            <div className="container">
                <div className="row justify-content-md-center">

                     {/* Map from here */}
                     {bookInfo&&(
                        <div className="col-lg-3 col-md-6 col-sm-6" key="1">
                            <div className="single-products">
                                <div className="products-image">
                                    <img src={bookInfo.bookImage} alt="Book Image" />                                   
                                </div>

                                <div className="products-content">
                                    <h3>
                                        <Link to={"/products/[id]"} as={`/products/id`}>
                                            <a>{bookInfo.bookName}</a>
                                        </Link>
                                    </h3>
                                    <ReactStars count={5} value={4.5} isHalf size={24} activeColor="#ffd700" />
                                    <Link to={"/BookDetail"}>
                                        <Button variant="primary"> Edit </Button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                     )}
                        
                      {/* map to here */}

                    {/* Pagination 
                    <div className="col-lg-12 col-md-12 col-sm-12">
						<div className="pagination-area">
							<nav aria-label="Page navigation">
								<ul className="pagination justify-content-center">
									<li className="page-item"><a className="page-link" href="#">Prev</a></li>
									
									<li className="page-item active"><a className="page-link" href="#">1</a></li>
									
									<li className="page-item"><a className="page-link" href="#">2</a></li>
									
									<li className="page-item"><a className="page-link" href="#">3</a></li>
									
									<li className="page-item"><a className="page-link" href="#">Next</a></li>
								</ul>
							</nav>
						</div>
					</div> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default MyBookCard
