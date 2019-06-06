import express, { Router } from 'express';

import especiesController from '../controllers/especiesController';

class EspeciesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', especiesController.list);
        this.router.get('/:id_es', especiesController.getOne);
        this.router.post('/', especiesController.create);
        this.router.put('/:id_es', especiesController.update);
        this.router.delete('/:id_es', especiesController.delete);
    }

}

export default new EspeciesRoutes().router;

