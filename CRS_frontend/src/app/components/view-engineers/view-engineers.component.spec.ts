import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEngineersComponent } from './view-engineers.component';

describe('ViewEngineersComponent', () => {
  let component: ViewEngineersComponent;
  let fixture: ComponentFixture<ViewEngineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEngineersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
