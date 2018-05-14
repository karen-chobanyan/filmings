import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  getSearchResults(t)  {
    const profileURL = 'http://www.omdbapi.com/?apikey=9c47d4a0&s=';

     return this.http.get(profileURL + t);

  }

  getDetails(id)  {
    const profileURL = 'http://www.omdbapi.com/?apikey=9c47d4a0&i=';

     return this.http.get(profileURL + id);

  }

}

