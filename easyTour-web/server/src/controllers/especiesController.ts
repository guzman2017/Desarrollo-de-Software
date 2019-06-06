import { Request, Response } from 'express';


import pool from '../database';

class EspeciesController {

    public async list(req: Request, res: Response): Promise<void> {
        const especies = await pool.query('SELECT * FROM especie');
        res.json(especies);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_es } = req.params;
        const especies = await pool.query('SELECT * FROM especie WHERE id_es = ?', [id_es]);
        console.log(especies.length);
        if (especies.length > 0) {
            return res.json(especies[0]);
        }
        res.status(404).json({ text: "The especie doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO especie set ?', [req.body]);
        res.json({ message: 'especie Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_es } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE especie set ? WHERE id_es = ?', [req.body, id_es]);
        res.json({ message: "The especie was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_es } = req.params;
        await pool.query('DELETE FROM especie WHERE id_es = ?', [id_es]);
        res.json({ message: "The especie was deleted" });
    }
}

const especiesController = new EspeciesController;
export default especiesController;