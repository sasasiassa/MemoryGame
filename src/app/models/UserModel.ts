export class UserModel {
    
    public constructor(public fullName?: string,
        public userId?: number,
        public password?: string,
        public userName?: string,
        public email?: string,
        public bDay?: Date){

    }
}