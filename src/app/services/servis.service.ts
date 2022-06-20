import { Injectable } from '@angular/core';
import {Observable, ObservedValuesFromArray, of} from 'rxjs';
import { Drzava } from '../extra/drzava';
import { Tim } from '../extra/tim';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import {Sport} from "../extra/sport";
import {Competition} from "../extra/competition";

@Injectable({
  providedIn: 'root',
})
export class ServisService {
  private drzaveApi = 'http://192.168.43.22:6969/Country/';
  private timoviApi = 'http://192.168.43.22:6969/Teams/';
  private sportoviApi = 'http://192.168.43.22:6969/Sport/';
  private competitionsApi = 'http://192.168.43.22:6969/Competition/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpKlijent: HttpClient) {}

  //SVE VEZANO ZA DRZAVE
  getDrzave(): Observable<Drzava[]> {
    return this.httpKlijent.get<Drzava[]>(this.drzaveApi + 'GetAllCountries').
      pipe(catchError(this.handleError<Drzava[]>('getDrzave',[])));
  }

  getDrzavu(id: number): Observable<Drzava> {
    return this.httpKlijent.get<Drzava>(this.drzaveApi + 'GetCountryById/' + id).
      pipe(catchError(this.handleError<Drzava>('getDrzavu id=${id}')));
  }

  updateDrzava(drzava: Drzava): Observable<any> {
    return this.httpKlijent.put(
      this.drzaveApi + 'UpdateCountry/' + drzava.countryId,
      drzava,
      this.httpOptions
    ).pipe(
      catchError(this.handleError<any>('updateDrzava'))
    );
  }

  insertDrzava(drzava: Drzava): Observable<Drzava> {
    return this.httpKlijent.post<Drzava>(
      this.drzaveApi + 'InsertCountry',
      drzava,
      this.httpOptions
    ).pipe(
      catchError(this.handleError<Drzava>('insertDrzava'))
    );
  }

  deleteDrzavaById(id: number):Observable<Drzava> {
    return this.httpKlijent.delete<Drzava>(
      this.drzaveApi + 'DeleteCountryById/' + id,
      this.httpOptions
    ).pipe(
      catchError(this.handleError<Drzava>('deleteDrzavaById'))
    );
  }


  //SVE VEZANO ZA TIMOVE
  getTimovi(): Observable<Tim[]> {
    return this.httpKlijent.get<Tim[]>(this.timoviApi + 'GetAllTeams').
    pipe(catchError(this.handleError<Tim[]>('getTimovi',[])));
    //const timovi = of(TIMOVI);
    //return timovi;
  }

  getTim(id: number):Observable<Tim> {
    return this.httpKlijent.get<Tim>(this.timoviApi + 'GetTeamById/' + id).
    pipe(catchError(this.handleError<Tim>('getTim id=${id}')));
    //const tim = TIMOVI.find(x=>x.teamId === id);
    //return of(tim);
  }

  updateTim(tim: Tim): Observable<any> {
    return this.httpKlijent.put(this.timoviApi + 'UpdateTeam/' + tim.teamId, tim, this.httpOptions).
    pipe(catchError(this.handleError<any>('updateTim')));
  }

  insertTim(tim: Tim): Observable<Tim> {
    return this.httpKlijent.post<Tim>(this.timoviApi + 'InsertTeam', tim,this.httpOptions).
    pipe(catchError(this.handleError<Tim>('insertTim')));
  }

  deleteTeamById(id: number):Observable<Tim> {
    return this.httpKlijent.delete<Tim>(this.timoviApi + 'DeleteTeamById/' + id, this.httpOptions).
    pipe(catchError(this.handleError<Tim>('deleteTeamById')));
  }

  //TODO: mozda treba promijenuti na Observable<Tim[]>
  getTeamByCountryId(id: number):Observable<Tim> {
    return this.httpKlijent.get<Tim>(this.timoviApi + 'GetTeamByCountryId/' + id)
      .pipe(catchError(this.handleError<Tim>('getTeamByCountryId')));
  }

  //SVE VEZANO ZA SPORTOVE
  getSportovi():Observable<Sport[]> {
    return this.httpKlijent.get<Sport[]>(this.sportoviApi+"GetAllSport").
      pipe(catchError(this.handleError<Sport[]>('getSportovi')));
  }

  getSport(id:number):Observable<Sport> {
    return this.httpKlijent.get<Sport>(this.sportoviApi+"GetSportById/"+id).
      pipe(catchError(this.handleError<Sport>('getSport id=${id}')));
  }

  updateSport(sport:Sport):Observable<any> {
    return this.httpKlijent.put(this.sportoviApi+"UpdateSport/"+sport.sportsId,sport,this.httpOptions).
      pipe(catchError(this.handleError<any>('updateSport')));
  }

  insertSport(sport:Sport):Observable<Sport> {
    return this.httpKlijent.post<Sport>(this.sportoviApi+"InsertSport",sport,this.httpOptions).
      pipe(catchError(this.handleError<Sport>('insertSport')));
  }

  deleteSportById(id:number):Observable<Sport> {
    return this.httpKlijent.delete<Sport>(this.sportoviApi+"DeleteSportById/"+id,this.httpOptions).
      pipe(catchError(this.handleError<Sport>('deleteSportById')));
  }

  //SVE VEZANO ZA COMPETITIONS
  getCompetitions():Observable<Competition[]> {
    return this.httpKlijent.get<Competition[]>(this.competitionsApi+"GetAllCompetitions").
    pipe(catchError(this.handleError<Competition[]>('getCompetitions')));;
  }

  getCompetition(id:number):Observable<Competition> {
    return this.httpKlijent.get<Competition>(this.competitionsApi+"GetCompetitionById/"+id).
      pipe(catchError(this.handleError<Competition>('getCompetition id=${id}')));;
  }

  updateCompetition(competition:Competition):Observable<any> {
    return this.httpKlijent.put(this.competitionsApi+"UpdateCompetitionById",competition,this.httpOptions).
    pipe(catchError(this.handleError<any>('updateCompetitions')));
  }

  insertCompetition(competition:Competition):Observable<Competition> {
    return this.httpKlijent.post<Competition>(this.competitionsApi+"InsertCompetition",competition,this.httpOptions).
      pipe(catchError(this.handleError<Competition>('insertCompetition')));
  }

  deleteCompetitionById(id:number):Observable<Competition> {
    return this.httpKlijent.delete<Competition>(this.competitionsApi+"DeleteCompetitionById/"+id,this.httpOptions).
    pipe(catchError(this.handleError<Competition>('deleteCompetitionById')));
  }

  getCompByCountryId(id:number):Observable<Competition[]> {
    return this.httpKlijent.get<Competition[]>(this.competitionsApi+"GetAllCompetitions?countryid="+id);
  }
  //ERROR HANDLER generic
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
