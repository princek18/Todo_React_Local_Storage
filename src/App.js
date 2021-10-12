import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainComponent } from './components/MainComponent/MainComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
