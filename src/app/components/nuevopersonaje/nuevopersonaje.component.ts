import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Series } from 'src/app/models/Series';
import { ServicesSeries } from 'src/app/services/service.series';
import { Router } from '@angular/router';
import { Personajes } from 'src/app/models/personajes';
@Component({
  selector: 'app-nuevopersonaje',
  templateUrl: './nuevopersonaje.component.html',
  styleUrls: ['./nuevopersonaje.component.css']
})
export class NuevopersonajeComponent implements OnInit{

  
  @ViewChild('cajanombre')cajanombre!:ElementRef;
  @ViewChild('cajaimagen')cajaimagen!:ElementRef;
  @ViewChild('cajaserie')cajaserie!:ElementRef;
  public series!:Array<Series>

  constructor(private _serviceSeries: ServicesSeries,private _router: Router) {
    
  }
  ngOnInit(): void {
    this._serviceSeries.getSeries().subscribe((response)=>{
      this.series=response;
    })
  }

  CrearPersonaje():void{


    var id=0
    var nom=this.cajanombre.nativeElement.value
    var img=this.cajaimagen.nativeElement.value
    var serie=parseInt(this.cajaserie.nativeElement.value)

    var newPersonaje=new Personajes(id,nom,img,serie);
    this._serviceSeries.nuevopersonaje(newPersonaje).subscribe((response)=>{
      this._router.navigate(['/personajes/'+serie]);
    })


  }
}
