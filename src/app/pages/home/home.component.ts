import { Component, OnInit } from '@angular/core';
import { FakeApiService } from 'src/app/core/fake-api.service';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private fakeApiService: FakeApiService,
    public user: User
  ) {}

  public users: any;
  public hours: number = new Date().getHours();
  public timeMessage: any;
  public data? : User;


  ngOnInit(): void {
    this.getUsers()
    this.getTimeMessage()
  }

  getUsers() {
    this.fakeApiService.getUsers().subscribe(res => this.users = res)
  }

  getTimeMessage() {
    if(this.hours > 17 && this.hours < 24 || this.hours >= 0 && this.hours < 5) {
      this.timeMessage = "Boa noite"
    } else if(this.hours > 5 && this.hours < 12) {
      this.timeMessage = "Bom dia"
    } else {
      this.timeMessage = "Boa tarde"
    }
  }

  createUser() {
    this.fakeApiService.createUser(this.user).subscribe(data => console.log(data))
  }

}
