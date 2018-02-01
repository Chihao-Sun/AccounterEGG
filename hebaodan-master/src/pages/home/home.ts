import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {BookPage} from "../book/book";
import {Book} from "../../classes/book";
import {DataService} from "../../services/data.service";
import {MePage} from "../me/me";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private dataSvc: DataService,
    private loadingCtrl: LoadingController,
  ) {}

  get books():Book[]{
    return this.dataSvc.books;
  }

  viewBook(bookId){
    this.navCtrl.push(BookPage,{
      'bookId':bookId
    });
  }

  createBook(){
    let loading=this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading'
    });
    loading.present().then(() => {
      let book=new Book();
      this.dataSvc.books.push(book);
      this.navCtrl.push(BookPage,{
        'bookId':book.id
      }).then(() => {
        loading.dismiss();
      });
    });
  }

  goMePage(){
    this.navCtrl.push(MePage);
  }

}
