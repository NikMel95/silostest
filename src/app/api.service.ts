import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indicator } from './indicator';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SilosTowerAPI {
  API_URL = '';
  towers: Indicator[]

  constructor(private httpClient: HttpClient) {}

  getTowers() {
    return this.httpClient.get(`${this.API_URL}/api/towers`).pipe(
      map((res) => {
      this.towers = res['towers'];
      return this.towers;
    }))
  }
}