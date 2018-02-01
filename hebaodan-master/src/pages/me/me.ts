import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../services/data.service";


@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private dataSvc: DataService
  ) {}

  get me(){
    return this.dataSvc.me;
  }

  ionViewWillLeave(){
    return this.dataSvc.saveMe();
  }

  doNothing(){}

}
