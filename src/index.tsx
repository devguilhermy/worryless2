import App from './App';
import Contacts from './routes/contacts';
import Event from './routes/event';
import Events from './routes/events';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="events" element={<Events />}>
                        <Route path=":event_id" element={<Event />} />
                    </Route>
                    <Route path="contacts" element={<Contacts />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>Página não encontrada</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
