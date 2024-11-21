import React from 'react';
import './slider.css';
import { Slider } from './Slider';

export const SliderSection: React.FC = () => {
    return (
        <section className='slider-section'>
            <h1>Отзывы о Барселоне</h1>
            <Slider />
        </section>
    );
};
