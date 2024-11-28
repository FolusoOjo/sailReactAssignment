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
          id="card1"
          profileImage={Image}
          name="Todd S. Loomis"
          age="37"
          location="Spain"
          onclick={() => {
            dark("card1");
          }}
        />

        <ProfileCard
          id="card2"
          profileImage={Image1}
          name="Jin M. McConnell"
          age="32"
          location="China"
          onclick={() => {
            dark("card2");
          }}
        />

        <ProfileCard
          id="card3"
          profileImage={Image2}
          name="Elizabeth J. Brophy"
          age="94"
          location="Swizerland"
          onclick={() => {
            dark("card3");
          }}
        />

        <ProfileCard
          id="card4"
          profileImage={Image3}
          name="Pablo T. Ballard"
          age="41"
          location="Norway"
          onclick={() => {
            dark("card4");
          }}
        />

        <ProfileCard
          id="card5"
          profileImage={Image4}
          name="Christine T. Pratt"
          age="40"
          location="Netherlands"
          onclick={() => {
            dark("card5");
          }}
        />
      </div>
    </>
  );
}

export default Card;

function dark(passId) {
  let passid = document.getElementById(passId);

  passid.classList.toggle("darkmode");
}
