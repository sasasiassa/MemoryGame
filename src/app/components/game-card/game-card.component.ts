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
    @Input()
    public clickedNo: number;

    public opacity;
    public clicked: boolean;
    public pairedNo: number = 0;
    
    @Output()
    public clickedNoEvent = new EventEmitter<number>();

    @Output()
    public gameOverEvent = new EventEmitter<boolean>();

    

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['clickedNo']) {
            if (this.clickedNo == 2) {

                setTimeout(() => {
                    this.clickedNo = 0; // Change the clicked number to 0, because 2 were clicked
                        this.clickedNoEvent.emit(this.clickedNo); // And emit it to the board.

                    if(Globals.idOne !== Globals.idTwo && this.clicked && (this.imageID == Globals.idOne || this.imageID == Globals.idTwo)) {
                        // Only if the IDs don't match, it is clicked, and the imageIDs are equal to the global variable ID.
                        // Otherwise, ngOnChanges changes EVERY ONE of the components, so they'll all not be clicked and turned back to black.

                        

                        this.black = { "black": true } // Change it back to black.
                        this.clicked = false; // And make it not clicked.
                    }
                    else if(this.imageID == Globals.idOne && this.imageID == Globals.idTwo){
                        

                        this.opacity = {"opacity": true} // Makes the card disappear
                        Globals.pairedNo ++ // And adds up 1 pair
                        this.clicked = true; // And keeps it clicked, so you can't click it when it's gone.
                        if(Globals.pairedNo == 20) {
                            this.gameOverEvent.emit(); // Emit the event when the game is over to the board.
                            Globals.pairedNo = 0;
                        }
                    }

                }, 2000)



            }

        }

    }
    ngOnInit() { // I'd rather change them on Init because otherwise it'll be buggy.
        this.black = { "black": true } 
        this.opacity = {"opacity": false}
    }
    public sendClick() { // Sends a click event
        if (!this.clicked && this.clickedNo < 2) { // If it isn't clicked and there's less than 2 clicked
            this.black = { "black": false } // Un-blacken them
            this.clickedNo++ // Add 1 clicked to the clicked number
            this.clickedNoEvent.emit(this.clickedNo); // Emit the event to the board, which gives back the clicked number
            this.clicked = true; // Change clicked to true, so you can't click it again
            if (this.clickedNo == 1) { 
                Globals.idOne = this.imageID;
            } // And then both clicked IDs are moved to a global variable.
            else if (this.clickedNo == 2) {
                Globals.idTwo = this.imageID;
            }
            
        }
        
    }

}
