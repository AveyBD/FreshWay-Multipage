import { Hero } from "../components/Hero"
import Impact from "../components/home/Impact"
import OurEggs from "../components/home/OurEggs"
import SupplyChain from "../components/home/SupplyChain"


export const Home = () => {
  return (
    <div>
      <Hero/>
      <SupplyChain/>
      <Impact/>
      <OurEggs/>
    </div>
  )
}
