import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Initial from './pages/Initial';
import MapPage from './pages/MapPage';
import Stats from './pages/Stats';
import UpComing from './pages/UpComing';
import Videos from './pages/Videos';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Initial /> } />
        <Route path='/stats' element={ <Stats /> } />
        <Route path='/maps' element={ <MapPage />} />
        <Route path='/upcoming' element={ <UpComing /> } />
        <Route path='/videos' element={ <Videos /> } />
      </Routes>
    </div>
  );
}

export default App;

// <UserSearchInputs />
// <h1>Stats</h1>
// <Table />
// <h1>Mapa</h1>
// <Maps />
// <h1> Novidades da loja </h1>
// <UpcomingCard />
// <h1>Notícias</h1>
// <NewsCard />
// <h1>Vídeo da Temporada</h1>
// <VideoCard />
