import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppsPage from './pages/AppsPage';
import BooksPage from './pages/BooksPage';
import ProjectsPage from './pages/ProjectsPage';
import PhotographyPage from './pages/PhotographyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/apps" element={<AppsPage />}/>
          <Route path="/books" element={<BooksPage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
          <Route path="/photography" element={<PhotographyPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
