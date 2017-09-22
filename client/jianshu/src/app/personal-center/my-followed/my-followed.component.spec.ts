import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowedComponent } from './my-followed.component';

describe('MyFollowedComponent', () => {
  let component: MyFollowedComponent;
  let fixture: ComponentFixture<MyFollowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFollowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFollowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
