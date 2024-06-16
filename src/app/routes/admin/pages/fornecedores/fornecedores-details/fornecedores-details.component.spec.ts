import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresDetailsComponent } from './fornecedores-details.component';

describe('FornecedoresDetailsComponent', () => {
  let component: FornecedoresDetailsComponent;
  let fixture: ComponentFixture<FornecedoresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FornecedoresDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FornecedoresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
