import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment025PageComponent } from './assignment025-page.component';

describe('Assignment025PageComponent', () => {
  let component: Assignment025PageComponent;
  let fixture: ComponentFixture<Assignment025PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assignment025PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assignment025PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
