import { Component,OnInit } from '@angular/core';
import { Series } from 'src/app/models/Series';
import { ServicesSeries } from 'src/app/services/service.series';
import { Router, Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit{
 
  public serie!:Series;

  constructor(private _serviceSeries: ServicesSeries,
              private _activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this._activeRoute.params.subscribe((parametros:Params)=>{
        var id=parametros['id'];
        this._serviceSeries.getSerieid(id).subscribe((response)=>{
          this.serie=response
        })
      })
  }
}
