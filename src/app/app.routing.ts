import { Routes, RouterModule } from "@angular/router"; 
import {ModuleWithProviders} from '@angular/core'; 
import { HomeComponent } from "./components/home/home.component";
import { ModificarpersonajeComponent } from "./components/modificarpersonaje/modificarpersonaje.component";
import { NuevopersonajeComponent } from "./components/nuevopersonaje/nuevopersonaje.component";
import { SeguridadComponent } from "./components/seguridad/seguridad.component";
import { SeriesComponent } from "./components/series/series.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { DetallepersonajeComponent } from "./components/detallepersonaje/detallepersonaje.component";
const appRoutes: Routes = [ 
     { path: "", component: HomeComponent}, 
     { path: "modificar", component: ModificarpersonajeComponent}, 
     { path: "nuevoper", component: NuevopersonajeComponent}, 
     { path: "seguridad", component: SeguridadComponent}, 
     { path: "serie/:id", component: SeriesComponent}, 
     { path: "personajes/:id", component: PersonajesComponent}, 
     { path: "detalle/:id", component: DetallepersonajeComponent}, 
    ] 


export const appRoutingProvider: any[] = []; 

//EL MODULO ROUTING INDICANDO EL ARRAY DE RUTAS DECLARADO 

export const routing: ModuleWithProviders<any> =  

RouterModule.forRoot(appRoutes); 