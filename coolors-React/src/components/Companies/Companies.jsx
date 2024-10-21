import './Companies.css'
import Disney from '../../assets/svg/disney.svg'
import Dreamworks from '../../assets/svg/dream.svg'
import Warnerbros from '../../assets/svg/warnerbros.jpeg'
import Netflix from '../../assets/svg/netflix.svg'
import Airbnb from '../../assets/svg/airbnb.svg'
import Dropbox from '../../assets/svg/dropbox.svg'
import Hasbro from '../../assets/svg/hasbro.png'
import Ubisoft from '../../assets/svg/ubisoft.svg'
import EA from '../../assets/svg/EA.png'
import Apple from '../../assets/svg/apple.svg'
import Windows from '../../assets/svg/windows.svg'

function Companies() {
  return (
    <>
      <div className="companiesFlex">
      <p>Used by 5+ million designers and by top companies</p>
      <div className='companiesImg'>
      <img src={Disney} alt="Disney" />
      <img src={Dreamworks} alt="Dreamworks" />
      <img src={Warnerbros} alt="Warnerbros" />
      <img src={Netflix} alt="Netflix" />
      <img src={Airbnb} alt="Airbnb" />
      <img src={Dropbox} alt="Dropbox" />
      <img src={Hasbro} alt="Hasbro" />
      <img src={Ubisoft} alt="Ubisoft" />
      <img src={EA} alt="EA" />
      <img src={Apple} alt="Apple" />
      <img src={Windows} alt="Windows" />
      </div>
     
      </div>
    </>
  );
}
export default Companies;
