import './App.css';
import Answer from './Pages/Home/Answer';
import Banner from './Pages/Home/Banner';
import Expert from './Pages/Home/Expert';
import Final from './Pages/Home/Final';
import Service from './Pages/Home/Service';
import Testi from './Pages/Home/Testi';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Expert></Expert>
      <Final></Final>
      <Answer></Answer>
      <Testi></Testi>
      <Footer></Footer>
    </div>
  );
}

export default App;
