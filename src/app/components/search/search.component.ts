import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatFormField, MatInput, MatAutocomplete, MatOptgroup, MatOption } from '@angular/material';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { Router,  RouterLink } from '@angular/router';
import { StorageService } from '../../storage.service';
import { MoviesService } from '../../movies.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  name: string;
  movies: any[];
  list: any[];

  constructor(
    private fb: FormBuilder,
    private api: MoviesService,
    protected storage: StorageService
  ) {

    this.rForm = fb.group({
      'name' : [null]
    });

  }

  ngOnInit() {
    this.rForm.valueChanges.subscribe(val => {
      this.api.getSearchResults(val.name).subscribe( movies => {
        this.list = movies.Search;
        console.log(this.list);
      });
  });
}

  search(post) {
    this.name = post.name;
    console.log(this.name);
    this.api.getSearchResults(this.name).subscribe( movies => {
      this.movies = movies.Search;
      console.log(movies.Search);
    });
  }

  addToFavorites(movie) {
    this.storage.addFavorite(movie).subscribe();
  }

}
