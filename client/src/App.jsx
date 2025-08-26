import LandingPage from "./pages/landing page/LandingPage"
import SignUpPage from "./pages/signup page/SignUpPage"
import SignInPage from "./pages/signin page/SignInPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard page/DashboardPage";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/dashboard/:id" element={<DashboardPage/>} />   
      </Routes>
    </Router>
  )
}