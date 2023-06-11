import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserState from "./context/user/UserState";
import ManageGamesPage from './pages/ManageGamesPage';
import ManageTeamsPage from './pages/ManageTeamsPage';
import ManagePlayersPage from './pages/ManagePlayersPage';
import RankingPage from './pages/RankingPage';
import ListGamesPage from './pages/ListGamesPage';
import PlayersPage from './pages/PlayersPage';

import Footer from './components/common/Footer';

function App() {
  return (

    <UserState>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<ManageGamesPage />} path="/manage-games" />
            <Route element={<ManageTeamsPage />} path="/manage-teams" />
            <Route element={<ManagePlayersPage />} path="/manage-players" />
            <Route element={<ListGamesPage />} path="/list-games" />
            
            <Route element={<PlayersPage />} path="/players" />

            <Route element={<RankingPage />} path="/ranking" />
            <Route element={<ManageGamesPage />} path="/" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserState>
  );
}

export default App;
