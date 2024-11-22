import Nav from '../components/Nav'
import Hero from '../components/Hero';
import HomeAboutMe from '../components/HomeAboutMe';
import HomeProject from '../components/HomeProject';
import Testimonial from '../components/Testimonial';
import HomeContacts from '../components/HomeContacts';

function Home(props){
    return(
        <div className='app-components'>
            <Nav />
            <Hero />
            <HomeAboutMe />
            <HomeProject />
            <Testimonial />
            <HomeContacts />
        </div>
    )
}

export default Home;