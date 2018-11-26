import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Globals } from 'src/app/models/Globals';
import { ComponentRef } from '@angular/core/src/render3';

@Component({
    selector: 'app-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit, OnChanges {
    @Input()
    public imageName: string;
    @Input()
    public imageID: number;
    @Input()
    public black;
    public opacity;
    public clicked: boolean;
    public pairedNo: number = 0;
    @Input()
    public clickedNo: number;
    @Output()
    public clickedNoEvent = new EventEmitter<number>();

    @Output()
    public gameOverEvent = new EventEmitter<boolean>();

    

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['clickedNo']) {
            if (this.clickedNo == 2) {

                setTimeout(() => {
                    this.clickedNo = 0;
                    this.clickedNoEvent.emit(this.clickedNo);
                    if(Globals.idOne !== Globals.idTwo) {
                        this.black = { "black": true }
                        this.clicked = false;
                    }
                    else if(this.imageID == Globals.idOne && this.imageID == Globals.idTwo){
                        this.opacity = {"opacity": true}
                        Globals.pairedNo ++
                        this.clicked = true;
                        if(Globals.pairedNo == 20) {
                            this.gameOverEvent.emit();
                            Globals.pairedNo = 0;
                        }
                    }

                }, 2000)



            }

        }

    }
    ngOnInit() {
        this.black = { "black": true }
        this.opacity = {"opacity": false}
    }
    public sendClick() {
        if (!this.clicked && this.clickedNo < 2) {
            this.black = { "black": false }
            this.clickedNo++
            this.clickedNoEvent.emit(this.clickedNo);
            this.clicked = true;
            if (this.clickedNo == 1) {
                Globals.idOne = this.imageID;
            }
            else if (this.clickedNo == 2) {
                Globals.idTwo = this.imageID;
            }
            
        }
        
    }

}
