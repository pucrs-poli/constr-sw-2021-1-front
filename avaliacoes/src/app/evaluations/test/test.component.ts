import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state.test); // should log out 'bar'
  }

  ngOnInit(): void {
  }

}
