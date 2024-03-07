import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  name: string = '';
  showMessageToScroll: boolean = false;
  isNameInputReadonly: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleMessageToScroll(): void {
    if (this.name.length) {
      this.showMessageToScroll = !this.showMessageToScroll;
    }
  }

  setReadonly(): void {
    this.isNameInputReadonly = true;
  }
}
