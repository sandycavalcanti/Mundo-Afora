import { useEffect, useState } from "react";
import Navbar from "./../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PacoteCard from "../components/PacoteCard.jsx";
import "../styles/pacotes.css";

export default function Pacotes() {
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    async function carregarPacotes() {
      const res = await fetch("/api/pacotes");
      const dados = await res.json();
      setPacotes(dados);
    }
    carregarPacotes();
  }, []);

  return (
    <div className="pacotes-page">
      <Navbar />

      <main className="conteudo">
        <h2 className="titulo-secao">Pacotes de Viagem</h2>
        <p className="subtitulo-secao">Viagens completas com tudo que você precisa</p>
        <div className="grid-pacotes">
          {pacotes.map((p) => (
            <PacoteCard key={p.id} pacote={p} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
