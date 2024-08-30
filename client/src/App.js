import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HomeAboutMe from './components/HomeAboutMe';
import HomeProject from './components/HomeProject';
import Testimonial from './components/Testimonial';
import HomeContacts from './components/HomeContacts';

function App() {
  return (
    <div className="App">
      <div className='app-components'>
        <Nav />
        <Hero />
        <HomeAboutMe />
        <HomeProject />
        <Testimonial />
        <HomeContacts />
      </div>

    </div>
  );
}

export default App;
