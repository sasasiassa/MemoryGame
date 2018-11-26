export class GameResultModel {
    public constructor(
        public userId?: number,
        public gameTime?: Date,
        public timeSpan?: string,
        public steps?: number
    ) {

    }
}