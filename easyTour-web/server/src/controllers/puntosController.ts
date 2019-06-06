import { Request, Response } from 'express';


import pool from '../database';

class PuntosController {

    public async list(req: Request, res: Response): Promise<void> {
        const puntos = await pool.query('SELECT * FROM puntos');
        res.json(puntos);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_pun } = req.params;
        const puntos = await pool.query('SELECT * FROM puntos WHERE id_pun = ?', [id_pun]);
        console.log(puntos.length);
        if (puntos.length > 0) {
            return res.json(puntos[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO puntos set ?', [req.body]);
        res.json({ message: 'Punto Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_pun } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE puntos set ? WHERE id_pun = ?', [req.body, id_pun]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_pun } = req.params;
        await pool.query('DELETE FROM puntos WHERE id_pun = ?', [id_pun]);
        res.json({ message: "The punto was deleted" });
    }
}

const gamesController = new PuntosController;
export default gamesController;