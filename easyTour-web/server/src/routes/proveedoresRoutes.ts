import express, { Router } from 'express';

import proveedoresController from '../controllers/proveedoresController';

class ProveedoresRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', proveedoresController.list);
    this.router.get('/:id_pro', proveedoresController.getOne);  
        this.router.post('/', proveedoresController.create);
        this.router.put('/:id_pro', proveedoresController.update);
        this.router.delete('/:id_pro', proveedoresController.delete);
        this.router.get('/getByPaquetefk/:paquetefk', proveedoresController.getByPaquetefk);
    }

}

export default new ProveedoresRoutes().router;

