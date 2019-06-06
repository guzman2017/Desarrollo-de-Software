import express, { Router } from 'express';

import itinerariosController from '../controllers/itinerariosController';

class ItinerarioRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', itinerariosController.list);
        this.router.get('/:id_it', itinerariosController.getOne);
        this.router.post('/', itinerariosController.create);
        this.router.put('/:id_it', itinerariosController.update);
        this.router.delete('/:id_it', itinerariosController.delete);
        
    }

}

export default new ItinerarioRoutes().router;

