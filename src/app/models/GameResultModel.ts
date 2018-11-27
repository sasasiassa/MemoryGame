export class GameResultModel {
    public constructor(
        public userId?: number,
        public gameTime?: Date,
        public gameSpan?: string,
        public steps?: number
    ) {

    }
}