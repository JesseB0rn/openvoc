import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, ToolbarModule, MaterialModule, RouterModule],
})
export class SettingsModule {}
