import { Component, OnInit } from '@angular/core';
import { PhotoModel } from 'src/app/models/PhotoModel';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {


    public gameOver: boolean = false;
    constructor(private photoService: PhotoService, private router: Router, public title: Title) { }

    ngOnInit() {
        this.redirect();
        this.title.setTitle("Memory Game");
    }
    public redirect(): void {
        if(sessionStorage.getItem("LoggedIn") == "true") {
            return;
        }
        else {
            this.router.navigate(['home']);
        }
    }
    public recieveGameOver() { // Recieves game over.
        this.gameOver = true;
    }
    public refreshPage() { // Refresh page if user wants to play again.
        this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => this.router.navigate(["game"]))
        
    }
}
