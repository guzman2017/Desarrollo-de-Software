import { Request, Response } from 'express';


import pool from '../database';

class PaquetesController {

    public async list(req: Request, res: Response): Promise<void> {
        const paquetes = await pool.query('SELECT * FROM paquete');
        res.json(paquetes);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_paq } = req.params;
        const paquetes = await pool.query('SELECT * FROM paquete WHERE id_paq = ?', [id_paq]);
        console.log(paquetes.length);
        if (paquetes.length > 0) {
            return res.json(paquetes[0]);
        }
        res.status(404).json({ text: "The paquetes doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO paquete set ?', [req.body]);
        res.json({ message: 'paquetes Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_paq } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE paquete set ? WHERE id_paq = ?', [req.body, id_paq]);
        res.json({ message: "The paquetes was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_paq } = req.params;
        await pool.query('DELETE FROM paquete WHERE id_paq = ?', [id_paq]);
        res.json({ message: "The paquetes was deleted" });
    }

    public async getName(req: Request, res: Response): Promise<any> {
        const { name_paq } = req.params;
        const paquetes = await pool.query('SELECT * FROM paquete WHERE ciudad_paq = ?', [name_paq]);
        console.log(paquetes.length);
        if (paquetes.length > 0) {
            return res.json(paquetes[0]);
        }
        res.status(404).json({ text: "The ciudad doesn't exits" });
    }

}

const paquetesController = new PaquetesController;
export default paquetesController;