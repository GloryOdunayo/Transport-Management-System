import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDriverComponent } from './signin-driver.component';

describe('SigninDriverComponent', () => {
  let component: SigninDriverComponent;
  let fixture: ComponentFixture<SigninDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
