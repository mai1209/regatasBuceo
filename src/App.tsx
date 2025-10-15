import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Whatsapp from "./components/Whatsapp";
import Content from "./components/Content";
import Cursos from "./components/Cursos";

function App() {
  return (
    <div>
      <Nav />
      <Whatsapp />
      <Routes >
        <Route path="/" element={<Content />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </div>
  );
}

export default App;
