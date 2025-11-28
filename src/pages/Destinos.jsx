import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import DestinoCard from "../components/DestinoCard.jsx";
import "../styles/destinos.css";

export default function Destinos() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    async function carregarDestinos() {
      try {
        const res = await fetch("/api/destinos");
        const dados = await res.json();
        setDestinos(dados);
      } catch (err) {
        console.error("Erro ao carregar destinos:", err);
      }
    }
    carregarDestinos();
  }, []);

  return (
    <div className="destinos-page">
      <Navbar />
      <main className="conteudo">
        <h2 className="titulo-secao">Destinos</h2>
        <p className="subtitulo-secao">Escolha entre nossos destinos mais populares e comece sua aventura</p>
        {/* Grid de Destinos */}
        <div className="grid-cards">
          {destinos.map((destino) => (
            <DestinoCard key={destino.id ?? destino.Des_id ?? destino.nome} destino={destino} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
