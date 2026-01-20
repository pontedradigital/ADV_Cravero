import React, { useState, useEffect } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';

export const AdminPage: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check consistent login state on mount (mock persistence)
    useEffect(() => {
        const isLogged = localStorage.getItem('admin_logged_in') === 'true';
        if (isLogged) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        localStorage.setItem('admin_logged_in', 'true');
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_logged_in');
        setIsAuthenticated(false);
    };

    if (isAuthenticated) {
        return <AdminDashboard onLogout={handleLogout} />;
    }

    return <AdminLogin onLogin={handleLogin} />;
};
