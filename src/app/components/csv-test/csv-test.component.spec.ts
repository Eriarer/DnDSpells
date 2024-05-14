import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvTestComponent } from './csv-test.component';

describe('CsvTestComponent', () => {
  let component: CsvTestComponent;
  let fixture: ComponentFixture<CsvTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CsvTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
