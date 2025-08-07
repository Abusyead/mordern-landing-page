import './App.css'
import Navbar from './Components/Navbar'
import HeroArea from "./Components/HeroArea"
import CompanyLogo from './Components/CompanyLogo'
import PurPoseSection from './Components/PurPoseSection'
import FeatureSection from './Components/FeatureSection'
import Streamleine from './Components/Streamleine'
import Intorducing from "./Components/Intorducing"
import PricingSection from './Components/PricingSection'
import FutureSection from './Components/FutureSection'
import ClientSection from './Components/ClientSection'

function App() {

  return (
    <>
        <Navbar />
        <HeroArea />
        <CompanyLogo />
        <PurPoseSection />
        <FeatureSection />
        <Streamleine />
        <Intorducing />
        <PricingSection />
        <FutureSection />
        <ClientSection />
    </>
  )
}

export default App
