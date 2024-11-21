import React, { useState } from 'react';
import userAvatar from '../../assets/review-avatar.svg';
import adminAvatar from '../../assets/admin-avatar.svg';

interface Message {
    id: number;
    sender: string;
    text: string;
    time: string;
}

interface ChatWindowProps {
    user: string;
    job: string;
    messages: Message[];
    onSendMessage: (text: string) => void;
    stars?: boolean;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
    user,
    job,
    messages,
    onSendMessage,
    stars,
}) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        onSendMessage(newMessage);
        setNewMessage('');
    };

    return (
        <div className='chat-window'>
            <header className='chat-header'>
                <img src={userAvatar} alt={user} className='user-avatar' />
                <div className='user-info'>
                    <h2>{user}</h2>
                    <p>
                        <svg
                            aria-hidden='true'
                            aria-label='Флаг'
                            width='8'
                            height='10'
                            viewBox='0 0 8 10'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M7.27273 0.454545H0.909091V0H0V10H0.909091V5.90909H7.27273L5.90909 3.18182L7.27273 0.454545Z'
                                fill='#FF4641'
                            />
                        </svg>{' '}
                        {job}
                    </p>
                </div>
                {stars && (
                    <svg
                        aria-hidden='true'
                        className='stars-icon'
                        width='76'
                        height='12'
                        viewBox='0 0 76 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M6.375 9.97771L2.78474 11.9593C2.54669 12.0907 2.26334 11.8842 2.31691 11.6184L3.11775 7.6442L0.104135 4.89617C-0.0976009 4.71222 0.0109123 4.37718 0.282514 4.34542L4.36191 3.86849L6.08556 0.183765C6.20017 -0.0612557 6.54982 -0.0612549 6.66444 0.183766L8.38809 3.86849L12.4675 4.34542C12.7391 4.37718 12.8476 4.71222 12.6459 4.89617L9.63225 7.6442L10.4331 11.6184C10.4867 11.8842 10.2033 12.0907 9.96525 11.9593L6.375 9.97771Z'
                            fill='url(#paint0_linear_1_373)'
                        />
                        <path
                            d='M22.125 9.97771L18.5347 11.9593C18.2967 12.0907 18.0133 11.8842 18.0669 11.6184L18.8678 7.6442L15.8541 4.89617C15.6524 4.71222 15.7609 4.37718 16.0325 4.34542L20.1119 3.86849L21.8356 0.183765C21.9502 -0.0612557 22.2998 -0.0612549 22.4144 0.183766L24.1381 3.86849L28.2175 4.34542C28.4891 4.37718 28.5976 4.71222 28.3959 4.89617L25.3822 7.6442L26.1831 11.6184C26.2367 11.8842 25.9533 12.0907 25.7153 11.9593L22.125 9.97771Z'
                            fill='url(#paint1_linear_1_373)'
                        />
                        <path
                            d='M37.875 9.97771L34.2847 11.9593C34.0467 12.0907 33.7633 11.8842 33.8169 11.6184L34.6178 7.6442L31.6041 4.89617C31.4024 4.71222 31.5109 4.37718 31.7825 4.34542L35.8619 3.86849L37.5856 0.183765C37.7002 -0.0612557 38.0498 -0.0612549 38.1644 0.183766L39.8881 3.86849L43.9675 4.34542C44.2391 4.37718 44.3476 4.71222 44.1459 4.89617L41.1322 7.6442L41.9331 11.6184C41.9867 11.8842 41.7033 12.0907 41.4653 11.9593L37.875 9.97771Z'
                            fill='url(#paint2_linear_1_373)'
                        />
                        <path
                            d='M53.625 9.97771L50.0347 11.9593C49.7967 12.0907 49.5133 11.8842 49.5669 11.6184L50.3678 7.6442L47.3541 4.89617C47.1524 4.71222 47.2609 4.37718 47.5325 4.34542L51.6119 3.86849L53.3356 0.183765C53.4502 -0.0612557 53.7998 -0.0612549 53.9144 0.183766L55.6381 3.86849L59.7175 4.34542C59.9891 4.37718 60.0976 4.71222 59.8959 4.89617L56.8822 7.6442L57.6831 11.6184C57.7367 11.8842 57.4533 12.0907 57.2153 11.9593L53.625 9.97771Z'
                            fill='url(#paint3_linear_1_373)'
                        />
                        <path
                            d='M69.375 9.97771L65.7847 11.9593C65.5467 12.0907 65.2633 11.8842 65.3169 11.6184L66.1178 7.6442L63.1041 4.89617C62.9024 4.71222 63.0109 4.37718 63.2825 4.34542L67.3619 3.86849L69.0856 0.183765C69.2002 -0.0612557 69.5498 -0.0612549 69.6644 0.183766L71.3881 3.86849L75.4675 4.34542C75.7391 4.37718 75.8476 4.71222 75.6459 4.89617L72.6322 7.6442L73.4331 11.6184C73.4867 11.8842 73.2033 12.0907 72.9653 11.9593L69.375 9.97771Z'
                            fill='#F1EBDB'
                        />
                        <defs>
                            <linearGradient
                                id='paint0_linear_1_373'
                                x1='0'
                                y1='12'
                                x2='12.75'
                                y2='12'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop stop-color='#F5A623' />
                                <stop offset='1' stop-color='#F5C723' />
                            </linearGradient>
                            <linearGradient
                                id='paint1_linear_1_373'
                                x1='15.75'
                                y1='12'
                                x2='28.5'
                                y2='12'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop stop-color='#F5A623' />
                                <stop offset='1' stop-color='#F5C723' />
                            </linearGradient>
                            <linearGradient
                                id='paint2_linear_1_373'
                                x1='31.5'
                                y1='12'
                                x2='44.25'
                                y2='12'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop stop-color='#F5A623' />
                                <stop offset='1' stop-color='#F5C723' />
                            </linearGradient>
                            <linearGradient
                                id='paint3_linear_1_373'
                                x1='47.25'
                                y1='12'
                                x2='60'
                                y2='12'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop stop-color='#F5A623' />
                                <stop offset='1' stop-color='#F5C723' />
                            </linearGradient>
                        </defs>
                    </svg>
                )}
            </header>
            <div className='chat-messages'>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`message ${
                            message.sender === user ? 'message-sent' : 'message-received'
                        }`}
                    >
                        <img
                            src={message.sender === user ? userAvatar : adminAvatar}
                            alt={user}
                            className='user-avatar'
                        />
                        <div className='message-info'>
                            <p className='text'>{message.text}</p>
                            <span className='time'>{message.time}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='chat-input'>
                <img src={adminAvatar} alt={user} className='user-avatar' />
                <input
                    type='text'
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder='Напишите сообщение...'
                />
                <button onClick={handleSendMessage}>
                    <svg
                        aria-hidden='true'
                        aria-label='Отправить'
                        width='22'
                        height='22'
                        viewBox='0 0 22 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M0.000504511 11.7943L5.95749 14.5139L17.6432 4.88889L8.32519 15.6597L9.77636 22L11.5327 17.6455L18.3306 20.7778C18.2084 20.9007 22.1194 0.122905 21.9972 0C21.9972 0 -0.121699 11.7943 0.000504511 11.7943Z'
                            fill='#FF4641'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
