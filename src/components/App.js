import '../styles/App.css';
import ListadoComponent from './Listado';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogComponent from './Blog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListadoComponent />} />
        <Route path='/blog' element={<BlogComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
