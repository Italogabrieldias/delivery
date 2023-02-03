import './styles.css'
import {ReactComponent as Logo } from './Grouplogo.svg';
import { Link } from 'react-router-dom';
function Navbar(){
    return (
        <nav className="main-navbar">
            <Logo />
        <a href='home' className='logo-text'> Delivery</a>
        </nav>
    )
    
}
export default Navbar;