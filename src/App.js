import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecommendationsUI from "./componets/recommond";
import Signup from "./componets/signup"; 
import Login from "./componets/Login";  // optional
import LandingPage from "./componets/Landing";

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME PAGE */}
        <Route path="/Product" element={<RecommendationsUI />} />
                <Route path="/" element={<LandingPage />} />


        {/* SIGNUP PAGE */}
        <Route path="/signup" element={<Signup />} />

        {/* LOGIN PAGE (optional) */}
         <Route path="/login" element={<Login />} /> 

      </Routes>
    </Router>
  );
}

export default App;
