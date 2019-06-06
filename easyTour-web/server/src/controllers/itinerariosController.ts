import { Request, Response } from 'express';


import pool from '../database';

class ItinerariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const itinerarios = await pool.query('SELECT * FROM itinerario');
        res.json(itinerarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_it } = req.params;
        const itinerarios = await pool.query('SELECT * FROM itinerario WHERE id_it = ?', [id_it]);
        console.log(itinerarios.length);
        if (itinerarios.length > 0) {
            return res.json(itinerarios[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO itinerario set ?', [req.body]);
        res.json({ message: 'Punto Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_it } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE itinerario set ? WHERE id_it = ?', [req.body, id_it]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_it } = req.params;
        await pool.query('DELETE FROM itinerario WHERE id_it = ?', [id_it]);
        res.json({ message: "The punto was deleted" });
    }
}

const itinerariosController = new ItinerariosController;
export default itinerariosController;