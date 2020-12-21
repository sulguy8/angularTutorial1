import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../common/service/navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public navigate: NavigateService
  ) { }

  ngOnInit(): void {
  }

  login() {

  }

  join() {
    this.navigate.goPage('join');
  }
}
