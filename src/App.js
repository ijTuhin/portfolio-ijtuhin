import './App.css';
import IntroPart from './PortfolioPage/IntroPart/IntroPart';
import AboutMe from './PortfolioPage/AboutMe/AboutMe';
import MySkills from './PortfolioPage/MySkills/MySkills';
import Projects from './PortfolioPage/Projects/Projects';
import ContactMe from './PortfolioPage/ContactMe/ContactMe';
function App() {
  return (
    <div className='relative bg-gray-800 text-gray-500'>
            <IntroPart></IntroPart>
            {/* <PortfolioNavbar /> */}
            <div className='' id='main-body'>
                <AboutMe></AboutMe>
                <MySkills></MySkills>
                <Projects></Projects>
                <ContactMe></ContactMe>
            </div>

        </div>
  );
}

export default App;
