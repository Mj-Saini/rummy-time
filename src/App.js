import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RummyTime from "./components/RummyTime";
import GameVariant from "./components/GameVariant";
import Faqs from "./components/Faqs";

function App() {
  return (
    <>
      <div className="bg-[#51065d]">
        <Header />
        <Hero />
        <RummyTime />
        <GameVariant />
        <Faqs />
      </div>
    </>
  );
}

export default App;
