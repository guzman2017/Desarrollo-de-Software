import { Title } from '@angular/platform-browser';

export interface Game {
    id?: number,
    lugar_loc?: string,
    descripcion_loc?: string,
    imagen_loc?: string,
    direccion?: string,
    lat?: string,
    lng?: string,
    duracion?: string,
    creado_el_loc?: Date,
    paquetefk?: number
};


