import { Component,OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { ServicesSeries } from 'src/app/services/service.series';
import { Router, Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detallepersonaje',
  templateUrl: './detallepersonaje.component.html',
  styleUrls: ['./detallepersonaje.component.css']
})
export class DetallepersonajeComponent {


  public personaje!:Personajes;

  constructor(private _serviceSeries: ServicesSeries,
              private _activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this._activeRoute.params.subscribe((parametros:Params)=>{
        var id=parametros['id'];
        this._serviceSeries.getPersonajeSeriedetalle(id).subscribe((response)=>{
          this.personaje=response
        })
      })
  }

}
