import Button from "../Button/Button";
import './Hero.css'
import Product from '../../assets/images/productImg.svg'
import HeroImg from '../../assets/images/hero.png'



function Hero() {
  return (
    <div>
      <div className="Herosection">
        <div className="Hometext">
          <h1>The super fast color palettes generator!</h1>
          <p>
            Create the perfect palette or get inspired by thousands of beautiful
            color schemes
          </p>
          <Button
            fontColor="white"
            color=" #0052cc"
            value="Start the generator!"
            padding="17px 55px"
            fontSize="23px"
            bColor="none"
            bRadius="10px"
            margin="15px"
          />

          <Button
            fontColor="black"
            color="white"
            value="Explore trending palettes"
            padding="17px 27px"
            fontSize="23px"
            bColor="1px solid grey"
            bRadius="10px"
            margin="5px"
          />

          <img src={Product} alt="" />
        </div>
        <div>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

