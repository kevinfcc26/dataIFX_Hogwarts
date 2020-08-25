import { Component, OnInit, Input } from '@angular/core';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor( private howartsService: HogwartsService ) { }

  @Input() Students: any [] = [];

  ngOnInit(): void {
    this.howartsService.getStudents().subscribe( (res: any []) => {
      this.Students = res;
    })
  }

}
