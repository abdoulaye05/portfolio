import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PasswordProtection.module.scss';
import { FaLock, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import Header from './Header';

// Hash SHA-256 de "competences2024"
const CORRECT_PASSWORD_HASH = "4a9b982f23258d95b5717aa91b1c5b36b81d3ddb68cbb4efb5e43b61cf76f197";

// Fonction de hachage simple (pour démonstration - pas sécurisé pour production)
const simpleHash = async (text) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const PasswordProtection = ({ children }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  // Vérifier si l'utilisateur est déjà authentifié (session 12h)
  useEffect(() => {
    const authStatus = localStorage.getItem('competences_auth');
    const authTime = localStorage.getItem('competences_auth_time');
    
    if (authStatus && authTime) {
      const now = new Date().getTime();
      const authTimestamp = parseInt(authTime);
      // Session valide pendant 12 heures (12 * 60 * 60 * 1000 ms)
      if (now - authTimestamp < 12 * 60 * 60 * 1000) {
        setIsAuthenticated(true);
      } else {
        // Session expirée après 12h d'inactivité
        localStorage.removeItem('competences_auth');
        localStorage.removeItem('competences_auth_time');
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Hacher le mot de passe saisi
      const passwordHash = await simpleHash(password);
      
      if (passwordHash === CORRECT_PASSWORD_HASH) {
        setIsAuthenticated(true);
        setError('');
        // Stocker l'authentification pour 12 heures
        localStorage.setItem('competences_auth', 'true');
        localStorage.setItem('competences_auth_time', new Date().getTime().toString());
      } else {
        setError('Mot de passe incorrect');
        setAttempts(prev => prev + 1);
        setPassword('');
        
        // Bloquer temporairement après 3 tentatives
        if (attempts >= 2) {
          setError('Trop de tentatives. Veuillez attendre 30 secondes.');
          setTimeout(() => {
            setError('');
            setAttempts(0);
          }, 30000);
        }
      }
    } catch (error) {
      console.error('Erreur de hachage:', error);
      setError('Erreur technique. Veuillez réessayer.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('competences_auth');
    localStorage.removeItem('competences_auth_time');
  };

  if (isAuthenticated) {
    return (
      <>
        <Header />
        <div className={styles.logoutContainer}>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <FaLock /> Verrouiller la session
          </button>
        </div>
        {children}
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.passwordContainer}>
        <div className={styles.passwordCard}>
          <div className={styles.iconContainer}>
            <FaLock className={styles.lockIcon} />
          </div>
          
          <h2>Accès Restreint</h2>
          <p>Cette section nécessite un mot de passe</p>
        
        <form onSubmit={handleSubmit} className={styles.passwordForm}>
          <div className={styles.inputContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez le mot de passe"
              className={styles.passwordInput}
              disabled={attempts >= 3}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeButton}
              disabled={attempts >= 3}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          
          {error && <div className={styles.error}>{error}</div>}
          
          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={attempts >= 3 || !password.trim()}
          >
            Accéder
          </button>
        </form>
        
        <div className={styles.hint}>
          <small>💡 Conseil : Contactez l'administrateur si vous avez besoin d'accès</small>
          <br />
          <small>🔒 Session valide 12 heures après connexion</small>
        </div>
        </div>
      </div>
    </>
  );
};

export default PasswordProtection;
