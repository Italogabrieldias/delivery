import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './Linkedin.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';

function Footer (){

    return (
        <footer className='main-footer'>
            App desenvolvido para fazer seus pedidos e se divertir com sua familia!!!

            <div className="footer-icons">
                <a href="https://www.youtube.com/" target="_new"> 
                <YoutubeIcon/>
                </a>
                <a href='https://www.linkedin.com/in/%C3%ADtalo-gabriel-dias-1831b7128/' target="_new"> 
                <LinkedinIcon/>
                </a>
                <a href='https://www.instagram.com/italogabrieldias_/?igshid=ZDdkNTZiNTM%3D' target="_new">
                    <InstagramIcon/>
                     </a>
            </div>
        </footer>
    )
}

export default Footer;