import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentoListComponent } from './faturamento-list.component';

describe('FaturamentoListComponent', () => {
  let component: FaturamentoListComponent;
  let fixture: ComponentFixture<FaturamentoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaturamentoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturamentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
