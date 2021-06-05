import React, {useState} from "react"
import {Link} from 'react-router-dom'
import {LinkContainer} from  'react-router-bootstrap'
import * as Icon from 'react-feather'
import { useSelector,useDispatch } from 'react-redux'
import {logout} from '../actions/userActions'
import {  NavDropdown} from 'react-bootstrap'
const Header = ({history}) => {
    //const cart = useSelector((state) => state.cart)
    const [menu, setMenu] = useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const userLogin = useSelector(state=>state.userLogin)
  const dispatch = useDispatch()
  const {userInfo} = userLogin
  const logoutHandler = ({history}) =>{
    dispatch(logout())
  }

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                    <Link onClick={toggleNavbar} className="navbar-brand" to={"/"}>
                         
                    </Link>
                    <img src="/images/AeehPressLogo.png" alt="logo"/>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to={"/"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                     Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/aboutus"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                    About 
                                    </Link> 
                                </li>
                                <li className="nav-item" >
                                    <Link to={"/team"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                         Our Team
                                        
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/services"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                            Services 
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/shop"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                        Shop
                                    </Link>
                                </li>
                                <li className="nav-item">
                                            <Link to={"/blog"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                                Blog
                                            </Link>
                                </li>
                            

                                <li className="nav-item">
                                    <Link to={"/contact"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                       Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="others-option">
                          {userInfo?
                          <div>
                          <Link to={"/cart"} className="cart-wrapper-btn">
                               
                               <Icon.ShoppingCart /> 
                               <span>0</span>
                           
                        </Link>
                       <Link to={"/cart"} className="cart-wrapper-btn">
                               
                    <NavDropdown  title={ <div style={{display: "inline-block"}}><Icon.User/> {userInfo.firstName}</div>} id='user-name'> 
                      <LinkContainer to="#">
                        <NavDropdown.Item>profile</NavDropdown.Item>
                      </LinkContainer> 
                      {userInfo.isEmployee&&(
                          <LinkContainer to="/employeeRegistration">
                          <NavDropdown.Item>Employee Registration</NavDropdown.Item>
                        </LinkContainer> 
                      )}

                    
                      {userInfo.isAuthor==="on"&&(
                        
                          <LinkContainer to="/myBooks">
                          <NavDropdown.Item>My Books</NavDropdown.Item>
                        </LinkContainer> 
                      )}
                      
                      <NavDropdown.Item onClick={logoutHandler}>
                        <Link to={"/login"}>
                          Logout
                          </Link>
                        </NavDropdown.Item>
                      
                    </NavDropdown>
                               
                       </Link>
                          </div>
                          :
                          <div>
                            <Link to={"../sign-up"}  className="btn btn-light">
							    Register
                            </Link>
                            
                            <Link to={"/login"} className="btn btn-primary">
							    Login
                            </Link>
                          </div>
                          }

						</div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;