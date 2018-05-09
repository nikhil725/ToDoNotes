import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { UserNotes } from '../../object/userNotes';
import { UserService, NoteService, LabelService } from '../../service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)  public data: UserNotes, private commonService:UserService,
public MatRef:MatDialogRef<UpdateComponent>) { }

  ngOnInit() {
    document.getElementById('update-title').innerHTML = this.data.title;
    document.getElementById('update-description').innerHTML = this.data.description;
  }
  
   updateNote(){
    console.log("yes got the data",this.data);
    this.commonService.putService('updateNotes',this.data)
    .subscribe(response => {
     this.MatRef.close();
   });

  }
}
