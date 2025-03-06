import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentoFormComponent } from './faturamento-form.component';

describe('FaturamentoFormComponent', () => {
  let component: FaturamentoFormComponent;
  let fixture: ComponentFixture<FaturamentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaturamentoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
