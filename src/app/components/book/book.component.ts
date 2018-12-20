import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: any;
  title;
  author;
  dateadded:any;
  dateread:any;
  price;
  rate;
  description;
  imageUrl;
  constructor(private firebaseService: FirebaseService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
   
    //to get the id of the book from routing to use to get the book from firebase
    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);

      //using to get the details from the firebase directly

    this.firebaseService.getBookDetails(this.id).valueChanges().subscribe(book => {
      console.log(book);
      this.title = book.title;
      this.author = book.author;
      this.dateadded = book.dateadded;
      this.dateread = book.dateread;
      this.price=book.price;
      this.rate = book.rate;
      this.description = book.description;
      this.imageUrl = book.imageUrl;
    });
  }
}


