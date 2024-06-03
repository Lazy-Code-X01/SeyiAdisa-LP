import '../Navbar/Navbar.css'
import logo from '../../assets/images/Logo.png'

const Navbar = () => {


    return (
        <nav className="container">
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Expertises">Expertises and Services</a></li>  
                <li><a href="Insight">Insight and Resources</a></li>
                <li><a href="Community">Community and Engagement</a></li>
                <li><button className="btn"><a href='Contact'>Contact Us</a></button></li>
            </ul>
        </nav>
    );
}

export default Navbar
