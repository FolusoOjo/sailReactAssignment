import "./Header.css";
import Logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <div className="Headercontainer">
      <div>
        <img src={Logo} alt="" />
      </div>
      
      <div className="Headerflex">
      
     <a href="#">Tools</a>
      <a href="#" style= {{color : "red"}}>Go Pro</a>
     
     
    <a href="#">Sign in</a>
      <button>Sign up</button>
   
       
      </div>
    </div>
  );
}

export default Header;
