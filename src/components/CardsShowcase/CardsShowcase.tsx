import style from './CardsShowcase.module.scss';

import { useEffect, useState } from 'react';
import api from '../../services/api/api';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Card {
    code: string;
    image: string;
    value: string;
    suit: string;
}

interface Deck {
    success: boolean;
    deck_id: string;
    cards: Card[];
    remaining: number;
}

const CardsShowcase: React.FC = () => {
    const [cardsX, setCardsX] = useState<Card[]>([]);
    const [cardsY, setCardsY] = useState<Card[]>([]);
    const [cardsZ, setCardsZ] = useState<Card[]>([]);

    const [modalImage, setModalImage] = useState<string | null>(null);
    const [modalPosition, setModalPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });


    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await api.get<Deck>('/new/draw/?count=5');
                setCardsX(response.data.cards);
            } catch (error) {
                console.error('Erro ao buscar cartas: ', error);
            }
        };
        fetchCards();
    }, []);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await api.get<Deck>('/new/draw/?count=5');
                setCardsY(response.data.cards);
            } catch (error) {
                console.error('Erro ao buscar cartas: ', error);
            }
        };
        fetchCards();
    }, []);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await api.get<Deck>('/new/draw/?count=5');
                setCardsZ(response.data.cards);
            } catch (error) {
                console.error('Erro ao buscar cartas: ', error);
            }
        };
        fetchCards();
    }, []);

    const handleMouseEnter = (image: string) => (event: React.MouseEvent) => {
        setModalImage(image);
        setModalPosition({ x: event.clientX, y: event.clientY });
    }

    const handleMouseMove = (event: React.MouseEvent) => {
        setModalPosition({ x: event.clientX, y: event.clientY });
    }

    const handleMouseLeave = () => {
        setModalImage(null);
    }
    return (
        <section className={style.container}>
            <div>
                <button className={style.prev}>
                    <IoIosArrowBack size={90} />
                </button>
                <h2>Coleção X</h2>
                <ul>
                    {cardsX.map(card => (
                        <li key={card.code}>
                            <img
                                src={card.image}
                                alt={`${card.value} of ${card.suit}`}
                                onMouseEnter={handleMouseEnter(card.image)}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            />
                            <a href="/">{`${card.value} of ${card.suit}`}</a>
                            <span>R$0,00</span>
                        </li>
                    ))}
                </ul>
                {modalImage && (
                    <div
                        className={style.modal}
                        style={{
                            '--modal-top': `${modalPosition.y}px`,
                            '--modal-left': `${modalPosition.x}px`,
                        } as React.CSSProperties}
                    >
                        <img src={modalImage} alt="Card modal" />
                    </div>
                )}
                <button className={style.next}>
                    <IoIosArrowForward size={90} />
                </button>
            </div>

            <div>
                <button className={style.prev}>
                    <IoIosArrowBack size={90} />
                </button>
                <h2>Coleção Y</h2>
                <ul>
                    {cardsY.map(card => (
                        <li key={card.code}>
                            <img
                                src={card.image}
                                alt={`${card.value} of ${card.suit}`}
                                onMouseEnter={handleMouseEnter(card.image)}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            />
                            <a href="/">{`${card.value} of ${card.suit}`}</a>
                            <span>R$0,00</span>
                        </li>
                    ))}
                </ul>
                {modalImage && (
                    <div
                        className={style.modal}
                        style={{
                            '--modal-top': `${modalPosition.y}px`,
                            '--modal-left': `${modalPosition.x}px`,
                        } as React.CSSProperties}
                    >
                        <img src={modalImage} alt="Card modal" />
                    </div>
                )}
                <button className={style.next}>
                    <IoIosArrowForward size={90} />
                </button>
            </div>

            <div>
                <button className={style.prev}>
                    <IoIosArrowBack size={90} />
                </button>
                <h2>Coleção Z</h2>
                <ul>
                    {cardsZ.map(card => (
                        <li key={card.code}>
                            <img
                                src={card.image}
                                alt={`${card.value} of ${card.suit}`}
                                onMouseEnter={handleMouseEnter(card.image)}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            />
                            <a href="/">{`${card.value} of ${card.suit}`}</a>
                            <span>R$0,00</span>
                        </li>
                    ))}
                </ul>
                {modalImage && (
                    <div
                        className={style.modal}
                        style={{
                            '--modal-top': `${modalPosition.y}px`,
                            '--modal-left': `${modalPosition.x}px`,
                        } as React.CSSProperties}
                    >
                        <img src={modalImage} alt="Card modal" />
                    </div>
                )}
                <button className={style.next}>
                    <IoIosArrowForward size={90} />
                </button>
            </div>
        </section>
    );
}

export default CardsShowcase;