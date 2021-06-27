import React,{useState} from 'react'
import SearchBox from '../components/searchBox'
import { Route } from 'react-router-dom'
import ProductCard from '../components/productCard'
import { useSelector,useDispatch } from 'react-redux'
import {getAllBooks,filterBooksByCategory} from '../actions/bookActions'
const PageFilters = ({ history }) => {

    const booksData = useSelector(state=>state.allBooks)
    const [books, setBooks] = useState([])
    const [q,setQ] = useState('')
    const [category,setCategory] = useState('')
    const dispatch = useDispatch()

    const HandleDynamicSearch = ()=>{
        const books = booksData.books
        var booksFiltered = books
        if(category!=''){
            booksFiltered = books.filter(book=>book.bookCategory === category)
            return(booksFiltered)
        }
        if(q!==''){
         booksFiltered = books.filter(book=>book.bookName.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1)
        
         //console.log(booksFiltered)
         return(booksFiltered)
        }
        else{
           // console.log(booksFiltered)
            return(booksFiltered)
        }
        
       
        
    }
    
    const HandleSubmit = () =>{
        const keyword = ''
        dispatch(getAllBooks(keyword))
        history.push("/books")
        
    }

    const filterCategory = (e) =>{
        if(e.target.value !== ''){
            
        }
         
            
    }


    return (
        <div>

            <div className="woocommerce-topbar">
                <div className="row align-items-center">
                    {/*<div className="col-lg-2 col-md-3 col-sm-3">
                        <div className="woocommerce-result-count">
                            <p>Showing {books.length} of {books.length} results</p>
                        </div>
                     </div> */}

                    <div className="col-lg-5 col-md-7 col-sm-7">
                        <div className="woocommerce-topbar-ordering">
                            {/*<Route render={({ history }) => <SearchBox history={history} />} />*/}
                            <input type="text" className="form-control" placeholder = "Search for Book Tile" value={q} onChange={(e)=>setQ(e.target.value)} />


                        </div>
                    </div>
                </div >
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-5 col-sm-5">
                        <div className="woocommerce-topbar-ordering">
                            <select className="form-select" onChange={(e)=>setCategory(e.target.value)}>
                                <option value="">Filter By Category</option>
                                <option value="Novel">Novels</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Short Stories">Short Stories</option>
                                <option value="Biography">Biography</option>
                                <option value="Children">Children's</option>
                                <option value="Thoughts">Thoughts</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Software Engineering">Software Engineering</option>
                                <option value="Smart Systems">Smart Systems</option>
                                <option value="Science and Technology">Science and Technology</option>
                                <option value="Linguistic Engineering and Abstraction">Linguistic Engineering and Abstraction</option>
                                <option value="Reform Books">Reform Books</option>
                            </select>
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
                    <div className="col-lg-3 col-md-5 col-sm-5">
                        <button class="btn btn-primary" onClick={HandleSubmit}> Clear Filters</button>
                    </div>
                </div>
            </div>
             
            <ProductCard  sectionType="Latest Releases" books={HandleDynamicSearch(books)}history={history} />
            <ProductCard sectionType="Best Sellers" books={HandleDynamicSearch(books)}history={history} />
        </div>
    )
}

export default PageFilters
