import { Injectable} from '@angular/core';
import {Observable,of} from "rxjs";
import {Drzava} from "../drzava";
import {DRZAVE} from "../mock";
import {Tim} from "../tim";
import {TIMOVI} from "../mock"
import { HttpClient} from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ServisService {
  private drzaveApi='http://192.168.43.22:6969/Country/';
  private timoviApi='http://192.168.43.22:6969/Teams/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpKlijent: HttpClient,
    ) { }

  //DRZAVE
  getDrzave(): Observable<Drzava[]> {
    //const drzave = of(DRZAVE);
    //return drzave;
   return this.httpKlijent.get<Drzava[]>(this.drzaveApi+"GetAllCountries");
  }
  getDrzavu(id:number){
    return this.httpKlijent.get<Drzava>(this.drzaveApi+"GetCountryById/"+id);
    //const drzava = DRZAVE.find(x=>x.countryId === id)!;
    //return of(drzava);
  }
  deleteDrzavaById(id:number) {
    return this.httpKlijent.delete(this.drzaveApi+"DeleteCountryById/"+id,this.httpOptions);

  }
  insertDrzava(drzava:Drzava): Observable<Drzava> {
    return this.httpKlijent.post<Drzava>(this.drzaveApi+"InsertCountry", drzava,this.httpOptions);
  }
  updateDrzava(drzava:Drzava):Observable<any> {
    return this.httpKlijent.put(this.drzaveApi+"UpdateCountry/"+drzava.countryId,drzava,this.httpOptions);
  }


  //TIMOVI
  getTimovi():Observable<Tim[]> {
    return this.httpKlijent.get<Tim[]>(this.timoviApi+"GetAllTeams");
    //const timovi = of(TIMOVI);
    //return timovi;
  }
  getTim(id:number) {
    return this.httpKlijent.get<Tim>(this.timoviApi+"GetTeamById/"+id);
    //const tim = TIMOVI.find(x=>x.teamId === id);
    //return of(tim);
  }
  insertTim(tim:Tim): Observable<Tim> {
    return this.httpKlijent.post<Tim>(this.timoviApi+"InsertTeam", tim );
  }
  deleteTeamById(id:number) {
    return this.httpKlijent.delete(this.timoviApi+"DeleteTeamById/"+id,this.httpOptions);
  }
  updateTim(tim:Tim):Observable<any> {
    return this.httpKlijent.put(this.timoviApi+"UpdateTeam/"+tim.teamId,tim,this.httpOptions)
  }

}
