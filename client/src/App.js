import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HomeAboutMe from './components/HomeAboutMe';
import HomeProject from './components/HomeProject';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <HomeAboutMe />
      <HomeProject />
    </div>
  );
}

export default App;
