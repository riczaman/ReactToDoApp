import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
            <footer>
                <p>Copyright &copy; 2021</p>
                <Link to='/about'>About</Link>
            </footer>
    )
}

export default Footer
