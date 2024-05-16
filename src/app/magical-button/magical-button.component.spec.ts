import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicalButtonComponent } from './magical-button.component';

describe('MagicalButtonComponent', () => {
  let component: MagicalButtonComponent;
  let fixture: ComponentFixture<MagicalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicalButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
