import Image from "../../assets/images/image-hero-desktop.png";
import Databiz from '../../assets/images/client-databiz.svg'
import Audiophile from '../../assets/images/client-audiophile.svg'
import Meet from '../../assets/images/client-meet.svg'
import Maker from '../../assets/images/client-maker.svg'
import "./Menu.css";

function Menu() {
  return (
    <div className="space" >

        <div id="flex">
        <div>
        <div className="bigtext">
          <h2>Make </h2>
          <h2>remote work</h2>
        </div>
        <div className="smalltext">
          <p>Get your team in sync, no matter your location.</p>
          <p>Streamline processes, create team rituals, and</p>
          <p>watch productivy soar.</p>
        </div>

        <button>Learn more</button>

        <div className="images">
            <img src={Databiz} alt="Databiz" />
            <img src={Audiophile} alt="Audiophile" />
            <img src={Meet} alt="Meet" />
            <img src={Maker} alt="Maker" />
        </div>
      </div>

      <div>
        <img src={Image} alt="image-desktop" id="image"/>
      </div>
        </div>
     
    </div>
  );
}

export default Menu;
