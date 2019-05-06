import { Component, OnInit, OnChanges } from '@angular/core';
import { HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit,OnChanges {
  heroes: any = [];
  detailHeroes : any = [];
  fordedected : any =[];
  constructor(private service: HeroesService) { }

  ngOnInit() {
    if(localStorage.getItem('heroes') === null){
      this.heroes = [];
    }
    else{
      this.heroes = JSON.parse(localStorage.getItem('heroes'));
    }

    if(this.service.returnDetailObject() !== undefined){
      this.fordedected = [];
      this.fordedected[0]=this.service.returnDetailObject();
      localStorage.setItem('fordedected',JSON.stringify(this.fordedected));
    }
    this.heroes[0]=JSON.parse(localStorage.getItem('fordedected'))[0];
    localStorage.setItem('heroes',JSON.stringify(this.heroes));
      this.detailHeroes = JSON.parse(localStorage.getItem('heroes'));
  }

    ngOnChanges(){
      console.log('hey');
    }
}
