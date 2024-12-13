import { Route, Routes } from "react-router-dom";
import SharedLayout from "../SheredLayout/SheredLayout";
import Regulamin from "../../pages/Regulamin/Regulamin";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";

const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="regulamin" element={<Regulamin />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<Contact />} />
        <Route path="product" element={<Regulamin />} />
        <Route path="ploter" element={<Contact />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mta" element={<Contact />} />
      </Routes>
    </SharedLayout>
  );
};

export default App;
