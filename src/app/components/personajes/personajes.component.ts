import { Component,OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { ServicesSeries } from 'src/app/services/service.series';
import { Router, Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  public personajes!:Array<Personajes>;

  constructor(private _serviceSeries: ServicesSeries,
              private _activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this._activeRoute.params.subscribe((parametros:Params)=>{
        var id=parametros['id'];
        this._serviceSeries.getPersonajeSerie(id).subscribe((response)=>{
          this.personajes=response
        })
      })
  }


}
