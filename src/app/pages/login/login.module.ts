import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ToolbarModule, MaterialModule, ReactiveFormsModule],
})
export class LoginModule {}
