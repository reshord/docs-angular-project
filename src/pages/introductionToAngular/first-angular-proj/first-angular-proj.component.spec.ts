import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAngularProjComponent } from './first-angular-proj.component';

describe('FirstAngularProjComponent', () => {
  let component: FirstAngularProjComponent;
  let fixture: ComponentFixture<FirstAngularProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAngularProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAngularProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
