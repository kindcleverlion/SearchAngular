import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.searchcomponent.html',
 // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientLine 3.0';
  SearchOption :string ="Select Option";
  showCardHoldre : boolean = false;
  showCardIssuer : boolean = false;
  showucomm : boolean = false;
  brandurl='./BT-logo-right.png';
  searchFor : any[] =[
    {searchby : 'Card Holder Activity'},
    {searchby : 'Card Issuer Information'},
    {searchby : 'uComm'}];


  onSelect(sFor: any): void {
    console.log(sFor.searchby)
   
    this.SearchOption = sFor.searchby;
    
    if(this.SearchOption =='Card Holder Activity')
    {
      this.showCardHoldre = true;
      this.showCardIssuer = false;
      this.showucomm = false;
    }
    if(this.SearchOption == 'Card Issuer Information')
    {
      this.showCardHoldre = false;
      this.showCardIssuer = true;
      this.showucomm = false;
    }
    if(this.SearchOption == 'uComm')
    {  this.showCardHoldre = false;
      this.showCardIssuer = false;
      this.showucomm = true;
    }
    




    }
  }
