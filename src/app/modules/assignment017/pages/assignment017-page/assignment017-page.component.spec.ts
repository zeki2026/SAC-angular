import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment017PageComponent } from './assignment017-page.component';

describe('Assignment017PageComponent', () => {
  let component: Assignment017PageComponent;
  let fixture: ComponentFixture<Assignment017PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Assignment017PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Assignment017PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
