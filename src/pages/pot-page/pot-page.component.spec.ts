import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotPageComponent } from './pot-page.component';

describe('PotPageComponent', () => {
  let component: PotPageComponent;
  let fixture: ComponentFixture<PotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
