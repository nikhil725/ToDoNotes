import { Component, OnInit } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profilePic="assets/icons/account.svg";
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
this.dialog.open(LabelComponent,{
     
      width: '400px',
      height: '210px'
    });

  }
}
