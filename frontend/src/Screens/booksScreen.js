import React,{useEffect} from 'react'
import PageBanner from '../components/PageBanner';
import ProductCard from '../components/productCard'
import PageFilters from '../components/pageFilters'
import { useSelector,useDispatch } from 'react-redux'
import {getAllBooks} from '../actions/bookActions'
const BooksScreen = ({match,history}) => {
    const keyword = match.params.keyword
    const dispatch = useDispatch()
    const booksData = useSelector(state=>state.allBooks)
    //console.log(booksData)
    const books = booksData.books

    

    useEffect(()=>{
        dispatch(getAllBooks(keyword))
    },[dispatch.apply,keyword])
    return (
        <div>
            <PageBanner  pageTitle="Our Publications" /> 
            <PageFilters history={history}/>

           
            
        </div>
    )
}

export default BooksScreen
