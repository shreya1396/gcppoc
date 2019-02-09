export class User {

    user_id:number;
    name:string;
    role:string;
    email:string;

    constructor(id,name,role,email){
        this.user_id=id;
        this.name=name;
        this.role=role;
        this.email=email;
    }
}
