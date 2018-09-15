import { NgModule ,ModuleWithProviders} from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, 
         MatListModule,MatCardModule,MatProgressSpinnerModule,MatFormFieldModule,
         MatInputModule,MatDialogModule,MatChipsModule,MatSnackBarModule,MatTooltipModule,
         MatRadioModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatRadioModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatRadioModule
  ]
})

export class SharedModuleModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModuleModule,
    };
 }

}
