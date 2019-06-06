import express, { Router } from 'express';

import categoriasController from '../controllers/categoriasController';

class CategoriasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', categoriasController.list);
        this.router.get('/:id_cat', categoriasController.getOne);
        this.router.post('/', categoriasController.create);
        this.router.put('/:id_cat', categoriasController.update);
        this.router.delete('/:id_cat', categoriasController.delete);
    }

}

export default new CategoriasRoutes().router;

