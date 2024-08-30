import logo from '../images/fulllogo_transparent_nobuffer.png'
function Nav(){
return(
    <div className="nav">
        <img src={logo} alt="logo" width="100px" />
        <div className="nav-bar">
            <div className="nav-bar-item">HOME</div>
            <div className="nav-bar-item">ABOUT ME</div>
            <div className="nav-bar-item">MY WORKS</div>
            <div className="nav-bar-item">CONTACT</div>
        </div>
    </div>
)
}

export default Nav;