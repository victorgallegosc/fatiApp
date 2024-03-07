import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  name: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  changeName() {

  }

}
