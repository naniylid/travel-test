import React, { useState } from 'react';
import { Card } from './Card';

const reviews = [
    {
        name: 'Натальи Полянская',
        review: 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть...',
        timeAgo: 'около 1 года назад',
        comments: 9,
        likes: 9,
        id: 1,
    },
    {
        name: 'Elena Bulgakova',
        review: 'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
        timeAgo: '5 месяцев назад',
        comments: 3,
        likes: 7,
        id: 2,
    },
    {
        name: 'Натальи Полянская',
        review: 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть...',
        timeAgo: 'около 1 года назад',
        comments: 9,
        likes: 9,
        id: 3,
    },
    {
        name: 'Натальи Полянская',
        review: 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть...',
        timeAgo: 'около 1 года назад',
        comments: 9,
        likes: 9,
        id: 4,
    },
    {
        name: 'Натальи Полянская',
        review: 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть...',
        timeAgo: 'около 1 года назад',
        comments: 9,
        likes: 9,
        id: 5,
    },
    {
        name: 'Натальи Полянская',
        review: 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть...',
        timeAgo: 'около 1 года назад',
        comments: 9,
        likes: 9,
        id: 6,
    },
];

export const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className='slider'>
            <div
                className='slider-container'
                style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
            >
                {reviews.map((slide) => (
                    <Card
                        key={slide.id}
                        name={slide.name}
                        review={slide.review}
                        timeAgo={slide.timeAgo}
                        comments={slide.comments}
                        likes={slide.likes}
                    />
                ))}
            </div>

            <div className='slider-bottom'>
                <button className='all-reviews'>Все отзывы</button>
                <div className='dots'>
                    {reviews.map((_, index) => (
                        <div className='dot' onClick={() => goToSlide(index)} key={index}>
                            {index === currentSlide ? (
                                <svg
                                    aria-hidden='true'
                                    aria-label='Текущий слайд'
                                    width='8'
                                    height='8'
                                    viewBox='0 0 8 8'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z'
                                        fill='#FF4641'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    aria-hidden='true'
                                    aria-label='Следующий слайд'
                                    width='4'
                                    height='4'
                                    viewBox='0 0 4 4'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z'
                                        fill='#212121'
                                    />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
