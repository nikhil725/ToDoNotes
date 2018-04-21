import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService} from './shared/user.service';
import {NoteService} from './shared/note.service' ;
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatNativeDateModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ReturntoSignupComponent } from './returnto-signup/returnto-signup.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NoteComponent } from './note/note.component';
import {MatMenuModule} from '@angular/material/menu';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReminderComponent } from './reminder/reminder.component';
import {MatChipsModule} from '@angular/material/chips';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ForgotComponent,
    ReturntoSignupComponent,
    NoteComponent,
    TrashComponent,
    ArchiveComponent,
    ReminderComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule
  ],
  exports: [],
  entryComponents:[LabelComponent],
  providers: [UserService,NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
