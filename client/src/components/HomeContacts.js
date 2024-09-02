import logo from '../images/fulllogo_transparent_nobuffer.png'
export default function HomeContacts(){
    return(
        <div className="home-contacts">
            <div className="get-in-touch-title">Get in Touch With Me</div>
            <h1 className="email">dalmas@dalicodes.com</h1>
            <div className="contact-items">
                <img src={logo} alt="logo" width="100px" height="50px"/>
                <div>
                    <p>socials</p>
                    <p>socials</p>
                </div>
                <div>
                    <p>socials</p>
                    <p>socials</p>
                </div>
            </div>
            <hr className="horizontal-rule"/>
            <div>&copy;2024 dalicodes. All rights reserved</div>
        </div>
    )
}