// Slider.jsx
import React, { useState, useEffect } from 'react';
// Імпортуй свій CSS-файл, де описані .slider, .slider-img, .active і т.д.
import './Slider.css'; 

// 1. Дані для слайдів. У React ми керуємо даними, а не DOM-елементами.
const slidesData = [
  { id: 1, className: 'slider-img1', title: 'Headphones' },
  { id: 2, className: 'slider-img2', title: 'Laptops' },
  { id: 3, className: 'slider-img3', title: 'Keyboards' }
];

function Slider() {
  // 2. Створюємо "стан" для зберігання індексу активного слайда.
  // Це заміна твоєї 'let index = 0;'
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Функція для переходу до наступного слайда
  const goToNextSlide = () => {
    // Використовуємо функціональну форму, щоб завжди мати актуальний стан
    setActiveIndex((prevIndex) => {
      // Якщо це останній слайд, повертаємось на 0, інакше +1
      return prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1;
    });
  };

  // 4. Ефект для запуску setInterval. Це заміна твого глобального setInterval.
  useEffect(() => {
    // Запускаємо таймер
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000); // 5 секунд

    // 5. Дуже важливо! Очищуємо таймер, коли компонент зникає з екрану
    // Це запобігає витокам пам'яті.
    return () => {
      clearInterval(timer);
    };
  }, []); // [] означає, що цей ефект запуститься 1 раз при монтажі компонента

  return (
    // 6. Додаємо клік на весь слайдер для переходу
    // Це заміна твого 'slider.forEach(s => s.addEventListener('click', slide));'
    <div className="slider" onClick={goToNextSlide}>
      {
        // 7. Рендеримо слайди через .map()
        slidesData.map((slide, index) => (
          <div
            key={slide.id}
            // 8. Динамічно додаємо клас 'active'
            // Якщо 'index' (з .map) співпадає з 'activeIndex' (зі стану),
            // то додаємо клас 'active'.
            className={`slider-img ${slide.className} ${index === activeIndex ? 'active' : ''}`}
          >
            {/* Твій блок з заголовком */}
            <div className="slider-heading">
              {slide.title}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Slider;