import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Jessica Clarensia';
  item = {
    nama : 'Kelengkeng',
    harga : 10000
  };
}
