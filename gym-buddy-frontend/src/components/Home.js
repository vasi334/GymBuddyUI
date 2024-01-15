import React from 'react';
import '../home-page/home.css';

const Home = () => {
  const goToPage = (page) => {
    window.location.href = `../${page.toLowerCase()}-page/${page.toLowerCase()}.html`;
  };

  return (
    <div className="container">
      <nav>
        <img src="../utils/logo.png" className="logo-GymBuddy" id="logo" alt="GymBuddy Logo" />
        <ul>
          <li><a id="home" onClick={() => goToPage('Home')}><span className="menu">Acasă</span></a></li>
          <li><a id="account" onClick={() => goToPage('MyAccount')}><span className="menu">Contul meu</span></a></li>
          {/* Add similar lines for other menu items */}
        </ul>
      </nav>
      <div className="header-content">
        <h1 className="transform-text">Transformă-ți corpul!</h1>
        <button className="join-button" onClick={() => goToPage('Signup')} id="signup-button">Alătură-te!</button>
      </div>
      <div className="account-box">
        <h1 className="account-text">Ai deja un cont?</h1>
        <button className="login-button" onClick={() => goToPage('Login')} id="login-button">Loghează-te</button>
      </div>
    </div>
  );
};

export default Home;
