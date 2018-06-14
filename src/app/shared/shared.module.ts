// https://angular.io/guide/styleguide#style-04-10

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MoviesHeaderComponent } from './movies-header/movies-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ProgressBarComponent, MoviesHeaderComponent],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ProgressBarComponent,
    MoviesHeaderComponent
  ]
})
export class SharedModule {

}
