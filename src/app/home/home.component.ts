import { Component, OnInit, Output, ElementRef } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroes: [];
  

  constructor(private service: HeroesService, private router: Router,private route : ActivatedRoute,
    private elref : ElementRef) { 

  }

  ngOnInit() {
    this.heroes = this.service.returnFunction();
  }
  navigateFunction(event : ElementRef) {
    this.service.heroes.forEach(element => {
      if(element.palindrome === event.innerHTML){
        this.service.detailobject(element);
      }
    });
    this.router.navigate(['/detail']);
  }
}
