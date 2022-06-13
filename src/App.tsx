import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';
import MainPage from './pages/MainPage';
import TvDetail from './pages/TvDetail';
import TvPage from './pages/TvPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<MainPage/>}/>
        <Route path ='/tv' element={<TvPage/>}/>
        <Route path ='/movie/:id' element={<MovieDetail/>}/>
        <Route path ='/tv/:id' element={<TvDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
