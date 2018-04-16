
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { UserNotes } from '../userNotes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  model : any={};
 notes : UserNotes[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log('in get service');
    this.userService.getService('getNotes').subscribe(res => {
      this.notes = res;
      console.log(this.notes);
    });
  }


createNote(){

console.log(this.model);
    console.log("in create note");
    this.userService.registerUser('createNotes',this.model).subscribe(response => {
      console.log("successfull", response);
      
    }); 
}

updateNote(note,status){

  console.log('notes: ',note);

  note.trash = status;
  console.log(note);
  
  this.userService.putService('updateNotes',note).subscribe(response => {

    console.log("successfull", response);

  });  



}
}