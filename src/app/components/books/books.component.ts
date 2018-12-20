import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 allBooks:any;
 allBooks2:any;

  constructor(private firebaseservice : FirebaseService) { }

  ngOnInit() {
    // using {key,data} in services to have good binding
    this.firebaseservice.getBooks().subscribe(books =>{
      this.allBooks = books;
      // console.log(this.allBooks);
    })
    //using to delete or add or edit on the firebase 
    this.firebaseservice.getBooks2().valueChanges().subscribe(books =>{
      this.allBooks2 = books;
      // console.log(this.allBooks2);
    })
  }

}
