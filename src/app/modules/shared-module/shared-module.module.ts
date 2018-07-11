import { NgModule ,ModuleWithProviders} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, 
         MatListModule,MatCardModule,MatProgressSpinnerModule,MatFormFieldModule,
         MatInputModule,MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
  ],
  declarations: [],
  exports: [
    FormsModule,
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
  ]
})

export class SharedModuleModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModuleModule,
    };
 }

}
