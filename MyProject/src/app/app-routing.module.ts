import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ReturntoSignupComponent } from './returnto-signup/returnto-signup.component';
import { NoteComponent } from './note/note.component';
import { TrashComponent } from './trash/trash.component';
import {ArchiveComponent} from './archive/archive.component';
import {ReminderComponent} from './reminder/reminder.component';


// redirectTo will redirect the first page to login page by default
// path :'login' will redirect to LoginComponent in login.component.ts file.
// path : 'register' will redirect to RegisterComponent to register.component.ts file.

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'note', pathMatch: 'full'},
            { path: 'note', component: NoteComponent },
            { path: 'trash', component: TrashComponent },
            { path: 'archive', component: ArchiveComponent },
            { path: 'reminder', component: ReminderComponent }
        ]
    },
    { path: 'forgot', component: ForgotComponent },
    { path: 'returnto-signup', component: ReturntoSignupComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
