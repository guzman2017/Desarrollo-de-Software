import express, { Router } from 'express';

import guiasController from '../controllers/guiasController';

class GuiaRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', guiasController.list);
        this.router.get('/:id_guia', guiasController.getOne);
        this.router.post('/', guiasController.create);
        this.router.put('/:id_guia', guiasController.update);
        this.router.delete('/:id_guia', guiasController.delete);
        this.router.get('/getListByPaquetefkguia/:paquetefk', guiasController.getListByPaquetefkguia);
        this.router.get('/getByGuiapaquetefk/:paquetefk', guiasController.getByGuiapaquetefk)
    }

}

export default new GuiaRoutes().router;

