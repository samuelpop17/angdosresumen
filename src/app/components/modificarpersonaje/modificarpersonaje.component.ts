import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Series } from 'src/app/models/Series';
import { ServicesSeries } from 'src/app/services/service.series';
import { Router } from '@angular/router';
import { Personajes } from 'src/app/models/personajes';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit{
  public series!:Array<Series>
  public personajes!:Array<Personajes>;
  @ViewChild('cajapersonaje') cajaPersonajeRef!: ElementRef;
  @ViewChild('cajaserie') cajaSerieRef!: ElementRef;
  constructor(private _serviceSeries: ServicesSeries,private _router: Router) {
    
  }
ngOnInit(): void {
  this.cogerPersonajes();
  this.cogerSeries();
  
}


cogerPersonajes():void{
  this._serviceSeries.getPersonajes().subscribe((response)=>{
    this.personajes=response
    
  })
}
cogerSeries():void{
  this._serviceSeries.getSeries().subscribe((response)=>{
    this.series=response;
    
  })
}
  ModificarPersonaje():void{
    var per = this.cajaPersonajeRef.nativeElement.value;
    var ser = this.cajaSerieRef.nativeElement.value;

    this._serviceSeries.modificarPersonajeSerie(per,ser).subscribe((response)=>{
      this._router.navigate(['/personajes/',ser]);
    })
  }
}
