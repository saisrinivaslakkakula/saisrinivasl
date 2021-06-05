import React from 'react'

const SearchBar = () => {
    return (
        <div>
                <div className="woocommerce-topbar">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-7 col-sm-7">
                            <div className="woocommerce-result-count">
                                <p>Showing 1-8 of 14 results</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-5 col-sm-5">
                            <div className="woocommerce-topbar-ordering">
                                <select className="form-select">
                                    <option value="1">Sort by Popularity</option>
                                    <option value="2">Sort by Average Rating</option>
                                    <option value="3">Sort by Latest</option>
                                    <option value="4">Sort by price: Low to High</option>
                                    <option value="5">Sort by price: High to Low</option>
                                    <option value="6">Sort by New</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SearchBar
