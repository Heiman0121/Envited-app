import LandingPage from "./Pages/LandingPage/LandingPage";
import EventPage from "./Pages/EventPage/EventPage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <body class="h-[982px] min-w-screen bg-gradient-to-r from-[#F6F2FF] to-[#FBFAFF]">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
