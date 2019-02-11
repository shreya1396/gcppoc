export class Reviewer {
    id:number;
    reviewer:string;
    idea_id:number;
    review_comment:string;
    review_status:string;
    review_date:string;

    constructor(id,reviewer,idea_id,review_comment,review_status,review_date){
        this.id=id;
        this.reviewer=reviewer;
        this.idea_id=idea_id;
        this.review_comment=review_comment;
        this.review_status=review_status;
        this.review_date=review_date;
    }
}
