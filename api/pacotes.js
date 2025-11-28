import { connect } from "./db.js";

export default async function handler(req, res) {
  try {
    const db = await connect();
    const [rows] = await db.execute(`
      SELECT 
        p.Pct_id,
        p.Pct_nome,
        p.Pct_roteiro,
        p.Pct_dtInicio,
        p.Pct_dtFim,
        p.Pct_descricao,
        p.Pct_prcBase,
        p.Pct_hospedagem,
        p.Pct_transporte,
        p.Pct_status,
        h.Hot_nome AS hotel,
        tq.Tpq_nome AS tipo_quarto,
        d.Des_cidade AS destino,
        d.Des_estado AS destino_estado,
        d.Des_pais AS destino_pais
      FROM Pacotes p
      JOIN Hotel h ON p.Hot_CNPJ = h.Hot_CNPJ
      JOIN TipoQuarto tq ON p.Tpq_id = tq.Tpq_id
      JOIN Destino d ON p.Des_id = d.Des_id;
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
