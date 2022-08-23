import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ToolbarModule],
})
export class HomeModule {}