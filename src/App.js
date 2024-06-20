import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RummyTime from "./components/RummyTime";

function App() {
  return (
    <>
      <div className="bg-[#51065d]">
        <Header />
        <Hero />
        <RummyTime />
      </div>
    </>
  );
}

export default App;
