import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [ApiService]
})
export class HttpComponent implements OnInit {
  redditTitle: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  showTitle() {
    this.api.getRedditTitle().subscribe( (data) => this.redditTitle = data['data']['children'][0]['data']['title']);
  }
}
