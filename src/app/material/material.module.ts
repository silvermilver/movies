import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatTooltipModule
} from '@angular/material';
import 'hammerjs/hammer';
/**
 *
 * @export
 * @class MaterialModule
 */
@NgModule({
  exports: [
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatTooltipModule
  ]
})

export class MaterialModule { }
