import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProvider} from './app.routing'
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { NuevopersonajeComponent } from './components/nuevopersonaje/nuevopersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
import { SeriesComponent } from './components/series/series.component';
import { ServicesSeries } from './services/service.series';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DetallepersonajeComponent } from './components/detallepersonaje/detallepersonaje.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SeguridadComponent,
    NuevopersonajeComponent,
    ModificarpersonajeComponent,
    SeriesComponent,
    PersonajesComponent,
    DetallepersonajeComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProvider,ServicesSeries],
  bootstrap: [AppComponent]
})
export class AppModule { }
