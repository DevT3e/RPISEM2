import {readFile, readFileSync, writeFileSync} from 'fs'
export class TaskManager {
    constructor(){     
     this.array=[]; 
     this.keys = [];  
    }
    LoadTask(){
        let text = readFileSync('tasks.json','utf8');
        let obj=JSON.parse(text); 
        this.keys=Object.keys(obj);
        let index = 0;
        for(let key in obj){
            let object = {};
            object[key] = obj[key];
            this.array[index] = object;
            index += 1;
        }
    }
    AddTask(taskname, id, description, status_property){
       let javascriptobject = {};
       let array =[id, description,status_property];
      javascriptobject[taskname]=array;
      this.array.push(javascriptobject);
      this.keys.push(taskname);
      let jsonobject = {};
      for(let i =0; i < this.keys.length; i++){
          jsonobject[this.keys[i]]=this.array[i][this.keys[i]];   
      }
       writeFileSync('tasks.json',JSON.stringify(jsonobject));
    }
    deleteTask(taskname){
        for(let i = 0; i < this.keys.length; i++){
            if(this.keys[i]==taskname){
                if(i > -1){
                    this.array.splice(i,1);
                    this.keys.splice(i,1);
                }
            }
        }
        let jsonobject = {};
        for(let i =0; i < this.keys.length; i++){
            jsonobject[this.keys[i]]=this.array[i][this.keys[i]];   
        }
         writeFileSync('tasks.json',JSON.stringify(jsonobject));
    }
    PrintTask(){
       for(let i =0; i < this.keys.length; i++){
        console.log(this.keys[i]);
         for (let j =0; j < this.array[i][this.keys[i]].length; j++){
           console.log(this.array[i][this.keys[i]][j]);
         }
       }
    }
}

