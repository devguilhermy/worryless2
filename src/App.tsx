import { Link, Outlet } from 'react-router-dom';

export default function App() {
    return (
        <div className="flex flex-col items-center w-full p-10">
            <Link to="/events">Eventos</Link>
            <Link to="/contacts">Contatos</Link>
            <Outlet />
        </div>
    );
}
