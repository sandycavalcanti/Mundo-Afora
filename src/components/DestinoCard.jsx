export default function DestinoCard({ destino }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{destino.nome}</h3>
      </div>
      <div className="card-body">
        <p className="desc">{destino.descricao}</p>
        <p className="info">🌍 {destino.pais}</p>
        <p className="info">☀ Clima: {destino.clima}</p>
        <p className="info">🗺 Continente: {destino.continente}</p>
      </div>
      <div className="card-footer">
        <button className="btn">Explorar</button>
      </div>
    </div>
  );
}
