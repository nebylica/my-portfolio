import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


function Contacts() {
    return (
        <div className='d-flex-column'>
            <span className="tag">&lt;contacts&gt;</span>
            <span className="title">Just say hi.</span>
            <p>I'm always open to discuss your project and talk about new things.</p>
            <div>
                <span className="tag">&lt;email </span>
                <a href="mailto:v.nebylica@gmail.com">v.nebylica@gmail.com</a>
                <span className="tag"> /&gt;</span>
            </div>

            <div className='icons'>
                <span className="tag">&lt;follow </span>
                <div>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/viktorija-nebylica-4b2874151/">
                        <FaLinkedin />
                    </a>
                    <a target='_blank' rel="noreferrer" href="https://www.instagram.com/viktorijaneb/">
                        <FaInstagram />
                    </a>
                    <a target='_blank' rel="noreferrer" href="https://www.facebook.com/vika.niam.7">
                        <FaFacebookSquare />
                    </a>
                    <a target='_blank' rel="noreferrer" href="https://github.com/nebylica">
                        <FaGithub />
                    </a>
                </div>
                <span className="tag"> /&gt;</span>
            </div>

            <span className="tag">&lt;/contacts&gt;</span>
        </div>
    );
}

export default Contacts;