import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService implements OnInit {
  heroes: any = [
    {
      id: 1,
      name: 'Peter Packer',
      palindrome: 'Spiderman',
      likes: 4395,
      avatar: '../../assets/heros-file/cFiPzbhKt1zVVThrb9EH-thumbnail.jpg',
      img: '../../assets/heros-file/cFiPzbhKt1zVVThrb9EH.jpg'
    },
    {
      id: 2,
      name: 'Wade Winston Wilson',
      palindrome: 'Dead Pool',
      likes: 3208,
      avatar: '../../assets/heros-file/deadpool-avatar.jpg',
      img: '../../assets/heros-file/deadpool.jpg'
    },
    {
      id: 3,
      name: 'Donald Blake',
      palindrome: 'Thor',
      likes: 1550,
      avatar: '../../assets/heros-file/thor-avatar.jpg',
      img: '../../assets/heros-file/thor.jpg'
    },
    {
      id: 4,
      name: 'Diana Prince',
      palindrome: 'Wonder Women',
      likes: 1167,
      avatar: '../../assets/heros-file/wonderwomen-avatar.jpg',
      img: '../../assets/heros-file/wonderwomen.jpg'
    },
    {
      id: 5,
      name: 'Bruce Banner',
      palindrome: 'Hulk',
      likes: 755,
      avatar: '../../assets/heros-file/hulk-avatar.jpg',
      img: '../../assets/heros-file/hulk.jpg'
    }
  ]
  pushheroes: any = [
    {
      id: 6,
      name: 'Bruce Wayne',
      palindrome: 'Batman',
      likes: 345,
      avatar: '../../assets/heros-file/batmanavatar.jpg',
    },
    {
      id: 7,
      name: 'Tony Stark',
      palindrome: 'Ironman',
      likes: 288,
      avatar: '../../assets/heros-file/ironmanavatar.jpg',
    },
    {
      id: 8,
      name: 'Steven Grant Rogers',
      palindrome: 'Captain America',
      likes: 250,
      avatar: '../../assets/heros-file/captanamericaavatar.jpg',
    },
    {
      id: 9,
      name: 'Clark Kent',
      palindrome: 'Superman',
      likes: 143,
      avatar: '../../assets/heros-file/supermanavatar.jpg',
    },
  ];
  detail : Object;
  isObje : boolean = false;
  detailobject(obje : any){
    this.detail = obje;
    this.isObje = true;
  }
  returnDetailObject(){
      if(this.isObje){
        return this.detail;
      }
  }
  ngOnInit() {
    // console.log(this.heroes);
    if (this.heroes.lenght !== 0) {
      
      this.nextheroes = []
      for (let heroe of this.heroes) {
        this.nextheroes.push({
          id: heroe.id,
          name: heroe.name,
          palindrome: heroe.palindrome,
          likes: heroe.likes,
          avatar: heroe.avatar
        })
      }
     this.nextheroes = this.nextheroes.concat(this.pushheroes);
      return this.nextheroes;
    }
  }
  returnFunction() {
    return this.heroes;
  }
  returnNextHeroes() {
    return this.nextheroes;
  }
  nextheroes : any;
  constructor() { 
    
  }
}
