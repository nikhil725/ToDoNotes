import { Injectable } from '@angular/core';
import { UserService } from "./user.service"
import { Observable } from 'rxjs/Observable';
import {UserNotes } from '../userNotes';

@Injectable()
export class NoteService {

constructor(private userService : UserService ) { }

getNotes () : Observable<UserNotes[]>{
return this.userService.getService('getNotes');
}

createNotes(note) :Observable<any>{
return this.userService.registerUser('createNotes', note);
}

deleteNote(noteId) :Observable<any>{

    return this.userService.deleteService('deleteNotes/'+noteId);

}

updateNotes(note,status,field):Observable<any>{

    if(field == 'trash'){
  
    note.trash = status;
    console.log(note);
    this.userService.putService('updateNotes',note).subscribe(response => {
    console.log("successfull", response);

  });  

  }else if(field == 'archive'){
    console.log('inside archive')
    note.archive = status;
    console.log(note);
    this.userService.putService('updateNotes',note).subscribe(response => {

    console.log("successfull", response);
 });
  }else if(field == 'color'){

    this.userService.putService('updateNotes',note).subscribe(response =>{
      console.log("successfull", response);
    });
  }else if(field == 'pin'){
    note.pin = status;
    note.archive = 'false';
    note.trash = 'false';
    this.userService.putService('updateNotes',note).subscribe(response =>{
      console.log("successfull", response);
  });

}

return this.userService.putService('updatenotes',note);
}
}