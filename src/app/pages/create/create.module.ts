import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, ToolbarModule, MaterialModule, ReactiveFormsModule],
  exports: [CreateComponent],
})
export class CreateModule {}
