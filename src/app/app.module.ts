import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DatePipe } from '@angular/common';


//Forms
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
//service
import {FirebaseService} from './services/firebase.service';

//matirail
import { 
  
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule, 
  MatGridListModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatToolbarModule, 
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  DateAdapter,
  MAT_DATE_FORMATS} from '@angular/material';
const appRoutes:Routes = 
[
  {path:'' ,component:HomeComponent},
  {path:'books' ,component:BooksComponent},
  {path:'book/:id' ,component:BookComponent}, 
  {path:'add-book' ,component:AddBookComponent},
  {path:'edit-book/:id' ,component:EditBookComponent},
  {path:'delete-book/:id' ,component:DeleteBookComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,MatCheckboxModule,
    MatCardModule, 
    MatGridListModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatToolbarModule, 
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    
    FormsModule,MatButtonModule,RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'book-notes-app'), // imports firebase/app needed for everything
    AngularFireDatabaseModule ,AngularFireAuthModule// imports firebase/database, only needed for database features
  ],
  providers: [FirebaseService ,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
