import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { MoviesService } from './movies.service';
import { StorageService } from './storage.service';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchComponent } from './components/search/search.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


const appRoutes: Routes = [
  { path: '',  component: SearchComponent },
  { path: 'movies/:id',  component: MovieDetailsComponent },
  { path: 'favorites',  component: FavoritesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    SearchComponent,
    FavoritesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LocalStorageModule,
    FlexLayoutModule
  ],
  providers: [MoviesService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
