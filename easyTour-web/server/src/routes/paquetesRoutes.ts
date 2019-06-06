import express, { Router } from 'express';

import paquetesController from '../controllers/paquetesController';

class PaqueteRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', paquetesController.list);
        this.router.get('/:id_paq', paquetesController.getOne);
        this.router.post('/', paquetesController.create);
        this.router.put('/:id_paq', paquetesController.update);
        this.router.delete('/:id_paq', paquetesController.delete);
        this.router.get('getName/:name_paq', paquetesController.getName);
    }

}

export default new PaqueteRoutes().router;

