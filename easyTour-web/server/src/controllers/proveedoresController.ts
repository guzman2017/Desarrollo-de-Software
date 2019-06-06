import { Request, Response } from 'express';


import pool from '../database';

class PuntosController {

    public async list(req: Request, res: Response): Promise<void> {
        const proveedores = await pool.query('SELECT * FROM proveedor');
        res.json(proveedores);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_pro } = req.params;
        const proveedores = await pool.query('SELECT * FROM proveedor WHERE id_pro = ?', [id_pro]);
        console.log(proveedores.length);
        if (proveedores.length > 0) {
            return res.json(proveedores[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO proveedor set ?', [req.body]);
        res.json({ message: 'Punto Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_pro } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE proveedor set ? WHERE id_pro = ?', [req.body, id_pro]);
        res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_pro } = req.params;
        await pool.query('DELETE FROM proveedor WHERE id_pro = ?', [id_pro]);
        res.json({ message: "The punto was deleted" });
    }

    public async getByPaquetefk(req: Request, res: Response): Promise<any> {
        const { paquetefk } = req.params;
        const proveedores = await pool.query('SELECT * FROM proveedor WHERE paquetefk = ?', [paquetefk]);
        console.log(proveedores.length);
        if (proveedores.length > 0) {
            return res.json(proveedores);
        }else {
            res.status(404).json({ text: "The game doesn't exits" });
        }
       
    }
}

const proveedoresController = new PuntosController;
export default proveedoresController;