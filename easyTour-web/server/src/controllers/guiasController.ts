import { Request, Response } from 'express';


import pool from '../database';

class GuiasController {

    public async list(req: Request, res: Response): Promise<void> {
        const guias = await pool.query('SELECT * FROM guia');
        res.json(guias);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_guia } = req.params;
        const guias = await pool.query('SELECT * FROM guia WHERE id_guia = ?', [id_guia]);
        console.log(guias.length);
        if (guias.length > 0) {
            return res.json(guias[0]);
        }
        res.status(404).json({ text: "The guias doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO guia set ?', [req.body]);
        res.json({ message: 'guias Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_guia } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE guia set ? WHERE id_guia = ?', [req.body, id_guia]);
        res.json({ message: "The guias was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_guia } = req.params;
        await pool.query('DELETE FROM guia WHERE id_guia = ?', [id_guia]);
        res.json({ message: "The guias was deleted" });
    }
    // funcion para obtener guias

    public async getListByPaquetefkguia(req: Request, res: Response): Promise<any> {
        const { paquetefk } = req.params;
        console.log("fk guia es ", paquetefk , req.params);
        const guias = await pool.query('SELECT * FROM guia WHERE paquetefk= ?', [paquetefk]);
        console.log(guias.length);
        if (guias.length > 0) {
            return res.json(guias);
        }
        res.status(404).json({ text: "The guia doesn't exits fk" });
    }

    public async getByGuiapaquetefk(req: Request, res: Response): Promise<any> {
        const { paquetefk } = req.params;
        const guias = await pool.query('SELECT * FROM guia WHERE paquetefk = ?', [paquetefk]);
        console.log(guias.length);
        if (guias.length > 0) {
            return res.json(guias);
        }
        res.status(404).json({ text: "The guias doesn't exits" });
    }
   
}

const guiasController = new GuiasController;
export default guiasController;