import logo from '../images/fulllogo_transparent_nobuffer.png'
export default function Nav(){
    const scrollToElement = (elementId)=>document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
    return(
        <div className="nav">
            <img src={logo} alt="logo" className="nav-logo"/>
            <div className="nav-bar">
                <div className="nav-bar-item" onClick={()=>scrollToElement('my-home')}>HOME</div>
                <div className="nav-bar-item" onClick={()=>scrollToElement('about-me')}>ABOUT ME</div>
                <div className="nav-bar-item" onClick={()=>scrollToElement('my-works')}>MY WORKS</div>
                <div className="nav-bar-item"  onClick={()=>scrollToElement('contact-title3')}>CONTACT</div>
            </div>
        </div>
    )
}
