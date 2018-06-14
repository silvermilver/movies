import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private moviesService: MoviesService) { }

  ngOnInit() {
  }

  onRouteChange(route: String): void {
    this.router.navigate(['/' + route]);
  }
}
