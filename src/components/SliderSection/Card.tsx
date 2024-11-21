import React, { useState } from 'react';
import avatar from '../../assets/review-avatar.svg';
import slide1 from '../../assets/slider-images/1.jpg';
import slide2 from '../../assets/slider-images/2.jpg';
import slide3 from '../../assets/slider-images/3.jpg';
import { Modal } from '../Modal/Modal';

const images = [
    { id: 1, src: slide1, alt: 'Фото Барселоны 1' },
    { id: 2, src: slide2, alt: 'Фото Барселоны 2' },
    { id: 3, src: slide3, alt: 'Фото Барселоны 3' },
    { id: 4, src: slide3, alt: 'Фото Барселоны 4' },
    { id: 5, src: slide1, alt: 'Фото Барселоны 1' },
    { id: 6, src: slide2, alt: 'Фото Барселоны 2' },
    { id: 7, src: slide3, alt: 'Фото Барселоны 3' },
    { id: 8, src: slide3, alt: 'Фото Барселоны 4' },
];

interface CardProps {
    name: string;
    review: string;
    timeAgo: string;
    comments: number;
    likes: number;
}

export const Card: React.FC<CardProps> = ({ name, review, timeAgo, comments, likes }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = (imageSrc: string) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const remainingImagesCount = images.length - 4;

    return (
        <>
            <div className='slide-card'>
                <div className='slide-card-name-block'>
                    <img src={avatar} alt={name + ' Фото'} />
                    <h3>{name}</h3>
                </div>
                <div className='slider-card-review'>
                    <h4 className='slider-card-review-title'>
                        <span>Барселона</span> — о городе:
                    </h4>
                    <p>{review}</p>
                </div>
                <div className='slider-image-carousel'>
                    {images.slice(0, 4).map((image, index) => (
                        <div key={image.id} className='image-wrapper'>
                            {index === 3 && remainingImagesCount > 0 && (
                                <div className='overlay'>+{remainingImagesCount}</div>
                            )}
                            <img
                                src={image.src}
                                alt={image.alt}
                                onClick={() => openModal(image.src)}
                                className='slider-image'
                            />
                        </div>
                    ))}
                </div>
                <div className='slider-card-info'>
                    <div className='slider-card-info-left'>
                        <p>{timeAgo}</p>
                        <span>.</span>
                        <p>
                            {comments > 4 ? comments + ' комментраиев' : comments + ' комментария'}{' '}
                        </p>
                    </div>
                    <div className='slider-card-info-right'>
                        <svg
                            aria-hidden='true'
                            aria-label='Лайк'
                            width='14'
                            height='16'
                            viewBox='0 0 14 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g clip-path='url(#clip0_1_111)'>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M1.00025 10.063L3.75025 8.688L5.06225 4.219C5.06225 4.219 4.84425 2.219 4.71925 1C7.03125 1 7.15625 3.969 7.15625 3.969L7.40625 6.063C7.40625 6.063 9.77025 5.421 10.6253 5.251C11.8753 5.001 12.6883 5.688 12.3753 7C13.0313 7.407 13.0003 8.563 12.4693 9.063C12.9383 9.594 12.8443 10.844 12.1883 11.313C12.3503 12.431 11.9693 12.688 11.6883 12.938C11.4063 13.188 9.93825 14.001 8.28125 14.001C6.62525 14.001 5.18725 13.657 5.18725 13.657L3.03125 15C3.03125 15 2.21925 14.469 1.59425 12.876C0.969252 11.282 1.00025 10.063 1.00025 10.063Z'
                                    stroke='#A0A0A0'
                                    stroke-linejoin='round'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_1_111'>
                                    <rect width='14' height='16' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>{likes}</p>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    children={
                        <div className='modal-content'>
                            <span className='close' onClick={closeModal}>
                                &#x2715;
                            </span>
                            <div className='modal-image'>
                                <img loading='lazy' src={modalImage} alt='Modal' />
                            </div>

                            <div className='modal-carousel'>
                                {images.map((image) => (
                                    <img
                                        loading='lazy'
                                        key={image.id}
                                        src={image.src}
                                        alt={image.alt}
                                        onClick={() => openModal(image.src)}
                                    />
                                ))}
                            </div>
                        </div>
                    }
                />
            )}{' '}
        </>
    );
};
