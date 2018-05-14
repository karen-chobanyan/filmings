import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  private sub: any;
  public movie: any;

  constructor(private route: ActivatedRoute, private api: MoviesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.api.getDetails(params['id']).subscribe(details => {
        this.movie = details;
        console.log(details);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
