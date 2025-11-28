export default function PacoteCard({ pacote }) {
  // Função para formatar data ISO para dd/mm/aaaa
  function formatarData(isoString) {
    const data = new Date(isoString);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <div className="pacote-card">
      <div className="pacote-card-header">
        <h3>{pacote.titulo}</h3>
      </div>

      <div className="pacote-card-body">
        <p className="descricao">{pacote.descricao}</p>

        <div className="detalhes">
          <div className="item">🗺️ {pacote.roteiro}</div>
          <div className="item">
            📅 {formatarData(pacote.inicio)} até {formatarData(pacote.fim)}
          </div>
        </div>

        <div className="tags">
          <span className={pacote.Guia ? "tag guia" : "tag sem-guia"}>
            {pacote.Guia ? "✓ Guia Incluído" : "Sem Guia"}
          </span>
          <span className={pacote.hospedagem ? "tag hospedagem" : "tag sem-hospedagem"}>
            {pacote.hospedagem ? "🏨 Hospedagem" : "Sem Hospedagem"}
          </span>
        </div>

        <div className="pacote-card-footer">
          <div>
            <p className="label">A partir de</p>
            <p className="preco">R$ {Number(pacote.preco).toFixed(2)}</p>
          </div>
          <button className="btn-reservar">Reservar</button>
        </div>
      </div>
    </div>
  );
}
