import * as moment from "moment";

export class Book {
  id:number=moment().unix();
  date:string=moment().format('YYYY-MM-DD');
  name:string='New Book';
  picture:string='1';
  associatedBookIds:number[]=[];
}
