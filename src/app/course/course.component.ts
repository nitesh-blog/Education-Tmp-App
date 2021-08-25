import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1,'name':'Learn Java','description':'Java is a programming language and computing platform first released by Sun Microsystems in 1995.','Rs':'RS 10000','image':'../../assets/java.png'},
    {'id':2,'name':'Learn Python','description':'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.','Rs':'RS 20000','image':'../../assets/python.jpg'},
    {'id':3,'name':'Learn C++','description':'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language,','Rs':'RS 5000','image':'../../assets/c++.jpg'}
  ]

}
