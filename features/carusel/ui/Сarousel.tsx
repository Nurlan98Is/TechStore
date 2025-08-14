import { useState } from 'react';

const cards = [
    { id: 1, content: 'Карточка 1' },
    { id: 2, content: 'Карточка 2' },
    { id: 3, content: 'Карточка 3' }
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Функция для переключения на следующую карточку
    const nextCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Функция для переключения на предыдущую карточку
    const prevCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-[500px] h-[500px] bg-gray-200 flex justify-between items-center p-4">
            {/* Кнопка "Назад" */}
            <button
                onClick={prevCard}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Назад
            </button>

            {/* Контейнер для карточек */}
            <div className="w-[300px] h-[300px] relative overflow-hidden">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-amber-400 transition-opacity duration-300 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        <div className="text-2xl font-bold">{card.content}</div>
                    </div>
                ))}
            </div>

            {/* Кнопка "Вперед" */}
            <button
                onClick={nextCard}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Вперед
            </button>
        </div>
    );
}