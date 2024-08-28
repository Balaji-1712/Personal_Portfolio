import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/Projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
