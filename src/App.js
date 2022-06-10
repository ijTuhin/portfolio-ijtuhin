import './App.css';
import Portfolio from './PortfolioPage/Portfolio/Portfolio';
import fa from '../src/image/svg/plan-svgrepo-com.svg';
function App() {
  return (
    <div className='bg-white'>
      <Portfolio></Portfolio>
      <img src={fa} className='bg-pink-300' alt="" />
    </div>
  );
}

export default App;
