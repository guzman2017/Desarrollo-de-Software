import { Request, Response } from 'express';


import pool from '../database';

class ActividadesController {

    public async list(req: Request, res: Response): Promise<void> {
        const actividades = await pool.query('SELECT * FROM actividades');
        res.json(actividades);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id_act } = req.params;
        const actividades = await pool.query('SELECT * FROM actividades WHERE id_act = ?', [id_act]);
        console.log(actividades.length);
        if (actividades.length > 0) {
            return res.json(actividades[0]);
        }
        res.status(404).json({ text: "The actividades doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO actividades set ?', [req.body]);
        res.json({ message: 'actividades Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id_act } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE actividades set ? WHERE id_act = ?', [req.body, id_act]);
        res.json({ message: "The actividades was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id_act } = req.params;
        await pool.query('DELETE FROM actividades WHERE id_act = ?', [id_act]);
        res.json({ message: "The actividades was deleted" });
    }

    public async getByActividadesfk(req: Request, res: Response): Promise<any> {
        const { itinerariofk} = req.params;
        const actividades = await pool.query('SELECT * FROM actividades WHERE itinerariofk = ?', [itinerariofk]);
        console.log(actividades.length);
        if (actividades.length > 0) {
            return res.json(actividades);
        }else {
            res.status(404).json({ text: "The actividades doesn't exits" });
        
        }
    }
}
const actividadesController = new ActividadesController;
export default actividadesController;