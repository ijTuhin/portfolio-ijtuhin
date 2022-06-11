import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './PortfolioPage/Blogs/Blogs';
import Portfolio from './PortfolioPage/Portfolio/Portfolio';
import ProjectI from './PortfolioPage/Projects/ProjectI';
import ProjectII from './PortfolioPage/Projects/ProjectII';
import ProjectIII from './PortfolioPage/Projects/ProjectIII';
import ProjectIV from './PortfolioPage/Projects/ProjectIV';
import Projects from './PortfolioPage/Projects/Projects';
import ProjectV from './PortfolioPage/Projects/ProjectV';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio></Portfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/project' element={<Projects></Projects>}></Route>
        <Route path='/project-I' element={<ProjectI></ProjectI>}></Route>
        <Route path='/project-II' element={<ProjectII></ProjectII>}></Route>
        <Route path='/project-III' element={<ProjectIII></ProjectIII>}></Route>
        <Route path='/project-IV' element={<ProjectIV></ProjectIV>}></Route>
        <Route path='/project-V' element={<ProjectV></ProjectV>}></Route>
      </Routes>
    </div>
  );
}

export default App;
