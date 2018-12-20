import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, state, animate, transition, AnimationMetadata } from '@angular/animations';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { mapTo, delay } from 'rxjs/operators';
// import {  } from "../../date_adapter/AppDateAdapter";
// import { AppDateAdapter } from "../../adapter/AppDateAdapter";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  author;
  title;
  price;
  dateadded:any;
  dateread:any;
  description;
  imageUrl;
  rate;
   example = of(null);

  isRead:boolean = false;
  // dateAdapter:AppDateAdapter = new AppDateAdapter();
  constructor(
    private firebaseService:FirebaseService,
    private router:Router) { 
      
      //here we ask to fill the books from firebase into the service books var
      
      this.firebaseService.getBooks2() }

  ngOnInit() {
  }


  //action to the date top open decsription and rate feild
  EndDateChange(datee){
    // this.example.pipe(mapTo('World!'), delay(5000));
// console.log("im in the date event" + e.  );
    this.isRead = false;
    if(datee.targetElement.id == "mat-input-4" ){
      // this.dateread = this.firebaseService.formatDate(e);
      console.log("hey");
      this.dateread = datee.target.value;
      this.isRead = true;
  }
  
  this.dateadded = datee.target.value;

  // this.dateadded = this.firebaseService.formatDate(e);

  // this.example.pipe(mapTo('World!'), delay(5000));

  }

  // updateDateAdded(dateAdded){
  //   console.log("Added");

  // }

  // updateDateRead(){
  //   // this.dateread = this.dateAdapter.format(dateRead,"input");
  //   console.log("Read");
        
  // }

  submitAdd(){
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      imageUrl: this.imageUrl
    }

    console.log("here we start submit addd");

    console.log('Book before added to data base - ',book);

    this.firebaseService.addBook(book);

  //  console.log( "the firebase after added " + this.firebaseService.allbooks);

    this.router.navigate(['books']);
  }
}
