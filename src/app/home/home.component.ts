import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [];

  constructor(private apiService: ApiService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {

    console.log('get users');
    this.apiService.findAllUsers().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });
  }

  // onSumbit(){
  //   user = {this}
  // }

}
