import { Component } from "@angular/core";



@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    username = '';
    empty = false;
    show=false;
    i=0;
    log=[];

    ipempty(){
        if (this.username == ''){
            this.empty=true;
        }
    return this.empty
    }
    
    reset(){
        return this.username=''
    }

    togdetails(){
        this.i=this.i+1;
        this.log.push(this.i);
    }

    getColor(){
        return this.i>4?'blue':'transparent';
    }



}


  
