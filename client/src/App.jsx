import LandingPage from "./pages/landing page/LandingPage"
import SignUpPage from "./pages/signup page/SignUpPage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}