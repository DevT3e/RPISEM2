export class Task {
    constructor(id, description,status_property){
        this.id = id
        this.description = description
        this.status_property = status_property
    }
    toString(){
        console.log(this.id);
        console.log(this.description);
        console.log(this.status_property);
    }
}
