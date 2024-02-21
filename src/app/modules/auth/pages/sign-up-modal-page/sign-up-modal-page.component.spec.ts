import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpModalPageComponent } from './sign-up-modal-page.component';

describe('SignUpModalPageComponent', () => {
  let component: SignUpModalPageComponent;
  let fixture: ComponentFixture<SignUpModalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpModalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpModalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
