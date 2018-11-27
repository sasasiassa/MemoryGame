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
    public gameOver: boolean;
    public steps: number;

    @Output()
    public gameOverEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    public timerSeconds: number;
    public timerMinutes: number;
    public timerHours: number;
    public gameSpan: string;

    constructor(private photoService: PhotoService, private gameResultService: GameResultService) { }

    ngOnInit() { // Initializes variables and runs the timer function.
        let observable = this.photoService.getAllPhotos().subscribe((s) => {
            for (let i = 0; i < 10; i++) {

                this.arr[i] = s[i]
                this.arr[i + 10] = s[i]
            }
            this.shuffleArray(this.arr)
            observable.unsubscribe();
        })
        this.steps = 0;
        this.timerHours = 0;
        this.timerMinutes = 0;
        this.timerSeconds = 0;
        this.gameOver = false;
        this.timer();
    }

    public shuffleArray(array) { // Shuffles the board.
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    public recieveClick($event): void { // Whenever a card recieves a click - the board gets the clicked number and a step
        this.clickedNo = $event; // there's a clickedNo input in game-card
        this.steps++;
    }

    public recieveGameOver(): void { // When game's over - change gameOver to true.
        this.gameOver = true;
        this.gameOverEvent.emit(this.gameOver)
    }

    public sendResult() {
        this.gameSpan = this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
        let today: Date = new Date(); // It shows the wrong date because it shows the date that is in the angular compiler.
        let userId = sessionStorage.getItem("userID"); // Get the userID from session storage
        let gameResult: GameResultModel = new GameResultModel(((userId as unknown) as number), today, this.gameSpan, this.steps / 11); // Game result object..
        let observable = this.gameResultService.addGameResult(gameResult).subscribe(s => { // Send the game result object..
            if (!s) {
                return;

            }
            else {

                alert(`you win!`);
                observable.unsubscribe();
            }
        });
    }
    public timer(): void { // Set a timer, and if the game is over - send the result.
        if (this.gameOver !== true) {
            let a = setInterval(() => {
                this.timerSeconds++; // Seconds..
                if (this.timerSeconds == 59) {
                    this.timerMinutes++; // Minutes..
                    this.timerSeconds = 0; // Reset seconds when minute passes..

                    if (this.timerMinutes == 59) {
                        this.timerHours++; // Hours..
                        this.timerMinutes = 0; // Reset minutes when hour passes..
                    }
                }

                if (this.gameOver === true) {
                    this.sendResult(); // Send result when the game is over.
                    clearInterval(a);

                }
            }, 1000)
        }
    }

}
