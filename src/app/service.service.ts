import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}
private baseUrl = 'http://192.168.1.14:8080/';

getPromoAdvertList(p): Observable<any> {
  return this.http.get(this.baseUrl + 'listallpromoadvert/' + p);
}
deleteitembyid(id): Observable<any> {
  return this.http.get(this.baseUrl + 'deletePosterandAdvert/' + id);
}

editpromoandAdvert(id): Observable<any> {
  return this.http.get(this.baseUrl + 'editPosterandAdvert/' + id);
}
viewitembyid(id): Observable<any> {
  return this.http.get(this.baseUrl + 'viewPromoAdvert/' + id);
}
getGalleryList(p): Observable<any> {
  return this.http.get(this.baseUrl + 'listallgallery/' + p);
}
}
