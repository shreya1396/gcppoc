export class Idea {
    id:number;
    idea_title:string;
    idea_description:string
    idea_owner:string;
    tags:string;
    submission_date:string;
    update_date:string;
    category:string;
    submitted_against:number;
	reviewer_name:string;
	review_status:string;
	review_comment:string;
   

    constructor(id,title,description,category,owner,tags,submission_date,update_date,submitted_against,reviewer_name,review_status,review_comment){
        this.id=id;
        this.idea_title=title;
        this.idea_description=description;
        this.category=category;
        this.idea_owner=owner;
        this.tags=tags;
        this.submission_date=submission_date;
        this.update_date=update_date;
        this.category=category;
        this.submitted_against=submitted_against;
		this.reviewer_name=reviewer_name;
		this.review_status=review_status;
		this.review_comment=review_comment;

        //console.log(this);
    }
}

