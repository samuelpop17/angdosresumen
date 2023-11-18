import { Component,OnInit  } from '@angular/core';
import { SeriesComponent } from '../series/series.component';
import { Series } from 'src/app/models/Series';
import { ServicesSeries } from 'src/app/services/service.series';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series!:Array<Series>

  constructor(private _serviceSeries: ServicesSeries) {
    
  }
ngOnInit(): void {
    
  this._serviceSeries.getSeries().subscribe((response)=>{
    this.series=response;
  })

}
}
