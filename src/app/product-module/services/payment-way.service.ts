import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export enum PaymentWay {
  Card = 1, Bank = 2
}
@Injectable({
  providedIn: 'root'
})
export default class PaymentWayService {
  //headers: HttpHeaders;
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  }
  constructor(private _http: HttpClient) {
    //this.headers = new HttpHeaders();
    //this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }

  payByCard(pamentModel: any) {
    debugger
    // const body = JSON.stringify({
    //   "CardCVC": pamentModel.CardCVC,
    //   "CardHolderName": pamentModel.CardHolderName,
    //   "CardNumber": pamentModel.CardNumber,
    //   "expireDate": pamentModel.expireDate,
    //   "ClientType": pamentModel.ClientType,
    //   "productId": pamentModel.productId,
    //   "paymentType": PaymentWay.Card
    // });
    const body = JSON.stringify({
      "paymentCardVM": {
        "CardCVC": pamentModel.CardCVC,
        "CardHolderName": pamentModel.CardHolderName,
        "CardNumber": pamentModel.CardNumber,
        "expireDate": pamentModel.expireDate
      },
      "ClientType": parseInt(pamentModel.ClientType),
      "productId": pamentModel.productId,
      "paymentType": PaymentWay.Card
    });

    return this._http.post<any>(`${environment.serviceUrl}/Payment/payByCard`, body, this.options
    );
  }
}
