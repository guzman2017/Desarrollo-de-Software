import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import {PuntosListComponent } from './components/puntos-list/puntos-list.component';
import { PuntoFormComponent } from './components/punto-form/punto-form.component';
import {CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import {CategoriaFormComponent} from './components/categoria-form/categoria-form.component'
import {ProveedoresListComponent } from './components/proveedores-list/proveedores-list.component';
import {ProveedorFormComponent} from './components/proveedor-form/proveedor-form.component';
import {ItinerariosListComponent} from './components/itinerarios-list/itinerarios-list.component';
import {ItinerarioFormComponent} from  './components/itinerario-form/itinerario-form.component';
import {PaquetesListComponent} from './components/paquetes-list/paquetes-list.component';
import {PaqueteFormComponent} from './components/paquete-form/paquete-form.component';
import {EspecieFormComponent} from './components/especie-form/especie-form.component';
import {EspeciesListComponent} from './components/especies-list/especies-list.component';
import {GuiaFormComponent} from './components/guia-form/guia-form.component';
import {GuiasListComponent} from './components/guias-list/guias-list.component'; 
import {ActividadFormComponent} from './components/actividad-form/actividad-form.component';
import {ActividadesListComponent} from './components/actividades-list/actividades-list.component'


const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
///////

/////
{
  path: '',
  redirectTo: '/puntos',
  pathMatch: 'full'
},
{
  path: 'puntos',
  component: PuntosListComponent
},
{
  path: 'puntos/add',
  component: PuntoFormComponent
},
{
  path: 'puntos/edit/:id_pun',
  component: PuntoFormComponent
},

////path de categorias

{
  path: '',
  redirectTo: '/categorias',
  pathMatch: 'full'
},
{
  path: 'categorias',
  component: CategoriasListComponent
},
{
  path: 'categorias/add',
  component: CategoriaFormComponent
},
{
  path: 'categorias/edit/:id_cat',
  component: CategoriaFormComponent
},


////path de proveedores

{
  path: '',
  redirectTo: '/proveedores',
  pathMatch: 'full'
},
{
  path: 'proveedores',
  component: ProveedoresListComponent
},
{
  path: 'proveedores/add',
  component: ProveedorFormComponent
},
{
  path: 'proveedores/edit/:id_pro',
  component: ProveedorFormComponent
},


///path de itinerarios

{
  path: '',
  redirectTo: '/itinerarios',
  pathMatch: 'full'
},
{
  path: 'itinerarios',
  component: ItinerariosListComponent
},
{
  path: 'itinerarios/add',
  component: ItinerarioFormComponent
},
{
  path: 'itinerarios/edit/:id_it',
  component: ItinerarioFormComponent
},

///path de paquetes

{
  path: '',
  redirectTo: '/paquetes',
  pathMatch: 'full'
},
{
  path: 'paquetes',
  component: PaquetesListComponent
},
{
  path: 'paquetes/add',
  component: PaqueteFormComponent
},
{
  path: 'paquetes/edit/:id_paq',
  component: PaqueteFormComponent
},


///path de especies

{
  path: '',
  redirectTo: '/especies',
  pathMatch: 'full'
},
{
  path: 'especies',
  component: EspeciesListComponent
},
{
  path: 'especies/add',
  component: EspecieFormComponent
},
{
  path: 'especies/edit/:id_es',
  component: EspecieFormComponent
},

///path de guias

{
  path: '',
  redirectTo: '/guias',
  pathMatch: 'full'
},
{
  path: 'guias',
  component: GuiasListComponent
},
{
  path: 'guias/add',
  component: GuiaFormComponent
},
{
  path: 'guias/edit/:id_guia',
  component: GuiaFormComponent
},



{
  path: '',
  redirectTo: '/actividades',
  pathMatch: 'full'
},
{
  path: 'actividades',
  component: ActividadesListComponent
},
{
  path: 'actividades/add',
  component: ActividadFormComponent
},
{
  path: 'actividades/edit/:id_act',
  component: ActividadFormComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
