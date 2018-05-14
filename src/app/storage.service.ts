import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService {

  constructor(protected localStorage: LocalStorage) { }

  getFavorites() {
    return this.localStorage.getItem('favorites');
  }

  addFavorite(movie) {
    return this.localStorage.getItem('favorites').map((favorites) => {
      if (!favorites ) {
        favorites = [];
      }
      console.log(favorites.filter(fav => fav.imdbID === movie.imdbID).length);
      if (favorites.filter(fav => fav.imdbID === movie.imdbID).length === 0) {
        console.log(favorites);
        favorites.push(movie);
        console.log(favorites);
        return this.localStorage.setItem('favorites', favorites).subscribe();
      }
    });
  }

  removeFavorite(id) {
    return this.localStorage.getItem('favorites').map((favorites) => {
        this.localStorage.setItem('favorites', favorites.filter(fav => fav.imdbID !== id)).subscribe();
        return favorites.filter(fav => fav.imdbID !== id);
    });
  }
}
