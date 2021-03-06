import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favbooks:any;
  unreadBooks:any;

  //authentication related
  authenticated;
  user: Observable<firebase.User>;
  constructor(private firebaseService: FirebaseService, public af: AngularFireAuth) {
    this.authenticated = false;
    
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;



          this.firebaseService.getFavoriteBooks().subscribe(favoriteBooks =>{
            this.favbooks = favoriteBooks;
            console.log(this.favbooks);   
 this.favbooks = this.favbooks.filter(item => item.data.rate>4);
      console.log(this.favbooks);   

    });
    this.firebaseService.getUnreadBooks().subscribe(books =>{

      this.unreadBooks = books;
      this.unreadBooks = this.unreadBooks.filter(item => item.data.dateread == null)
    });
  }
      });
    }
        

  ngOnInit() {}



}
