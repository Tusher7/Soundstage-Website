import ClubStats from "./components/ClubStats";
import Events from "./components/Events";
import HeroSection from "./components/HeroSection";
import HostSection from "./components/HostSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <HostSection />
        <Events />
        <ClubStats />
      </div>
    </>
  );
}

export default App;
