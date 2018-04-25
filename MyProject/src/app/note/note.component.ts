
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { UserNotes } from '../userNotes';
import { ColorList } from '../colorList';
import { NoteService } from '../shared/note.service';
import{Label} from '../Label';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  model : any={};
    labels: Label[];

  notes : UserNotes[];
 // colors : ColorList[];

  pinSvg = '/assets/icons/pin.svg';
  unpinSvg = '/assets/icons/unpin.svg';
  reminderSvg = '/assets/icons/reminder.svg'
  clearSvg = '/assets/icons/clear.svg'
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

reminderUpdate(note,day,field){
    
    if(day==='Today'){
    var today =new Date();
    today.setHours(20);
    today.setMinutes(0);
    today.setMilliseconds(0);
    note.reminder= today;   
    }
    else if(day==='Tomorrow'){
      var today =new Date();
      today.setDate(today.getDate()+1);
    today.setHours(8);
    today.setMinutes(0);
    today.setMilliseconds(0);
    note.reminder= today;
    }else if(day==='Next week'){
      
      var today =new Date();
      today.setDate(today.getDate()+6);
      today.setHours(8);
      today.setMinutes(0);
      today.setMilliseconds(0);
      note.reminder= today;  
    }else if(day==='null'){
      note.reminder=null;
    }

       this.noteService.updateNotes(note,status,field).subscribe(response => {
       console.log("Archive  response", response);
      
      });
  }

colors = [{

  color: '#f26f75',
  path: '/assets/icons/Red.png'
},
{
  color: '#fcff77',
  path: '/assets/icons/lightyellow.png'
},
{
  color: '#80ff80',
  path: '/assets/icons/green.png'
},
{
  color: '#9ee0ff',
  path: '/assets/icons/blue.png'
}, 
{
  color: '#9966ff',
  path: '/assets/icons/purple.png'
}, 
{
  color: '#ff99cc',
  path: '/assets/icons/pink.png'
}, 
{
  color: '#bfbfbf',
  path: '/assets/icons/grey.png'
}, 
{
  color: '#a52a2a',
  path: '/assets/icons/brown.png'
}
];

getLabels(){
  this.noteService.getLabels().subscribe(res => {
      
     this.labels = res;
     console.log(this.labels);
    });
}

addLabelOnNote(operation,noteId,labelId){

  this.noteService.addLabelOnNote(operation, labelId, noteId);
  console.log(operation,noteId,labelId);
  
  }

  removeLabel(status,noteId,labelId){

    this.noteService.removeLabelOnNote(status,labelId,noteId);
    console.log(status,noteId,labelId);
  }
}