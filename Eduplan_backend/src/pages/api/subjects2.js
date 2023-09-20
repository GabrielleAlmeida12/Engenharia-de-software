// /pages/api/subjects.js

import db from '../../../db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await db.promise().query('SELECT * FROM Subjects');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Erro ao buscar assuntos:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}
