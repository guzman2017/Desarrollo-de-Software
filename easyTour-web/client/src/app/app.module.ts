import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesListComponent } from './components/games-list/games-list.component';

// Services
import { GamesService } from './services/games.service';
import { GameFormComponent } from './components/game-form/game-form.component';
import { PuntoFormComponent } from './components/punto-form/punto-form.component';
import { PuntosListComponent } from './components/puntos-list/puntos-list.component';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { ProveedorFormComponent } from './components/proveedor-form/proveedor-form.component';
import { ProveedoresListComponent } from './components/proveedores-list/proveedores-list.component';
import { ItinerarioFormComponent } from './components/itinerario-form/itinerario-form.component';
import { ItinerariosListComponent } from './components/itinerarios-list/itinerarios-list.component';
import { PaquetesListComponent } from './components/paquetes-list/paquetes-list.component';
import { PaqueteFormComponent } from './components/paquete-form/paquete-form.component';
import { EspecieFormComponent } from './components/especie-form/especie-form.component';
import { EspeciesListComponent } from './components/especies-list/especies-list.component';
import { GuiaFormComponent } from './components/guia-form/guia-form.component';
import { GuiasListComponent } from './components/guias-list/guias-list.component';
import { ActividadFormComponent } from './components/actividad-form/actividad-form.component';
import { ActividadesListComponent } from './components/actividades-list/actividades-list.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { Filter1Pipe } from './pipes/filter1.pipe';
import { Filter2Pipe } from './pipes/filter2.pipe';
import { Filter3Pipe } from './pipes/filter3.pipe';
import { Filter4Pipe } from './pipes/filter4.pipe';
import { Filter5Pipe } from './pipes/filter5.pipe';
import { Filter6Pipe } from './pipes/filter6.pipe';
import { Filter7Pipe } from './pipes/filter7.pipe';
import { Filter8Pipe } from './pipes/filter8.pipe';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    PuntoFormComponent,
    PuntosListComponent,
    CategoriaFormComponent,
    CategoriasListComponent,
    ProveedorFormComponent,
    ProveedoresListComponent,
    ItinerarioFormComponent,
    ItinerariosListComponent,
    PaquetesListComponent,
    PaqueteFormComponent,
    EspecieFormComponent,
    EspeciesListComponent,
    GuiaFormComponent,
    GuiasListComponent,
    ActividadFormComponent,
    ActividadesListComponent,
    FilterPipe,
    Filter1Pipe,
    Filter2Pipe,
    Filter3Pipe,
    Filter4Pipe,
    Filter5Pipe,
    Filter6Pipe,
    Filter7Pipe,
    Filter8Pipe,
   
  
   
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DatePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2SNizR8UP81dz7ArgHqJTFbcy1ZsMvfw'
      
      //AIzaSyDsh_vRFLfmdqk4gSFxARKulxrzCfBA4OU//keyfuncionando
    }),
    AgmSnazzyInfoWindowModule
    

  ],
  providers: [
    GamesService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
