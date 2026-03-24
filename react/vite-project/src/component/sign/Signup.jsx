import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Sign.css'

function Signup() {
  return (
    <>
    <Header/>
    <div className="contenet">
            <div className="sign">
            <h3>Signup</h3>
            <p>Enter your email and password to sign up !</p>
            <form action="">
            <input type="text" placeholder="Enter your email"/>
            <input type="email" placeholder="Enter your email"/>
            <input type="password" placeholder="Enter your Password"/>
            </form>
            <button>Sign Up</button>
            <p>Don't have an account?<a href="./Signin.jsx">Sign in</a></p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signup;
