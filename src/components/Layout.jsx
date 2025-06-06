import TopNav from './TopNav';
import Sidebar from './Sidebar';
import './Layout.css';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <TopNav />
            <div className="content-area">
                <Sidebar />
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
}
