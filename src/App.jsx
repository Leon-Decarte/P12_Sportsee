// src/App.jsx - VERSION AMÉLIORÉE
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import UserSelection from './pages/UserSelection';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<UserSelection />} />
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;