import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Move from "../pages/Move";
import TextSlide from "../pages/TextSlide";
import ThreeDimension from "../pages/ThreeDimension";

import "../shared/App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/move" element={<Move />} />
        <Route path="/slide" element={<TextSlide />} />
        <Route path="/three" element={<ThreeDimension />} />
      </Routes>
    </Router>
  );
}


export default App;
