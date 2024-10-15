import Logo from '../../assets/images/logo.svg'
import Arrow from '../../assets/images/icon-arrow-down.svg'
import './Header.css'


function Header() {
  return <div>
    <div className='flex'>
      <div className='flexed'>
          <img src= {Logo} alt="Logo img" className='snap'/>
          <div className='flexed'>

            <p>Features
            <img id='arrowdown' src={Arrow} alt="Arrow down" />
          </p>
       
          
          <p>Company 
          <img id='arrowdown' src={Arrow} alt="Arrow down" />
          </p>
          <p>Careers</p>
          <p>About</p>
          </div>
          
      </div>


      <div className='flexed' id='color'>
        <p>Login</p>
        <p id='register'>Register</p>
      </div>
    </div>



  </div>;
}

export default Header;
