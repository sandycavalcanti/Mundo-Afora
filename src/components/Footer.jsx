// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Mundo Afora</h3>
            <p>Explore o mundo com confiança e conforto</p>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              <li><a href="/destinos">Destinos</a></li>
              <li><a href="/pacotes">Pacotes</a></li>
              <li><a href="/hoteis">Hotéis</a></li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>Email: info@mundoafora.com</li>
              <li>Tel: +55 (11) 99999-9999</li>
            </ul>
          </div>

          <div>
            <h4>Redes Sociais</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Mundo Afora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
