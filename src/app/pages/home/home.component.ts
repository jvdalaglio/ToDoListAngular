import { Component, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/core/fake-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private fakeApiService: FakeApiService
  ) {}

  users: any;

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.fakeApiService.getUsers().subscribe(res => this.users = res)
  }
}
