import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer PBitg7PCTHdjYJcN0zKAjIa5fDLfgFBWdr_c_WaJ3Il0x88cBjvxgSM6buetKG-xXuWAHtkVJvaYbNIcKpt8CIJr8F1IZeO3JNZPUvRcL1N3vGZTBPI6MLjHYHDjXHYx"
  })
};

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  businessSearch(pricePoint, State, City): Observable<any> {

    return this.http.get<any>(
      `http://localhost:3000/yelp/${City}/${State}/${pricePoint}`,
      httpOptions
    );
  }
}
