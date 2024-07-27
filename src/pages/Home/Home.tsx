import styles from './Home.module.scss';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import CardsShowcase from '../../components/CardsShowcase/CardsShowcase';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />

            <Banner />

            <CardsShowcase />

            <Footer />
        </div>
    );
}

export default Home;