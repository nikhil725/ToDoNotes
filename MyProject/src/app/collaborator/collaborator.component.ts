import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from '../shared/note.service';
import { UserService } from '../shared/user.service';
import { UserNotes } from '../userNotes';
import { User } from '../User';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})


export class CollaboratorComponent implements OnInit {

   addPerson="assets/icons/addPerson.png";

   user: User;
     notes : UserNotes;

  constructor(@Inject(MAT_DIALOG_DATA) public data: UserNotes,private userService: UserService) { }

    model : any={};
  ngOnInit() {
 this.notes=this.data;
 debugger;
    this.userService.getUser('getUserById').subscribe( response =>{
      this.user = response;
      console.log('User information',this.user);
    });
  }
  
  shareNotes(){

    this.model.noteId=this.data.noteId;
    console.log(this.model);
  }
}
