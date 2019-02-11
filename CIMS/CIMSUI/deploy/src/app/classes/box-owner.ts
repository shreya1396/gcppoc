export class BoxOwner {
    innovation_manager_name:string;
    idea_box: string;
    id:number;
    constructor(id,name,type){
        this.id=id;
        this.innovation_manager_name=name;
        this.idea_box=type;
    }
}
