import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProtectedLink = ({ to, children, className, style, onClick }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('competences_auth');
      const authTime = localStorage.getItem('competences_auth_time');
      
      if (authStatus && authTime) {
        const now = new Date().getTime();
        const authTimestamp = parseInt(authTime);
        // Session valide pendant 12 heures (12 * 60 * 60 * 1000 ms)
        if (now - authTimestamp < 12 * 60 * 60 * 1000) {
          setIsAuthenticated(true);
        } else {
          // Session expirée après 12h
          localStorage.removeItem('competences_auth');
          localStorage.removeItem('competences_auth_time');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
    
    // Vérifier périodiquement si l'utilisateur s'est connecté dans un autre onglet
    const interval = setInterval(checkAuth, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    // Si le lien concerne les compétences et que l'utilisateur n'est pas authentifié
    if (to.includes('/skills') && !isAuthenticated) {
      // Ne pas empêcher la navigation - laisser aller à la page de connexion
      // La page PasswordProtection s'occupera de demander le mot de passe
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link 
      to={to} 
      className={className} 
      style={style}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default ProtectedLink;
