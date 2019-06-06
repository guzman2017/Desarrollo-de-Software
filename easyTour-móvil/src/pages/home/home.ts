import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";
import { ChatServiceProvider } from './../../providers/chat-service/chat-service';
import { IChat } from './../../models/chatModel';
import {  NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  chats : IChat[] = [];
  message : string;
  sending : boolean;
  // buscar condicion
  public search = {
    name: "Cuenca, EC",
    date: new Date().toISOString(),
    id: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private _chat : ChatServiceProvider,private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    // subscribe to pusher's event
    this._chat.getChannel().bind('chat', data => {
     if(data.type !== 'bot'){
       data.isMe = true;
     };
     this.chats.push(data);
   });
 }
 sendMessage() {
   this.sending = true;
   this._chat.sendMessage(this.message)
     .subscribe(resp => {
       this.message = '';
       this.sending = false;
     }, err => {
       this.sending = false;
     } );
 }


  ionViewWillEnter() {
    
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Cuenca, EC"
      } else {
        console.log('entar seleccionar', val)
        this.search.name = val.nombre;
        this.search.id = val.id;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  doSearch() {
    this.nav.push(TripsPage,{localidadId: this.search.id});
  }


  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }


}


