import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

      model : any={};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
createNote(){

console.log(this.model);
    console.log("in create note");
    this.userService.registerUser('createNotes',this.model).subscribe(response => {
      console.log("sucessfull", response);
      
    });

}
}