import styles from './Header.module.scss';
import { useState } from 'react';
import logo from '../../assets/img/logo1.png';
import { FaSearch, FaFilter, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <header className={styles.container}>
            <div className={styles.container__top}>
                <div className={styles.container__top__logo}>
                    <a href="/">
                        <img src={logo} alt="Logotipo da loja Slowbrothers" />
                    </a>
                </div>
                <form className={styles.container__top__search} action='/'>
                    <input type="text" name="search" id="search" placeholder="Faça sua busca" />
                    <label htmlFor="search">
                        <button><FaFilter size={18} /></button>
                        <button><FaSearch size={18} /></button>
                    </label>
                </form>
                <div className={styles.container__top__user}>
                    <p>
                        <a href="/">Entre</a> ou <a href="/">Cadastre-se</a>
                    </p>
                    <div className={styles.container__top__user__avatar}>
                        <button>
                            <FaUser size={30} />
                        </button>
                    </div>
                    <div>
                        <button>
                            <FaHeart size={30} />
                            <span>0</span>
                        </button>
                        <button>
                            <FaShoppingCart size={30} />
                            <span>0</span>
                        </button>
                    </div>
                </div>
                <button 
                    className={`${styles.container__top__hamburguer} ${isOpen ? styles.open : ''}`} 
                    onClick={toggleMenu}
                >
                    <div className={styles.hamburguer__bar}></div>
                </button>
            </div>
            <nav className={`${styles.container__nav} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li><span>Pokémon</span></li>
                    <div className={styles.vertical_line}></div>
                    <li><span>Acessórios</span></li>
                    <div className={styles.vertical_line}></div>
                    <li><span>Outros</span></li>
                    <div className={styles.vertical_line}></div>
                    <li><span>FAQ</span></li>
                    <div className={styles.vertical_line}></div>
                    <li><span>Contato</span></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;