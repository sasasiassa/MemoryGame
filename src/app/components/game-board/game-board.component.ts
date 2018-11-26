import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PhotoModel } from 'src/app/models/PhotoModel';
import { PhotoService } from 'src/app/services/photo.service';
import { GameResultService } from 'src/app/services/game-result.service';
import { GameResultModel } from 'src/app/models/GameResultModel';

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
    public arr: PhotoModel[] = new Array<PhotoModel>(20);
    public clickedNo: number;
    public imgID: number;
    public gameOver: boolean
    public steps: number
    @Output()
    public gameOverEvent = new EventEmitter<boolean>();

    public timerSeconds: number;
    public timerMinutes: number;
    public timerHours: number;
    public gameSpan: string;

    constructor(private photoService: PhotoService, private gameResultService: GameResultService) { }

    ngOnInit() {
        let observable = this.photoService.getAllPhotos().subscribe((s) => {
            for (let i = 0; i < 10; i++) {
                this.arr[i] = s[i]
                this.arr[i + 10] = s[i]
            }
        })
        this.steps = 0;
        this.timerHours = 0;
        this.timerMinutes = 0;
        this.timerSeconds = 0;
        this.gameOver = false;
        this.timer();
    }


    public recieveClick($event): void {
        this.clickedNo = $event;
        this.steps++;
        
    }

    public recieveGameOver(): void {
        this.gameOver = true;
        this.gameOverEvent.emit(this.gameOver)
    }

    public timer(): void {
        if (this.gameOver !== true) {
            setInterval(() => {
                this.timerSeconds++;

                if(this.timerSeconds == 59) {
                    this.timerMinutes++;
                    this.timerSeconds = 0;

                    if(this.timerMinutes == 59) {
                        this.timerHours++;
                        this.timerMinutes = 0;
                    }
                }

                if(this.gameOver === true) {
                    this.gameSpan = `${this.timerHours}\:${this.timerMinutes}\:${this.timerSeconds}`;
                    let today: Date = new Date();
                    let userId = sessionStorage.getItem("userID");
                    let gameResult: GameResultModel = new GameResultModel(((userId as unknown) as number), today, this.gameSpan, this.steps / 11)
                    let observable = this.gameResultService.addGameResult(gameResult).subscribe(s => {
                        if(!s) {
                            clearInterval();
                            return;
                            
                        }
                        else {
                            
                            alert(`you win!`);
                            observable.unsubscribe();
                            clearInterval();
                        }
                    });
                    
                }
            }, 1000)
        }
    }
    
}
