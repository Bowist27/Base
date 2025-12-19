/**
 * Login Page
 * Split layout login with brand section
 */

import { useState } from 'react';
import BrandSection from '../components/ui/BrandSection';
import Logo from '../components/ui/Logo';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import './Login.css';

// Icons
const EmailIcon: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const LockIcon: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            console.log('Login:', { email, password });
            setLoading(false);
            alert('¡Login exitoso!');
        }, 1500);
    };

    return (
        <div className="login-page">
            <BrandSection />

            <section className="login-section">
                <div className="login-card">
                    <Logo />

                    <div className="login-header">
                        <h2 className="login-title">Bienvenido de nuevo</h2>
                        <p className="login-subtitle">Ingresa tus credenciales para acceder.</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <InputField
                            type="email"
                            id="email"
                            label="Correo Electrónico"
                            placeholder="admin@comex.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            icon={<EmailIcon />}
                            required
                            autoComplete="email"
                        />

                        <InputField
                            type="password"
                            id="password"
                            label="Contraseña"
                            placeholder="••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            icon={<LockIcon />}
                            required
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            variant="primary"
                            fullWidth
                            loading={loading}
                        >
                            Iniciar Sesión
                        </Button>
                    </form>

                    <p className="login-footer">
                        Este es un sistema privado para uso exclusivo de<br />
                        personal autorizado de Comex.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Login;
