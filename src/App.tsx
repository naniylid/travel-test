import './App.css';
import { ChatsSection } from './components/ChatsSection/ChatsSection';
import { Header } from './components/Header';
import { SliderSection } from './components/SliderSection/SliderSection';

function App() {
    return (
        <div className='container'>
            <Header />
            <main>
                <SliderSection />
                <ChatsSection />
            </main>
        </div>
    );
}

export default App;
