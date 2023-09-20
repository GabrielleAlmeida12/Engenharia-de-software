// /pages/api/study-plans.js

import db from '../../../db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await db.promise().query('SELECT * FROM StudyPlans');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Erro ao buscar dados de estudo:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}
