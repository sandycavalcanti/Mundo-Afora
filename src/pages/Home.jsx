import Navbar from "./../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/home.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ou "next/link" se for Next.js

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      {/* Banner */}
      <section className="banner">
        <div className="banner-bg">
          <div
            className="banner-pattern"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.43 0 0 13.43 0 30s13.43 30 30 30 30-13.43 30-30S46.57 0 30 0m0 50c-11.05 0-20-8.95-20-20s8.95-20 20-20 20 8.95 20 20-8.95 20-20 20' fill='%23f59e0b' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="banner-content">
          <div className="welcome-badge">
            Bem-vindo ao Mundo Afora
          </div>
          <h1>
            Explore Destinos{" "}
            <span className="highlight-text">Incríveis</span>
          </h1>
          <p>
            Descubra experiências únicas em lugares mágicos. Planeje sua próxima aventura com a Mundo Afora
          </p>

          <div className="banner-buttons">
            <Link to="/destinos" className="btn-primary">
              Explorar Destinos <ArrowRight className="arrow-icon" />
            </Link>
            <Link to="/pacotes" className="btn-outline">
              Ver Pacotes
            </Link>
          </div>
        </div>
      </section>

      {/* Cards/Destaques */}
      <section className="cards-section">
        <h2>Destaques</h2>
        <div className="cards-container">
          <Link to="/destinos" className="card highlight-card">
            <h3>Destinos Exclusivos</h3>
            <p>Conheça os lugares mais incríveis do mundo</p>
          </Link>
          <Link to="/pacotes" className="card highlight-card pacotes">
            <h3>Pacotes Viagem</h3>
            <p>Viagens completas com tudo incluído</p>
          </Link>
          <Link to="/hoteis" className="card highlight-card hoteis">
            <h3>Hospedagens</h3>
            <p>Hotéis e resorts de primeira qualidade</p>
          </Link>
        </div>
      </section>

      {/* Faixa Final / CTA */}
      <section className="final-sec">
        <h2>Pronto para sua próxima aventura?</h2>
        <p>Comece a explorar agora e encontre o destino perfeito</p>
        <Link to="/pacotes" className="btn-primary">
          Descobrir Pacotes
        </Link>
      </section>

      <Footer />
    </div>
  );
}
