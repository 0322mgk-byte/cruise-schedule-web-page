import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Details from "./components/Details";
import TripSummary from "./components/TripSummary";
import Schedule from "./components/Schedule";
import TouristSpots from "./components/TouristSpots";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Details />
      <TripSummary />
      <Schedule />
      <TouristSpots />
      <Footer />
    </main>
  );
}
