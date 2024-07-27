import style from './Footer.module.scss';

import logo from '../../assets/img/logo1.png';
import { IoIosMail, IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaPhone, FaWhatsapp } from "react-icons/fa";
import { SiVisa, SiMastercard, SiMercadopago, SiPix } from "react-icons/si";

const Footer: React.FC = () => {
    return (
        <footer className={style.container}>
            <div className={style.newsletter}>
                <p>Cadastre-se para receber nossas novidades e ofertas.</p>
                <form action="/">
                    <input type="email" name="email" id="email" placeholder='Seu e-mail' />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>

            <div className={style.contact}>
                <a href="/">
                    <img src={logo} alt="Logo da loja" />
                </a>

                <div className={style.social}>
                    <h3>Siga-nos!</h3>

                    <div>
                        <a href="/">
                            <IoIosMail size={30} />
                        </a>
                        <a href="/">
                            <IoLogoInstagram size={30} />
                        </a>
                        <a href="/">
                            <FaFacebookF size={30} />
                        </a>
                    </div>
                </div>

                <div className={style.store}>
                    <h3>Fale conosco</h3>

                    <div>
                        <a href="/">
                            <FaPhone size={20} />
                            <span>11 1234-5678</span>
                        </a>

                        <a href="/">
                            <FaWhatsapp size={20} />
                            <span>11 91234-5678</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={style.copy}>
                <span>Copyright © 2024 Slowbrothers. Todos os Direitos Reservados. CNPJ: xx.xxx.xxx/xxxx-xx</span>
                <div>
                    <p>Formas de pagamento</p>
                    <SiVisa size={25} />
                    <SiMastercard size={25} />
                    <SiMercadopago size={25} />
                    <SiPix size={25} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;