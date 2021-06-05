import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import PageBanner from '../components/PageBanner';
import {Link} from 'react-router-dom'
import {login} from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Form} from 'react-bootstrap'
 
const Login = ({location,history}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const redirect = location.search? location.search.split("=")[1]:'/'
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin) 
    const {loading,error,userInfo} = userLogin


    useEffect(() =>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(login(email,password))

    }
    return (
        <div>
           

            <PageBanner pageTitle="Login" />
            
            {loading && <Loader></Loader>}
            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        
                        <div className="auth-head">
                            <Link to={"/it-startup"}>
                                <a><img alt="logo" src="/images/AeehPressLogo.png" /></a>
                            </Link>
                            <p>Don't have an account yet? <Link to={"/sign-up"}>Sign Up</Link></p>
                        </div>
                        {error && <Message variant='danger'>{error}</Message>}
                        <Form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className="mb-3">
                                <p><Link to={"/forgot-password"}><a>Forgot Password</a></Link></p>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </Form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Login;