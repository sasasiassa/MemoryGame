import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedbackModel } from '../models/FeedbackModel';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public httpClient: HttpClient) { }

  public addFeedback(message: FeedbackModel): Observable<FeedbackModel> {
      return this.httpClient.post<FeedbackModel>("http://localhost:51230/api/feedbacks", message)
  }

  public getAllFeedbacks(): Observable<FeedbackModel[]> {
      return this.httpClient.get<FeedbackModel[]>("http://localhost:51230/api/feedbacks");
  }
}
