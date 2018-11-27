import { Component, OnInit } from '@angular/core';
import { FeedbackModel } from 'src/app/models/FeedbackModel';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-leave-feedback',
    templateUrl: './leave-feedback.component.html',
    styleUrls: ['./leave-feedback.component.css']
})
export class LeaveFeedbackComponent implements OnInit {
    public feedbackModel: FeedbackModel = new FeedbackModel();
    
    constructor(public feedbackService: FeedbackService, public title: Title) { }

    ngOnInit() {
        this.feedbackModel.userID = ((sessionStorage.getItem("userID") as unknown) as number); // Find the user ID for the feedback
        this.title.setTitle("Leave Feedback Page");
    }
    public send(): void { // Send the feedback
        this.feedbackModel.dateHour = new Date(); // Find the hour
        this.feedbackService.addFeedback(this.feedbackModel).subscribe((s) => {
            alert(`Feedback successfully registered`);
        })
    }

}
