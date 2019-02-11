export class LoginUser {

    success:boolean;
    message:string;
    username:string;
    type:string;

    constructor(success,message,username,type){
        this.success=success;
        this.username=username;
        this.message=message;
        this.type=type;
    }
}
