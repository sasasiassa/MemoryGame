import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageModel } from '../models/MessageModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public httpClient: HttpClient) { }

  public getAllMessages(): Observable<MessageModel[]> { // Get all the messages
    return this.httpClient.get<MessageModel[]>("http://localhost:51230/api/messages");
  }

  public addMessage(message: MessageModel): Observable<MessageModel> { // Add a message
      return this.httpClient.post<MessageModel>("http://localhost:51230/api/messages", message);
  }
}
