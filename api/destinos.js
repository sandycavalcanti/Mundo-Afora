import { connect } from "./db.js";

export default async function handler(req, res) {
  try {
    const db = await connect();

    const [rows] = await db.query(`
      SELECT 
        Des_id,
        Des_cidade,
        Des_estado,
        Des_pais,
        Des_clima,
        Des_descricao,
        Des_regiao
      FROM Destino
      WHERE Des_status = 1
    `);

    // adaptar nomes para o front
    const destinosFormatados = rows.map(d => ({
      id: d.Des_id,
      nome: `${d.Des_cidade} - ${d.Des_estado}`,
      pais: d.Des_pais,
      clima: d.Des_clima,
      descricao: d.Des_descricao,
      continente: d.Des_regiao // usando regiao como "continente"
    }));

    res.status(200).json(destinosFormatados);

  } catch (error) {
    console.error("Erro API Destinos:", error);
    res.status(500).json({ error: "Erro ao buscar destinos" });
  }
}
