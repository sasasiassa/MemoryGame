export class FeedbackModel {
    public constructor(public feedbackID?: number,
        public userID?: number,
        public dateHour?: Date,
        public feedbackText?: string) {

    }
}