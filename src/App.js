
import './App.scss';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Presentation from './Components/Presentation/Presentation';
import ActionCards from './Components/ActionCards/ActionCards';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Presentation/>
      <ActionCards/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
