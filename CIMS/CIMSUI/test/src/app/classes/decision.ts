export class Decision {
    id:number;
    idea_id:number;
    decision:string;
    comment:string;
    need_id:string

    constructor(id,idea_id,decision,comment,need_id){
        this.id=id;
        this.idea_id=idea_id;
        this.decision=decision;
        this.comment=comment;
        this.need_id=need_id;
    }
}
