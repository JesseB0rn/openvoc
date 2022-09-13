import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCellComponent } from './term-cell.component';

describe('TermCellComponent', () => {
  let component: TermCellComponent;
  let fixture: ComponentFixture<TermCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
