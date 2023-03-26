//import { Route, Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupPage from "./Pages/NewMeetup";
import FavoritesPage from "./Pages/Favorites";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
