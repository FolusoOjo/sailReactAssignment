import Card from "../../components/Card/Card";
import Apple from "../../assets/images/Apple.svg";
import Andriod from "../../assets/svg/android.svg";
import Figma from "../../assets/images/figma.svg";
import Chrome from "../../assets/svg/chrome.svg";
import Adobe from "../../assets/svg/adobe.svg";
import Hero from "../../components/Hero/Hero";
import Companies from "../../components/companies/Companies";



function Home() {
  return (
    <>
      <Hero />
      <div className="homeFlex">
        <Card
          images={Apple}
          intro="iOS App"
          description="Create, browse and save palettes on the go."
        />

        <Card
          images={Andriod}
          intro="Andriod App"
          description="Thousands of palettes in your pocket."
        />

        <Card
          images={Figma}
          intro="Figma Plugin"
          description="All palettes right in your workspace."
        />

        <Card
          images={Chrome}
          intro="Chrome Extension"
          description="Get and edit a palette every new tab."
        />

        <Card
          images={Adobe}
          intro="Adobe Extension"
          description="Use Coolors with your favorite tools."
        />
      </div>
      <Companies/>
    </>
  );
}
export default Home;
