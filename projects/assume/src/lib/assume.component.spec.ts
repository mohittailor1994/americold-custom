import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumeComponent } from './assume.component';

describe('AssumeComponent', () => {
  let component: AssumeComponent;
  let fixture: ComponentFixture<AssumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
