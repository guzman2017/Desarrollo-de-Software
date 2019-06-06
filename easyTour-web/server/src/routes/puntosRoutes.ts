import express, { Router } from 'express';

import puntosController from '../controllers/puntosController';

class PuntosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', puntosController.list);
        this.router.get('/:id_pun', puntosController.getOne);
        this.router.post('/', puntosController.create);
        this.router.put('/:id_pun', puntosController.update);
        this.router.delete('/:id_pun', puntosController.delete);
    }

}

export default new PuntosRoutes().router;

