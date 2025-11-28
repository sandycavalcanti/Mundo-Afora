import { connect } from "./db.js";

export default async function handler(req, res) {
  try {
    const db = await connect();
    const [rows] = await db.execute(`
        SELECT * FROM vw_pacotes_completos;
    `);

    const pacotes = rows.map(p => ({
      id: p.Pct_id,
      titulo: p.Pct_nome,
      roteiro: p.Pct_roteiro,
      inicio: p.Pct_dtInicio,
      fim: p.Pct_dtFim,
      descricao: p.Pct_descricao,
      preco: p.Pct_prcBase,
      hospedagem: p.Pct_hospedagem,
      transporte: p.Pct_transporte,
      hotel: p.hotel,
      tipo_quarto: p.tipo_quarto,
      destino: `${p.destino} - ${p.destino_estado}`,
      pais: p.destino_pais,
      status: p.Pct_status
    }));

    res.json(pacotes);

  } catch (err) {
    console.log(err);
    res.status(500).json({ erro: "Erro ao buscar pacotes" });
  }
}
