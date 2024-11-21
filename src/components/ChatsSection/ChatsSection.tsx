import React, { useState } from 'react';
import './ChatSection.css';
import { ChatWindow } from './ChatWindow';

export const ChatsSection: React.FC = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'Наталия Полянская',
            text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования',
            time: 'Вчера в 17:45',
        },
        {
            id: 2,
            sender: 'Администратор',
            text: 'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.',
            time: ' Вчера в 18:45',
        },
        {
            id: 3,
            sender: 'Наталия Полянская',
            text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования',
            time: 'Вчера в 17:45',
        },
    ]);

    const addMessage = (text: string, sender: string) => {
        const newMessage = {
            id: Date.now(),
            sender,
            text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <section className='chats-section'>
            <div className='user-chat'>
                <h1>Чат с пользователем</h1>
                <ChatWindow
                    user='Наталия Полянская'
                    job='Гид по Баварии, фотограф'
                    messages={messages}
                    onSendMessage={(text) => addMessage(text, 'Администратор')}
                    stars={true}
                />
            </div>
            <div className='admin-chat'>
                <h1>Чат с администратором</h1>
                <ChatWindow
                    user='Администратор'
                    job='TravelAsk'
                    messages={messages}
                    onSendMessage={(text) => addMessage(text, 'Наталия Полянская')}
                />
            </div>
        </section>
    );
};
