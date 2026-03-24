import './Sign.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Signin() {
    return (
        <>
        <Header/>
        <div className="contenet">
            <div className="sign">
            <h3>Signin</h3>
            <p>Enter your email and password to sign in !</p>
            <form action="">
                <input type="text" placeholder="Enter your email"/>
                <input type="password" placeholder="Enter your Password"/>
            </form>
            <button>Sign In</button>
            <p>Don't have an account?<a href="../sign/Signup.jsx">Sign up</a></p>
            </div>
        </div>
        <Footer/>
    </>   
    )
}

export default Signin;
