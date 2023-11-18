import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personajes } from '../models/personajes';
@Injectable()
export class ServicesSeries {
    constructor(private _http: HttpClient) { }


    getSeries(): Observable<any> {
        var url = "https://apiseriespersonajes.azurewebsites.net/api/Series"
        return this._http.get(url);
    }


    getSerieid(id: string): Observable<any> {
        var url = "https://apiseriespersonajes.azurewebsites.net/api/Series/" + id
        console.log(url)
        return this._http.get(url);
    }

    getPersonajeSerie(id: string): Observable<any> {
        var url = "https://apiseriespersonajes.azurewebsites.net/api/Series/PersonajesSerie/" + id
        console.log(url)
        return this._http.get(url);
    }
    getPersonajes(): Observable<any> {
        var url = "https://apiseriespersonajes.azurewebsites.net/api/Personajes"
        console.log(url)
        return this._http.get(url);
    }
    getPersonajeSeriedetalle(id: string): Observable<any> {
        var url = "https://apiseriespersonajes.azurewebsites.net/api/Personajes/" + id
        console.log(url)
        return this._http.get(url);
    }

    nuevopersonaje(perso: Personajes): Observable<any> {
        var url = "https://apiseriespersonajes.azurewebsites.net/api/Personajes"
        var json = JSON.stringify(perso);
        var header = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(url, json, { headers: header });
    }

    modificarPersonajeSerie(id1:string,id2:string):Observable<any>{
        var url = "https://apiseriespersonajes.azurewebsites.net/api/Personajes/"+id1+"/"+id2
        var header = new HttpHeaders().set('content-type', 'application/json');
        console.log(url)
        return this._http.put(url,{ headers: header });
    }
}