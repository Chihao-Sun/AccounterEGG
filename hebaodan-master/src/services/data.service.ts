import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Book} from "../classes/book";

@Injectable()
export class DataService {

  books=[];

  me={
    name:'Jesse Bradley',
    career:'WEB UI DESIGNER'
  }

  constructor(
    private storage:Storage
  ) {}

  getBook(bookId):Book{
    for (let book of this.books) {
      if(book.id==bookId){
        return book;
      }
    }
    return null;
  }

  fetchData():Promise<null>{
    let promiseBooks=this.storage.get('books').then(data=>{
      if (data) {
        this.books=data;
      }
    });
    return Promise.all([promiseBooks]);
  }

  saveData():Promise<null>{
    return Promise.all([
      this.saveBooks()
    ]);
  }

  saveBooks():Promise<null>{
    return this.storage.set('books',this.books)
  }

  saveMe(){
    return this.storage.set('me',this.me);
  }

}
