import { Component, OnInit } from '@angular/core';
import { GameResultService } from 'src/app/services/game-result.service';
import { GameResultModel } from 'src/app/models/GameResultModel';
import { UserService } from 'src/app/services/User.service';
import { UserModel } from 'src/app/models/UserModel';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-scores',
    templateUrl: './scores.component.html',
    styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

    constructor(public gameResultService: GameResultService, public userService: UserService, public title: Title) { }

    public gameResultArray: GameResultModel[] = new Array<GameResultModel>();

    public userArray: UserModel[] = new Array<UserModel>();

    ngOnInit() {
        let observable = this.gameResultService.getAllGameResults().subscribe((s) => { // get all the game results
            if(!s) {
                return;
            }
            for(let i = 0; i < s.length; i++) { // loop over the array given and then fill the game result array with it.
                this.gameResultArray[i] = s[i];
                this.userService.getOneUser(this.gameResultArray[i].userId).subscribe((s) => { // Add a user for each userId
                    if(!s) {
                        return;
                    }
                    this.userArray.push(s);
                })
            }
            
        })
        this.title.setTitle("Memory Game Scores");
    }
    public findUserById(i: number): UserModel { // Find the user by ID given.
        return this.userArray.find(o => o.userId === i);
    }

}
