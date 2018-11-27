import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameResultModel } from '../models/GameResultModel';

@Injectable({
    providedIn: 'root'
})
export class GameResultService {

    constructor(public httpClient: HttpClient) { }


    public getAllGameResults(): Observable<GameResultModel[]> { // GET request for all the game results.

        return this.httpClient.get<GameResultModel[]>("http://localhost:51230/api/gameresults");
    }

    public addGameResult(gameResult: GameResultModel): Observable<GameResultModel> { // Add a game result.

        return this.httpClient.post<GameResultModel>("http://localhost:51230/api/gameresults", gameResult);
    }
}
