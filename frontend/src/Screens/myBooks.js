import React,{useEffect} from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MyBookCard from '../components/myBookCard'
import PageBanner from '../components/PageBanner'
import SearchBar from '../components/searchBar'
import {getAuthorBookDetails} from '../actions/bookActions'
const MyBooks = ({history}) => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo,success,error } = userLogin
    const authorBooksInfo = useSelector(state => state.authorBooks)
    const {books,loading} = authorBooksInfo
    //console.log(books)
    useEffect(() => {
        
        if (!userInfo) {
            history.push('/login')
        }
        else {
                dispatch(getAuthorBookDetails())   
        }
    }, [history, userInfo, dispatch,success,error])

    return (
        <div>
            <PageBanner pageTitle="My Books" /> 
             <Container>
                 <SearchBar/>
                 <Row>
                     <Col md={5}>
                         <Link to={"/addNewBook"}>
                         <Button variant="primary"> + Add New Book</Button>
                         </Link>
                     </Col>
                 </Row>
                 {books.length>0 && books.map(book=>(
                     <MyBookCard key={book.ISBN} bookInfo={book}/>
                    
                     
                 ))}
                 
                 <MyBookCard/>
             </Container>
            
        </div>
    )
}

export default MyBooks
