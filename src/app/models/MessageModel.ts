export class MessageModel {
    public constructor(
        public msgID?: number,
        public DateHour?: Date,
        public phoneNumber?: string,
        public email?: string,
        public msg?: string
    ) {}
}