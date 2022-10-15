// import logo from './logo.svg';
import './App.css';
import Banner from './componenets/Banner';
import NavBar from './componenets/NavBar';
import Progress from './componenets/Progress';
import What from './componenets/What';
import Bonus from './componenets/Bonus';
import Feature from './componenets/Feature';
import Partner from './componenets/Partner';
import Team from './componenets/Team';
import Footer from './componenets/Footer';
import Roadmap from './componenets/Roadmap';
import MobNav from './componenets/MobNav';
// import AOS from 'aos';

function App() {
  
    // or simply just AOS.init();
    // AOS.init()
  return (
    <>
    <NavBar  />
    <MobNav/>
    <Banner data-aos={"fade-up"} />
    <Progress/>
    <What/>
    <Bonus/>
    <Feature/>
    <Partner/>
    <Team/>
    <Footer/>

    
    </>
  )
}

export default App;
