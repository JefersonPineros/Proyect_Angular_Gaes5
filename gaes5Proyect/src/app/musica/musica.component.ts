import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  public visible:boolean;
  constructor() { 
    this.visible = false;
  }

  ngOnInit(): void {
  }
  hideOrShow(){
    if(this.visible){
      this.visible = false
    }else{
      this.visible = true
    }
  }

}
