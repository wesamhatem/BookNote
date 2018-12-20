import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'; 
import 'core-js/es7/reflect';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  allbooks: AngularFireList<any[]>; ; //from Firebase
  books:Observable<any[]>; //from Firebase but Observable to out the key to route
  favoriteBooks:Observable<any>;
  unreadBooks:Observable<any>;
  bookDetails: AngularFireObject<any>; //from Firebase
  constructor(private db :AngularFireDatabase) { }
      //using to delete or add or edit on the firebase dirctily

  getBooks2() {
    this.allbooks = this.db.list('/books') as AngularFireList<any[]>;
    console.log("at call getbooks2() " + this.allbooks);
    return this.allbooks;
  }
    // using {key,data} in services to have good binding using Observable
   
  getBooks() {
    this.books = this.db.list('/books').snapshotChanges().map(books => {
      return books.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, data};           
    });
  });
    return this.books;
  }
  
  //using to get the details from the firebase directly
  getBookDetails(id){
    this.bookDetails = this.db.object('/books/'+id) as AngularFireObject<any>;
    console.log(this.bookDetails);
    return this.bookDetails;     
  }
      // using {key,data} in services to have good binding using Observable

  getFavoriteBooks() {
    this.favoriteBooks = this.db.list('/books').snapshotChanges().map(books => {
      return books.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, data};           
    });
  });
    return this.favoriteBooks;
  }
      // using {key,data} in services to have good binding using Observable

  getUnreadBooks() {
    this.unreadBooks = this.db.list('/books').snapshotChanges().map(books => {
      return books.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, data};           
    });
  });
    return this.unreadBooks;
  }
  //adding book to firebase dircitly
  addBook(bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    console.log('Filtered Book - ',filteredBook);
    console.log("from service the firebase database add befor addd    >" + this.allbooks);
    console.log("from service the book observable add befor addd    >" + this.books);

     this.allbooks.push(filteredBook);
     console.log("from service firebase database add after addd     >"  + this.allbooks);
     console.log("from service the book observable  add after addd     >"  + this.books);

  //  return this.allbooks;
  }

  updateBook(id, bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
     this.allbooks.update(id,filteredBook);
  }
  deleteBook(id){
     this.allbooks.remove(id);
  }
//   formatDate(date:Date):string{
// // const day  = date.getDate();
// const month = date.getMonth()+1;
// const year = date.getFullYear();
// return ` ${year}-${month}`;
// // return ` ${year}-${month}-${day}`;

//   }
 
}
