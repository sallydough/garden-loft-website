import Home from "./components/Home/Home";
import "./App.css";
import Safety from "./components/Safety/Safety";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel";
import Units from "./components/Units/Units";
import Costs from "./components/Costs/Costs";
import Footer from "./components/Footer/Footer";
import Grants from "./components/Grants/Grants";
import Process from "./components/Process/Process";
import Testimony from "./components/Testimony/Testimony";
import Report from "./components/Report/Report";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Safety />
        <Carousel />
        <Report />
        <Units />
        <Costs />
        <Process />
        <Grants />
        <Testimony />
        <Footer />
      </div>
    </>
  );
}

export default App;
