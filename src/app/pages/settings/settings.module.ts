import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, ToolbarModule],
})
export class SettingsModule {}
