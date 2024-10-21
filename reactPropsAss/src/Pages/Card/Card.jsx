import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Image from "../../assets/image.jpg";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="cardFlex">
        <ProfileCard
          profileImage={Image}
          name="Todd S. Loomis"
          age="37"
          location="Spain"
        />

        <ProfileCard
          profileImage={Image1}
          name="Jin M. McConnell"
          age="32"
          location="China"
        />

        <ProfileCard
          profileImage={Image2}
          name="Elizabeth J. Brophy"
          age="94"
          location="Swizerland"
        />

        <ProfileCard
          profileImage={Image3}
          name="Pablo T. Ballard"
          age="41"
          location="Norway"
        />

        <ProfileCard
          profileImage={Image4}
          name="Christine T. Pratt"
          age="40"
          location="Netherlands"
        />
      </div>

    
    </>
  );
}

export default Card;
