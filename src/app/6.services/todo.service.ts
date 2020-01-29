import{HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';
export class TodoService{

    constructor(private http: HttpClient){}
    add(todo){
        return this.http.post('...',todo).m
    }
    getTodos(){
        return this.http.get('...').subscribe(t=>t.json())
    }
 
    
    delete(id){

    }
}
