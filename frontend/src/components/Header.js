import React, {useState} from "react"
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {logout} from '../actions/userActions'
const Header = ({history}) => {

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
 
    //const userLogin = useSelector(state=>state.userLogin)
  const dispatch = useDispatch()
  

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header style={{backgroundColor:'#00060f'}} id="header" className="headroom">
            <div  className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                    <Link onClick={toggleNavbar} className="navbar-brand" to={"/"}>
                         
                    </Link>
                    

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
                            <ul style={{cursor:'pointer'}} className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to={"/"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                     Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/aboutMe"}  activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                    About 
                                    </Link> 
                                </li>
                                <li className="nav-item" >
                                    <Link to={"/portfolio"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                         Portfolio     
                                    </Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/Skills"  activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                         Technical Skills
                                        
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/achievements"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                    Achievements
                                    </Link> 
                                </li>
                                <li className="nav-item">
                                    <Link to={"/recommendations"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                            Testimonials 
                                    </Link>
                                </li>
                                {/*<li className="nav-item">
                                            <Link to={"/blog"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                                Blog
                                            </Link>
    </li>*/}
                            

                                <li className="nav-item">
                                    <Link to={"/contact"} activeclassName="active" onClick={toggleNavbar} className="nav-link">
                                       Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;