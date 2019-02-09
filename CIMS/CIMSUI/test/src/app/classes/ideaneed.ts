export class Ideaneed {

    id : number;
    requirement : string;
    description : string;
    idea_box : string;

    constructor(id,req,desc,ideabox){
        this.id=id;
        this.requirement=req;
        this.description=desc;
        this.idea_box=ideabox;
    }
}
