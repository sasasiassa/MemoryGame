import { Component, OnInit } from '@angular/core';
import { PhotoModel } from 'src/app/models/PhotoModel';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {


    public gameOver: boolean = false;
    constructor(private photoService: PhotoService, private router: Router) { }

    ngOnInit() {
        
    }
    public recieveGameOver() {
        this.gameOver = true;
    }
    public refreshPage() {
        this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => this.router.navigate(["game"]))
        
    }
}
