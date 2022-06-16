import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Move from "../pages/Move";
import "../shared/App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/move" element={<Move />} />
      </Routes>
    </Router>
  );
}


export default App;
