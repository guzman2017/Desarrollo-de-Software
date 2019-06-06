 // src/providers/pusher-service/pusher-service.ts

 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';

 declare const Pusher: any;
 @Injectable()
 export class PusherServiceProvider {
   public _pusher : any;
   constructor(public http: HttpClient) {
     this._pusher = new Pusher("0058c122016302c6a2ae", {
       cluster: "us2",
       encrypted: true
     });
   }

   getPusher(){
     return this._pusher;
   }
 }