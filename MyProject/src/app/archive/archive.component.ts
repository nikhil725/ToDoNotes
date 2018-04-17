import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { UserNotes } from '../userNotes';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

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

  updateNote(note, status){

    note.archive = status;
    this.userService.putService('updateNotes',note).subscribe(response =>{

      console.log('successfull',response);
    });
  }

}
