import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieApi from './Apis/MovieApi';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <div>
      <Router>
           <Header/>
           <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
