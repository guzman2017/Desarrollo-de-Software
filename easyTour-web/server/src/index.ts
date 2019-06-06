import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import puntosRoutes from './routes/puntosRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
import proveedoresRoutes from './routes/proveedoresRoutes';
import itinerariosRoutes from './routes/itinerariosRoutes';
import paquetesRoutes from './routes/paquetesRoutes';
import especiesRoutes from './routes/especiesRoutes';
import guiasRoutes from './routes/guiasRoutes';
import actividadesRoutes from './routes/actividadesRoutes';


class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
        this.app.use('/api/puntos', puntosRoutes);
        this.app.use('/api/categorias', categoriasRoutes);
        this.app.use('/api/proveedores', proveedoresRoutes);
        this.app.use('/api/itinerarios', itinerariosRoutes);
        this.app.use('/api/paquetes', paquetesRoutes);
        this.app.use('/api/especies', especiesRoutes);
        this.app.use('/api/guias', guiasRoutes);
        this.app.use('/api/actividades', actividadesRoutes);


    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();