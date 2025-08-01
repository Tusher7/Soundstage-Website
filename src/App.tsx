import { Calendar } from "lucide-react";
import ClubStats from "./components/ClubStats";
import Events from "./components/Events";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HostSection from "./components/HostSection";
import NavBar from "./components/NavBar";
import EventCalendar from "./components/EventCalendar";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <HostSection />
      </div>
      <Events />
      <ClubStats />
      <EventCalendar />
      <Footer />
    </>
  );
}

export default App;
