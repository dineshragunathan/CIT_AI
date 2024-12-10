import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SemesterDetails from "./components/SemesterDetails.jsx"; // Your form component

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for SemesterDetails */}
        <Route path="/" element={<SemesterDetails />} />
        {/* You can keep the '/semester-details' route as well
        <Route path="/semester-details" element={<SemesterDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
