import React from 'react';
import { FaX } from 'react-icons/fa';

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <h1>Welcome to React</h1>
            </main>
            <footer>
                <p className="left">
                    Follow to my{' '}
                    <a href="https:x.com/MrPieX">
                        <FaX className="footer__icon" />
                    </a>{' '}
                    Account
                </p>
                <p className="right">Developed with &hearts; by Mr.XXX</p>
            </footer>
        </div>
    );
};

export default App;
