import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./Pages/AllMeetups";
import MyProjectsPage from "./Pages/MyProjectsPage";
import ProfilePage from "./Pages/Profile";
import NewMeetupPage from "./Pages/NewMeetup";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/my-projects" element={<MyProjectsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
