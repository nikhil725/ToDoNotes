
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { UserNotes } from '../userNotes';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  model : any={};
  notes : UserNotes[];
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    console.log('in get service');
    this.noteService.getNotes().subscribe(res => {
      this.notes = res;
      console.log(this.notes);
    });
  }


createNote(){

console.log(this.model);
    console.log("in create note");
    this.noteService.createNotes(this.model).subscribe(response => {
      console.log("successfull", response);
      
    }); 
}

updateNote(note,status,field){

   console.log('notes: ',note);
   console.log(field);
   this.noteService.updateNotes(note,status,field).subscribe(response =>{
     console.log("successfull", response)
   });

}
}