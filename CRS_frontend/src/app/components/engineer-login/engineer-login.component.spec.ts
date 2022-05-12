import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerLoginComponent } from './engineer-login.component';

describe('EngineerLoginComponent', () => {
  let component: EngineerLoginComponent;
  let fixture: ComponentFixture<EngineerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
