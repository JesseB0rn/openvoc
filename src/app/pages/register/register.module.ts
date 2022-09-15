import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class RegisterModule {}
