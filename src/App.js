import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./Pages/AllMeetups";
import MyProjectsPage from "./Pages/MyProjectsPage";
import ProfilePage from "./Pages/Profile";
import MainNavigation from './Components/Layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/my-projects" element={<MyProjectsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
