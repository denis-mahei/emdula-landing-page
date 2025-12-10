import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import BannerRow from "./components/BannerRow/BannerRow.jsx";
import OurVision from "./components/OurVision/OurVision.jsx";
import HowWorks from "./components/HowWorks/HowWorks.jsx";
import AIProposition from "./components/AIProposition/AIProposition.jsx";
import CRMSolutions from "./components/CRMSolutions/CRMSolutions.jsx";
import Teams from "./components/Teams/Teams.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BannerRow />
      <OurVision />
      <HowWorks />
      <AIProposition/>
      <CRMSolutions/>
      <Teams/>
      <FAQ/>
    </>
  );
}

export default App;
