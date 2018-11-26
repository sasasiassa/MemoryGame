import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoModel } from '../models/PhotoModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) { }
  public getAllPhotos(): Observable<PhotoModel[]> {
    return this.httpClient.get<PhotoModel[]>("http://localhost:51230/api/imgs");
  }
}
