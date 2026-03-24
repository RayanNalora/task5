import Signin from '../sign/Signin';
import './Header.css'
import { useState  } from 'react';
function Header() {
  const [showPage , setShowPage] = useState("Home")
  if(showPage === "signin"){
    return <Signin/>;
  }
  return (
    <>
    <header>
        <div className="left_part_of_header">
          <button className='your_name'>Your Name</button>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
        <button  className='signin' onClick={() => 
          setShowPage("Signin")}> Sign In</button>
    </header>
      {/* {showPage && <Signin/>} */}
      </>
  );
}
      

export default Header;
