import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  
    model : any={};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
   
  }

  login(){
   
    console.log(this.model);
    this.userService.registerUser('login',this.model).subscribe(res=>{


      if(res.statusCode === 200){

        console.log("in login");
        console.log('auth',res.headers.get("Authorization"));
        localStorage.setItem('Authorization',res.headers.get("Authorization"));
        this.router.navigate(['/home/note']);
      }
      else{if (res.status !== 200) {
        alert(res.message);
        console.log("Invalid Password or email")
      }   
        
      }
    })
    
  }
}
