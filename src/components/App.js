import '../styles/App.css';
import ListadoComponent from './Listado';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogComponent from './Blog';
import InicioComponent from './Inicio';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/listado' element={<ListadoComponent />} />
        <Route path='/' element={<InicioComponent />} />
        <Route path='/blog' element={<BlogComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
