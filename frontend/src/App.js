import React from "react"
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import TeamScreen from './Screens/TeamScreen'
import AboutUsScreen from './Screens/aboutus'
import Services from './Screens/services'
import Blog from './Screens/blog'
import Login from './Screens/login'
import SignUp from './Screens/signup'
import EmployeeRegistration from './Screens/employeeRegistration'
import BookDetail from './Screens/BookDetail'
import MyBooks from './Screens/myBooks'
import addNewBook from './Screens/addNewBook'
import Contact from './Screens/contact'
import ErrorScreen from './Screens/ErrorScreen'
import TermsConditions from './Screens/TermsConditions'
const  App = () => {
  return (
    <Router>
      <Header/>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/team' component={TeamScreen} exact/>
      <Route path='/aboutus' component={AboutUsScreen} exact/>
      <Route path='/services' component={ErrorScreen} exact/>
      <Route path='/blog' component={Blog} exact/>
      <Route path='/bookDetail' component={BookDetail} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/sign-up' component={SignUp} exact/>
      <Route path='/employeeRegistration' component={EmployeeRegistration} exact/>
      <Route path='/myBooks' component={MyBooks} exact/>
      <Route path='/addNewBook' component={addNewBook} exact/>
      <Route path='/contact' component={Contact} exact/>
      <Route path='/error' component={ErrorScreen} exact/>
      <Route path='/terms' component={TermsConditions} exact/>
      <Footer/>
    </Router>

  );
}

export default App;
