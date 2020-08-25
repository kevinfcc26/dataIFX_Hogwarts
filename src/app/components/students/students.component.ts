import { Component, OnInit, Input } from '@angular/core';
import { HogwartsService } from '../../services/hogwarts.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  forma: FormGroup;

  constructor( private howartsService: HogwartsService,
               private fb: FormBuilder ) { 
    this.createForm();
  }

  @Input() Students: any [] = [];

  ngOnInit(): void {
    this.howartsService.getStudents().subscribe( (res: any []) => {
      this.Students = res;
    });
  }

  save(){
    localStorage.setItem('forma', JSON.stringify(this.forma.getRawValue()));
    console.log('guardar');
  }
  get invalidName( ){
    return this.forma.get('name').invalid && this.forma.get('name').touched;
  }

  get invalidPatronus( ){
    return this.forma.get('patronus').invalid && this.forma.get('patronus').touched;
  }

  get invalidAge( ){
    return this.forma.get('age').invalid && this.forma.get('age').touched;
  }

  // get invalidImage( ){
  //   return this.forma.get('image').invalid && this.forma.get('image').touched;
  // }

  createForm(){
    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      patronus: ['', [Validators.required]],
      age: ['', [Validators.required]]
      // image: ['',[Validators.required]]
    });
  }

}
