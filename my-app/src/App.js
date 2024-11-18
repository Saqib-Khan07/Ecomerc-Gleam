import logo from './logo.svg';
import './App.css';
import Ecomerce from './Component/Ecomerce';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Boutus1 from './pages/Boutus/Boutus1'
import Amzmanage from './Component/Our Services/Amazon management/Amzmanage'
import AmazonFba from './Component/Our Services/Amazon whole FBA service/AmazonFba'
import Onlineretail from './Component/Our Services/Online Arbitrage/Onlineretail'
import Threepl from './Component/Our Services/Threepl'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' Component={Ecomerce}/>
          <Route path='About-us' Component={Boutus1}/>
          <Route path='Amzmanage' Component={Amzmanage}/> 
          <Route path='AmazonFba' Component={AmazonFba}/>
          <Route path='Onlineretail' Component={Onlineretail}/>
          <Route path='Threepl' Component={Threepl}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
