import { Component, OnInit } from '@angular/core';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor( private howartsService: HogwartsService ) { }

  Houses = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff'];

  Characters: any [] = [];

  ngOnInit(): void {
  }

  getHouse( house: string){
    this.howartsService.getHouse(house).subscribe( (resp: any []) => {
      this.Characters = resp;
    });
  }

}
