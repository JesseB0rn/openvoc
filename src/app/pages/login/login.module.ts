import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class LoginModule {}
