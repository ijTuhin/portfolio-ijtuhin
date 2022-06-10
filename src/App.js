import './App.css';
import Portfolio from './PortfolioPage/Portfolio/Portfolio';
import fa from '../src/image/vector/hello-transparent-2.gif';
function App() {
  return (
    <div>
      <Portfolio></Portfolio>
      <div className='bg-yellow-200'>
        <img src={fa} alt="" />
      </div>
    </div>
  );
}

export default App;
