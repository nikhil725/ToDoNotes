import { Component, OnInit } from '@angular/core';
import { UserService,NoteService } from '../../service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  model : any={};
  constructor(private userService: UserService) { }

  ngOnInit() {

  }
   createLabel(): void {
    console.log(this.model);
  this.userService.registerUser('createLabels',this.model)
                   .subscribe(response => {
        console.log(" response Label  Created", response);
     });
  };

}
