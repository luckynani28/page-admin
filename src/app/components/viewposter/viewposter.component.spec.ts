import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewposterComponent } from './viewposter.component';

describe('ViewposterComponent', () => {
  let component: ViewposterComponent;
  let fixture: ComponentFixture<ViewposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewposterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
