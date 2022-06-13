import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header';
import MainDetail from './pages/MainDetail';
import MainPage from './pages/MainPage';
import TvDetail from './pages/TvDetail';
import TvPage from './pages/TvPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<MainPage/>}/>
        <Route path ='/tv' element={<TvPage/>}/>
        <Route path ='/movie/:id' element={<MainDetail/>}/>
        <Route path ='/tv/:id' element={<TvDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
