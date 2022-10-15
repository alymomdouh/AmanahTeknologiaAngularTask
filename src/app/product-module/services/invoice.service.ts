import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private _http: HttpClient) {
  }

  getById(id: number) {
    return this._http.get<any>(`${environment.serviceUrl}/Invoice/Get/` + id);
  }
}
