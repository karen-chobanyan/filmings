import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public favorites: any[];
  constructor(protected storage: StorageService) { }

  ngOnInit() {
    this.storage.getFavorites().subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  removeFromFavorites(id){
    this.storage.removeFavorite(id).subscribe(favorites => {
      this.favorites = favorites;
    });
  }

}
