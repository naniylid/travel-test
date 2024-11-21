import React from 'react';
import image from '../../assets/Барселона_Испания.jpg';

export const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='header-image'>
                <img loading='lazy' src={image} alt='Храм Святого Семейства' />
            </div>
            <div className='header-right'>
                <h1>Барселона — обзор города</h1>
                <p>
                    Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
                    многочисленными фестивалями и гастрономическим разнообразием понравилась мне в
                    первый же день пребывания и стала местом, в котором...
                </p>
                <a href='#' role='button'>
                    Читать дальше
                </a>
            </div>
        </header>
    );
};
