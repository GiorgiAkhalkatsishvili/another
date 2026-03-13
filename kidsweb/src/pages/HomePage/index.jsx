import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import HeroComponent from "../../components/HeroComponent";
import SubjectsComponent from "../../components/SubjectsComponent";
import DailyChallengeComponent from "../../components/DailyChallengeComponent";
// import FooterComponent from "../../components/FooterComponent";

function HomePage() {
  return (
    <div className="HomePage">
      <HeaderComponent />
      <HeroComponent />
      <SubjectsComponent />
      <DailyChallengeComponent />
      {/* <FooterComponent /> */}
    </div>
  );
}

export default HomePage;
