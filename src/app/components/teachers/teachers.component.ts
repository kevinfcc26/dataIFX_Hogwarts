import { Component, OnInit, Input } from '@angular/core';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  @Input() Teachers: any [] = [];

  constructor( private howartsService: HogwartsService ) { }

  ngOnInit(): void {
    this.howartsService.getTeachers().subscribe( (res: any []) => {
      this.Teachers = res;
    })

  }

}
