import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../App';
import home from '../../images/logo1.png';
import firebaseConfig from './FirebaseConfig';
import './Login.css';


if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    //App.js context api UserContext
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const history = useNavigate ();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () =>{
        const provider = new firebase.auth.GoogleAuthProvider(); // firebase auth provider
        firebase.auth().signInWithPopup(provider)
        .then( res =>{
            const {displayName ,photoURL, email} = res.user;
            const signedInUser ={
                name : displayName,
                email : email,
            }
            setLoggedInUser(signedInUser)
            history.replace(from);
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div style={{background:'#E5E5E5', height:'100vh'}}>
            <div className="d-flex justify-content-center" style={{paddingTop:'50px'}}>
                <Link to='/home'><img width='300px' src={home} alt="home"/></Link>
            </div>

            <div className="login_area">
                <h2>Login With</h2>
                <button onClick={handleLogin}
                style={{width:'300px', margin:'15px 0'}} className="btn btn-info">
                     Continue with Google
                </button>
                <span> Don’t have an account? <Link to='/'> Create an account</Link></span>
            </div>
        </div>
    );
};

export default Login;