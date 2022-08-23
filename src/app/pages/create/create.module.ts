import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, ToolbarModule],
})
export class CreateModule {}
