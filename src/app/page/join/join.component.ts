import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigateService } from 'src/app/common/service/navigate.service';
import { StorageService } from 'src/app/common/service/storage.service';
import { UserInfo } from 'src/app/common/vo/user-info';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {
  public usi = new UserInfo();
  private text = 'test';
  constructor(
    public storage: StorageService,
    public navigate: NavigateService
  ) {

  }

  submit(){
    this.storage.insertUsi(this.usi);
    this.navigate.goPage('login');
  }

  test(){
    return this.text
  }

}
