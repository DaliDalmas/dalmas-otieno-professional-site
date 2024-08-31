import faceshot from '../images/dalmas_face_shot.jpeg'
function HomeAboutMe(){
    return (
        <div className="home-about-me">
            <div className="get-to-know-me">
                <div className="get-to-know-me-title">
                    <h2 className='know-about-me-more'>Let's get to know</h2>
                    <h2 className='know-about-me-more'>about me closer</h2>
                </div>
                <div className="personal-statement">Hi, I'm Dalmas, a data engineer and data scientist driven by a passion for
                    transforming businesses through effective data delivery. 
                    With a strong foundation in data architectural design, 
                    I excel at crafting robust solutions that empower organizations
                     to harness the full potential of their data. </div>
                <div className="call-to-action">DISCOVER ME MORE</div>
            </div>
            <img className="faceshot" src={faceshot} alt="first"/>
        </div>
    )
}

export default HomeAboutMe;