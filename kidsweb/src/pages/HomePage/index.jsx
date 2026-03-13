import React from "react";
import HeroComponent from "../../components/HeroComponent";
import SubjectsComponent from "../../components/SubjectsComponent";
import DailyChallengeComponent from "../../components/DailyChallengeComponent";
// import FooterComponent from "../../components/FooterComponent";

function HomePage() {
  return (
    <div className="HomePage">
      <HeroComponent />
      <SubjectsComponent />
      <DailyChallengeComponent />
      {/* <FooterComponent /> */}
    </div>
  );
}

export default HomePage;
