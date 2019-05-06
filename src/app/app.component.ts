import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeroesService } from './heroes.service';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  date: Date;
  constructor(private service : HeroesService,private router : Router){
    this.date = new Date();
  }

  searchheroes = [];
 
  ngOnInit(){
    this.service.ngOnInit().forEach(element => {
      this.searchheroes.push(element.palindrome);
    });
  }
  
}
