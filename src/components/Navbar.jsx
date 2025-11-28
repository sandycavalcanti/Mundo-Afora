// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="logo" >Mundo Afora</a>
      </div>

      <div className="nav-center">
        <a href="/pacotes">Pacotes</a>
        <a href="/destinos">Destinos</a>
      </div>

      <div className="nav-right">
        <a className="login-btn">Login</a>
      </div>
    </nav>
  );
}
