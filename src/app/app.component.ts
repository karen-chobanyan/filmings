import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatFormField, MatInput, MatAutocomplete, MatOptgroup, MatOption } from '@angular/material';
import { MatCard, MatCardHeader, MatCardContent } from '@angular/material/card';
import { MoviesService } from './movies.service';
import { Router,  RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


}
