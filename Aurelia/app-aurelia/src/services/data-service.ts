
import { autoinject, noView } from "aurelia-framework";
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
@noView
export class DataService {    
    
  message: string;
  
  constructor(private http: HttpClient) {
    this.message = 'Hello world';
  }

  getPosts(){
    return this.http.fetch("https://jsonplaceholder.typicode.com/posts").then((response => response.json()));
  }
}
