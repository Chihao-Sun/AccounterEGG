import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Book} from "../../classes/book";
import {DataService} from "../../services/data.service";


@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  currentTab:'info'|'remark'='info';


  constructor(
    public navCtrl: NavController,
    private dataSvc: DataService,
    public navParams: NavParams
  ) {}

  get book():Book{
    return this.dataSvc.getBook(this.navParams.get('bookId'));
  }

  get books():Book[]{
    return this.dataSvc.books;
  }

  test(){
    console.log(this.book);
  }

  toggleAssociatedBook(b){
    for(let i=0;i<this.book.associatedBookIds.length;i++){
      if (this.book.associatedBookIds[i] == b.id) {
        this.book.associatedBookIds.splice(i,1);
        return;
      }
    }
    this.book.associatedBookIds.push(b.id);
  }

  ionViewWillLeave(){
    this.dataSvc.saveBooks();
  }

}
