import React from "react"
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import About from './Screens/About'
import Projects from './Screens/Projects'
import Skills from './Screens/Skills'
import Achievements from './Screens/Achievements'
import Feedback from './Screens/Feedback'
import ContactInfo from './Screens/ContactInfo'
import SignUp from './Screens/signup'
import TestCrop from './Screens/TestCrop'
import ReviewTestimonial from './Screens/reviewTestimonial'
import Custom404 from './Screens/404'
import ComingSoon from './Screens/coming-soon'
const  App = () => {
  return (
    <Router>
      <Header/>
      <Route path='/' component={HomeScreen} exact/> 
      <Route path='/aboutMe' component={About} exact/> 
      <Route path='/portfolio' component={Projects} exact/> 
      <Route path='/Skills' component={Skills} exact/> 
      <Route path='/achievements' component={Achievements} exact/> 
      <Route path='/projectDetails' component={ComingSoon} exact/> 
      <Route path='/blog' component={ComingSoon} exact/> 
      <Route path='/recommendations' component={Feedback} exact/> 
      <Route path='/contact' component={ContactInfo} exact/> 
      <Route path='/404' component={Custom404} exact/> 
      <Route path='/reviewTestimonial' component={ReviewTestimonial} exact/> 
      <Route render={() => <Redirect to={{pathname: "/"}} />} />
      <Footer/>
    </Router>

  );
}

export default App;
