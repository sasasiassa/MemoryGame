import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/User.service';
import { FeedbackModel } from 'src/app/models/FeedbackModel';
import { UserModel } from 'src/app/models/UserModel';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-feedbacks',
    templateUrl: './feedbacks.component.html',
    styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
    public feedbackArray: FeedbackModel[] = new Array<FeedbackModel>();

    public userArray: UserModel[] = new Array<UserModel>();

    constructor(public feedbackService: FeedbackService, public userService: UserService, public title: Title) { }

    ngOnInit() {

        let observable = this.feedbackService.getAllFeedbacks().subscribe((s) => {
            this.feedbackArray = s; // Fill the array of feedbacks with feedbacks
            for(let i = 0; i < this.feedbackArray.length; i++) {
                this.userService.getUserDetailsById(this.feedbackArray[i].userID).subscribe((s) =>{ // Then find every user ID
                    if(!s) {
                        return;
                    }
                    this.userArray.push(s); // And take the user ID and push the user attached to it into the array.
                })
            }
        })
        this.title.setTitle("Feedbacks Page");
    }
    public findUserById(i: number): UserModel {
        return this.userArray.find(o => o.userId === i); // Find the user attached to the User ID.
    }
    
}
