import { Request, Response } from 'express';


import pool from '../database';

class CategoriasController {

    public async list(req: Request, res: Response): Promise<void> {
        const categorias = await pool.query('SELECT * FROM categoria');
        res.json(categorias);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_cat } = req.params;
        const categorias = await pool.query('SELECT * FROM categoria WHERE id_cat = ?', [id_cat]);
        console.log(categorias.length);
        if (categorias.length > 0) {
            return res.json(categorias[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO categoria set ?', [req.body]);
        res.json({ message: 'Punto Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_cat } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE categoria set ? WHERE id_cat = ?', [req.body, id_cat]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_cat } = req.params;
        await pool.query('DELETE FROM categoria WHERE id_cat = ?', [id_cat]);
        res.json({ message: "The punto was deleted" });
    }
}

const categoriasController = new CategoriasController;
export default categoriasController;