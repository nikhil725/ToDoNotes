import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NoteService} from '../shared/note.service';
import { Router } from '@angular/router';
import { UserNotes } from '../userNotes';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

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

  deleteNote(note){

    this.noteService.deleteNote(note).subscribe(response =>{

      console.log(note);
    });
  }
}