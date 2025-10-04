import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Events from "./components/Events";
import Whatsapp from "./components/Whatsapp";
import Footer from "./components/Footer";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <div>
      <Nav />
      <Whatsapp />
      <Routes>
        <Route path="/regatasBuceo" element={<Home />} />
      </Routes>

      <Services />
      <Events />
      <Sponsor />
      <Footer />

    </div>
  );
}

export default App;
