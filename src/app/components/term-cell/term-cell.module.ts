import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermCellComponent } from './term-cell.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [TermCellComponent],
  imports: [MaterialModule, CommonModule],
  exports: [TermCellComponent],
})
export class TermCellModule {}
