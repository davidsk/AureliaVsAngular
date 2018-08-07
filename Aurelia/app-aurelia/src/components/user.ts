import { DataService } from 'services/data-service'
import { autoinject } from 'aurelia-framework';
@autoinject
export class User {    
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit:boolean = false;
    
  constructor(private dataService: DataService) {
    console.log("constructor ran...")  
  }

  created(){
    console.log("activate ran...")

    this.name = "John Doe";
    this.age = 30;
    this.email = "test@test.com";
    this.address = {
      street: "50 Main street",
      city: "Boston",
      state: "MA"
    }
    this.hobbies = ["Write code", "Watch movies", "Listen to Movies"]
  
    this.dataService.getPosts().then((posts) => {
      this.posts = posts;
    });
  }

  onClick(){
    this.name = "Keith Davidson";
    this.hobbies.push("New Hobby");
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
  }

  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
        return;
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}
interface Address {
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
