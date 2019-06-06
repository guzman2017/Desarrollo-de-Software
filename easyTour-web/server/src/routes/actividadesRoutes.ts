import express, { Router } from 'express';

import actividadesController from '../controllers/actividadesController';

class ActividadRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', actividadesController.list);
        this.router.get('/:id_act', actividadesController.getOne);
        this.router.post('/', actividadesController.create);
        this.router.put('/:id_act', actividadesController.update);
        this.router.delete('/:id_act', actividadesController.delete);
        this.router.get('/getActividades/:itinerariofk', actividadesController.getByActividadesfk);

    }

}

export default new ActividadRoutes().router;

